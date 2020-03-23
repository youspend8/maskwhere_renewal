import { useEffect, useRef } from "react";

let currentMarkers = [];
let currentMarker = null;
let currentInfoWindow = null;
let currentOverlay = null;
let markerDict = [];

const plentySrc = "/icons/plenty.png";
const someSrc = "/icons/some.png";
const fewSrc = "/icons/few.png";
const emptySrc = "/icons/empty.png";

const KakaoMap = props => {
  const {
    // dragHandler
  } = props;

  let map = null;

  const container = useRef();

  const fetchCoords = async(lat, lng) => {
    const isDebug = false;

    const local = 'http://localhost:8080';
    const prod = 'http://www.thereright.co.kr:8080/';
  
    const baseURL = isDebug ? local : prod;
  
    const response = await fetch(baseURL + '/search?lat=' + lat + '&lng=' + lng);
    const result = await response.json();

    const stores = result.stores;

    if (result.count <= 0) {
      return;
    }
    
    setMarkers(null);
    
    currentMarkers = [];
    markerDict = [];

    for (var i = 0; i < stores.length; i++) {
      const positions = stores[i];

      var imageSize = new window.kakao.maps.Size(24, 35); 

      let imageSrc = '';
						
      let iwContent = '<div class="wrap">' + 
      '    <div class="info">' + 
      '        <div class="title">' +
                  positions.name + 
      '        </div>' + 
        '        <div class="d-flex flex-wrap p-2" style="height: 141px;">' + 
        '            <div class="addr">' + positions.addr + '</div>';
        
      if (positions.remain_stat == 'plenty') {
        imageSrc = plentySrc;
        iwContent += '<div class="ellipsis text-success">' + '재고 100개 이상' + '</div>';
      } else if (positions.remain_stat == 'some') {
        imageSrc = someSrc;
        iwContent += '<div class="ellipsis text-warning">' + '재고 30개 ~ 100개' + '</div>';
      } else if (positions.remain_stat == 'few') {
        imageSrc = fewSrc;
        iwContent += '<div class="ellipsis text-danger">' + '재고 2개 ~ 30개' + '</div>';
      } else if (positions.remain_stat == 'empty') {
        imageSrc = emptySrc;
        iwContent += '<div class="ellipsis text-secondary">' + '재고 1개 이하' + '</div>';
      } else if (positions.remain_stat == 'break') {
        imageSrc = emptySrc;
        iwContent += '<div class="ellipsis text-secondary">' + '판매중지' + '</div>';
      } else if (positions.remain_stat == null) {
        imageSrc = emptySrc;
        iwContent += '<div class="ellipsis text-secondary">' + '재고정보 없음' + '</div>';
      }

      if (positions.created_at == null) {
        iwContent +='			<div class="ellipsis text-dark w-100">갱신시간 : ' + '정보없음' + '</div>';
      } else {
        iwContent +='			<div class="ellipsis text-dark w-100">갱신시간 : ' + positions.created_at + '</div>';
      }
      iwContent +='			<div class="d-flex justify-content-between align-self-end col-12 mt-2">' + 
            '				<a class="btn btn-dark col-6 p-1" href="https://map.kakao.com/link/to/' + positions.name + ',' + lat + ',' + lng + '" target="_blank" style="margin-right: 5px; margin-left: -2.5px; font-size: 15px;">길찾기</a>' +
            '				<a class="btn btn-dark col-6 p-1" href="https://map.kakao.com/link/map/' + positions.name + ',' + lat + ',' + lng + '" target="_blank" style="font-size: 15px;">크게보기</a>' + 
            '			</div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
      const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(positions.lat, positions.lng), // 마커를 표시할 위치
          title : positions.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
      });

      currentMarkers.push(marker);
      
      markerDict.push({
        marker: marker,
        content: iwContent
      });
        
      const index = i;
    
      window.kakao.maps.event.addListener(marker, 'click', function() {
        const obj = markerDict[index];
        
        if (currentOverlay != null) {
          currentOverlay.setMap(null);
        }
         
        const overlay = new window.kakao.maps.CustomOverlay({
            content: obj.content,
            map: map,
            position: obj.marker.getPosition()
        });
        
        currentOverlay = overlay;
        currentOverlay.setMap(map);
      });
    }
  }

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(37.5667438, 126.9825913),
      level: 6
    }

    container.current.style.height = window.innerHeight + 'px';

    map = new window.kakao.maps.Map(container.current, options);
    const geocoder = new window.kakao.maps.services.Geocoder();
    
    window.kakao.maps.event.addListener(map, 'dragend', () => {     
      const latlng = map.getCenter(); 
  
      if (currentOverlay != null) {
        currentOverlay.setMap(null);
      }
      
      fetchCoords(latlng.getLat().toFixed(7), latlng.getLng().toFixed(7));
    });

    myLocation();
  }, []);

  // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수
  const setMarkers = map => {
    for (var i = 0; i < currentMarkers.length; i++) {
      currentMarkers[i].setMap(map);
    }            
  }

  const panTo = (lat, lng) => {
    const moveLatLon = new window.kakao.maps.LatLng(lat, lng);
    map.panTo(moveLatLon);

    if (currentOverlay != null) {
      currentOverlay.setMap(null);
    }
  }

  const myLocationClickHandler = e => {
    myLocation();
  }

  const quickPantoChangeHandler = e => {
    const coords = e.target.value;
    const spl = coords.split(',');
    
    if (spl.length == 3) {
      const lat = Number.parseFloat(spl[0]);
      const lng = Number.parseFloat(spl[1]);
      const level = Number.parseInt(spl[2]);
      
      map.setLevel(level);

            fetchCoords(lat, lng);
            
      panTo(lat, lng);
    }
  }

  const myLocation = function() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const coords = position.coords;
        const latitude = coords.latitude;
        const longitude = coords.longitude;

        fetchCoords(latitude, longitude);

        panTo(latitude, longitude);

        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(latitude, longitude),
          title : '현재위치',
          image : new kakao.maps.MarkerImage('/icons/current.png', new kakao.maps.Size(20, 20))
        });
      
        if (currentMarker != null) {
          currentMarker.setMap(null);	
        }
        currentMarker = marker;
        currentMarker.setMap(map);
      
      }, function(error) {
          console.log(error.message);
      });
    } else {
        console.log("Geolocation을 지원하지 않는 브라우저 입니다.");
    }
  }
  return (
    <>
      <style global jsx>{`
        .wrap {
          position: absolute;
          left: 0;
          bottom: 40px;
          width: 200px;
          height: 190px;
          margin-left: -97.5px;
          text-align: left;
          overflow: hidden;
          font-size: 12px;
          font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
          line-height: 1.5;
          z-index: 9999;
        }
        
        .wrap * {
          padding: 0;
          margin: 0;
        }
        
        .wrap .info {
          width: 100%;
          height: 180px;
          border-radius: 5px;
          border-bottom: 2px solid #ccc;
          border-right: 1px solid #ccc;
          overflow: hidden;
          background: #fff;
        }
        
        .wrap .info:nth-child(1) {
          border: 0;
          box-shadow: 0px 1px 2px #888;
        }
        
        .info .title {
          padding: 5px 0 0 10px;
          height: 40px;
          background: #eee;
          border-bottom: 1px solid #ddd;
          font-size: 17px;
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        
        .info .body {
          position: relative;
          width: 100%;
          padding: 10px;
        }
        
        .info .desc {
          position: relative;
          margin: 13px 0 0 90px;
          height: 75px;
        }
        
        .desc .jibun {
          font-size: 11px;
          color: #888;
          margin-top: -2px;
        }
        
        .info .addr {
          white-space: normal;
        }
        
        .info .img {
          position: absolute;
          top: 6px;
          left: 5px;
          width: 73px;
          height: 71px;
          border: 1px solid #ddd;
          color: #888;
          overflow: hidden;
        }
        
        .info:after {
          content: '';
          position: absolute;
          margin-left: -12px;
          left: 50%;
          bottom: 0;
          width: 22px;
          height: 12px;
        }
        
        .info .link {
          color: #5085BB;
        }
      `}</style>

      <div id="map" ref={container}></div>
      
      <button type="button" id="my_location" onClick={myLocationClickHandler} className="overlay-btn btn btn-dark" style={{bottom: '7%', right: '5%'}}>
        <i class="material-icons">my_location</i>
      </button>
      
      <select id="quick_panto" className="form-control text-white bg-dark" onClick={quickPantoChangeHandler}>
        <option disabled selected hidden>빠른이동</option>
        <option value="37.5678430,126.9825230,8">서울</option>
        <option value="37.4560890,126.7059180,8">인천</option>
        <option value="35.8721442,128.6010148,8">대구</option>
        <option value="36.3607932,127.3795372,8">대전</option>
        <option value="35.1796181,129.0746697,8">부산</option>
        <option value="36.5004936,127.2811008,8">세종</option>
        <option value="35.1603806,126.8509929,8">광주</option>
        <option value="35.5407615,129.3139520,8">울산</option>
        <option value="33.3642451,126.5306645,8">제주도</option>
        <option value="37.5727451,127.0118633,10">경기도</option>
        <option value="36.9081212,127.7651757,10">충청북도</option>
        <option value="36.5853136,126.9724670,10">충청남도</option>
        <option value="36.4909804,128.6409779,10">경상북도</option>
        <option value="35.4526437,128.4814627,10">경상남도</option>
        <option value="37.7985088,128.2887330,10">강원도</option>
        <option value="35.7270600,127.0626041,10">전라북도</option>
        <option value="34.9229341,126.9583250,10">전라남도</option>
      </select>
    </>
  )
};

export default KakaoMap;