document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const form = document.querySelector("form")
    form.addEventListener('submit',(e) =>{
     e.preventDefault()//preveent default behaviour
    //  let dropdown = document.getElementById("#dropdown_priority");
    //  let selectedOption = dropdown.options[dropdown.selectedIndex];
    //  let selectedValue = selectedOption.value;

     addTask(e.target.new_task_description.value, new_user_description.value, new_duration_description.value, priority_dropdown.value)//e.target - this targets the data from input textbox 
     clearInputs();
    });

    // function to add and append Button, List and tasks to the DOM
    function addTask(task,user,duration,priority){
      let ul = document.querySelector("#tasks");
      let li= document.createElement("li");
      let btn= document.createElement('button')
      btn.className= "btnCancel";
      btn.textContent= 'X'
      let dropdown = document.getElementById("#dropdown_priority");
      btn.addEventListener("click", removeTask)
      li.textContent= "Task: "+task+ " User: " +user+" Priority: "+priority+ " Duration:" +duration+" ";
      li.appendChild(btn)
      
      ul.appendChild(li);
    }

    //function to remove todo list
    function removeTask(e){
      e.target.parentNode.remove()
    }
    function clearInputs(){
      document.querySelector('#new_task_description').value= "";
      document.querySelector('#new_user_description').value= "";
      document.querySelector('#new_duration_description').value= "";
    }
});
