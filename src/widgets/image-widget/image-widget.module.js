import angular from 'angular';

import {imageWidgetS} from './image-widget.component';

const MODULE_NAME = 'imageWidget';

 angular.module(MODULE_NAME, []);

angular.module(MODULE_NAME).component('imageWidgetComponent', imageWidgetS);

export default MODULE_NAME;
