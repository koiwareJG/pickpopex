/* ==============================================================================
 * 파일명 : 파일명.js
 * 화면명 : 메뉴명 > 상품 목록 (Contoller)
 * 작성자 : 홍길동
 * 작성일 : 2016.01.25
 * ==============================================================================
 */ 

'use strict';

define([], function () {
	function _controller($scope, $http) {
		console.log("sample_list contorller loaded"); //파일명과 동일하게 맞출것
		
		//CSS 로딩 설정 S
		$scope.$emit('updateCSS', ['resources/css/partials-css/sample/sample.css']);//로드할 css파일 경로 설정(없으면 삭제)
		//CSS 로딩 설정 E
		
		//데이터 세팅 S (받아올 데이터 없으면 삭제)
		$http.get("http://localhost:8090/controller/sample/sendList").then(function(response) {
		        $scope.myData = response.data.records;
		        alert()
		});
		//데이터 세팅 E
		
		//화면 별 기능 구현 S

		
		//화면 별 기능 구현 E
	}
	return _controller;
});