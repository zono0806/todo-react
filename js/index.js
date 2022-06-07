function handleFormSubmit() {
  //入力内容の取得
  const inputEl = document.getElementById("task-input");
  const inputValue = inputEl.value;

  if(!inputValue.length > 0){
    alert("テキストを入力してください")
    return;
  }

// Todo追加対象の取得
const todosEl = document.getElementById("todos");
// Todo要素を作る
const todoEl = createTodoElement(inputValue);

todosE1.appendChild(todoEl);
input.value = "";

}

function createTodoElement(task){
  //ToDo要素を作る
  const todoEl = document.createElement("li");

  //checkbox element
  const checkBoxEl = document.createElement("input");
  todoEl.appendChild(checkBoxEl);

  // label element
  const labelEl = document.createElement("label");
  labelEl.innerText = task;

  checkBoxEl.type = "checkbox";
  checkBoxEl.onchange = function(e) {
    const checked = e.target.checked;
    if(checked){
      todoEl.className = `checked`;
    }else{
      todoEl.className = "";
    }
  };
  todoEl.appendChild(labelEl);


  // button element
  const buttonEl = document.createElement("button");
  buttonEl.innerText = "削除";
  buttonEl.onclick = function(){
    todoEl.remove();
  };

  todoEl.appendChild(buttonEl);

  return todoEl;

}