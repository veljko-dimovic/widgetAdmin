import angular from 'angular';

import {textWidgetS} from './text-widget.component';

const MODULE_NAME = 'textWidget';

angular.module(MODULE_NAME, []);

angular.module(MODULE_NAME).component('textWidgetComponent', textWidgetS);

export default MODULE_NAME;
