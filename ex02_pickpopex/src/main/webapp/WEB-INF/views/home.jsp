<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!doctype html>

<html lang="ko" ng-controller="CommonController">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>PickPop</title>
	
	<!-- 고정 CSS로드 START -->
	<link href="resources/css/bootstrap/bootstrap.css" type="text/css" rel="stylesheet"/>
	<link href="resources/css/main.css" rel="stylesheet">
	<!-- 고정 CSS로드 END -->
	
	<link ng-repeat="stylesheet in stylesheets" ng-href="{{stylesheet}}" type="text/css" rel="stylesheet" /><!-- 동적 CSS로드 -->
</head>

<body>
	<div class="container-fluid">
		
		<!-- 상단 고정 영역 START -->
		<!-- 상단 고정 영역 START -->
		<div class="navbar navbar-default navbar-fixed-top topFixBg" role="navigation">
			<div class="col-xs-12 popModeBtnBg">
				<div class="tbl">
					<div class="tbl-td " style="vertical-align: middle;">
						<div class="tbl-td icon-popmodeicon xxx-large wht"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 상단 고정 영역 END -->
	
		<div ng-view class="contentsArea col-xs-12"></div><!-- 컨텐츠 -->
	
		<!-- 하단 고정 영역 START -->
		<div class="navbar navbar-default navbar-fixed-bottom row bottomNav botFixBg"
			role="navigation">
			<div class="col-xs-3 nopadding bottomNavleftBtn">
				<a href="javascript:history.back();"><img src="resources/images/fix_btm_01.jpg" alt="..."></a>
			</div>
			<div class="col-xs-2 nopadding bottomNavHomeBtn">
				<a href="#/marketplace"><img src="resources/images/fix_btm_02.jpg" alt="..."></a>
			</div>
			<div class="col-xs-2 nopadding bottomNavLikeBtn">
				<a href="#/pickbox"><img src="resources/images/fix_btm_03.jpg" alt="..."></a>
			</div>
			<div class="col-xs-2 nopadding bottomNavPickBoxBtn">
				<img src="resources/images/fix_btm_04.jpg" alt="...">
			</div>
			<div class="col-xs-3 nopadding bottomNavRightBtn">
				<a href="javascript:history.go(1);"><img src="resources/images/fix_btm_05.jpg" alt="..."></a>
			</div>
		</div>
		<!-- 하단 고정 영역 END -->
	</div>

	<script data-main="resources/js/main" src="resources/lib/require/require.js" charset="utf-8"></script>
</body>

</html>
