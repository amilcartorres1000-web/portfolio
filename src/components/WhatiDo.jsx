import DataAnalysisChart from './charts/DataAnalysisChart.jsx';
import ParticleCollisionChart from './charts/ParticleCollisionChart.jsx';
import WebDevChart from './charts/WebDevChart.jsx';
import AIModelChart from './charts/AIModelChart.jsx';

export default function WhatiDo() {
  return (
    <section id="whatido" className="section">
      <div className="container">
        <h2 className="title has-text-centered">What I Do?</h2>
        <div className="columns is-multiline">
            
            {/* Column 1: Data Analysis */}
            <div className="column is-half">
                <div className="box">
                    <h3 className="title is-5">Data Analysis</h3>
                    <p>Analyzing datasets using Python, Pandas, and visualization tools.</p>
                    <DataAnalysisChart />
                </div>
            </div>

                    {/* Column 2: Collision Simulation */}
                    <div className="column is-half">
                        <div className="box">
                            <h3 className="title is-5">Particle Collision Simulation</h3>
                            <p>Simulating particle collisions using Pythia and analysis with AI.</p>
                            <ParticleCollisionChart />
                        </div>
                    </div>

                    {/* Column 3: Web Development*/}
                    <div className="column is-half">
                        <div className="box">
                            <h3 className="title is-5">Full Stack Development</h3>
                            <p>Building responsive web applications using React, JS, Python and frameworks.</p>
                            <WebDevChart />
                        </div>
                    </div>

                    {/* Column 4: Artificial Intelligence */}
                    <div className="column is-half">
                        <div className="box">
                            <h3 className="title is-5">AI Model Development</h3>
                            <p>Designing and training machine learning models using TensorFlow and scikit-learn.</p>
                            <AIModelChart />
                        </div>
                    </div>
        </div>
      </div>
      
    </section>
  );
}



