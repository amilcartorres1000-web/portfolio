import ParticleChart from './ParticleChart.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title has-text-centered">Projects</h2>
        <div className="has-text-centered mb-4">
          
        </div>

        <div className="columns is-multiline">
          <div className="column is-half">
            <div className="box">
              {/* <h3 className="title is-5">Particle Collision Simulation</h3> */}
              <p>Check my <a href="https://github.com/amilcartorres1000-web">GitHub</a> for the code!</p>

            </div>
          </div>
          
           <div className="column is-half">
            <div className="box">
              {/* <h3 className="title is-5">AI Visualization (Coming Soon)</h3> */}
              <p>Neural network simulation and data analysis using TensorFlow, ROOT...</p>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
export function Component() {
  return <TypingAnimation>Hello World! 👋</TypingAnimation>
}