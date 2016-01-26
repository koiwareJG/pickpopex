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
	function _controller($scope, tester) {
		console.log("sample_controller loaded"); //파일명과 동일하게 맞출것
		//CSS 설정
		$scope.$emit('updateCSS', ['resources/css/partials-css/marketplace/marketplace_list.css']);
		
		//최초 뿌려질 데이터 받아오기
		$http.get("http://localhost:8090/controller/sample/sendList").then(function(response) {
		        $scope.myData = response.data.records;
		});
		
		//화면 별 기능 구현 S

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
		
		//화면 별 기능 구현 E
	}
	return _controller;
});