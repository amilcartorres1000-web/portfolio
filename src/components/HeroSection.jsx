import { Meteors } from "@/components/ui/meteors"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { BlurReveal } from "@/components/ui/blur-reveal";

export default function HeroSection() {
  return (
    <section className="hero is-fullheight-with-navbar relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Meteors />
      </div>
      <div className="hero-body relative z-10">
        <div className="container has-text-centered">
          <h1 className="title is-1 z-20">
            <BlurReveal>  I'm <span className="has-text-weight-bold">Amilcar Torres</span></BlurReveal>
          
          </h1>
          <h2 className="subtitle">
            {" "}
            <TypingAnimation
              as="span"
              className="has-text-weight"
              words={["Welcome to my portfolio", "I'm Exploring data, AI, and physics"]}
              loop
            />
          </h2>
          {/* <TypingAnimation words={["Hello World! 👋", "Exploring data, AI, and physics"]} />   */}
          {/* <h2 className="subtitle">Data AI Physics</h2> */}
          {/* <p>Welcome to my portfolio where code meets science.</p> */}
        </div>
      </div>
    </section>
  )
}
