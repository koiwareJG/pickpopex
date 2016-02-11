'use strict';

console.log("cmn_popmode.js : loading start");

define([], function () {
	console.log("cmn_popmode.js / define() : start");
	
	//컨트롤러 선언
	function _controller($scope, $http, $routeParams) {
		console.log("cmn_popmode.js / define() / _contoller() : start");
		//CSS 설정
		$scope.$emit('updateCSS', ['resources/css/partials-css/cmn/cmn_popmode.css']);
		
		
		//최초 뿌려질 데이터 받아오기
		$http.get("http://localhost:8090/controller/jsonObj/"+":"+$routeParams.productName).then(function(response) {
		        $scope.myData = response.data;
		});
		
		
		
		$scope.clickEvent = function (){
		}
		
		console.log("cmn_popmode.js / define() / _contoller() : end");
	}
	
	console.log("cmn_popmode.js / define() : end");

	//생성한 컨트롤러 리턴
	console.log("cmn_popmode.js / define() / return _contoller()");
	return _controller;
});

console.log("cmn_popmode.js : loading end");