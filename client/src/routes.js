import Dashboard from 'views/Dashboard.jsx';
import Icons from 'views/Icons.jsx';
import Map from 'views/Map.jsx';
import Notifications from 'views/Notifications.jsx';
import Rtl from 'views/Rtl.jsx';
import TableList from 'views/TableList.jsx';
import Typography from 'views/Typography.jsx';
import UserProfile from 'views/UserProfile.jsx';

var routes = [
  {
    path: '/dashboard',
    name: '코로나바이러스-19 상황판',
    icon: 'tim-icons icon-chart-bar-32',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: '코로나 바이러스?',
    icon: 'tim-icons icon-zoom-split',
    component: Icons,
    layout: '/admin',
  },
  // {
  //   path: '/map',
  //   name: 'Map',
  //   icon: 'tim-icons icon-pin',
  //   component: Map,
  //   layout: '/admin',
  // },
  // {
  //   path: '/notifications',
  //   name: 'Notifications',
  //   icon: 'tim-icons icon-bell-55',
  //   component: Notifications,
  //   layout: '/admin',
  // },
  // {
  //   path: '/user-profile',
  //   name: 'User Profile',
  //   icon: 'tim-icons icon-single-02',
  //   component: UserProfile,
  //   layout: '/admin',
  // },
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
  // {
  //   path: '/rtl-support',
  //   name: 'RTL Support',
  //   icon: 'tim-icons icon-world',
  //   component: Rtl,
  //   layout: '/rtl',
  // },
];
export default routes;
