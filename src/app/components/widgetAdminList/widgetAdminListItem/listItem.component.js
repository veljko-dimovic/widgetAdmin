import './listItem.template.html';
import './listItem.scss';
import listItemController from './listItem.controller';


export const listItem = {
  template: require('./listItem.template.html'),
  controller: listItemController,
  bindings: {
    listItem:'=',
    activeWidget:"=?"
  }
};
