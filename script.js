/*MODEL.JS***********************************/

class Task {
  constructor(name,id) {
    this.name = name;
    this.id=id;
  } 
}

class TaskCollection{

	constructor() {
		this.taskCollection = [];
		this.index =1000;
		self=this;
		var existCollection = localStorage.getItem("collection");
		var existIndex = localStorage.getItem("collection-index");
		if (existCollection!=null || existCollection!=undefined){
			var reCollection = JSON.parse(existCollection);
			var reIndex = JSON.parse(existIndex);
			reCollection.forEach( function(item){
				var oldTask = new Task(item.name,item.id);	
		 		self.taskCollection.push(oldTask);
		 		self.index =reIndex;
			} );
		}
	
	}
	addTask(task){
		this.taskCollection.push(task);

	}

	removeTask(task) {
		this.removeTaskByName(task.name);
	}
	removeTaskById(id) {	
		this.taskCollection = this.taskCollection.filter(function(v){return	v.id !=id});
	}
	getTasks() {
		return this.taskCollection;
	}

	rewrite(){
		var commitTaskCollection = JSON.stringify(this.taskCollection);
		var commitIndexCollection = JSON.stringify(this.index);
		localStorage.setItem('collection', commitTaskCollection);
		localStorage.setItem('collection-index', commitIndexCollection);
	}
	incIndex(){
		this.index++;
	}
}
/*END MODEL.JS*******************************************/



/*VIEW.JS***********************************************/
class View{
	
	constructor(idField,idButton,idUl,idButtonClear){
		this.idField=qs(idField);
		this.idButton=qs(idButton);
		this.idUl= qs(idUl);
		this.idButtonClear=qs(idButtonClear);
		self=this;
		this.idButton.onclick = function (){			
			self.onKeyPressed();
		}
		this.idButtonClear.onclick= function (){
			localStorage.clear();

		}
	
		}

		bindButtonPressed (handler){
			this.onKeyPressed = handler;
		}
		bindDisPressed (handler){
			this.onKeyDisPressed = handler;
		}
		bindRemovePressed (handler){
			this.onKeyRemovePressed = handler;
		}
		getValue(){
			return this.idField.value;
		}
		display(taskCollection){
			var elem = this.idUl;
			while (elem.firstChild) {
    			elem.removeChild(elem.firstChild);
			}
	    	var tasks = taskCollection.getTasks();

	    	self = this
 	    	tasks.forEach(function (item) {
				var newLi = document.createElement('li');
				newLi.setAttribute('data-id', item.id);
				console.log(newLi);
   				newLi.innerHTML =item.name;
   				self.idUl.appendChild(newLi);

		});

				var nodeList = document.getElementsByTagName("li");
				console.log(nodeList);
				for (var i = 0; i < nodeList.length; i++) {
  						var newSpan = document.createElement("span");
  						var txt = document.createTextNode("\u00D7");
  						newSpan.appendChild(txt);
  						newSpan.onclick	=  function	(){
  							var parentLi = this.parentElement;
  							var idTask = parentLi.getAttribute('data-id');
  							alert('Удаляем задачу под номером...'+idTask);
  							self.onKeyRemovePressed(idTask);
  						}
  						nodeList[i].appendChild(newSpan);
				}

		}

 	    }	
    	  

/* END VIEW.JS**********************************/


/*HELPERS.JS***********************************/

function qs(id)
		{
			return document.getElementById(id);
		}

function qt(tag)
		{
			return document.getElementsByTagName(tag);
		}				
/*END HELPERS.JS********************************/


/*CONTROLLER.JS*********************************/
class Controller{
	constructor(view,taskCollection){
		this.view = view;
		this.taskCollection = taskCollection;
		this.view.bindButtonPressed(this.onKeyPressed.bind(this));
		this.view.bindDisPressed(this.onKeyDisPressed.bind(this));
		this.view.bindRemovePressed(this.onKeyRemovePressed.bind(this));
	}


	
	onKeyPressed(){
		this.taskCollection.incIndex();
		var name = this.view.getValue();
		var id = this.taskCollection.index;
		console.log(id);
		var task = new Task (name,id);
		this.taskCollection.addTask(task);
		this.taskCollection.rewrite();
		this.view.onKeyDisPressed();
		
		
	}
	onKeyDisPressed(){
		this.view.display(this.taskCollection);	

	}

	onKeyRemovePressed(id){
		this.taskCollection.removeTaskById(id);
		this.taskCollection.rewrite();			
		this.view.display(this.taskCollection);	

	}

}



/*END CONTROLLER.JS*****************************/



/*НЕ ЗНАЮ К КАКОМУ ФАЙЛУ ОТНЕСТИ КОД НИЖЕ.JS****/
class Application{
	constructor(){
		this.taskCollection = new TaskCollection();
		this.view = new View('taskTittle','addButton','listTask','clearButton');
		this.controller = new Controller(this.view,this.taskCollection);

	}

}

window.onload = function(){
var application = new Application();
application.view.onKeyDisPressed();
console.log(application.taskCollection);

}

/*********************************************/