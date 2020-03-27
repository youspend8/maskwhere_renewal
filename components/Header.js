import Head from 'next/head';
import { useEffect } from 'react';

export default function Header() {
  const gaCode = () => ({
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date());
      gtag('config', 'UA-151381503-2');
    `
  });

  return (
    <div>
      <Head>
	      <meta charset="UTF-8" />
        <title>마스크거기 - thereright</title>
	      <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:title" content="마스크 거기 - 공공마스크 정보" />
        <meta property="og:description" content="공공마스크 관련 공공데이터를 이용한 공적마스크 판매처 및 재고현황과 코로나19 통계 데이터를 제공하는 서비스입니다." />
        <meta property="og:url" content="https://www.thereright.co.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta name="description" content="공공데이터를 활용한 공공마스크 판매처 및 공적마스크 재고 현황과 코로나19 통계 데이터를 제공하는 서비스입니다." />
        <meta name="naver-site-verification" content="35d9bc3262f8f9b45b902fb875586a9a965099dd"/>
        <meta name="google-site-verification" content="0EJP9jEvzKPlfbRC0y57xWXrAIVIWJ69yR9m1MyUXe8" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=fe3820d4a415ead65c11b74b1392d151&libraries=services"></script>
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://www.gstatic.com/charts/loader.js" type="text/javascript" ></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151381503-2"></script>
        <script dangerouslySetInnerHTML={gaCode()}></script>
      </Head>
      
      <style global jsx>{`
        body {
          overflow: hidden;
        }
        
        #map {
          width: 100%;
          height: 100vh;
        }
        
        .wrapper {
          overflow-y: scroll;
        }
        .navigation {
          width: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: rgb(0,0,0, 0.7);
          position: absolute;
          z-index: 1000;
          padding-left: 5px;
          padding-right: 5px;
        }
        
        .footer {
          position: absolute;
          width: 100%;
          padding-top: 5px;
          padding-bottom: 5px;
          bottom: 0;
          background-color: rgb(0,0,0, 0.7);
          z-index: 1000;
        }
        
        .overlay-btn {
          position: absolute;
          z-index: 1000;
          border-radius: 100%;
          width: 50px;
          height: 50px;
          display: flex;s
          align-items: center;
          text-align: center;
        }
        
        #quick_panto {
          position: absolute;
          z-index: 1000;
          border-radius: 10px;
          width: 150px;
          display: flex;
          align-items: center;
          text-align: center;
          top: 65px;
          left: 20px;
          background-repeat: no-repeat;
          background: black; 
        }
        
        .sidebar_open {
          display: flex;
          align-items: center;
          border: 1px solid #505050;
          border-radius: 5px;
          background: transparent;
        }
        
        .sidebar {
          width: 230px;
          height: 100vh;
          position: absolute;
          z-index: 9999;
          left: -300px;
          box-shadow: 0 0 25px 5px;
        }
        
        .sidebar-group {
          list-style: none;
          padding: 0;
        }
        
        .sidebar-item {
          cursor: pointer;
        }
        
        .sidebar-item:hover {
          background-color: #505050;
        }
        
        .sidebar-link {
          padding: 10px;
          font-size: 18px;
          font-weight: bold;
          color: white !important;
          display: flex;
          align-items: center;
        }

        .sidebar-link::hover {
          text-decoration: none;
          color: white !important;
        }
        
        .item-dep1,
        .item-dep2 {
        }
        
        .sidebar_close {
          display: flex;
          align-items: center;
          border: 1px solid #505050;
          border-radius: 5px;
          background: transparent;
        }
      `}</style>
    </div>
  )
}
