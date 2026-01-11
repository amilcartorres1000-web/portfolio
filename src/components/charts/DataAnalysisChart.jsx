import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from 'react';

export default function DataAnalysisChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [
        ...prev.slice(-19),
        [Date.now(), Math.random() * 100],
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: { type: 'areaspline', backgroundColor: 'transparent' },
    title: { text: 'Live Data Stream' },
    xAxis: { type: 'datetime', tickInterval: 2000 },
    yAxis: { title: { text: 'Value' } },
    series: [{ name: 'Sensor', data, color: '#32CD32', fillOpacity: 0.3 }],
    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
