import sharp from "sharp"
import { readdir, readFile, mkdir } from "fs/promises"
import { join, basename, parse } from "path"

const BASE = new URL(".", import.meta.url).pathname

const SIZES = {
  "fang-mark": [16, 24, 32, 48, 64, 128, 256, 512, 1024],
  "app-icons": [16, 32, 48, 57, 60, 72, 76, 96, 114, 120, 128, 144, 152, 167, 180, 192, 256, 512, 1024],
  "watermark": [64, 128, 256, 512, 1024],
  "wordmark": [128, 256, 512, 1024],
  "lockup": [128, 256, 512, 1024],
  "favicon": [16, 32, 48, 64, 128, 180, 192, 512],
}

async function convertDir(subdir) {
  const svgDir = join(BASE, "svg", subdir)
  const pngDir = join(BASE, "png", subdir)
  await mkdir(pngDir, { recursive: true })

  let files
  try {
    files = (await readdir(svgDir)).filter((f) => f.endsWith(".svg"))
  } catch {
    console.log(`  Skipping ${subdir} (no svg dir)`)
    return
  }

  const sizes = SIZES[subdir] || [64, 128, 256, 512]

  for (const file of files) {
    const svgBuf = await readFile(join(svgDir, file))
    const name = parse(file).name

    for (const size of sizes) {
      const outName = `${name}-${size}x${size}.png`
      await sharp(svgBuf, { density: 300 })
        .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(join(pngDir, outName))
    }
    console.log(`  ${subdir}/${name} -> ${sizes.length} sizes`)
  }
}

async function generateFavicons() {
  const faviconDir = join(BASE, "favicon")
  await mkdir(faviconDir, { recursive: true })

  const svgDir = join(BASE, "svg", "favicon")
  let files
  try {
    files = (await readdir(svgDir)).filter((f) => f.endsWith(".svg"))
  } catch {
    console.log("  No favicon SVGs found")
    return
  }

  const primarySvg = files.find((f) => f === "favicon.svg") || files[0]
  if (!primarySvg) return

  const svgBuf = await readFile(join(svgDir, primarySvg))

  const faviconSizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "android-chrome-192x192.png", size: 192 },
    { name: "android-chrome-512x512.png", size: 512 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "apple-touch-icon-57x57.png", size: 57 },
    { name: "apple-touch-icon-60x60.png", size: 60 },
    { name: "apple-touch-icon-72x72.png", size: 72 },
    { name: "apple-touch-icon-76x76.png", size: 76 },
    { name: "apple-touch-icon-114x114.png", size: 114 },
    { name: "apple-touch-icon-120x120.png", size: 120 },
    { name: "apple-touch-icon-144x144.png", size: 144 },
    { name: "apple-touch-icon-152x152.png", size: 152 },
    { name: "apple-touch-icon-167x167.png", size: 167 },
    { name: "apple-touch-icon-180x180.png", size: 180 },
    { name: "mstile-70x70.png", size: 70 },
    { name: "mstile-144x144.png", size: 144 },
    { name: "mstile-150x150.png", size: 150 },
    { name: "mstile-310x310.png", size: 310 },
  ]

  for (const { name, size } of faviconSizes) {
    await sharp(svgBuf, { density: 300 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(faviconDir, name))
  }
  console.log(`  Generated ${faviconSizes.length} favicon PNGs`)

  // Also generate OG / social images from the app icon
  const appIconSvgDir = join(BASE, "svg", "app-icons")
  let appFiles
  try {
    appFiles = (await readdir(appIconSvgDir)).filter((f) => f.endsWith(".svg"))
  } catch {
    return
  }
  const navySvg = appFiles.find((f) => f.includes("navy")) || appFiles.find((f) => f.includes("dark")) || appFiles[0]
  if (!navySvg) return

  const iconBuf = await readFile(join(appIconSvgDir, navySvg))

  // OG image (1200x630) - icon centered on brand background
  const ogIcon = await sharp(iconBuf, { density: 300 })
    .resize(300, 300, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 21, g: 50, b: 74, alpha: 255 } },
  })
    .composite([{ input: ogIcon, gravity: "centre" }])
    .png()
    .toFile(join(faviconDir, "og-image.png"))

  // Twitter card (1200x600)
  await sharp({
    create: { width: 1200, height: 600, channels: 4, background: { r: 21, g: 50, b: 74, alpha: 255 } },
  })
    .composite([{ input: ogIcon, gravity: "centre" }])
    .png()
    .toFile(join(faviconDir, "twitter-card.png"))

  console.log("  Generated OG image + Twitter card")
}

async function generateWebmanifest() {
  const manifest = {
    name: "Salus Vita",
    short_name: "SalusVita",
    icons: [
      { src: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#15324A",
    background_color: "#F6F8F9",
    display: "standalone",
  }

  const { writeFile } = await import("fs/promises")
  await writeFile(join(BASE, "favicon", "site.webmanifest"), JSON.stringify(manifest, null, 2))
  console.log("  Generated site.webmanifest")
}

async function generateBrowserconfig() {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/favicon/mstile-70x70.png"/>
      <square150x150logo src="/favicon/mstile-150x150.png"/>
      <square310x310logo src="/favicon/mstile-310x310.png"/>
      <TileColor>#15324A</TileColor>
    </tile>
  </msapplication>
</browserconfig>`

  const { writeFile } = await import("fs/promises")
  await writeFile(join(BASE, "favicon", "browserconfig.xml"), xml)
  console.log("  Generated browserconfig.xml")
}

console.log("Generating PNGs from SVGs...\n")

for (const subdir of Object.keys(SIZES)) {
  await convertDir(subdir)
}

console.log("\nGenerating favicons...")
await generateFavicons()

console.log("\nGenerating web manifests...")
await generateWebmanifest()
await generateBrowserconfig()

console.log("\nDone!")
