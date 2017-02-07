
'use strict';

/*СОЗДАЕМ КЛАСС ЗАДАЧ*/
class Task {
  constructor(name) {
    this.name = name;
  } 
  writeTask() {
    alert(this.name);
  }
}


class View{
	constructor(idField,idButton,idDiv){
		this.fieldValue= document.getElementById(idField).value; /*работает */
	}
	display(taskCollection){
		/*тут отрисовывается коллекция в пустом div*/
		var tasks = taskCollection.getTasks();
		tasks.forEach(function(item, i, arr) {

		})
	}
}


class TaskCollection{

	constructor() {
		this.taskCollection = [];
	}
	

	addTask(task){
		this.taskCollection.push(task); 
	}

	removeTask(task) {
		this.removeTaskByName(task.name);
	}

	removeTaskByName(name) {
		var i = this.taskCollection.indexOf(name)
		this.taskCollection.splice(i, 1); // начиная с позиции 1, удалить 1 элемент
	}

	getTasks() {
		return this.taskCollection;
	}
}
	
	





var taskCollection = new TaskCollection();

function clickButtonAdd(){
	var view = new View('taskTittle','addButton','listTask');
	var task = new Task(view.fieldValue);
	var count =  taskCollection.length 
	taskCollection.addTask(task); 
	console.log(taskCollection);
}



function clickButtonRemove(){
	taskCollection.removeTaskByName(taskCollection.taskCollection[1].name);
	console.log(taskCollection);

}



/*ФУНКЦИЯ СОЗДАНИЯ ЗАДАЧИ, ВОЗВРАЩАЕТ ЗАДАЧУ*/

/*function createTask(title){	
	task = new Task(tittle);
	return task;
}
*/



/*если хочешь удалить - используюй splice
еще лучше - добавить в класс массива свою функцию
Array.prototype.removeAt = function (index) {
  this.splice(index,1);
};
*/
