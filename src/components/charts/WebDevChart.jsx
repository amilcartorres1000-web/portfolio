import { node } from 'globals';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
export default function WebDevChart() {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },

    title: {
      text: 'Tech Stack Usage',
      style: { color: '#fff', fontSize: '18px', fontWeight: 'bold' }  
    },

    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          color: '#ffffff'
        },
      },
    },

    series: [
      {
        type: 'pie',
        name: 'Usage',
        data: [
          {
            name: 'SQL',
            y: 20,
            color: 'rgba(255, 107, 107, 0.5)',
            sliced: true,
            selected: false,
          },
          {
            name: 'Python',
            y: 30,
            color: 'rgba(78, 205, 196, 0.5)',
          },
          {
            name: 'Excel',
            y: 20,
            color: 'rgba(255, 230, 109, 0.5)',
          },
          {
            name: 'React',
            y: 10,
            color: 'rgba(149, 225, 211, 0.5)',
          },
          {
            name: 'IA',
            y: 20,
            color: 'rgba(243, 129, 129, 0.5)',
          },
          {
            name: 'Power BI',
            y: 10,
            color: 'rgba(170, 150, 218, 0.5)',
          },
        ],
      },
    ],

    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
