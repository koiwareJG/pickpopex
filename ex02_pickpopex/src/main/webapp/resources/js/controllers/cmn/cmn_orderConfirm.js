/* ==============================================================================
 * 파일명 : 파일명.js
 * 화면명 : 메뉴명 > 상품 목록 (Contoller)
 * 작성자 : 홍길동
 * 작성일 : 2016.01.25
 * ==============================================================================
 */ 

'use strict';

define([], function () {
	function _controller($scope) {
		console.log("cmn_orderConfirm contorller loaded"); //파일명과 동일하게 맞출것
		
		//CSS 로딩 설정 S
		$scope.$emit('updateCSS', ['resources/css/partials-css/cmn/cmn_orderConfirm.css', 'resources/css/partials-css/checkout/checkout_common.css']);//로드할 css파일 경로 설정(없으면 삭제)
		//CSS 로딩 설정 E
	}
	return _controller;
});