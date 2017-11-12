/**
Author : Edric Laksa Putra
Since : November 2017
*/
mapapp.controller('IndexController', ['$scope', '$state', 'IndexServices', function($scope, $state, IndexServices){

	$scope.zoom = 7;
	$scope.center = "[35.6603089, 137.0242535]";

	IndexServices.listUsers().then(function(res){
		$scope.listUsers = res.data;
	});

	$scope.showCityInfo = function(event, detail){
		alert("Username : "+detail.username+"\nName : "+detail.first_name+" "+detail.last_name+"\nEmail : "+detail.email);
	}

}])