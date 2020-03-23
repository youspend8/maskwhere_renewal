import Router from 'next/router';

export default function Sidebar() {
  return (
    <nav className="sidebar bg-dark" id="sidebar">
      <div className="text-right d-flex justify-content-end align-items-center px-2" style={{border: '1px solid #464646', height: '54.8611px'}}>
        <button type="button" id="sidebar_close" className="sidebar_close" onClick={sidebarClose}>
          <i className="material-icons text-white" style={{fontSize: '30px'}}>arrow_back</i>
        </button>
      </div>
      <ul className="sidebar-group">
        <li className="sidebar-item item-dep1">
          <a className="sidebar-link" onClick={() => Router.push('/')}>
            <i className="material-icons pr-3">search</i>
            마스크 탐색
          </a>
        </li>
        <li className="sidebar-item item-dep2">
          <a className="sidebar-link" onClick={() => Router.push('/corona')}>
            <i className="material-icons pr-3">bar_chart</i>
            코로나19 현황
          </a>
        </li>
      </ul>
    </nav>
  );
}

const sidebarClose = function() {
  $('#sidebar').animate({
    left: '-300px'
  }, 300);
}

const sidebarOpen = function() {
  $('#sidebar').animate({
    left: '0px'
  }, 300);
}

export {
  sidebarClose,
  sidebarOpen
}