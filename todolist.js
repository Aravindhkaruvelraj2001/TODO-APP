let addbtn=document.querySelector('#inputBtn');
addbtn.addEventListener("click",addtask);



//<i class="far fa-check-circle"></i> 

//<i class="fas fa-trash"></i>

//function for addtask
function addtask()
{
	let divcontainer=document.querySelector('.taskviewcontainer');
	let input=document.querySelector('#inputText');
	if(input.value)
	{
	
	
		let divtag=document.createElement('div');
		divtag.classList.add('task-view');
	
		//create and add li tag
		let list=document.createElement('li');
		list.classList.add('list');
		list.innerText=input.value;
		divtag.appendChild(list);

		//create and add task-finish-button
		let taskfinish=document.createElement('button');
		taskfinish.innerHTML= '<i class="far fa-check-circle"></i>';
		taskfinish.classList.add('finish-button');
		taskfinish.addEventListener("click",(e)=>{
			if(e.target.nodeName==="I")
			{
				var todos=e.target.parentElement.parentElement;
				if(todos.classList.contains('finish'))
				{
					todos.classList.remove('finish');
				}
				else
				{
				todos.classList.add('finish');
				}
			}
			else
			{
				var todos=e.target.parentElement;
				if(todos.classList.contains('finish'))
				{
					todos.classList.remove('finish');
				}
				else
				{
				todos.classList.add('finish');
				}
			}
		});
		divtag.appendChild(taskfinish);

		//create and add delete button
		let taskdel=document.createElement('button');
		taskdel.innerHTML= '<i class="fas fa-trash "></i>';
		taskdel.classList.add('delete-button');
		taskdel.addEventListener("click",(e)=>{
			if(e.target.nodeName==="I")
			{
				var todo=e.target.parentElement.parentElement;
				
			}
			else
			{
				var todo=e.target.parentElement;
			}
			todo.classList.add('design');
			todo.addEventListener("transitionend",()=>{
			todo.remove();
			});
			
		});
		divtag.appendChild(taskdel);

		//add div tag
		divcontainer.appendChild(divtag);
    

		input.value="";
	}
}

