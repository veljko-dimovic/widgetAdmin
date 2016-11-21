import angular from 'angular';

import 'angular-ui-router';
import 'angular-translate';
//import 'oclazyload';
//import 'angularWidget';

import routesConfig from './routes';
import translateConfig from './translateConfig';

import HelperService from './app/components/core/helper.service';
import PersistenceService from './app/components/core/persistence.service';
//
import './widgets/text-widget/text-widget.module';
import './widgets/image-widget/image-widget.module';
import './widgets/map-widget/map-widget.module';

import {MainSection} from './app/components/widgetAdminMain/main.component';
import {widgetList} from './app/components/widgetAdminList/list.component';
import {listItem} from './app/components/widgetAdminList/widgetAdminListItem/listItem.component';
import {panelSection} from './app/components/widgetAdminPanel/panel.component';

import './index.scss';

export const app = 'app';
//,'textWidget','imageWidget','mapWidget','angularWidget'
angular
  .module(app, ['ui.router','pascalprecht.translate','textWidget','imageWidget','mapWidget'])
  .config(routesConfig)
  .config(translateConfig)
  // .config(function initializemanifestGenerator(widgetsProvider) {
  //     widgetsProvider.setManifestGenerator(function () {
  //       return function ('text') {
  //         return {
  //           module: 'text',
  //           html: 'widgets/text-widget/text-widget.template.html',
  //           files: [
  //             'widgets/text-widget/text-widget.component.html.js',
  //             'widgets/text-widget/text-widget.module.js',
  //             'widgets/text-widget/text-widget.controller.js',
  //             'widgets/text-widget/text-widget.scss'
  //           ]
  //         };
  //       };
  //     })
  .service('helperService', HelperService)
  .service('persistenceService', PersistenceService)
  .component('app', MainSection)
  .component('list', widgetList)
  .component('listItem', listItem)
  .component('panel', panelSection);
