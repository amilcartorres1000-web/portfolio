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
          ['Python', 50],
          ['HTML/CSS', 10],
          {
            name: 'React',
            y: 10,
            sliced: true,
            selected: true,
          },
          ['JavaScript', 10],
          ['SQL', 10],
        ],
      },
    ],

    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
