import { useEffect } from 'react'
import Frame from '../components/Frame';

const Home = () => {
  useEffect(() => {		
		var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new window.kakao.maps.LatLng(37.5667438, 126.9825913), //지도의 중심좌표.
      level: 6 //지도의 레벨(확대, 축소 정도),
    };
    
    container.style.height = window.innerHeight + 'px';

    var map = new window.kakao.maps.Map(container, options); // 지도를 생성합니다
    
  }, []);

    
  //   $(window).resize(function(e) {
  //     $('#wrapper').height(window.innerHeight + 'px');
  //     $('#map').height(window.innerHeight + 'px');
  //   });

  return (
    <Frame>
      <div id="map"></div>
    </Frame>
  );
};

export default Home;
