'use strict';

(function () {
	var app = {
		history: [],
		init: function init() {
			this.listeners();
		},
		listeners: function listeners() {
			var _this = this;

			document.getElementById('hello').addEventListener('click', function () {
				_this.greetSomeone(_this.getName());
			});
		},
		getName: function getName() {
			var name = document.getElementById('name').value;
			!name ? name = undefined : name;
			return name;
		},
		greetSomeone: function greetSomeone() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Santa';

			var template = 'Bonjour ' + name;
			document.getElementById('greetings').innerHTML = template;
			this.addHistory(name);
		},
		addHistory: function addHistory(name) {
			this.history.push(name);
			var historyItem = document.createElement('div');
			historyItem.innerHTML = '' + name;
			document.getElementById('history').appendChild(historyItem);
		},
		firstLetterCapital: function firstLetterCapital(string) {}
	};
	app.init();
})();
