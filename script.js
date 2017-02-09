
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


class View{

	/*ЭКЗЕМЛЯР ХРАНИТ В СЕБЕ 3 ССЫЛКИ : ПОЛЕ, КНОПКА, СПИСОК*/
	constructor(idField,idButton,idButtonDis,idUl){
		this.idField=document.getElementById(idField);
		this.idButton=document.getElementById(idButton);
		this.idButtonDis=document.getElementById(idButtonDis);
		this.idUl=document.getElementById(idUl);
	}

	/*
	this.idButtonDis.onclick = display(taskCollection){
	    var tasks = Application.taskCollection.getTasks(); // СОЗДАЕТ МАССИВ ЗАДАЧ ИЗ ЭКЗАМЛЯРА ПРИЛОЖЕНИЯ
	    self = this

 	    tasks.forEach(function (item) { //ДЛЯ КАЖДОЙ ЯЧЕЙКИ МАССИВА ПРИМЕНЯЕМ ФУНКЦИЮ
			var newLi = document.createElement('li'); //СОЗДАЕМ ПУНКТ СПИСКА
   			newLi.innerHTML=item.name; // ПРОПИСЫВАЕМ В LI НАЗВАНИЕ ЗАДАЧИ
   			self.idUl.appendChild(newLi); // ДОБАВЛЯЕМ LI ВНТУРЬ UL
	});
	}*/

	/*ВОЗВРАЩАЕТ ИМЯ ЗАДАЧИ ИЗ ПОЛЯ*/
	getFieldValue(){
		return this.idField.value;
	}



}



class Application{

	/*ЭКЗЕМЛЯР ХРАНИТ В СЕБЕ VIEW И КОЛЛЕКЦИЮ ЗАДАЧ*/
	constructor(){
		this.view = new View('taskTittle','addButton','displayButton','listTask');
		this.taskCollection = new TaskCollection();
	}

	/*ВОЗВРАЩАЕТ ЭКЗЕМЛЯР VIEW*/
	getView(){
		return this.view;
	}


	/*ДОБАВЛЯЕТ ЗАДАЧУ В КОЛЛЕКЦИЮ ЗАДАЧ*/
	this.view.idButton.onclick = clickButtonAdd(){
		/*var task = new Task(view.getFieldValue());
		this.taskCollection.addTask(task);*/ 

		console.log(view);
		console.log(taskCollection);
	}

	/*ОТРИСОВЫВАЕТ СПИСОК ЗАДАЧ*/
	clickButtonDisplay(){
		view.display(taskCollection);
	}

	/*УДАЛЯЕТ ТОЛЬКО ПЕРВУЮ ЗАДАЧУ*/
    clickButtonRemove(){
		this.taskCollection.removeTaskByName(taskCollection.taskCollection[0].name);
	}
}


var аplication = new Application();