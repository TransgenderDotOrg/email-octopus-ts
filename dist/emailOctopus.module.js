import t from"axios";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t,e,r){return s=i()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&o(i,r.prototype),i},s.apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,n(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)},a(t)}var u=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"Your API key is invalid.")||this).code="API_KEY_INVALID",r.message="Your API key is invalid.",r.message=e||"Your API key is invalid.",r.name="ApiKeyInvalidError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),c=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"Generic email octopus error")||this).code="EMAIL_OCTOPUS_ERROR",r.message="Generic email octopus error",r.message=e||"Generic email octopus error",r.name="EmailOctopusError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),l=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"Parameters are missing or invalid.")||this).code="INVALID_PARAMETERS",r.message="Parameters are missing or invalid.",r.message=e||"Parameters are missing or invalid.",r.name="InvalidParametersError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),f=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"A contact already exists with the supplied email address.")||this).code="MEMBER_EXISTS_WITH_EMAIL_ADDRESS",r.message="A contact already exists with the supplied email address.",r.message=e||"A contact already exists with the supplied email address.",r.name="MemberExistsWithEmailAddressError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),d=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"The requested endpoint does not exist.")||this).code="NOT_FOUND",r.message="The requested endpoint does not exist.",r.message=e||"The requested endpoint does not exist.",r.name="NotFoundError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),h=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"You're not authorised to perform that action.")||this).code="UNAUTHORISED",r.message="You're not authorised to perform that action.",r.message=e||"You're not authorised to perform that action.",r.name="UnauthorisedError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),p=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"An unknown error has occurred.")||this).code="UNKNOWN",r.message="An unknown error has occurred.",r.message=e||"An unknown error has occurred.",r.name="UnknownError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),m=function(t,e){if("INVALID_PARAMETERS"===e.code)throw new l(e.message);if("API_KEY_INVALID"===e.code)throw new u(e.message);if("UNAUTHORISED"===e.code)throw new h(e.message);if("NOT_FOUND"===e.code)throw new d(e.message);if("UNKNOWN"===e.code)throw new p(e.message)},v=function(r){return function(n){try{return Promise.resolve(function(o,i){try{var s=Promise.resolve(t.post("https://emailoctopus.com/api/1.6/lists/"+n.listId+"/contacts",e({api_key:r,email_address:n.emailAddress},n.fields&&{fields:n.fields},n.tags&&{tags:n.tags},n.status&&{status:n.status}))).then(function(t){return t.data})}catch(t){return i(t)}return s&&s.then?s.then(void 0,i):s}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;if("MEMBER_EXISTS_WITH_EMAIL_ADDRESS"===n.code)throw new f;m(0,n)}throw new c}))}catch(t){return Promise.reject(t)}}},y=function(e){return function(r){try{return Promise.resolve(function(n,o){try{var i=Promise.resolve(t.post("https://emailoctopus.com/api/1.6/lists",{api_key:e,name:r.name})).then(function(t){return t.data})}catch(t){return o(t)}return i&&i.then?i.then(void 0,o):i}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;m(0,n)}throw new c}))}catch(t){return Promise.reject(t)}}};function g(t,e,r){if(!t.s){if(r instanceof E){if(!r.s)return void(r.o=g.bind(null,t,e));1&e&&(e=r.s),r=r.v}if(r&&r.then)return void r.then(g.bind(null,t,e),g.bind(null,t,2));t.s=e,t.v=r;const n=t.o;n&&n(t)}}var E=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,r){var n=new t,o=this.s;if(o){var i=1&o?e:r;if(i){try{g(n,1,i(this.v))}catch(t){g(n,2,t)}return n}return this}return this.o=function(t){try{var o=t.v;1&t.s?g(n,1,e?e(o):o):r?g(n,1,r(o)):g(n,2,o)}catch(t){g(n,2,t)}},n},t}();function w(t){return t instanceof E&&1&t.s}var _=function(e){return function(r,n){try{var o=(null!=n&&n.autoPaginate?1:r.page)||1,i="next-initial",s=[],a=function(a,u){try{var c=function(){var a=function(t,e){var r;do{var n=t();if(n&&n.then){if(!w(n)){r=!0;break}n=n.v}var o=e();if(w(o)&&(o=o.v),!o)return n}while(!o.then);var i=new E,s=g.bind(null,i,2);return(r?n.then(a):o.then(u)).then(void 0,s),i;function a(r){for(n=r;w(o=e())&&(o=o.v),o;){if(o.then)return void o.then(u).then(void 0,s);if((n=t())&&n.then){if(!w(n))return void n.then(a).then(void 0,s);n=n.v}}g(i,1,n)}function u(r){if(r){do{if((n=t())&&n.then){if(!w(n))return void n.then(a).then(void 0,s);n=n.v}if(w(r=e())&&(r=r.v),!r)return void g(i,1,n)}while(!r.then);r.then(u).then(void 0,s)}else g(i,1,n)}}(function(){return Promise.resolve(t.get("https://emailoctopus.com/api/1.6/lists/"+r.listId+"/contacts",{params:{api_key:e,limit:r.limit||100,page:o}})).then(function(t){s.push.apply(s,t.data.data),null!=n&&n.autoPaginate?(o+=1,i=t.data.paging.next):i=null})},function(){return null!==i});if(a&&a.then)return a.then(function(){})}()}catch(t){return u(t)}return c&&c.then?c.then(void 0,u):c}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;m(0,n)}throw new c});return Promise.resolve(a&&a.then?a.then(function(t){return s}):s)}catch(t){return Promise.reject(t)}}},P=function(e){return function(r){try{return Promise.resolve(function(n,o){try{var i=Promise.resolve(t.get("https://emailoctopus.com/api/1.6/lists",{params:{api_key:e,limit:r.limit||100,page:r.page||1}})).then(function(t){return t.data})}catch(t){return o(t)}return i&&i.then?i.then(void 0,o):i}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;m(0,n)}throw new c}))}catch(t){return Promise.reject(t)}}},O=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"The list could not be found.")||this).code="LIST_NOT_FOUND",r.message="The list could not be found.",r.message=e||"The list could not be found.",r.name="ListNotFoundError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),A=function(e){return function(r){try{return Promise.resolve(function(n,o){try{var i=Promise.resolve(t.get("https://emailoctopus.com/api/1.6/lists/"+r.listId,{params:{api_key:e}})).then(function(t){return t.data})}catch(t){return o(t)}return i&&i.then?i.then(void 0,o):i}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;if("LIST_NOT_FOUND"===n.code)throw new O;m(0,n)}throw new c}))}catch(t){return Promise.reject(t)}}},b=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e||"The contact could not be found.")||this).code="MEMBER_NOT_FOUND",r.message="The contact could not be found.",r.message=e||"The contact could not be found.",r.name="MemberNotFoundError",r}return r(e,t),e}(/*#__PURE__*/a(Error)),I=function(e){return function(r){try{return Promise.resolve(function(n,o){try{var i=Promise.resolve(t.post("https://emailoctopus.com/api/1.6/lists/"+r.listId+"/contacts/"+r.memberId,{api_key:e})).then(function(){})}catch(t){return o(t)}return i&&i.then?i.then(void 0,o):i}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;if("MEMBER_NOT_FOUND"===n.code)throw new b;m(0,n)}throw new c}))}catch(t){return Promise.reject(t)}}},N=function(e){return function(r){try{return Promise.resolve(function(n,o){try{var i=Promise.resolve(t.get("https://emailoctopus.com/api/1.6/lists/"+r.listId+"/contacts/"+r.memberId,{params:{api_key:e}})).then(function(t){return t.data})}catch(t){return o(t)}return i&&i.then?i.then(void 0,o):i}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;m(0,n)}throw new c}))}catch(t){return Promise.reject(t)}}},T=function(r){return function(n){try{return Promise.resolve(function(o,i){try{var s=Promise.resolve(t.put("https://emailoctopus.com/api/1.6/lists/"+n.listId+"/contacts/"+n.memberId,e({api_key:r},n.emailAddress&&{email_address:n.emailAddress},n.fields&&{fields:n.fields},n.tags&&{tags:n.tags},n.status&&{status:n.status}))).then(function(t){return t.data})}catch(t){return i(t)}return s&&s.then?s.then(void 0,i):s}(0,function(e){if(t.isAxiosError(e)&&e.response){var r,n=null==(r=e.response)?void 0:r.data;if("MEMBER_NOT_FOUND"===n.code)throw new b;m(0,n)}throw new c}))}catch(t){return Promise.reject(t)}}},x=function(t){return{lists:{getList:A(t),getAllLists:P(t),createList:y(t),getAllContacts:_(t),getContactOfList:N(t),createContact:v(t),deleteContact:I(t),updateContactOfList:T(t)}}};export{u as ApiKeyInvalidError,c as EmailOctopusError,l as InvalidParametersError,f as MemberExistsWithEmailAddressError,d as NotFoundError,h as UnauthorisedError,x as emailOctopus};
//# sourceMappingURL=emailOctopus.module.js.map