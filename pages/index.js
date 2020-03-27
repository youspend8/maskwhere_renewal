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

  useEffect(() => {
    $(window).resize(function(e) {
      $('#wrapper').height(window.innerHeight + 'px');
      $('#map').height(window.innerHeight + 'px');
    });
  });

  return (
    <Frame>
      <KakaoMap 
        dragHandler={dragHandler}
      />
    </Frame>
  );
};

// Index.getInitialProps = async (context) => {
//   return {
    
//   }
// }

export default Index;
