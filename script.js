/*class Task{
	this.name=name;
}

var task = new Task("Суперважное дело");

var task="тест";*/





/*начни с моделей - классов задач
чтобы ты просто в консоли браузера могла создавать новые задачи


мотом сделай класс для хранения списка задач
потом напиши под, который просто покажет этот список на экране
добавь форму, которая в этот список позволит добавлять новую задачу


Пишите в консоли myfunc({a: 12, b: 24}), и, о чудо, вы передали в функцию данные, введенные пользователем:)*/


'use strict';

class Task {
  constructor(name) {
    this.name = name;
  }
  writeTask() {
    alert(this.name);
  }
}

var task = new Task("Текст задачи");
/*task.writeTask(); // Текст задачи*/




var TaskCollection = []

TaskCollection[0] = {
	name:"Задача 1"
}
TaskCollection[1] = {
	name:"Задача 2"
}


	
console.log(task);
console.log(TaskCollection);


