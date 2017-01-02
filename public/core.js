var taskGame = angular.module("taskGame",[]);

//On page load, we will GET /api/buttons and bind the JSON we receive from the API to $scope.buttons. 
//We will then loop over these in our view to make our task buttons.
// Similar for post and delete

function mainController($scope, $http){
	$scope.formDataTasks = {};
	$scope.formDataRewards = {};

	// TASK BUTTONS
	//when landing on the page, get all buttons and show them
	$http.get('/api/buttons')
	.success(function(data){
		//TODO
	})
	.error(function(data){
		//TO DO
	})

	$scope.createButton = function(){
		$http.post('/api/buttons', $scope.formDataTasks)
		.success(function(data){
			//TO DO
		});
		.error(function(data){
			//TO DO
		});
	};

	//delete a button
	$scope.deleteButton = function(id){
		$scope.delete('/api/buttons' + id)
		.success(function(data){
			//TO DO
		})
		.error(function(data){
			//TO DO
		});
	};


	//REWARDS
	//when landing on the page, get all rewards and show them
	$http.get('/api/rewards')
	.success(function(data){
		//TODO
	})
	.error(function(data){
		//TO DO
	});

	$scope.createReward = function(){
		$http.post('/api/rewards', $scope.formDataRewards)
		.success(function(data){
			//TO DO
		})
		.error(function(data){
			//TO DO
		});
	};

	//delete a reward
	$scope.deleteReward = function(id){
		$scope.delete('/api/rewards' + id)
		.success(function(data){
			//TO DO
		})
		.error(function(data){
			//TO DO
		});
	};

}