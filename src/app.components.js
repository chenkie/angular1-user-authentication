import angular from 'angular';

import AuthappHome from './component/authapp-home/authapp-home.component';
import AuthappLogin from './component/authapp-login/authapp-login.component';
import AuthappProfile from './component/authapp-profile/authapp-profile.component';

const moduleName = 'app.components';

angular
  .module(moduleName, [])
  .component('authappHome', AuthappHome)
  .component('authappLogin', AuthappLogin)
  .component('authappProfile', AuthappProfile);

export default moduleName;
