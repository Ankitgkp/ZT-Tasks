class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem("cart")) || [];
    }
    addItem(product, price, quantity = 1) {
        const item = this.items.find(i => i.product === product);
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ product, price, quantity });
        }
        this.saveCart();
    }
    removeItem(product) {
        this.items = this.items.filter(i => i.product !== product);
        this.saveCart();
    }
    getTotal() {
        return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    }
    saveCart() {
        localStorage.setItem("cart", JSON.stringify(this.items));
    }
    displayCart() {
        console.log("Items:", this.items, "Total: $", this.getTotal());
    }
}

const cart = new Cart();
cart.addItem("Laptop", 1000, 1);
cart.addItem("Phone", 500, 2);
cart.displayCart();