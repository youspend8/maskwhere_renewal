import Frame from "../components/Frame";
import { withRouter, Router } from 'next/router';
import { useEffect } from "react";

const Corona = withRouter(props => {
  return (
    <Frame>
      <style jsx>{`
        #container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .table-title {
          font-size: 24px;
          text-align: center;
          font-weight: bold;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>

      <div id="container" className="container">
        <div style={{width: '100%', height: '70px'}}></div>
        <div className="col-12 col-lg-8 p-0">
          <div className="table-title">
            코로나19 지역별 통계
          </div>
          <div id="refresh_date" className="col-12 my-2 text-right"></div>
          <table className="table text-center col-12">
            <thead>
              <tr className="font-weight-bold">
                <th className="">지역</th>
                <th className="">확진자</th>
                <th className="">격리해제</th>
                <th className="">사망자</th>
                <th className="">발생률</th>
              </tr>
            </thead>
            <tbody id="table_body">
            
            </tbody>
          </table>
          <div className="col-12 my-2">
            발생률 : 인구 10만 명당 (지역별 인구 출처 : 행정안전부, 주민등록인구현황 (’20.1월 기준))
          </div>
          
          <div style={{height: '120px'}}></div>
          
          <div className="table-title">
            코로나19 국가별 통계
          </div>
          <div id="nation_refresh_date" className="col-12 my-2 text-right"></div>
          <table className="table text-center col-12">
            <thead>
              <tr className="font-weight-bold">
                <th className="">국가</th>
                <th className="">확진자</th>
                {/* <th className="">격리해제</th> */}
                <th className="">사망자</th>
                <th className="">사망률</th>
              </tr>
            </thead>
            <tbody id="nation_table_body">
            
            </tbody>
          </table>

          <div style={{height: '120px'}}></div>
        </div>
      </div>
    </Frame>
  );
});

export default Corona;