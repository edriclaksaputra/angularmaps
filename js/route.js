/**
Author : Edric Laksa Putra
Since : November 2017
*/
mapapp.config(function($stateProvider) {
	$stateProvider

	.state('/', {
		views: {
					'main@': {
						templateUrl: 'views/content.html',
						controller: "IndexController"
					}
				},
		data: {
					displayName: 'Index'
			  }
	})
});