import { useEffect, useRef } from "react";

const CoronaRegionChart = props => {
  const { data } = props;
  
  const geoChart = useRef();

  useEffect(() => {
    google.charts.load('current', {'packages':['geochart'], 'mapsApiKey': 'AIzaSyCTWZtv_pb2EDs9kYXOmSVwH6mlaDnNKtE'});
    google.charts.setOnLoadCallback(drawGeoChart);
  }, []);

  const drawGeoChart = () => {
    const dataSet = new google.visualization.DataTable();

    dataSet.addColumn('string', 'Country');
    dataSet.addColumn('number', 'Value'); 
    dataSet.addColumn({type:'string', role:'tooltip'});
    
    dataSet.addRows([[{v:'KR-11', f:'서울'}, data.seoul, '확진자 : ' + data.seoul + '명']]);
    dataSet.addRows([[{v:'KR-26', f:'부산'}, data.busan, '확진자 : ' + data.busan + '명']]);
    dataSet.addRows([[{v:'KR-27',f:'대구'}, data.daegu, '확진자 : ' + data.daegu + '명']]);
    dataSet.addRows([[{v:'KR-28',f:'인천'}, data.incheon, '확진자 : ' + data.incheon + '명']]);
    dataSet.addRows([[{v:'KR-29',f:'광주'}, data.gwangju, '확진자 : ' + data.gwangju + '명']]);
    dataSet.addRows([[{v:'KR-30',f:'대전'}, data.daejeon, '확진자 : ' + data.daejeon + '명']]);
    dataSet.addRows([[{v:'KR-31',f:'울산'}, data.ulsan, '확진자 : ' + data.ulsan + '명']]);
    dataSet.addRows([[{v:'KR-41',f:'경기도'}, data.gyunggi, '확진자 : ' + data.gyunggi + '명']]);
    dataSet.addRows([[{v:'KR-42',f:'강원도'}, data.gangwon, '확진자 : ' + data.gangwon + '명']]);
    dataSet.addRows([[{v:'KR-43',f:'충청북도'}, data.chongbuk, '확진자 : ' + data.chongbuk + '명']]);
    dataSet.addRows([[{v:'KR-44',f:'충청남도'}, data.chongnam, '확진자 : ' + data.chongnam + '명']]);
    dataSet.addRows([[{v:'KR-45',f:'전라북도'}, data.jeonbuk, '확진자 : ' + data.jeonbuk + '명']]);
    dataSet.addRows([[{v:'KR-46',f:'전라남도'}, data.jeonnam, '확진자 : ' + data.jeonnam + '명']]);
    dataSet.addRows([[{v:'KR-47',f:'경상북도'}, data.gyungbuk, '확진자 : ' + data.gyungbuk + '명']]);
    dataSet.addRows([[{v:'KR-48',f:'경상남도'}, data.gyungnam, '확진자 : ' + data.gyungnam + '명']]);
    dataSet.addRows([[{v:'KR-49',f:'제주도'}, data.jeju, '확진자 : ' + data.jeju + '명']]);
    dataSet.addRows([[{v:'KR-50',f:'세종'}, data.sejong, '확진자 : ' + data.sejong + '명']]);
    
    const options = {
      height: 500,
      region: 'KR',
      displayMode: 'regions',
      resolution: 'provinces',
      enableRegionInteractivity: 'true',
      colorAxis: {
          minValue: 0,
          maxValue: 6000,
          colors: ['#EFEDF5', '#EFEDF5', '#EFEDF5', '#EFEDF5', '#BCBDDC', '#BCBDDC', '#EFEDF5', ]
      },
      sizeAxis: { 
        minSize: 10, 
        maxValue: 1,
        maxSize: 30, 
        maxValue: 6000
      },
      colorAxis: {colors: ['#fff0f0', '#a95454']}
    };

    const chart = new google.visualization.GeoChart(geoChart.current);
    chart.draw(dataSet, options);
  }

  return (
    <>
      <div ref={geoChart}></div>
    </>
  );
}

export default CoronaRegionChart;