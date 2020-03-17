import DomesticStatus from 'views/DomesticStatus.jsx';
import Information from 'views/Information.jsx';
import GlobalStatus from 'views/GlobalStatus.jsx';
import Map from 'views/Map.jsx';
import News from 'views/News.jsx';
// import Rtl from 'views/Rtl.jsx';
// import TableList from 'views/TableList.jsx';
// import UserProfile from 'views/UserProfile.jsx';

var routes = [
  {
    path: '/domesticStatus',
    name: '대한민국 발생 현황',
    icon: 'tim-icons icon-molecule-40',
    component: DomesticStatus,
    layout: '/admin',
  },
  {
    path: '/globalStatus',
    name: '전 세계 발생 현황 ',
    icon: 'tim-icons icon-world',
    component: GlobalStatus,
    layout: '/admin',
  },
  {
    path: '/information',
    name: '코로나 바이러스?',
    icon: 'tim-icons icon-zoom-split',
    component: Information,
    layout: '/admin',
  },
  {
    path: '/news',
    name: '실시간 뉴스',
    icon: 'tim-icons icon-tv-2',
    component: News,
    layout: '/admin',
  },
  {
    path: '/map',
    name: '지도로 알아보기',
    icon: 'tim-icons icon-map-big',
    component: Map,
    layout: '/admin',
  },
  // {
  //   path: '/tables',
  //   name: 'Table List',
  //   icon: 'tim-icons icon-puzzle-10',
  //   component: TableList,
  //   layout: '/admin',
  // },
  // {
  //   path: '/typography',
  //   name: 'Typography',
  //   icon: 'tim-icons icon-align-center',
  //   component: Typography,
  //   layout: '/admin',
  // },
];
export default routes;
