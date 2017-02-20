/*MODEL.JS***********************************/

class Task {
  constructor(name) {
    var date = new Date();
    this.name = name;
    this.Id=0;
  } 
  writeTask() {
    alert(this.name);
  }
}

class TaskCollection{

	constructor() {
		this.taskCollection = [];
		self=this;
		var existCollection = localStorage.getItem("collection");
		if (existCollection!=null || existCollection!=undefined){
			var reCollection = JSON.parse(existCollection);
			reCollection.forEach( function(item){
				var oldTask = new Task(item.name);	
		 		self.taskCollection.push(oldTask);
			} );
		}
	
	}
	addTask(task){
		this.taskCollection.push(task);
	}

	removeTask(task) {
		this.removeTaskByName(task.name);
	}
	removeTaskById(Id) {
		var i;
		this.taskCollection.forEach(function(item,index){
					if (item.Id	== Id){
						i= index;
					}
		}	);
		this.taskCollection.splice(i, 1);
	}
	getTasks() {
		return this.taskCollection;
	}

	rewrite(){
		var commitTaskCollection = JSON.stringify(this.taskCollection);
		localStorage.setItem('collection', commitTaskCollection);
	}
	refreshIdTask(){
		this.taskCollection.forEach(function(item,index)
			{
				item.Id='data-'+index;
				/*console.log(item.Id);*/

			});
	}
}
/*END MODEL.JS*******************************************/



/*VIEW.JS***********************************************/
class View{
	
	constructor(idField,idButton,idButtonDis,idButtonRemove,idUl){
		this.idField=qs(idField);
		this.idButton=qs(idButton);
		this.idButtonDis=qs(idButtonDis);
		this.idButtonRemove=qs(idButtonRemove);
		this.idUl= qs(idUl);
		self=this;
		this.idButton.onclick = function (){			
			self.onKeyPressed();
		}
		this.idButtonDis.onclick= function (taskCollection){
			self.onKeyDisPressed();
		}
		this.idButtonRemove.onclick= function (){
			self.onKeyRemovePressed();
		}
	
		}

		bindButtonPressed (handler){
			this.onKeyPressed = handler;
		}
		bindButtonDisPressed (handler){
			this.onKeyDisPressed = handler;
		}
		bindButtonRemovePressed (handler){
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
				newLi.id = item.Id
				console.log(newLi);
   				newLi.innerHTML =item.name;
   				self.idUl.appendChild(newLi);

		});

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
		this.view.bindButtonDisPressed(this.onKeyDisPressed.bind(this));
		this.view.bindButtonRemovePressed(this.onKeyRemovePressed.bind(this));
	}


	
	onKeyPressed(){	
		var task = new Task (this.view.getValue());
		this.taskCollection.addTask(task);
		this.taskCollection.refreshIdTask();
		this.taskCollection.rewrite();
		this.view.onKeyDisPressed();
		
		
	}
	onKeyDisPressed(){
		this.taskCollection.refreshIdTask();
		this.view.display(this.taskCollection);	

	}

	onKeyRemovePressed(){
		this.taskCollection.removeTaskById("data-1");			
		this.taskCollection.refreshIdTask();
		this.view.display(this.taskCollection);	

	}

}



/*END CONTROLLER.JS*****************************/



/*НЕ ЗНАЮ К КАКОМУ ФАЙЛУ ОТНЕСТИ КОД НИЖЕ.JS****/
class Application{
	constructor(){
		this.taskCollection = new TaskCollection();
		this.view = new View('taskTittle','addButton','displayButton','removeButton','listTask');
		this.controller = new Controller(this.view,this.taskCollection);

	}

}

window.onload = function(){
/*localStorage.clear();*/
var application = new Application();
application.view.onKeyDisPressed();
application.taskCollection.refreshIdTask();
console.log(application.taskCollection);


}

/*********************************************/