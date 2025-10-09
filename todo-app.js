document.getElementById('addBtn').onclick = function() {
  const input = document.getElementById('todoInput')
  if (!input.value.trim()) return
  const li = document.createElement('li');
  li.textContent = input.value.trim();
  li.onclick = ()=> {
    li.remove() 
    };
  document.getElementById('todoList').appendChild(li);
  input.value = '';
};
