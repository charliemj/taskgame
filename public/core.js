var taskGame = angular.module("taskGame",[]);

//On page load, we will GET /tasks and /rewards and bind the JSON we receive from the API to $scope.tasks and $scope.rewards. 
//We will then loop over these in our view to make our task buttons and rewards.
// Similar for post and delete

function mainController($scope, $http){
	$scope.formDataTasks = {};
	$scope.formDataRewards = {};


	// TASK BUTTONS
	//when landing on the page, get all buttons and show them
	$http.get('/tasks')
	.success(function(data){
		$scope.tasks = data;
	})
	.error(function(data){
		console.log("Error: " + data);
	});

	// when landing on the page, get all tasks and show them

	$scope.createTask = function(){
		$http.post('/tasks', $scope.formDataTasks)
		.success(function(data){
			$scope.formDataTasks = {}; //clear form so our user can enter another
			$scope.tasks = data;
		})
		.error(function(data){
			console.log("Error: " + data);
		});
	};

	//delete a task
	$scope.deleteTask = function(id){
		$http.delete('/tasks/' + id)
		.success(function(data){
			$scope.tasks = data[0];
			$scope.points = data[1];
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};


	//REWARDS
	//when landing on the page, get all rewards and show them
	$http.get('/rewards')
	.success(function(data){
		$scope.rewards = data;
	})
	.error(function(data){
		console.log("Error: " + data);
	});

	$scope.createReward = function(){
		$http.post('/rewards', $scope.formDataRewards)
		.success(function(data){
			$scope.formDataRewards = {}; //clear form so our user can enter another
			$scope.rewards = data;
		})
		.error(function(data){
			console.log("Error: " + data);
		});
	};

	//delete a reward
	$scope.deleteReward = function(id){
		$http.delete('/rewards/' + id)
		.success(function(data){
			$scope.rewards = data[0];
			$scope.points = data[1];
		})
		.error(function(data){
			console.log("Error: " + data);
		});
	};

}