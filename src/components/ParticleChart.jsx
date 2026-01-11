import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from 'react';

export default function ParticleChart() {
  const [data, setData] = useState([10, 20, 15, 25, 18]);

  // Animación simple: simula fluctuaciones
  useEffect(() => {
    const interval = setInterval(() => {
      setData(d => d.map(v => v + (Math.random() * 10 - 5)));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: { type: 'line', backgroundColor: 'transparent' },
    title: { text: 'Particle Energy Simulation' },
    xAxis: { categories: ['t1', 't2', 't3', 't4', 't5'] },
    yAxis: { title: { text: 'Energy (MeV)' } },
    series: [{ name: 'Particle A', data }],
    credits: { enabled: false },
  };

  return (
    <div className="box">
      <h3 className="title is-4">Live Simulation</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
