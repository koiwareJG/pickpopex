/* ==============================================================================
 * 파일명 : 파일명.js
 * 화면명 : 메뉴명 > 상품 목록 (Contoller)
 * 작성자 : 홍길동
 * 작성일 : 2016.01.25
 * ==============================================================================
 */ 

'use strict';

define([], function () {
	//컨트롤러 선언
	function _controller($scope, $http, $routeParams) {
		console.log("sample_controller2 loaded");
		//CSS 설정
		$scope.$emit('updateCSS', ['resources/css/partials-css/cmn/cmn_item_detail.css']);
		
//		alert($routeParams.productName);
		
		//최초 뿌려질 데이터 받아오기(path에 파라미터 전달)
		$http.get("http://localhost:8090/controller/jsonObj/"+":"+$routeParams.productName).then(function(response) {
		        $scope.myData = response.data;
		});
		
		//화면 별 기능 구현 S
		
		//화면 별 기능 구현 E
		
	}
		
	return _controller;
});