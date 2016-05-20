networkApp.controller('mainCtrl', ['$scope','$log', function ( $scope, $log) {
	$scope.$log = $log;
	
    $scope.checkConnection = function() {
		console.log("network identify start...");
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';

        $scope.status = states[networkState];
        //alert('Connection type: ' + states[networkState]);
		console.log("state is "+states[networkState]);
    };
}]);