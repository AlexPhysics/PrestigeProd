import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              <a href="https://www.youtube.com/@PrestigeProductionAgency" target="_blank" rel="noopener noreferrer" className="flex items-center">
                See full Portfolio here
              <img src={watchImg} alt="watch" className="ml-2" />
              </a>
            </p>
            <p className="link">
              <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              What do we offer?
              <img src={rightImg} alt="right" className="ml-2" />
              </a>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}
export default Highlights