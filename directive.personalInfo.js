(function () {
	'use strict';

	window.angular.module("resume").directive('personalInfo', function () {
		function linker (scope, element, attr) {

		}

		var templateData =  '<h1>{{name}}</h1>' +
							'<div class="text-info">' +
								'{{address.street1}} {{address.street2}} &#8226; {{address.city}},' +
							'{{address.state}} &#8226; {{address.zip}}' +
							'<br>' +
								'{{ename}}@{{edomain}} &#8226; {{areaCode}} {{phoneNumber}}' +
							'</div>';

		return {
			restrict: 'AE',
			link : linker,
			template: templateData,
			scope: {
				name: '=',
				address: '=',
				email: '=',
				phoneNumber: '=',
				areaCode: '=',
				ename: '=',
				edomain: '='
			}
		};
	});
}).call();
