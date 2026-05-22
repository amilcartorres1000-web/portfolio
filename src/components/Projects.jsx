
import { ExpandableCard } from "@/components/ui/expandable-card";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title has-text-centered">Projects</h2>

        <div className="columns is-multiline is-centered text-right">
          {/* --- Project 1: GitHub --- */}
          <div className="column is-one-quarter">
            <ExpandableCard
              title="GitHub Projects"
              src="/gitlogo.jpg"
              description="Various Personal Projects"
            >
              <p><strong>Role:</strong> Full-Stack Developer</p>
              <ul>
                <li>Development of multiple personal projects on GitHub.</li>
                <li>Automation with AI and data analysis.</li>
                <li><a href="https://github.com/amilcartorres1000-web" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
              </ul>
            </ExpandableCard>
          </div>

          {/* --- Project 2: Aura Minerals --- */}
          <div className="column is-one-quarter">
            <ExpandableCard
              title="Aura Minerals"
              src="/netguardiao.png"
              description="AI Network Predictive Maintenance"
            >
              <p><strong>Role:</strong> Network & Data Engineering Intern</p>
              <p>Engineered an intelligent, automated network monitoring system designed to maximize operational uptime through predictive analytics and machine learning modeling.</p>
              <ul>
                <li><strong>AI-Driven Failure Prediction:</strong> Developed predictive models to forecast critical connectivity failures and network device degradation before they impacted operations.</li>
                <li><strong>Automated Monitoring Pipeline:</strong> Built an automated infrastructure to continuous track network health, processing real-time telemetry logs and status metrics.</li>
                <li><strong>Preventive Alerting System:</strong> Implemented a proactive alert mechanism leveraging historical data analysis, allowing IT teams to execute preventive maintenance and eliminate unexpected downtime.</li>
              </ul>
            </ExpandableCard>
          </div>

          {/* --- Project 3: Altaira Glamping --- */}
          <div className="column is-one-quarter">
            <ExpandableCard
              title="Altaira Glamping"
              src="/altaira.png"
              description="Business Intelligence & Data Pipeline"
            >
              <p><strong>Role:</strong> BI Developer & Data Engineer</p>
              <p>Architected and deployed a centralized Business Intelligence ecosystem to drive data-backed decision-making, booking optimization, and marketing ROI analysis.</p>
              <ul>
                <li><strong>End-to-End ETL Pipeline:</strong> Designed and implemented a robust data pipeline using <strong>Python</strong> to automate the extraction, transformation, and loading of business data.</li>
                <li><strong>Multi-Platform API Integration:</strong> Successfully integrated disparate data sources from third-party APIs including <strong>Instagram, Airbnb, and WhatsApp</strong> into a unified data environment.</li>
                <li><strong>Advanced Analytics & Conversions:</strong> Developed analytical dashboards focusing on social media performance engagement, funnel tracking, and direct booking conversion metrics to optimize hospitality operations.</li>
              </ul>
            </ExpandableCard>
          </div>

          {/* --- Experiencia 3: CERN - Calorimeter VAE Fast Simulation --- */}
          <div className="column is-one-quarter">
            <ExpandableCard
              title="CERN ATLAS Data: Calorimeter VAE Simulation"
              src="/energy_distribution.png"
              description="Deep Generative Model for Fast Shower Simulation"
            >
              <p><strong>Role:</strong> Machine Learning Developer (HEP Simulation)</p>
              <p>Production-ready implementation of a Variational Autoencoder (VAE) for ultra-fast shower simulation in the electromagnetic calorimeter.</p>
              <ul>
                <li><strong>Model Performance:</strong> Achieved excellent statistical agreement with a KS (Kolmogorov-Smirnov) metric of 0.022 versus real data.</li>
                <li><strong>Physics Consistency:</strong> The model preserves energy accurately, matching generated and real energy distributions within 1%.</li>
                <li><strong>Data Handling:</strong> Optimized architecture for sparse data, correctly modeling 92% of detector energy sparsity.</li>
                <li><strong>Operational Efficiency:</strong> Capable of generating realistic simulations 1000x faster than traditional Monte Carlo (Geant4) methods.</li>
                <li><strong>Software Engineering:</strong> Modular, extensible code with robust logging, checkpoint handling, and training monitoring.</li>
              </ul>
            </ExpandableCard>
          </div>

          {/* --- Experiencia 4: CERN - Jet Tagging & Classification --- */}
          <div className="column is-one-quarter">
            <ExpandableCard
              title="CERN ATLAS Data: Jet Tagging & Classification"
              src="/jet.png"
              description="Machine Learning Pipeline for QCD Substructure Analysis"
            >
              <p><strong>Role:</strong> Machine Learning Developer (HEP Data Analysis)</p>
              <p>Designed and built a jet classification and tagging pipeline for Quantum Chromodynamics (QCD) studies using ATLAS open data.</p>
              <ul>
                <li><strong>HEP Data Processing:</strong> Feature extraction directly from ROOT files using QCD and top-quark samples.</li>
                <li><strong>Predictive Modeling:</strong> Implemented ML classifiers for binary (quark vs. gluon) and multiclass (quark vs. gluon vs. top) tasks.</li>
                <li><strong>Kinematic Variables:</strong> Created a structured dataset from jet observables like transverse momentum (pt), pseudorapidity (eta), phi, mass (m), and jet width.</li>
                <li><strong>Physics Analysis:</strong> Visual comparison of feature distributions across jet categories to validate model separation performance.</li>
              </ul>
            </ExpandableCard>
          </div>

          <div className="column is-one-quarter">

            {/* --- Experience: Altaira Glamping - Premium Web Platform --- */}
            <ExpandableCard
              title="Altaira Glamping Website"
              src="/altairaweb.png"
              description="High-Performance, Premium UI Web Application"
            >
              <p><strong>Role:</strong> Frontend Engineer & UI Developer</p>
              <p>Designed and developed a modern, visually stunning, and conversion-optimized web platform for a luxury glamping business, focusing on seamless user experience and ultra-fast performance.</p>
              <ul>
                <li><strong>Modern Tech Stack:</strong> Built using <strong>React</strong> and <strong>Vite</strong> for blazing-fast build times, hot module replacement, and optimal production bundling.</li>
                <li><strong>Premium UI/UX:</strong> Implemented a highly responsive, modern, and sleek design using <strong>Tailwind CSS</strong>, incorporating fluid animations and pixel-perfect layouts tailored for a luxury hospitality brand.</li>
                <li><strong>Performance Optimization:</strong> Achieved near-perfect Lighthouse scores by leveraging asset optimization, lazy loading, and efficient component re-rendering strategies.</li>
                <li><strong>Component Architecture:</strong> Engineered a clean, reusable, and maintainable component structure, ensuring scalability for future booking integrations or system expansions.</li>
              </ul>
            </ExpandableCard>
          </div>

          <div className="column is-one-quarter">
            {/* --- Experience: Lovecraftian E-Commerce Platform --- */}
            <ExpandableCard
              title="The Necronomicon Bookstore"
              src="/lovecraftweb.png"
              description="Full-Stack E-Commerce Platform for Niche Literature"
            >
              <p><strong>Role:</strong> Full-Stack Web Developer</p>
              <p>Engineered a secure, end-to-end e-commerce web application specialized in H.P. Lovecraft literature, featuring user authentication, role-based access control, and integrated payment systems.</p>
              <ul>
                <li><strong>Role & User Management:</strong> Implemented a robust authentication system defining user roles (Admin and Customer) to secure dashboard metrics, inventory management, and customer profile data.</li>
                <li><strong>Payment Gateway Integration:</strong> Integrated secure third-party payment gateways to handle seamless transactions, checkout pipelines, and automated order status updates.</li>
                <li><strong>Database & Inventory Control:</strong> Designed a relational database schema to manage dynamic book catalogs, stock tracking, user orders, and shopping cart persistence.</li>
                <li><strong>Security Best Practices:</strong> Enforced backend security measures including token-based authentication (JWT), password hashing, and protected API routes to guarantee safe user data handling.</li>
              </ul>
            </ExpandableCard>
          </div>


        </div>
      </div>
    </section>
  );
}
