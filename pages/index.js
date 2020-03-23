import { useEffect } from 'react'
import Frame from '../components/Frame';
import fetch from 'isomorphic-unfetch'
import KakaoMap from '../components/index/KakaoMap';

const Index = () => {
  let currentMarkers = [];
  let currentMarker = null;
  let currentInfoWindow = null;
  let currentOverlay = null;

  const dragHandler = map => {     
    const latlng = map.getCenter(); 

    if (currentOverlay != null) {
      currentOverlay.setMap(null);
    }
    
    fetchCoords(latlng.getLat().toFixed(7), latlng.getLng().toFixed(7));
  }
  
  const fetchCoords = async(lat, lng) => {
    const isDebug = false;

    const local = 'http://localhost:8080';
    const prod = 'http://www.thereright.co.kr:8080';
  
    const baseURL = isDebug ? local : prod;
  
    const resCurr = await fetch(baseURL + '/search?lat=' + lat + '&lng=' + lng);
    const curr = await resCurr.json();
  }

  //   $(window).resize(function(e) {
  //     $('#wrapper').height(window.innerHeight + 'px');
  //     $('#map').height(window.innerHeight + 'px');
  //   });

  return (
    <Frame>
      <KakaoMap 
        dragHandler={dragHandler}
      />

      {/* <div id="map" dragHandler={}></div> */}
    </Frame>
  );
};

// Index.getInitialProps = async (context) => {
//   return {
    
//   }
// }

export default Index;
