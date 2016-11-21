//This service is for mocking purpose.

export default class HelperService {
  constructor($http, $filter, $q, $location){
    this._$http = $http;
    this._$q = $q;
    this._$location = $location;
    this.widgetList = [];

    var widget1 = {
      'key':"text",
      'name':"text_repeater",
      'icon':"glyphicon-font",
      'url':"./widgets/text-widget/dist/text-widget.module.js",
      'installed':false
    };

    var widget2 = {
      'key':"map",
      'name':"map",
      'icon':"glyphicon-map-marker",
      'url':"./widgets/map-widget/angular-google-maps.min.js",
      'installed':false
    };

    var widget3 = {
      'key':"image",
      'name':"image",
      'icon':"glyphicon-picture",
      'url':"./widgets/image-widget/image-widget.module.js",
      'installed':false
    };

    this.widgetList.push(widget1);
    this.widgetList.push(widget2);
    this.widgetList.push(widget3);
  }

  getWidgetList(){
    var hs = this;
     return hs.widgetList;
  }
}

HelperService.$inject = ['$http', '$filter','$q', '$location'];
