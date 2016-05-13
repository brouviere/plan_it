mainApp.controller('HomeController',['$scope', '$http', '$filter',  function($scope,$http,$filter){
	$scope.users=[{id: 0,lastName: 'Mc Fly',firstName: 'Marty', name:'Mc Fly Marty'},{id: 1,lastName: 'Brown',firstName: 'Emmet', name:'Brown Emmet'}];
	$scope.user=[];
	$scope.trips=[{id: 0,departureCity: 'Marseille',departureDate: '2016-07-07', arrivalCity: 'London', arrivalDate: '2016-07-07', info: 'Marseille-London'},{id: 1,departureCity: 'Paris',departureDate: '2016-07-08', arrivalCity: 'Bangkok', arrivalDate: '2016-07-09', info: 'Paris-Bangkok'}];
	$scope.trip=[];
	$scope.flights=[{0:{user:{id: 0,lastName: 'Mc Fly',firstName: 'Marty'}, trip: {id: 0,departureCity: 'Marseille',departureDate: '2016-07-07', arrivalCity: 'London', arrivalDate: '2016-07-07'}},1:{user:{id: 0,lastName: 'Mc Fly',firstName: 'Marty'}, trip: {id: 1,departureCity: 'Paris',departureDate: '2016-07-08', arrivalCity: 'Bangkok', arrivalDate: '2016-07-09'}}}];
	$scope.flight=[];
	localStorage.setItem('users', JSON.stringify($scope.users));
	localStorage.setItem('trips', JSON.stringify($scope.trips));

	console.log($scope.flights[0]);

	/* Add User function */
	$scope.addUser = function () {
		var user = {
			id: $scope.users.length,
			lastName: $scope.user.lastName,
			firstName: $scope.user.firstName,
			name: $scope.user.lastName+" "+$scope.user.firstName
		};
		$scope.users.push(user);
		//console.log(user);
		//console.log($scope.users);
		$scope.user.lastName = '';// RAZ des champs
		$scope.user.firstName = '';// RAZ des champs
		localStorage.setItem('users', JSON.stringify($scope.users));
	}

	/* Edit/Delete User functions */

	$scope.editThisUser = function(id,lastName,firstName) {
		$scope.editedUserId = id;
		$scope.editedUserLastName = lastName;
		$scope.editedUserFirstName = firstName;
	}

	$scope.editUser = function(id,lastName,firstName) {
		$scope.users[id].lastName = lastName;
		$scope.users[id].firstName = firstName;
		$scope.users[id].name = lastName+" "+firstName;
	}

	$scope.deleteThisUser = function(id,lastName,firstName) {
		$scope.deletedUserId = id;
		$scope.deletedUserName = lastName + " " +firstName;
	}

	$scope.delUser = function (index) {
		//console.log($scope.users);
		$scope.users.splice(index,1);

		//console.log($scope.users);
		// localStorage.clear();
		localStorage.setItem('users', JSON.stringify($scope.users));
	}

	/* jsonToLocalStorage Users */
	$scope.jsonUsers = function() {
		$scope.savedUsers = localStorage.getItem('users');
		$scope.users = (localStorage.getItem('users')!==null) ? JSON.parse($scope.savedUsers) : [{id: 1,lastName: 'Mc Fly',firstName: 'Marty'},{id: 2,lastName: 'Brown',firstName: 'Emmet'}];
		localStorage.setItem('users', JSON.stringify($scope.users));

		// $scope.addTodo = function() {
		// 	$scope.todos.push({
		// 		text: $scope.todoText,[{id: 1,lastName: 'Mc Fly',firstName: 'Marty'},{id: 2,lastName: 'Brown',firstName: 'Emmet'}];
		// 		done: false
		// 	});
		// 	$scope.todoText = ''; // RAZ des champs
		// 	localStorage.setItem('todos', JSON.stringify($scope.todos));
		//  };

		// $scope.remaining = function() {
		// 	var count = 0;
		// 	angular.forEach($scope.todos, function(todo){
		// 		count+= todo.done ? 0 : 1;
		// 	});
		// 	return count;
		// };

		// $scope.archive = function() {
		// 	var oldTodos = $scope.todos;
		// 	$scope.todos = [];
		// 	angular.forEach(oldTodos, function(todo){
		// 		if (!todo.done)
		// 			$scope.todos.push(todo);
		// 	});
		// 	localStorage.setItem('todos', JSON.stringify($scope.todos));
		// };
	}

	// $scope.jsonTrips = function() {
	// 	$scope.savedTrips = localStorage.getItem('trips');
	// 	$scope.trips = (localStorage.getItem('trips')!==null) ? JSON.parse($scope.savedTrips) : []
	// }


	/* Add Trip function */
	$scope.addTrip = function(){
		var trip = {
			id: $scope.trips.length,
			departureCity: $scope.trip.departureCity,
			departureDate: $scope.trip.departureDate,
			arrivalCity: $scope.trip.arrivalCity,
			arrivalDate: $scope.trip.arrivalDate,
			info: $scope.trip.departureCity+"-"+$scope.trip.arrivalCity
		}
		$scope.trips.push(trip);
		//console.log(trip);
		localStorage.setItem('trips', JSON.stringify($scope.trips));
	}

	// /* Delete Trip function */

	// $scope.delTrip = function (index) {
	// 	var result = confirm("Delete this trip ?");
	// 	if (result) {
	// 	$scope.trips.splice(index,1);
	// 	}
	// }

	/* Edit/Delete Trip functions */

	$scope.editThisTrip = function(id,departureCity,departureDate,arrivalCity,arrivalDate) {
		$scope.editedTripId = id;
		$scope.editedDepartureCity = departureCity;
		$scope.editedDepartureDate = departureDate;
		$scope.editedArrivalCity = arrivalCity;
		$scope.editedArrivalDate = arrivalDate;
	}

	$scope.editTrip = function(id,departureCity,departureDate,arrivalCity,arrivalDate) {
		// var newDepartureCity = departureCity;
		//console.log(newDepartureCity);
		$scope.trips[id].departureCity = departureCity;
		$scope.trips[id].departureDate = departureDate;
		$scope.trips[id].arrivalCity = arrivalCity;
		$scope.trips[id].arrivalDate = arrivalDate;
		$scope.trips[id].info = departureCity+"-"+arrivalCity;
	}

	$scope.deleteThisTrip = function(id,departureCity,departureDate,arrivalCity,arrivalDate) {
		// alert(id,departureCity,departureDate,arrivalCity,arrivalDate);
		$scope.deletedTripId = id;
		$scope.deletedTripCities = [departureCity,arrivalCity];
		$scope.deletedTripDates = [departureDate,arrivalDate];
	}

	$scope.delTrip = function (index) {
		//console.log($scope.users);
		$scope.trips.splice(index,1);

		//console.log($scope.trips);
		// localStorage.removeItem();
		localStorage.setItem('trips', JSON.stringify($scope.trips));
	}



	/* Add Flight function */
	// $scope.addFlight = function(idUser,lastName,firstName,idTrip,departureCity,departureDate,arrivalCity,arrivalDate){
	$scope.addFlight = function(trip,user){
		console.log(trip);
		
		console.log(user);
		

		// var user : {idUser,lastName,firstName};
		// var trip : {idTrip,departureCity,departureDate,arrivalCity,arrivalDate};
		// var flight = {
		// 	id: $scope.flight.length,
		// 	user: user,
		// 	trip: trip
		// };
		// $scope.flights.push(flight);
		// console.log(flight);
	}


	/* Edit/Delete Flight functions */

	$scope.editThisFlight = function(id,tripId,userId) {
		$scope.editedFlightId = id;
		$scope.editedTripId = tripId;
		$scope.editedUser = userId;
	}

	$scope.editFlight = function(id,tripId,userId) {
		//var newDepartureCity = departureCity;
		//console.log(newDepartureCity);
		$scope.flights[id].trip.id = tripId;
		$scope.flights[id].user.id = userId;
	}

	$scope.deleteThisFlight = function(id,tripId,userId) {
		// alert(id,departureCity,departureDate,arrivalCity,arrivalDate);
		$scope.deletedFlightId = id;
		$scope.deletedTrip = tripId
		$scope.deletedUser = userId;
		// $scope.deletedUserId = [departureDate,arrivalDate];
	}

	$scope.delFlight = function (index) {
		//console.log($scope.users);
		$scope.flights.splice(index,1);

		//console.log($scope.trips);
		// localStorage.clear();
		localStorage.setItem('flights', JSON.stringify($scope.flights));
	}
/* @TODO */
	/* Add Flight function */
	// $scope.addFlight = function(){
	// 	var flight = {
	// 		id: $scope.flights.length +1,
	// 		idUser: $scope.users[].id,
	// 		idTrip: $scope.trips[].id
	// 	};
	// 	$scope.flights.push(flight);
	// 	console.log(flight);
	// }

	// /* Delete Trip function */

	// $scope.delFlight = function (index) {
	// 	var result = confirm("Delete this flight ?");
	// 	if (result) {
	// 	$scope.flights.splice(index,1);
	// 	}
	// }	

}]);