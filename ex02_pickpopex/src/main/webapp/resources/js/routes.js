'use strict';

define([
		'app', //생성한 앵귤러 모듈에 루트를 등록하기 위해 임포트
		'route-config' //루트를 등록하는 routeConfig를 사용하기 위해 임포트
	],

	function (app, routeConfig) {
	
		//app은 생성한 myApp 앵귤러 모듈
		return app.config(function ($routeProvider) {
			
			//==========================================================================================
			//[M001]마켓플레이스(홈) 메뉴 경로 설정
			//------------------------------------------------------------------------------------------------------------------------------------------------------------------
			//marketplace 경로 설정 S
			$routeProvider.when('/marketplace', routeConfig.config('../partials/marketplace/marketplace_list.html', 'controllers/marketplace/marketplace_list', {
				directives: [],
				services: [], 
				filters: []
//				directives/services/filters 사용법
//				(directives/services/filters): ['폴더명/js파일명 확장자']
			}));
			//==========================================================================================

			
			
			//==========================================================================================
			//[M002]픽박스 메뉴 경로 설정
			//------------------------------------------------------------------------------------------------------------------------------------------------------------------
			//픽박스 메인
			$routeProvider.when('/pickbox', routeConfig.config('../partials/pickbox/pickbox_folder_list.html', 'controllers/pickbox/pickbox_folder_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//픽박스 > 아이템 > 폴더 목록
			$routeProvider.when('/pickboxFolderList', routeConfig.config('../partials/pickbox/pickbox_folder_list.html', 'controllers/pickbox/pickbox_folder_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//픽박스 > 아이템 > 아이템 목록
			$routeProvider.when('/pickboxItemList', routeConfig.config('../partials/pickbox/pickbox_item_list.html', 'controllers/pickbox/pickbox_item_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//픽박스 > 아이템 > 아이템 목록 > grid 형태로 보기(기존 list형태를 grid배열로만 바꿔서 보여주기)
			$routeProvider.when('/pickboxItemListGrid', routeConfig.config('../partials/pickbox/pickbox_item_grid.html', 'controllers/pickbox/pickbox_item_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//픽박스 > 스타일 > 나의 스타일 목록 
			$routeProvider.when('/pickboxStyleMine', routeConfig.config('../partials/pickbox/pickbox_style_mystyle.html', 'controllers/pickbox/pickbox_style_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//픽박스 > 스타일 > 관심 스타일 목록 
			$routeProvider.when('/pickboxStyleList', routeConfig.config('../partials/pickbox/pickbox_style_list.html', 'controllers/pickbox/pickbox_style_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
<<<<<<< HEAD
			
			//픽박스 > 스타일 > 관심 스타일 목록 -> 요약보기 
			$routeProvider.when('/pickboxStyleGrid', routeConfig.config('../partials/pickbox/pickbox_style_grid.html', 'controllers/pickbox/pickbox_style_list', {
				directives: [], 
				services: [], 
				filters: []
			}));

=======
>>>>>>> branch 'master' of https://github.com/koiwareJG/pickpopex.git
			
			//픽박스 > 스타일 > 관심 스타일 목록 -> 요약보기 
			$routeProvider.when('/pickboxStyleGrid', routeConfig.config('../partials/pickbox/pickbox_style_grid.html', 'controllers/pickbox/pickbox_style_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
<<<<<<< HEAD
			
/***********************************************동주 끝*******************************************************************/
			//==========================================================================================
			
			
			
			//==========================================================================================
			//[M003] 체크아웃 메뉴 경로 설정
			//------------------------------------------------------------------------------------------------------------------------------------------------------------------
			//체크아웃 > 메인
/***********************************************동주 시작*******************************************************************/			

			$routeProvider.when('/checkout_list', routeConfig.config('../partials/checkout/checkout_list.html', 'controllers/checkout/checkout_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//체크아웃 > 체크아웃 목록
			$routeProvider.when('/checkout_purchase', routeConfig.config('../partials/checkout/checkout_purchase.html', 'controllers/checkout/checkout_purchase', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//체크아웃 > 구매내역 상세
			$routeProvider.when('/checkout_purchase_detail', routeConfig.config('../partials/checkout/checkout_purchase_detail.html', 'controllers/checkout/checkout_purchase_detail', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//==========================================================================================

/***********************************************동주 끝*******************************************************************/			
			
			
			//==========================================================================================
			//[M000] 공통 메뉴 경로 설정
			//------------------------------------------------------------------------------------------------------------------------------------------------------------------
			//아이템 상세
			$routeProvider.when('/itemDetail/:productName', routeConfig.config('../partials/cmn/cmn_item_detail.html', 'controllers/cmn/cmn_item_detail', {
				directives: [], 
				services: [], 
				filters: []
			}));
			$routeProvider.when('/styleDetail/:contentName', routeConfig.config('../partials/cmn/cmn_style_detail.html', 'controllers/cmn/cmn_style_detail', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//common 경로 설정 E
			
/***********************************************동주 시작*******************************************************************/			
			$routeProvider.when('/orderConfirm', routeConfig.config('../partials/cmn/cmn_orderConfirm.html', 'controllers/cmn/cmn_orderConfirm', {
				directives: [], 
				services: [], 
				filters: []
			}));
/***********************************************동주 끝*********************************************************************/			

=======
>>>>>>> branch 'master' of https://github.com/koiwareJG/pickpopex.git
			//==========================================================================================
			
			
			
			//==========================================================================================
			//[M003] 체크아웃 메뉴 경로 설정
			//------------------------------------------------------------------------------------------------------------------------------------------------------------------
			//체크아웃 > 메인
			$routeProvider.when('/checkout', routeConfig.config('../partials/checkout/checkout_list.html', 'controllers/checkout/checkout_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//체크아웃 > 체크아웃 목록
			$routeProvider.when('/checkoutList', routeConfig.config('../partials/checkout/checkout_list.html', 'controllers/checkout/checkout_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//체크아웃 > 구매내역 목록
			$routeProvider.when('/purchaseList', routeConfig.config('../partials/checkout/purchase_list.html', 'controllers/checkout/purchase_list', {
				directives: [], 
				services: [], 
				filters: []
			}));
			//==========================================================================================

			
			
			//==========================================================================================
			//[M000] 공통 메뉴 경로 설정
			//------------------------------------------------------------------------------------------------------------------------------------------------------------------
			//아이템 상세
			$routeProvider.when('/itemDetail/:productName', routeConfig.config('../partials/cmn/cmn_item_detail.html', 'controllers/cmn/cmn_item_detail', {
				directives: [], 
				services: [], 
				filters: []
			}));
			$routeProvider.when('/styleDetail/:contentName', routeConfig.config('../partials/cmn/cmn_style_detail.html', 'controllers/cmn/cmn_style_detail', {
				directives: [], 
				services: [], 
				filters: []
			}));
			
			
			$routeProvider.when('/popmode', routeConfig.config('../partials/cmn/cmn_popmode.html', 'controllers/cmn/cmn_popmode', {
				directives: [], 
				services: [], 
				filters: []
			}));
			
			//common 경로 설정 E

			//기본 경로 설정
			$routeProvider.otherwise({redirectTo:'/marketplace'});
			//==========================================================================================
		});
});