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
                        <div className="box big-space">
                            <h3 className="title is-5">Data Analytics & Storytelling</h3>
                            <p>Extracting, deep cleaning, and transforming complex datasets into clear visual narratives and actionable insights.</p>
                            <DataAnalysisChart />
                        </div>
                    </div>

                    {/* Column 2: Collision Simulation */}
                    <div className="column is-half">
                        <div className="box big-space">
                            <h3 className="title is-5">High-Energy Physics Simulations</h3>
                            <p>Modeling and analyzing high-energy particle collisions using advanced statistical tools and deep learning architectures.</p>
                            <ParticleCollisionChart />
                        </div>
                    </div>

                    {/* Column 3: Web Development*/}
                    <div className="column is-half">
                        <div className="box big-space">
                            <h3 className="title is-5">Full-Stack Development</h3>
                            <p>Designing and building robust, end-to-end web applications by integrating data pipelines, databases, and modern frameworks.</p>
                            <WebDevChart />
                        </div>
                    </div>

                    {/* Column 4: Artificial Intelligence */}
                    <div className="column is-half">
                        <div className="box big-space">
                            <h3 className="title is-5">AI & MLOps Engineering</h3>
                            <p>Developing, training, and optimizing predictive models with a strict focus on their entire lifecycle, from design to production deployment.</p>
                            <AIModelChart />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}



