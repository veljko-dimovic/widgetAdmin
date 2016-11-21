export default class listItemComponentController {

  constructor($q, $scope, $filter, $state, $timeout) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;
    this.setActiveWidget = setActive;

    function setActive(){
      var lc = this;
      lc.activeWidget = lc.listItem;
      lc._$state.go('widget',{key:lc.activeWidget.key});
    }

  }

}
listItemComponentController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout'];
