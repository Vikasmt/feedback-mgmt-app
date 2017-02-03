(function(){
var app = angular.module("mainApp");
      


app.controller("loginCtrl", function($scope, $http, $state, $stateParams, apiUrl) {
  
        $scope.user={};
 
      
        $scope.bindParameters = function(){
            $scope.user = angular.isDefined($stateParams.userdata) ? $stateParams.userdata : {};
            console.log($scope.user);
            $scope.mode = angular.isDefined($stateParams.mode) ? $stateParams.mode : 'C';
            console.log($scope.mode);
        }
    
        $scope.herokuadminlogin = function(userInformation) {
                
            if(angular.isDefined(userInformation) && userInformation !== null) {
                var config = {
                    headers : {
                        'Content-Type': 'application/json'
                        }
                }
                
                var loginurl = apiUrl + 'herokuadminlogin';
                console.log(loginurl);
                
                $http.get(loginurl,userInformation,config)
                    .then(function (data, status, headers, config) {
                        $scope.user={};
                        $state.go('home');
                    })
                    .catch(function (data, status, header, config) {
                        console.log(data);
                    });
            }
        };
    });    
})();
