import './list.template.html';
import './list.scss';
import listController from './list.controller';


export const widgetList = {
  template: require('./list.template.html'),
  controller: listController,
  bindings: {
    activeWidget:'=?'
  }
};
