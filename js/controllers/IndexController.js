/**
Author : Edric Laksa Putra
Since : November 2017
*/
mapapp.controller('IndexController', ['$scope', '$state', 'IndexServices', 'NgMap',  function($scope, $state, IndexServices, NgMap){

	var vm = this;
	NgMap.getMap().then(function (map) {
      vm.map = map;
    });

	IndexServices.listUsers().then(function(res){
		vm.listUsers = res.data;
		$scope.listUsers = res.data;
	});

	$scope.init = function(){
		var confirmResult = confirm("Aplication want to get your current location, it needs your permition")
		if(confirmResult == true){
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else {
		        $scope.center = "[0,0]";
		    }
			function showPosition(position) {
			    $scope.center = "["+position.coords.latitude+","+position.coords.longitude+"]";
			}
		}
		else{
  			$scope.zoom = 10;
			$scope.center = "[-6.922586, 107.6060501]";
		}
	}

	$scope.goto = function(lat, long){
		$scope.center = "["+lat+","+long+"]";
	}

	vm.showStore = function (e, location) {
		vm.location = location;
        vm.map.showInfoWindow('bar', this);
    };
}])