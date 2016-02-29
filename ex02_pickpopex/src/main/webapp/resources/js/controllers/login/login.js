/* ==============================================================================
 * 파일명 : 파일명.js
 * 화면명 : 로그인 (Contoller)
 * 작성자 : 신동주
 * 작성일 : 2016.02.25
 * ==============================================================================
 */ 

'use strict';

define([], function () {
	function _controller($scope) {
		console.log("filter contorller loaded"); //파일명과 동일하게 맞출것
		
		//CSS 로딩 설정 S
		$scope.$emit('updateCSS', ['resources/css/partials-css/login/login.css', 'resources/css/partials-css/checkout/checkout_common.css']);//로드할 css파일 경로 설정(없으면 삭제)
		//CSS 로딩 설정 E
	}
	return _controller;
});