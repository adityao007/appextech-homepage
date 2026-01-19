
import { useEffect, useState } from 'react'
import './review.css'

const reviews = [
  {
    quote:
      'We have been dealing with Appextech over the past several years and we find them very creative, very responsive and have lots of collaborative spirit in them.',
    author: 'Ramesh. New Delhi',
  },
  {
    quote:
      'For last 5 years we have been working with Appextech and have worked with 20+ projects with Care My Trip. They are highly recommended and we strongly recommend them. Good work guys !',
    author: 'Ashutosh. Care My Trip',
  },
  {
    quote:
      "Any issues I have had have always been swiftly resolved by the gurus' and always in a very professional way. I am very grateful to the whole support team and would not hesitate in recommending Appextech to anybody. Many thanks again.",
    author: 'Anil. PlasmIT Vector',
  },
]

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="review-section" aria-label="Appextech Clients Review">
      <div className="container review-container">
        <h2>Appextech Clients Review</h2>
        <div className="review-card">
          <span className="review-quote review-quote--left">“</span>
          <p>{reviews[activeIndex].quote}</p>
          <span className="review-quote review-quote--right">”</span>
        </div>
        <div className="review-author">- {reviews[activeIndex].author}</div>
        <div className="review-dots" role="tablist" aria-label="Review navigation">
          {reviews.map((_, index) => (
            <button
              key={`review-dot-${index}`}
              type="button"
              className={`review-dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show review ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review
