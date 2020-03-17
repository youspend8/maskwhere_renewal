import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <title>My page title</title>
	      <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=fe3820d4a415ead65c11b74b1392d151&libraries=services"></script>
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
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