
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

/*Класс  View принимает ссылку на поле, в будущем он будет принимать ссылку на поле, ссылку на кнопку, ссылку на пустов div для отрисовки */
class View{
	constructor(idField)
	this.fieldValue= document.getElementById(idField).value;
}


class TaskCollection{
	addTask(task){
		/*тут должно быть добавление задачи, как в массив объектов, но не могу разобраться какой индекс использовать,
		может использовать свойства поиска длины массива. Но как интерпретатор поймет, что мой класс является массивом объектов */
	}
}
	

function clickButtonAdd(){
	task=createTask();
	addTask(task);
}




view = new View('taskTittle');
task = new Task(view.fieldValue);
taskCollection = new TaskCollection ;


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

