export default class listComponentController {
  constructor($q, $scope, $filter, $state, $timeout,persistenceService) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;
    this._persistenceService = persistenceService;
    this.widgetList=[];
  }

  $onInit() {
    var lc = this;
    lc._persistenceService.getWidgetList().then(function (resp) {

      if(resp.length>0){
        lc.widgetList = resp;
      }
    });
  }
}
listComponentController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout','persistenceService'];
