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
			document.getElementById('search').addEventListener('click', function () {
				_this.searching(document.getElementById('searchedName').value);
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
		iterateHistory: function iterateHistory() {
			for (var i = 0; i < this.history.length; i++) {
				var historyItem = document.createElement('li');
				historyItem.innerHTML = '' + this.history[i];
				document.getElementById('history').appendChild(historyItem);
			}
		},
		addHistory: function addHistory(name) {
			var reworkedName = this.firstLetterCapital(name);
			this.history.push(reworkedName);
			this.emptyHistory();
			this.iterateHistory();
		},
		firstLetterCapital: function firstLetterCapital(string) {
			return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
		},
		emptyHistory: function emptyHistory() {
			var el = document.getElementById('history');
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
		},
		searching: function searching(string) {
			string = this.firstLetterCapital(string);
			this.emptyHistory();
			for (var i = 0; i < this.history.length; i++) {
				if (this.history[i].startsWith(string)) {
					var historyItem = document.createElement('li');
					historyItem.innerHTML = '' + this.history[i];
					document.getElementById('history').appendChild(historyItem);
				}
			}
		}
	};
	app.init();
})();
