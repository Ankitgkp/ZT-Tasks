let count = 0;
function updateDisplay() {
  document.getElementById('count').textContent = count
}
document.getElementById('incBtn').addEventListener('click', ()=> {
  count++
  updateDisplay()
});
document.getElementById('decBtn').addEventListener('click', ()=> {
  count--
  updateDisplay()
});
document.getElementById('resetBtn').addEventListener('click', ()=> {
  count = 0;
  updateDisplay()
})
updateDisplay()
