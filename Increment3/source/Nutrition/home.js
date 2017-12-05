/**
 * Created by TejaswiniPulivarthi on 4/28/2017.
 */


var app=angular.module('Food', []);
app.controller('FoodCalorie', function ($scope,$http) {
    $scope.getNutrition = function () {

        $http.get('https://api.nutritionix.com/v1_1/search/' + $scope.search + '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
            console.log(data);
            $scope.item_id=data.hits[0]._id;
            $http.get('https://api.nutritionix.com/v1_1/item?id='+ $scope.item_id+'&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
                console.log(data);
                $scope.calories=data.nf_calories;
                $scope.nf_calories_from_fat=data.nf_calories_from_fat;
                $scope.nf_total_fat=data.nf_total_fat;
                $scope.total_carbohydrate=data.nf_total_carbohydrate;
                $scope.protein=data.nf_protein;

            });
        });
    };
    $scope.getNutrition1 = function () {

        $http.get('https://api.nutritionix.com/v1_1/search/' + $scope.search1 + '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
            console.log(data);
            $scope.item_id1=data.hits[0]._id;
            $http.get('https://api.nutritionix.com/v1_1/item?id='+ $scope.item_id1+'&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
                console.log(data);
                $scope.calories1=data.nf_calories;
                $scope.calories_from_fat1=data.nf_calories_from_fat;
                $scope.total_fat1=data.nf_total_fat;
                $scope.total_carbohydrate1=data.nf_total_carbohydrate;
                $scope.protein1=data.nf_protein;
            });
        });
    };
    $scope.getNutrition2 = function () {

        $http.get('https://api.nutritionix.com/v1_1/search/' + $scope.search2 + '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
            console.log(data);
            $scope.item_id2=data.hits[0]._id;
            $http.get('https://api.nutritionix.com/v1_1/item?id='+ $scope.item_id2+'&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
                console.log(data);
                $scope.calories2=data.nf_calories;
                $scope.calories_from_fat2=data.nf_calories_from_fat;
                $scope.total_fat2=data.nf_total_fat;
                $scope.total_carbohydrate2=data.nf_total_carbohydrate;
                $scope.protein2=data.nf_protein;
            });
        });
    };

    $scope.getNutrition3 = function () {

        $http.get('https://api.nutritionix.com/v1_1/search/' + $scope.search3 + '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
            console.log(data);
            $scope.item_id3=data.hits[0]._id;
            $http.get('https://api.nutritionix.com/v1_1/item?id='+ $scope.item_id3+'&appId=fd1db59d&appKey=bd775c68f0605d50cbdfc1aba80c79a9').success(function (data) {
                console.log(data);
                $scope.calories3=data.nf_calories;
                $scope.calories_from_fat3=data.nf_calories_from_fat;
                $scope.total_fat3=data.nf_total_fat;
                $scope.total_carbohydrate3=data.nf_total_carbohydrate;
                $scope.protein3=data.nf_protein;
            });
        });
    };
    $scope.OpenPopupCenter=function(pageURL, title, w, h) {
        alert("hi");
        var left = (screen.width - w) / 2;
        var top = (screen.height - h) / 4;  // for 25% - devide by 4  |  for 33% - devide by 3
        var targetWin = window.open('popup.html', title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    };
    $scope.getRecepies=function(){
        $http.get('https://api.edamam.com/search?q='+$scope.recepie+'&app_id=2ae886f0&app_key=947e59ea864049a4039e6588ee7afb9e&from=0&to=5').success(function (data) {
            console.log(data);

            for(var i=0;i<4;i++) {
                $scope.label = data.hits[i].recipe.label;
                $scope.label1 = data.hits[i].recipe.ingredientLines;
                $scope.label2 = data.hits[i].recipe.calories;
                $scope.label3 = data.hits[i].recipe.image;
            }
        });


    };
    $scope.getRecepies=function(){
        $http.get('https://api.edamam.com/search?q='+$scope.recepie+'&app_id=2ae886f0&app_key=947e59ea864049a4039e6588ee7afb9e&from=0&to=5').success(function (data) {
            console.log(data);
            $scope.label=new Array();
            $scope.label1=new Array();
            $scope.label2=new Array();
            $scope.label3=new Array();
            $scope.label4=new Array();
            for(var i=0;i<4;i++) {
                $scope.label[i] = data.hits[i].recipe.label;
                $scope.label1[i] = data.hits[i].recipe.ingredientLines;
                $scope.label2[i] = data.hits[i].recipe.calories;
                $scope.label3[i] = data.hits[i].recipe.image;
                $scope.label4[i] = data.hits[i].recipe.url;

            }

            document.getElementById("l1").style.display = 'block';
            document.getElementById("l2").style.display = 'block';
            document.getElementById("l3").style.display = 'block';
            document.getElementById("l4").style.display = 'block';
            document.getElementById("l5").style.display = 'block';
            document.getElementById("l6").style.display = 'block';
            document.getElementById("l7").style.display = 'block';
            document.getElementById("l8").style.display = 'block';
            document.getElementById("l9").style.display = 'block';
            document.getElementById("l10").style.display = 'block';
            document.getElementById("l11").style.display = 'block';
            document.getElementById("l12").style.display = 'block';



        });


    };

    $scope.workout = function () {
        var a2 = document.getElementById("m1").value;
        a3 = parseInt((document.getElementById("m2").value)*12);
        a4=parseInt(document.getElementById("m3").value);
        a5=parseInt(a3+a4);
        a6=parseInt(document.getElementById("m4").value);
        if(document.getElementById("r3").checked) {
            var a7 = document.getElementById("r3").value;
        }if(document.getElementById("r4").checked){
            var a7 = document.getElementById("r4").value;
        }
        var a8=document.getElementById("r5").value;
        var a9=document.getElementById("m5").value;
        var a10=parseInt((document.getElementById("m6").value)*3600);
        var a11=parseInt((document.getElementById("m7").value))*60;
        var a12=parseInt(document.getElementById("m8").value);
        var a13=a10+a11+a12;
        var url = "http://www.mapmyfitness.com/workout/calculate/calories/?measurement_units=english&weight="+a2+"&height="+a5+"&age="+a6+"&sex="+a7+"&activity_type="+a8+"&distance="+a9+"&duration="+a13;
        $http({method: 'Get', url})
            .success(function (data) {
                console.log(data);
                $scope.a14= data.output.value;


            })
        var type = document.getElementById("r5").value;
        if( type ==16)
        {
            var src1 ="http://hasnaa.roro44.com/uploads/2013/01/62.gif";
        }
        else if(type==9)
        {
            var src1="http://www.oldbridgeadmin.org/webpages/ddimino/imageGallery/walking.gif";
        }
        else if(type == 11)
        {
            var src1="http://www.picgifs.com/graphics/c/cycling/graphics-cycling-635367.gif";
        }
        else{
            var src1="http://www.animaatjes.de/bilder/f/fitness/3.gif" ;
        }

        document.getElementById("img1").src =src1;
        document.getElementById("img1").style.display = 'block'
    };

});

