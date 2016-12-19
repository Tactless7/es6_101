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
			this.history.push(name);
			let historyItem = document.createElement('div');
			historyItem.innerHTML = `${name}`;
			document.getElementById('history').appendChild(historyItem);
		},
		firstLetterCapital(string){
			
		}
	}
	app.init();
})();