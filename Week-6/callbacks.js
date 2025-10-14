function order(food, callback) {
  console.log('Order received for:', food)
  setTimeout(() => {
    callback(food)
  }, 1000);
}

function cook(food, callback) {
  console.log('Cooking:', food);
  setTimeout(() => {
    callback(food)
  }, 2000)
}
function deliver(food) {
  console.log('Delivered:', food)
}

order('Momos', function(food) {
  cook(food, function(food) {
    deliver(food)
  });
});
