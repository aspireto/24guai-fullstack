var app = angular.module('chirpApp',['ui.bootstrap', 'ngAnimate','ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			// controller: 'authController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			// controller: 'authController'
		})

		//报名
		.when('/sign', {
			templateUrl: 'sign.html',
			controller: 'formController'
		})
		.when('/intro',{
			templateUrl: 'intro.html',
			controller: 'mainController'
		})

		//
		.when('/success',{
			templateUrl: 'success.html' 
		});
});

//轮播
app.controller('CarouselDemoCtrl',function($scope){
	 $scope.myInterval = 2000;  
	$scope.noWrapSlides = false;  
	var slides = $scope.slides = [];  
	var currIndex = 0;
	$scope.addSlide = function () {  
		var newWidth = 600 + slides.length + 1;  
		slides.push({  
			image: '../img/01.jpg',  
			id: currIndex++
		});  
		slides.push({  
			image: '../img/02.jpg',
			id: currIndex++
		});  
		slides.push({  
			image: '../img/03.jpg',  
			id: currIndex++
		});  
		slides.push({  
			image: '../img/04.jpg',  
			id: currIndex++
		});  
	};  
	$scope.addSlide();  
});


app.controller('mainController',function($scope){
    $scope.posts = [
		{
			url: '#/sign',
			imageUrl: './img/01.jpg',
			title: 'asasd',
			address: '1'
		},
		{
			imageUrl: './img/02.jpg',
			title: 'asasd',
			address: '2'
		},
		{
			imageUrl: './img/03.jpg',
			title: 'asasd',
			address: '3'
		},
		{
			imageUrl: './img/04.jpg',
			title: 'asasd',
			address: '4'
		},
		{
			imageUrl: './img/05.jpg',
			title: 'asasd',
			address: '5'
		},
		
		{
			url: '#/intro',
			imageUrl: './img/06.jpg',
			title: 'asasd',
			address: '6'
		},
		{
			imageUrl: './img/07.jpg',
			title: 'asasd',
			address: '7'
		},
		{
			imageUrl: './img/08.jpg',
			title: 'asasd',
			address: '8'
		},
		{
			imageUrl: './img/09.jpg',
			title: 'asasd',
			address: '9'
		},
		{
			imageUrl: './img/010.jpg',
			title: 'asasd',
			address: '10'
		},
	];
    // $scope.newPost = {created_by:'',text:'',created_at:''};

    // $scope.post = function(){
    //     $scope.newPost.created_at = Date.now();
    //     $scope.posts.push($scope.newPost);
    //     $scope.newPost = {created_by:'',text:'',created_at:''};
    // }
});

app.controller('formController',function($scope, $http, $location){
	// $scope.submitted = false;
	$scope.submit = function(){
		
		if($scope.user.sex == undefined){
			$scope.user.msg = '请选择性别';
			return false;
		}
		

		var formData = new FormData();
		for(key in $scope.user){
			// console.log(key);
			// console.log($scope.user[key]);
			formData.append(key, $scope.user[key]);
		}
		var file = $('#files')[0].files[0];
		console.log(file);
		if(file == undefined){
			$scope.user.msg2 = '请上传照片';
			return false;
		}
		formData.append('image', file);
		$http.post('http://localhost:3000/posts',formData,{
			tranformRequest : angular.identity,
			headers:{
				'Content-Type': undefined
			}
		}).then(function successCallback(res){
			$location.path('/success');
		},function errorCallback(res){
			console.log(res);
		});
	}
})

