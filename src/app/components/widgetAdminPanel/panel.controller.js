export default class panelComponentController {

  constructor($q, $scope, $filter, $state, $timeout) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;
    this.installWidget = this.installWidgetFunc;
  }

  installWidgetFunc(){
    var vm = this;
    if(vm.widget){
      vm.widget.installed = true;
      console.log(vm.widget);
    }
  }

}
panelComponentController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout'];
