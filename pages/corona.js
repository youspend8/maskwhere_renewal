import Frame from "../components/Frame";
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import { useRef, useEffect } from "react";
import CoronaRegionChart from '../components/charts/CoronaRegionChart';
import CoronaFlowChart from "../components/charts/CoronaFlowChart";
import {
  locationMap
} from '../constants/Common';
import CoronaNationTable from "../components/corona/CoronaNationTable";
import CoronaRegionTable from "../components/corona/CoronaRegionTable";

const corona = props => {
  const { 
    curr
  } = props.data;

  const date = new Date(curr.createDate);

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
          
          <div className="col-12 my-2 text-right">
          {
            '통계 업데이트 일시 : ' + date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
          }
          </div>

          <CoronaRegionChart data={curr} />
          
          <CoronaRegionTable data={props.data} />
          
          <CoronaFlowChart data={props.data} />

          <div style={{height: '120px'}}></div>
          
          <div className="table-title">
            코로나19 국가별 통계
          </div>

          <div className="col-12 my-2 text-right">
          {
            '통계 업데이트 일시 : ' + date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
          }
          </div>

          <CoronaNationTable data={props.data} />

          <div style={{height: '120px'}}></div>
        </div>
      </div>
    </Frame>
  );
};

corona.getInitialProps = async ({ query }) => {
  const isDebug = true;

  const local = 'http://localhost:8080';
  const prod = 'https://www.thereright.co.kr/api';

  const baseURL = isDebug ? local : prod;

  const resCurr = await fetch(baseURL + '/corona/');
  const curr = await resCurr.json();
  const resDiff = await fetch(baseURL + '/corona/diff');
  const diff = await resDiff.json();
  const resRelease = await fetch(baseURL + '/corona/release');
  const release = await resRelease.json();
  const resDied = await fetch(baseURL + '/corona/died');
  const died = await resDied.json();
  const resRate = await fetch(baseURL + '/corona/rate');
  const rate = await resRate.json();
  const resFlow = await fetch(baseURL + '/corona/type/0');
  const flow = await resFlow.json();
  const resReleaseFlow = await fetch(baseURL + '/corona/type/1');
  const releaseFlow = await resReleaseFlow.json();
  const resNation = await fetch(baseURL + '/corona/nation');
  const nation = await resNation.json();
  const resNationLast1 = await fetch(baseURL + '/corona/nation/last/1');
  const nationLast1 = await resNationLast1.json();
  
  return {
    data: {
      curr: curr,
      diff: diff,
      release: release,
      died: died,
      rate: rate,
      flow: flow,
      releaseFlow: releaseFlow,
      nation: nation,
      nationLast1: nationLast1
    }
  };
}

export default withRouter(corona);