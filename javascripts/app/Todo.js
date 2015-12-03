var app = angular.module("TodoApp", []);

app.controller("TodoCtrl", ["$q", "$http", "$scope" function($q, $http, $scope) {
	$scope.title = "Welcome to your task list";
  $scope.macaroni = "";
  $scope.searchtext = "";
  $scope.theTodo = "";

  $scope.todos = [
    { name: "Mow the lawn", complete: "incomplete" },
    { name: "Cut the grass", complete: "done" },
    { name: "Kill the ants", complete: "incomplete" },
    { name: "Trim the weeds", complete: "done" }
  ];

  $scope.killTodo = function(todo) {
  // Do you see the PFM here of full object comparison?
  var todoIndex = $scope.todos.indexOf(todo); 
  	console.log("todo", todo);

	if (todoIndex >= 0) {
	    $scope.todos.splice(todoIndex, 1);
	  }
	};

	var getSongs = $q(function(resolve,reject) {
		$http.get('.data/songs.json')
		.success(
			function(objectFromJSONFile){
				resolve(objectFromJSONFile);
			}, function(error) {
				reject(error);
			}
		);
	});

	getSongs.then(function(songs) {
		console.log("songs", songs);
	}, function(error) {
			console.log("error");
		}
	);


}]);