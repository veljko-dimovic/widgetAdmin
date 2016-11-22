angular.module('textWidget',[])
.directive('textWidgetComponent', function() {
  return {
    restrict: 'E',
    scope: {

    },
    templateUrl: './widgets/text-widget/text-widget.template.html',
    link: function($scope) {
      $scope.textData = [];
      for(var i=0;i<100;i++){
        var tempData = {
          'label':"Text data - "+i
        }
          $scope.textData.push(tempData);
      }
    }
  };
});
