import Header from './Header';
import Sidebar from './Sidebar';
import { sidebarOpen } from './Sidebar';
import Footer from './Footer';
import Modal from './Modal';
import Router from 'next/router';
import { useEffect, useState } from 'react';

export default function Frame({ children }) {
  const [ page, setPage ] = useState('마스크 탐색')

  useEffect(() => {
    setPageTitle();
    $('#wrapper').height(window.innerHeight + 'px');
  }, []);

  const setPageTitle = () => {
    if (window.location.pathname === '/corona') {
      setPage('코로나19 현황');
    } else if (window.location.pathname === '/') {
      setPage('마스크 탐색');
    }
  }

  return (
    <div>
      <Header />

      <header className="navigation d-flex justify-content-between align-items-center flex-wrap">
        <button type="button" id="sidebar_open" className="sidebar_open" onClick={sidebarOpen}>
          <i className="material-icons text-white" style={{fontSize: '30px'}}>menu</i>
        </button>
        
        <label className="font-weight-bold text-white m-0 col-8 col-sm-6 text-center" style={{fontSize: '20px'}}>
          {page}
        </label>
        
        <button type="button" className="invisible" disabled>
          <i className="material-icons">menu</i>
        </button>
      </header>

      <Sidebar />

      <div id="wrapper" className="wrapper" style={{overflowY: 'scroll'}}>
      {
        children
      }
      </div>
      
      <Footer />
      
      <Modal />
    </div>
  );
}