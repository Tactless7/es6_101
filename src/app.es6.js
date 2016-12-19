(()=>{
	"use strict";

	const app = {
		init(){
			this.listeners();
		},
		listeners(){
			document.getElementById('hello').addEventListener('click', ()=>{
			this.writeSomething(this.getName());
			});
		},
		getName(){
			let name = document.getElementById('name').value;
			console.log(name);
			(!name) ? name = undefined : name;
			return name;
		},
		writeSomething(name = 'Santa'){
			let template = `Bonjour ${name}`;
			document.getElementById('greetings').innerHTML = template;
		},
	}
	app.init();
})();