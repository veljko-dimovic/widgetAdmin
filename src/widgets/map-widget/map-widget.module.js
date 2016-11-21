import angular from 'angular';

import {mapWidgetS} from './map-widget.component';

const MODULE_NAME = 'mapWidget';

 angular.module(MODULE_NAME, []);

angular.module(MODULE_NAME).component('mapWidgetComponent', mapWidgetS);

export default MODULE_NAME;
