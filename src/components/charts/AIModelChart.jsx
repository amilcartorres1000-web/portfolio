import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function AIModelChart() {

  const layers = [
    { label: 'Input', nodes: 1 },
    { label: 'Hidden 1', nodes: 6 },
    { label: 'Hidden 2', nodes: 6 },
    { label: 'Hidden 3', nodes: 6 },
    { label: 'Output', nodes: 2 }
  ];

  // Neuron points
  const neuronSeries = layers.map((layer, x) => ({
    type: 'scatter',
    name: layer.label,
    data: Array.from({ length: layer.nodes }, (_, y) => [x, y]),
    marker: {
      radius: 8,
      symbol: 'circle',
      fillColor: '#ffffff',
      lineWidth: 2.2  
    }
  }));

  // Connection lines
  const connectionSeries = [];

  for (let l = 0; l < layers.length - 1; l++) {
    for (let i = 0; i < layers[l].nodes; i++) {
      for (let j = 0; j < layers[l + 1].nodes; j++) {
        connectionSeries.push({
          type: 'line',
          enableMouseTracking: false,
          color: 'rgba(10, 206, 75, 0.2)',
          lineWidth: 3,
          marker: { enabled: false },
          data: [
            [l, i],
            [l + 1, j]
          ]
        });
      }
    }
  }

  const options = {
    chart: {
      height: 400,
      backgroundColor: 'transparent'
    },

    title: {
      text: 'Neural Network Architecture'
    },
    legend: {
      enabled: false
    },

    xAxis: {
      visible: false
    },
    xAxis: {
      categories: layers.map(l => l.label),
      tickLength: 0
    },

    yAxis: {
      visible: false
    },

    tooltip: {
      formatter() {
        return `
          <b>${this.series.name}</b><br/>
          Neuron #${this.point.y + 1}
        `;
      }
    },

    series: [
      ...connectionSeries, // draw first (behind)
      ...neuronSeries      // draw on top
    ],

    credits: { enabled: false }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
