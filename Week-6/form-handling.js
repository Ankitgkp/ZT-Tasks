document.getElementById('myForm').onsubmit = function(e) {
  e.preventDefault()
  if (!nameInput.value.trim()) return alert('Name missing')
  alert('submitted successfully!');
}
