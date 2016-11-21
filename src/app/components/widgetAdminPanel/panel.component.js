import './panel.template.html';
import './panel.scss';
import panelComponentController from './panel.controller';

export const panelSection = {
  template: require('./panel.template.html'),
  controller: panelComponentController,
  bindings: {
    widget: '=?'
  }
};
