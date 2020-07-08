import { useRef, useEffect } from "react";

const CoronaFlowChart = props => {
  const { 
    flow,
    releaseFlow
  } = props.data;

  const lineChart = useRef();

  useEffect(() => {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  });

  const convertDate = date => {
    return new Date(
      date.getFullYear(), date.getMonth(), date.getDate()
    )
  }
  
  const drawChart = () => {
    const data = new google.visualization.DataTable();
    data.addColumn('date', '날짜');
    data.addColumn('number', "확진자");
    data.addColumn('number', "격리해제");

    data.addRows([
      [
        convertDate(new Date(flow[6]['createDate'])), 
        flow[6]['total'],
        releaseFlow[6]['total']
      ],
      [
        convertDate(new Date(flow[5]['createDate'])), 
        flow[5]['total'],
        releaseFlow[5]['total']
      ],
      [
        convertDate(new Date(flow[4]['createDate'])), 
        flow[4]['total'],
        releaseFlow[4]['total']
      ],
      [
        convertDate(new Date(flow[3]['createDate'])), 
        flow[3]['total'],
        releaseFlow[3]['total']
      ],
      [
        convertDate(new Date(flow[2]['createDate'])), 
        flow[2]['total'],
        releaseFlow[2]['total']
      ],
      [
        convertDate(new Date(flow[1]['createDate'])), 
        flow[1]['total'],
        releaseFlow[1]['total']
      ],
      [
        convertDate(new Date(flow[0]['createDate'])), 
        flow[0]['total'],
        releaseFlow[0]['total']
      ]
    ]);

    var date_formatter = new google.visualization.DateFormat({ 
      pattern: "M월 dd일"
    }); 
    date_formatter.format(data, 0);
    
    const options = {
      title: '날짜별 확진자 및 완치자 현황',
      curveType: 'function',
      legend: { position: 'bottom' },
      height: 500,
      pointSize: 3,
      series: {
        0: {
          type: 'bars',
          targetAxisIndex: 0,
          lineWidth: 2
        },
        1: {
          targetAxisIndex: 1,
          lineWidth: 2
        }
      },
      vAxes: {
        0: {
          viewWindow: {
            max: 5000,
            min: 15000
          }
        },
        1: {
          viewWindow: {
            max: 5000,
            min: 15000
          }
        }
      },
      hAxis: {
        format: 'M/dd',
        ticks: [
          convertDate(new Date(flow[0]['createDate'])), 
          convertDate(new Date(flow[1]['createDate'])), 
          convertDate(new Date(flow[2]['createDate'])), 
          convertDate(new Date(flow[3]['createDate'])), 
          convertDate(new Date(flow[4]['createDate'])), 
          convertDate(new Date(flow[5]['createDate'])), 
          convertDate(new Date(flow[6]['createDate'])), 
        ]
      }
    };

    const chart = new google.visualization.LineChart(lineChart.current);
    chart.draw(data, options);
  }

  return (
    <>
      <div ref={lineChart}></div>
    </>
  )
};

export default CoronaFlowChart;