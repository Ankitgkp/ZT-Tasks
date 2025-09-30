let car = {
  brand: "Nexon",
  model: "Facelift",

  start: function() {
    console.log(this.brand + " " + this.model + " has started.")
  },

  stop: function() {
    console.log(this.brand + " " + this.model + " has stopped.")
  }
};

car.start()
car.stop()
