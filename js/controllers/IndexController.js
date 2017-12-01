/**
Author : Edric Laksa Putra
Since : November 2017
*/
mapapp.controller('IndexController', ['$scope', '$state', 'IndexServices', 'NgMap',  function($scope, $state, IndexServices, NgMap){

	var vm = this;
	NgMap.getMap().then(function (map) {
      vm.map = map;
    });

  	$scope.zoom = 7;

	IndexServices.listUsers().then(function(res){
		vm.listUsers = res.data;
		$scope.listUsers = res.data;
	});

	$scope.showCityInfo = function(event, detail){
		alert("Username : "+detail.username+"\nName : "+detail.first_name+" "+detail.last_name+"\nEmail : "+detail.email);
	}

	$scope.init = function(){
		
	}

	$scope.goto = function(lat, long){
		$scope.center = "["+lat+","+long+"]";
	}

	vm.showStore = function (e, location) {
		vm.location = location;
        vm.map.showInfoWindow('bar', this);
    };
}])