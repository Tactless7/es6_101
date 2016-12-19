(()=>{
	const app = {
		history: [],
		init(){
			this.listeners();
		},
		listeners(){
			document.getElementById('hello').addEventListener('click', ()=>{
			this.greetSomeone(this.getName());
			});
			document.getElementById('search').addEventListener('click', ()=>{
				this.searching(document.getElementById('searchedName').value);
			});
		},
		getName(){
			let name = document.getElementById('name').value;
			(!name) ? name = undefined : name;
			return name;
		},
		greetSomeone(name = 'Santa'){
			const template = `Bonjour ${name}`;
			document.getElementById('greetings').innerHTML = template;
			this.addHistory(name);
		},
		addHistory(name){
			const reworkedName = this.firstLetterCapital(name);
			this.history.push(reworkedName);
			this.emptyHistory();
			for( let i = 0 ; i < this.history.length ; i++){
				let historyItem = document.createElement('li');
				historyItem.innerHTML = `${this.history[i]}`;
				document.getElementById('history').appendChild(historyItem);
			}
		},
		firstLetterCapital(string){
			return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
		},
		emptyHistory(){
			const el = document.getElementById('history');
			while (el.firstChild){
				el.removeChild(el.firstChild);
			}
		},
		searching(string){
			console.log(string);
			string = this.firstLetterCapital(string);
			this.emptyHistory();
			for(let i = 0 ; i < this.history.length ; i++){
				if(this.history[i].startsWith(string)){
					let historyItem = document.createElement('li');
					historyItem.innerHTML = `${this.history[i]}`;
					document.getElementById('history').appendChild(historyItem);
				}
			}
		},
	}
	app.init();
})();