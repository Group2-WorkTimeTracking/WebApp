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
        controller: ''
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

        .state('dashboard.logs', {
            url: '/logs',
            templateUrl: 'components/dashboard/dashboard-logs.html',
            controller: 'logsCtrl'
        });

    $urlRouterProvider.otherwise('/home');
});
myApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}
]);
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
/*function accountCtrl($scope) {
    $scope.account = {
        "realName": "J. Random User",
        "login": "jrandom",
        "role": "manager",
        "key": "b613679a0814d9ec772f95d778c35fc5ff1697c493715653c6c712144292c5ad"
    };
}*/
myApp.controller('employeesCtrl', ['$scope',  employeesCtrl]);

//AngularJS controller method
function employeesCtrl($scope) {
    $scope.isselect = false;
    $scope.showDetail = function (p) {
        $scope.selectedPerson = p;
        $scope.isselect = true;
    }
    //Select all the data's
    $scope.employees = [
        {"realName": "Sang",
            "login": "jrandom",
            "role": "employer",
            "month": "2016-11",
            "totalWorkingHours": 42.1,
            "dailyWork": [
                {
                    "day": "2016-12-01",
                    "workingHours": 7.9,
                    "note": ""
                },
                {
                    "day": "2016-12-02",
                    "workingHours": 8.3,
                    "note": ""
                },
                {
                    "day": "2016-12-05",
                    "workingHours": 0.0,
                    "note": "I have a meeting in Helsinki."
                }
            ]},
        {"realName": "Benjamin",
            "login": "jrandom",
            "role": "employer",

            "month": "2016-12",
            "totalWorkingHours": 14.1,
            "dailyWork": [
                {
                    "day": "2016-12-01",
                    "workingHours": 7.9,
                    "note": ""
                },
                {
                    "day": "2016-12-02",
                    "workingHours": 8.3,
                    "note": ""
                },
                {
                    "day": "2016-12-05",
                    "workingHours": 0.0,
                    "note": "I have a meeting in Helsinki."
                }
            ]
        },
        {"realName": "Kushal",
            "login": "jrandom",
            "role": "employer",

            "month": "2016-12",
            "totalWorkingHours": 100.1,
            "dailyWork": [
                {
                    "day": "2016-12-01",
                    "workingHours": 7.9,
                    "note": ""
                },
                {
                    "day": "2016-12-02",
                    "workingHours": 8.3,
                    "note": ""
                },
                {
                    "day": "2016-12-05",
                    "workingHours": 0.0,
                    "note": "I have a meeting in Helsinki."
                }
            ]},
        {"realName": "Roman",
            "login": "jrandom",
            "role": "employer",

            "month": "2016-12",
            "totalWorkingHours": 123.1,
            "dailyWork": [
                {
                    "day": "2016-12-01",
                    "workingHours": 7.9,
                    "note": ""
                },
                {
                    "day": "2016-12-02",
                    "workingHours": 8.3,
                    "note": ""
                },
                {
                    "day": "2016-12-05",
                    "workingHours": 0.0,
                    "note": "I tired."
                }
            ]

        },
        {"realName": "Sofia",
            "login": "jrandom",
            "role": "employer",

            "month": "2016-12",
            "totalWorkingHours": 142.1,
            "dailyWork": [
                {
                    "day": "2016-12-01",
                    "workingHours": 7.9,
                    "note": ""
                },
                {
                    "day": "2016-12-02",
                    "workingHours": 8.3,
                    "note": ""
                },
                {
                    "day": "2016-12-05",
                    "workingHours": 0.0,
                    "note": "i have a day off."
                }
            ]
        }
    ]

}
/*
myApp.controller('EmployeeController', ['$scope',  EmployeeController]);

function EmployeeController($scope, $http) {
    //Select all the data's
    $http.get('https://worktime-tracking.herokuapp.com//employee').success(function (response ) {
        $scope.Empoyees = response.data;
    })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
        });
}
*/

/*angular.module('myApp.dashboard', ['ui.router']).config(function ($stateProvider) {np
    $stateProvider.
    state('dashboard.account', {
        url: '/account',
        templateUrl: '',
        controller: ''
    }).
    state('dashboard.employee', {
        url: '/employee',
        templateUrl: '',
        controller: ''
    }).
    state('dashboard.location', {
        url: '/location',
        templateUrl: '',
        controller: ''
    })

})
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
 $http.get('/api/employee/'+ Employee.realName).success(function (data) {
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

