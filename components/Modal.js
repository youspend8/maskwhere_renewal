import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const ar = getAr(document);
    if (!ar) {
      $('#announceModal').modal('show')
    }
  }, [])

  const announceRemind = function() {
    var date = new Date();
      date.setDate(date.getDate() + 1);
      
      var cookie = "";
      cookie += "ar=1;";
      cookie += "expires=" + date.toUTCString();
      
      document.cookie = cookie;

    $('#announceModal').modal('hide')
  }
  
  const getAr = function(document) {
    var cookies = document.cookie.split(";");

    for (var cookie of cookies) {
        if (cookie.search('ar') != -1) {
          return true;
        }
    }	
    return false;
  }

  return (
    <div className="modal" id="announceModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-weight-bold">
              알림
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{fontSize: '16px'}}>
            <div className="mb-5">
              <strong>
                공공데이터를 바탕으로 위치 기반 서비스를 통해 주위 마스크 판매처에서의 실시간 마스크 재고 및 현황을 제공합니다.<br/><br/>
                또한 코로나19 현황에 대한 정보를 제공합니다.
              </strong>
            </div>
            <div className="mb-2">
              <strong>
                1. 코로나19 현황 통계 시각화 차트 계속 추가예정
              </strong>
            </div>
            <div className="mb-4">
              <strong>
                2. 마스크 탐색 화면 Spot Marker 및 기타 UI 변경 예정
              </strong>
            </div>
            <div className="mb-2 text-danger">
              <strong>
                - 프레임워크 변경 완료
              </strong>
            </div>
            <div className="mb-4 text-danger">
              <strong>
                - 코로나19 현황 통계 데이터 보강 완료
              </strong>
            </div>
            <div className="mb-2">
              <strong>
                P.S 웹사이트 UI/UX 관련하여 도움 주실분 ..
              </strong>
            </div>
            
            <p className="m-0 mt-4 text-right">
              데이터 출처 : 공공데이터 포털
            </p>
          </div>
          <div className="modal-footer">
            <a className="text-secondary font-weight-bold" style={{cursor: 'pointer'}} onClick={announceRemind}>
              오늘 하루 보지않기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;