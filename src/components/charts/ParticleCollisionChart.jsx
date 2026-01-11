import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from 'react';

export default function ParticleCollisionChart() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Global colors (same as example)
    Highcharts.setOptions({
      colors: [
        'rgba(5,141,199,0.5)',
        'rgba(80,180,50,0.5)',
        'rgba(237,86,27,0.5)',
      ],
    });

    async function getData() {
      const response = await fetch(
        'https://www.highcharts.com/samples/data/olympic2012.json'
      );
      return response.json();
    }

    getData().then(data => {
      const sports = [
        { name: 'Electrons (e⁻)', id: 'basketball', symbol: 'circle' },
        { name: 'Muons (μ⁻)', id: 'triathlon', symbol: 'triangle' },
        { name: 'Pions (π⁺)', id: 'volleyball', symbol: 'square' },
      ];

      const buildSeries = sport =>
        data
          .filter(
            d =>
              d.sport === sport.id &&
              d.height > 0 &&
              d.weight > 0
          )
          .map(d => [d.height, d.weight]);

      setSeries(
        sports.map(s => ({
          name: s.name,
          data: buildSeries(s),
          marker: { symbol: s.symbol },
        }))
      );
    });
  }, []);

  const options = {
    chart: {
      type: 'scatter',
      backgroundColor: 'transparent',
      zooming: { type: 'xy' },
    },

    title: {
      text: 'Electrons, Muons, and Pions Momentum vs Energy',
    },

    
    xAxis: {
      title: { text: 'Momentum (GeV/c)' },
      labels: { format: '{value} GeV/c' },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },

    yAxis: {
      title: { text: 'Energy (GeV)' },
      labels: { format: '{value} GeV' },
    },

    legend: {
      enabled: true,
    },

    plotOptions: {
      scatter: {
        marker: {
          radius: 2.5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)',
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          },
        },
        jitter: {
          x: 0.005,
        },
      },
    },

    tooltip: {
      pointFormat:
        'Height: {point.x} m <br/> Weight: {point.y} kg',
    },

    series,

    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
