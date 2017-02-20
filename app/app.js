'use strict';

var myApp = angular.module('myApp',['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
        url: '/home',
        templateUrl: 'components/home/home.html',
        controller: ''
    })

        .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'components/dashboard/dashboard.html',
        controller: 'accountCtrl'
    })
        .state('dashboard.account', {
            url: '/account',
            templateUrl: 'components/dashboard/dashboard-account.html',
            controller: 'accountCtrl'
        })
        .state('dashboard.employees', {
            url: '/employees',
            templateUrl: 'components/dashboard/dashboard-employees.html',
            controller: 'employeesCtrl'
        })
        .state('dashboard.location', {
            url: '/location',
            templateUrl: 'components/dashboard/dashboard-location.html',
            controller: 'locationCtrl'
        })

        .state('dashboard.logs', {
            url: '/logs',
            templateUrl: 'components/dashboard/dashboard-logs.html',
            controller: 'logsCtrl'
        });

    $urlRouterProvider.otherwise('/home');
});

myApp.controller('accountCtrl', ['$scope', '$http', accountCtrl]);

//AngularJS controller method
function accountCtrl($scope, $http) {
    //Select all the data's
    $http.get('https://worktime-tracking.herokuapp.com/account').success(function (response) {
        $scope.account = response;
    })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
        })
    }

myApp.controller('employeesCtrl', ['$scope','$http',  employeesCtrl]);
function employeesCtrl($scope, $http) {
    $http.get('https://worktime-tracking.herokuapp.com/employee').success(function (response) {
        $scope.employees = response;
    });
    $scope.isselect = false;
    $scope.showDetail = function (p) {
        $scope.selectedPerson = p;
        $scope.isselect = true;
    };
}
myApp.controller('locationCtrl', ['$scope','$http',  locationCtrl]);
function locationCtrl($scope, $http) {
    $http.get('https://worktime-tracking.herokuapp.com/location').success(function (response) {
        $scope.locations = response;
    });

}
myApp.controller('logsCtrl', ['$scope','$http',  logsCtrl]);
function logsCtrl($scope, $http) {
    $http.get('https://worktime-tracking.herokuapp.com/employee').success(function (response) {
        $scope.employees = response;
    });
    $scope.isselect = false;
    $scope.showDetail = function (p) {
        $http.get('https://worktime-tracking.herokuapp.com/employee/'+p.userId+'/logs').success(function (data) {
            $scope.selectedPerson = p;
            $scope.selectedPerson = angular.extend(data,p);
            $scope.isselect = true;
        });

    }
}


/*
 var app = angular.module('myApp.dashboard', []);

 //AngularJS controller
 app.controller('EmployeeController', ['$scope', '$http', EmployeeController]);

 //AngularJS controller method
 function EmployeeController($scope, $http) {
 //Select all the data's
 $http.get('api/employee').success(function (data) {
 $scope.Empoyees = data;
 })
 .error(function () {
 $scope.error = "An Error has occured while loading posts!";
 });


 //Select single data
 $scope.getSingleData = function (Employee) {
     $http.get('/api/employee/' + Employee.realName).success(function (data) {
         $scope.Employee = data;
     })
         .error(function () {
             $scope.error = "An Error has occured while loading posts!";
         });
 }


 //Inser operation
 $scope.add = function (Employee) {
 $http.post('/api/employee', Employee).success(function (data) {
 alert("Added successfully!!");
 $scope.Employees.push(data);
 ClearFields();
 }).error(function (data) {
 $scope.error = "An error has occured while adding! " + data;
 });
 };


 //Edit/Update operation
 $scope.save = function (Employee) {
 $http.put('/api/employee/' + Employee.EmployeeID, Employee).success(function (data) {
 alert("Updated successfully!!");
 $http.get('/api/employee').success(function (data) {
 $scope.Employees = data;
 ClearFields();
 })
 }).error(function (data) {
 $scope.error = "An Error has occured while updating! " + data;
 });
 };


 //Delete operation
 $scope.deletecustomer = function (Employee) {
 $http.delete('/api/student/' + Employee.EmployeeID).success(function (data) {
 alert("Deleted successfully!!");
 $http.get('/api/student').success(function (data) {
 $scope.Employees = data;
 })
 }).error(function (data) {
 $scope.error = "An error has occured while deleting! " + data;
 });
 };


 //Cler inputs
 function ClearFields() {
 $scope.Employee.realName = "";
 $scope.Employee.login = "";
 $scope.Employee.role = "";
 $scope.Employee.key = "";
 }
 }
*/

