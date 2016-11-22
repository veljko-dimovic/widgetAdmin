import angular from 'angular';

import 'angular-ui-router';
import 'angular-translate';
import 'oclazyload';

import routesConfig from './routes';
import translateConfig from './translateConfig';

import HelperService from './app/components/core/helper.service';
import PersistenceService from './app/components/core/persistence.service';

import {MainSection} from './app/components/widgetAdminMain/main.component';
import {widgetList} from './app/components/widgetAdminList/list.component';
import {listItem} from './app/components/widgetAdminList/widgetAdminListItem/listItem.component';
import {panelSection} from './app/components/widgetAdminPanel/panel.component';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router','pascalprecht.translate','oc.lazyLoad'])
  .config(routesConfig)
  .config(translateConfig)
  .service('helperService', HelperService)
  .service('persistenceService', PersistenceService)
  .component('app', MainSection)
  .component('list', widgetList)
  .component('listItem', listItem)
  .component('panel', panelSection);
