webpackJsonp([3],{"./app/containers/NotFoundPage/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),u=t.n(i),s=t("./node_modules/react-intl/lib/index.es.js"),c=t("./app/containers/NotFoundPage/messages.js"),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var a=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),p=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),f(n,[{key:"render",value:function(){return l("h1",{},void 0,u.a.createElement(s.c,c.a.header))}}]),n}(u.a.PureComponent);n.default=p},"./app/containers/NotFoundPage/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");n.a=t.i(o.d)({header:{id:"app.components.NotFoundPage.header",defaultMessage:"This is NotFoundPage component!"}})}});