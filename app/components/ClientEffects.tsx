'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // ========== PROGRESS BAR ==========
    const progressBar = document.getElementById('progressBar')
    const onScroll = () => {
      if (!progressBar) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      progressBar.style.width = ((scrollTop / docHeight) * 100) + '%'
    }
    window.addEventListener('scroll', onScroll)

    // ========== NAV SCROLL EFFECT ==========
    const nav = document.getElementById('nav')
    const onNavScroll = () => {
      if (!nav) return
      nav.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', onNavScroll)

    // ========== STICKY CTA BAR ==========
    const stickyCta = document.getElementById('stickyCta')
    const stickyCtaClose = document.getElementById('stickyCtaClose')
    let ctaClosed = false

    const onCtaScroll = () => {
      if (!stickyCta || ctaClosed) return
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 30) stickyCta.classList.add('visible')
    }
    window.addEventListener('scroll', onCtaScroll)

    stickyCtaClose?.addEventListener('click', () => {
      stickyCta?.classList.remove('visible')
      ctaClosed = true
    })

    // ========== MOBILE MENU ==========
    const menuToggle = document.getElementById('menuToggle')
    const mobileMenu = document.getElementById('mobileMenu')
    const mobileMenuClose = document.getElementById('mobileMenuClose')

    menuToggle?.addEventListener('click', () => mobileMenu?.classList.add('open'))
    mobileMenuClose?.addEventListener('click', () => mobileMenu?.classList.remove('open'))
    mobileMenu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'))
    })

    // ========== HERO BLOB PARALLAX ==========
    const heroBlob = document.getElementById('heroBlob')
    let mouseX = 0, mouseY = 0, blobX = 0, blobY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 100
      mouseY = (e.clientY / window.innerHeight - 0.5) * 100
    }
    document.addEventListener('mousemove', onMouseMove)

    const animateBlob = () => {
      blobX += (mouseX - blobX) * 0.06
      blobY += (mouseY - blobY) * 0.06
      if (heroBlob) heroBlob.style.transform = `translate(${blobX}px, ${blobY}px)`
      rafId = requestAnimationFrame(animateBlob)
    }
    animateBlob()

    // ========== SCROLL REVEAL ==========
    const rvElements = document.querySelectorAll('.rv, .rv-from-bottom, .rv-from-left, .rv-from-right, .rv-scale, .rv-blur')

    const rvObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const parent = el.parentElement
        if (parent) {
          const siblings = Array.from(parent.children).filter(c =>
            ['rv','rv-from-bottom','rv-from-left','rv-from-right','rv-scale','rv-blur'].some(cls => c.classList.contains(cls))
          )
          const delay = siblings.indexOf(el) * 80
          setTimeout(() => el.classList.add('visible'), delay)
        } else {
          el.classList.add('visible')
        }
        rvObserver.unobserve(el)
      })
    }, { threshold: [0, 0.1, 0.2], rootMargin: '0px 0px -10% 0px' })

    rvElements.forEach(el => rvObserver.observe(el))

    // ========== ANIMATED COUNTERS ==========
    const counters = document.querySelectorAll('.counter')
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const counter = entry.target as HTMLElement
        const target = parseFloat(counter.dataset.target || '0')
        const decimals = parseInt(counter.dataset.decimals || '0')
        const duration = 2000
        const startTime = performance.now()

        const update = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const ease = 1 - Math.pow(2, -10 * progress)
          counter.textContent = (target * ease).toFixed(decimals)
          if (progress < 1) requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
        counterObserver.unobserve(counter)
      })
    }, { threshold: 0.5 })
    counters.forEach(c => counterObserver.observe(c))

    // ========== PRICING TOGGLE ==========
    document.querySelectorAll('.pricing-toggle').forEach(toggle => {
      const buttons = toggle.querySelectorAll('.pricing-toggle-btn')
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          const isYearly = (btn as HTMLElement).dataset.plan === 'yearly'
          document.querySelectorAll('.amount').forEach(amount => {
            const el = amount as HTMLElement
            el.textContent = isYearly ? el.dataset.yearly || '' : el.dataset.monthly || ''
          })
          const save = document.getElementById('stickySave')
          if (save) save.style.opacity = isYearly ? '1' : '0'
        })
      })
    })

    // ========== FAQ ACCORDION ==========
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach(item => {
      item.querySelector('.faq-question')?.addEventListener('click', () => {
        const isActive = item.classList.contains('active')
        faqItems.forEach(i => i.classList.remove('active'))
        if (!isActive) item.classList.add('active')
      })
    })

    // ========== 3D CARD TILT ==========
    document.querySelectorAll('.temoignage-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const el = card as HTMLElement
        const rect = el.getBoundingClientRect()
        const { clientX, clientY } = e as MouseEvent
        const rotateX = (clientY - rect.top - rect.height / 2) / 20
        const rotateY = (rect.width / 2 - (clientX - rect.left)) / 20
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
      })
      card.addEventListener('mouseleave', () => {
        ;(card as HTMLElement).style.transform = ''
      })
    })

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = (anchor as HTMLAnchorElement).getAttribute('href')
        if (href) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onNavScroll)
      window.removeEventListener('scroll', onCtaScroll)
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      rvObserver.disconnect()
      counterObserver.disconnect()
    }
  }, [])

  return (
    <Script
      src="https://unpkg.com/lucide@latest"
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-ignore
        if (window.lucide) window.lucide.createIcons()
      }}
    />
  )
}
