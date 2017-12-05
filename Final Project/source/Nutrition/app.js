

var app = angular.module('demoMongo',[]);
app.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
app.controller('MongoRestController',function($scope,$http,$window){
    console.log("Before function");
    $scope.insertData = function(fname, lname, email, password, cpassword){
        console.log("Inside Function");
        localStorage.setItem("Email",email);
        var con = $http({
            method: 'POST',
            url: 'https://api.mongolab.com/api/1/databases/smartwait/collections//users?apiKey=426cFbWe_1CSIZe6fKUMQv6cXuuHlYY4',
            data: JSON.stringify({
                Firstname: fname,
                Lastname: lname,
                Email: email,
                Password:password,
                Confirm: cpassword,
                Caloriesburned:0,
                Caloriesconsumed:0

            }),
            contentType: "application/json"
        })
        con.success(function(data) {
            console.log("success");
        })
    };

    $scope.delete=function () {


        var req = $http.post('http://127.0.0.1:8081/delete');
        req.success(function(data, status, headers, config) {
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    }
    $scope.update=function () {
        var req = $http.post('http://127.0.0.1:8081/update',$scope.id1);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    }
    $scope.disp=function () {

        var req = $http.post('http://127.0.0.1:8081/get-data');
        req.success(function(data, status, headers, config) {

            var col = [];
            for (var i = 0; i < data.length; i++) {
                for (var key in data[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            var table = document.createElement("table");
            table.border="2";
            var tr = table.insertRow(-1);
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            for (var i = 0; i < data.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = data[i][col[j]];
                }
            }
            var divContainer = document.getElementById("container");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    }

});
