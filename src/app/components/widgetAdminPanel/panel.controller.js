export default class panelComponentController {

  constructor($q, $scope, $filter, $state, $timeout,$ocLazyLoad) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;
    this._$ocLazyLoad = $ocLazyLoad;
    this.installWidget = this.installWidgetFunc;

  }

  installWidgetFunc(){
    var vm = this;
    if(vm.widget){
      if(!vm.widget.installed){
          vm._$ocLazyLoad.load(vm.widget.url);
          vm.widget.installed = true;
      }
    }
  }

}
panelComponentController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout','$ocLazyLoad'];
