/**
Author : Edric Laksa Putra
Since : November 2017
*/
mapapp.factory('IndexServices', ['$http','$q', function($http,$q){
	return	{

		// Untuk Ngambil data users
		listUsers: function() {
			return $http.get('http://54.169.132.25:3004/users').then(function success(res){
				return res;
			}, function error(err){
				return $q.reject(err.data);
			}.bind(this));
		}
	};
}])