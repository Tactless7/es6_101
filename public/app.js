'use strict';

(function () {
	"use strict";

	var app = {
		init: function init() {
			this.listeners();
		},
		listeners: function listeners() {
			var _this = this;

			document.getElementById('hello').addEventListener('click', function () {
				_this.writeSomething(_this.getName());
			});
		},
		getName: function getName() {
			var name = document.getElementById('name').value;
			console.log(name);
			!name ? name = undefined : name;
			return name;
		},
		writeSomething: function writeSomething() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Santa';

			var template = 'Bonjour ' + name;
			document.getElementById('greetings').innerHTML = template;
		}
	};
	app.init();
})();
