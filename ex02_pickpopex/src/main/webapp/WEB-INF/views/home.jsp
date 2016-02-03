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
		<div class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="col-xs-12 popModeBtnBg">
				<div class="tbl">
					<div class="tbl-tr">
						<div class="tbl-td txC vaM">
							<span class="icon-popmodeicon xxx-large wht noPad"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 상단 고정 영역 END -->
	
		<div ng-view class="contentsArea col-xs-12"></div><!-- 컨텐츠 -->
	
		<!-- 하단 고정 영역 START -->
		<div class="navbar navbar-default navbar-fixed-bottom" role="navigation">
			<div class="col-xs-12 botBtnBg">
				<div class="tbl">
					<div class="tbl-tr">
						<div class="tbl-td txC vaM">
							<a href="javascript:history.back();"><span class="icon-previcon xx-large wht"></span></a>
						</div>
						<div class="tbl-td txC vaM">
							<a href="#/marketplace"><span class="icon-homeicon xx-large wht"></span></a>
						</div>
						<div class="tbl-td txC vaM">
							<a href="#/pickbox"><span class="icon-pickboxicon xx-large wht"></span></a>
						</div>
						<div class="tbl-td txC vaM">
							<a href="#/checkout" ><span class="icon-checkouticon xx-large wht"></span></a>
						</div>
						<div class="tbl-td txC vaM">
							<a href="javascript:history.go(1);"><span class="icon-nexticon xx-large wht"></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 하단 고정 영역 END -->
	</div>

	<script data-main="resources/js/main" src="resources/lib/require/require.js" charset="utf-8"></script>
</body>

</html>
