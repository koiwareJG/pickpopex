/* ==============================================================================
 * 파일명 : marketplace_list.js
 * 화면명 : 마켓플레이스 > 목록 (Contoller)
 * 작성자 : 김종길
 * 작성일 : 2016.01.25
 * ==============================================================================
 */ 

'use strict';

console.log("marketpalce.js : loading start");

define([], function () {
	console.log("marketpalce.js / define() : start");
	
	//컨트롤러 선언
	function _controller($scope, $http) {
		console.log("marketpalce.js / define() / _contoller() : start");
		//CSS 설정
		$scope.$emit('updateCSS', ['resources/css/partials-css/marketplace/marketplace_list.css']);
		
		//최초 뿌려질 데이터 받아오기
		$http.get("http://localhost:8090/controller/sample/sendList").then(function(response) {
		        $scope.myData = response.data.records;
		});
		
		//클래스 변경
		$scope.active = true;
		$scope.click = function(){
			if($scope.active == true){
				console.log($scope.active);
				$scope.active = false;
			}else{
				console.log($scope.active);
				$scope.active = true;
			}
		}
		
		console.log("marketpalce.js / define() / _contoller() : end");
	}
	
	console.log("marketpalce.js / define() : end");

	//생성한 컨트롤러 리턴
	console.log("marketpalce.js / define() / return _contoller()");
	return _controller;
});

console.log("marketpalce.js : loading end");