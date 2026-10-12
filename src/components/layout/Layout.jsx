import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Lenis from "lenis"
import Navbar from "./Navbar"
import Footer from "./Footer"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let lenis, raf

    if (!reduce) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.5 })
      const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
      raf = requestAnimationFrame(loop)
    }

    // scroll reveal
    const initReveal = () => {
      const els = document.querySelectorAll("[data-reveal]:not(.in)")
      if (reduce) {
        els.forEach((el) => el.classList.add("in"))
        return null
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) }
          })
        },
        { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
      )
      els.forEach((el) => io.observe(el))
      return io
    }

    const io = initReveal()

    // Re-init reveal on route change via MutationObserver
    const mo = new MutationObserver(() => {
      const newEls = document.querySelectorAll("[data-reveal]:not(.in)")
      if (newEls.length > 0 && io) {
        newEls.forEach((el) => io.observe(el))
      } else if (newEls.length > 0 && reduce) {
        newEls.forEach((el) => el.classList.add("in"))
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      io?.disconnect()
      mo.disconnect()
    }
  }, [])

  // Set body background to dark on home page for the planet canvas
  useEffect(() => {
    if (isHome) {
      document.body.style.background = "#04060f"
    } else {
      document.body.style.background = ""
    }
    return () => { document.body.style.background = "" }
  }, [isHome])

  return (
    <div className="page">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      {isHome ? (
        <div className="home-footer">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  )
}
