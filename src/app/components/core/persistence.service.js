//This service is created as comunication level with API or MOCK data

export default class PersistenceService {
  constructor($http, $q, helperService) {
    this._$http = $http;
    this._$q = $q;
    this._helperService = helperService;

  }

  getWidgetList() {
    var ps = this;
    return ps._$q(function(resolve, reject) {
      var widgets = ps._helperService.getWidgetList();
      if(widgets.length > 0){
       resolve(ps._helperService.getWidgetList());
     }
     else{
       reject("Widgets list is empty");
     }
    });
  }

}

PersistenceService.$inject = ['$http', '$q', 'helperService'];
