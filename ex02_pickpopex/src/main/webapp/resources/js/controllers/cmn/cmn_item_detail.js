/* ==============================================================================
 * 파일명 : cmn_item_detail.js
 * 화면명 : 공통화면 > 아이템 상세 (Contoller)
 * 작성자 : 김종길
 * 작성일 : 2016.01.25
 * ==============================================================================
 */ 

'use strict';

console.log("cmn_item_detail.js : loading start");

define([], function () {
	console.log("cmn_item_detail.js / define() : start");
	
	//컨트롤러 선언
	function _controller($scope, $http, $routeParams) {
		console.log("cmn_item_detail.js / define() / _contoller() : start");
		//CSS 설정
		$scope.$emit('updateCSS', ['resources/css/partials-css/marketplace/marketplace_list.css', 'resources/css/partials-css/cmn/cmn_item_detail.css']);
		
//		alert($routeParams.productName);
		
		//최초 뿌려질 데이터 받아오기
		$http.get("http://localhost:8090/controller/jsonObj/"+":"+$routeParams.productName).then(function(response) {
		        $scope.myData = response.data;
		});
		
		$scope.modalPopup = function(){
			$("#myModal").modal()
		}		
		console.log("cmn_item_detail.js / define() / _contoller() : end");
	}
	
	console.log("cmn_item_detail.js / define() : end");

	//생성한 컨트롤러 리턴
	console.log("cmn_item_detail.js / define() / return _contoller()");
	return _controller;
});

console.log("cmn_item_detail.js : loading end");