const obj = {
  name: 'Ankit',
  normalFunc: function() {
    console.log('normalFunc this:', this);
  },
  arrowFunc: () => {
    console.log('arrowFunc this:', this);
  }
};

obj.normalFunc();
obj.arrowFunc(); 
