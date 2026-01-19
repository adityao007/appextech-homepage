import { useEffect, useState } from 'react'
import './Hero.css'

const slides = [
  {
    id: 'graphic',
    eyebrow: 'Do you need',
    title: 'Graphic Design Services?',
    subtitle: 'We create visual concepts that inspire and captivate customers.',
    cta: 'Read More',
    tone: 'dark'
  },
  {
    id: 'web',
    eyebrow: 'Do you need a new',
    title: 'Web Design?',
    subtitle: 'We create stunning websites to convert visitors into customers.',
    tone: 'blue'
  },
  {
    id: 'marketing',
    eyebrow: 'Do you need a new',
    title: 'Digital Marketing?',
    subtitle: 'Campaigns, SEO, and content that drive measurable growth.',
    tone: 'coral'
  },
  {
    id: 'app',
    eyebrow: 'Do you need a new',
    title: 'App Experience?',
    subtitle: 'Launch products that feel fast, intuitive, and delightful.',
    tone: 'teal'
  },
  {
    id: 'brand',
    eyebrow: 'Do you need a new',
    title: 'Brand Identity?',
    subtitle: 'A bold look, a clear voice, and a story people remember.',
    tone: 'deep'
  }
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  // const handlePrev = () => {
  //   setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  // }

  // const handleNext = () => {
  //   setActiveIndex((prev) => (prev + 1) % slides.length)
  // }

  return (
    <>
      <section className="hero-slider" aria-label="Homepage hero slider">
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <article
              key={slide.id}
              className={`hero-slide tone-${slide.tone} ${index === activeIndex ? 'is-active' : ''}`}
            >
              <div className="container hero-slide-inner">
                <div className="hero-slide-caption">
                  <span className="hero-slide-eyebrow">{slide.eyebrow}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  {slide.cta ? (
                    <button className="hero-slide-btn" type="button">
                      {slide.cta}
                    </button>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hero-dots" role="tablist" aria-label="Select hero slide">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${slide.title}`}
              aria-selected={index === activeIndex}
              role="tab"
            />
          ))}
        </div>
      </section>

      <section className="hero-band hero-band-alt">
        <div className="container hero-band-inner">
          <strong>The fastest way to grow your business with the leader in Technology</strong>
          <span>Check out our features</span>
        </div>
      </section>
    </>
  )
}

export default Hero
