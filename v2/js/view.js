class View{
	
	constructor(idField,idButton,idButtonDis,idUl){
		this.idButton=qs(idButton);
		this.StrIdField=idField;
		self=this;
		self.idButton.onclick = function (){			
			self.onKeyPressed();
		}

		}

		bindButtonPressed (handler){
			this.onKeyPressed = handler;
		}
		getValue(){
			return qs(this.StrIdField).value;
		}

		
		
}