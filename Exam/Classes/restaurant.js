class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = +budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {  
        let messageLog = [];
        for (let entry of products) {
            entry = entry.split(' ')
            
            let price = +entry.pop()
            let quantity = +entry.pop()
            let product = entry.join(' ')
            if (this.budgetMoney - price >= 0) {
                if (this.stockProducts[product]) this.stockProducts[product] += quantity
                else this.stockProducts[product] = quantity
                this.budgetMoney -= price
                messageLog.push( `Successfully loaded ${quantity} ${product}`) 
            } else {
                messageLog.push(`There was not enough money to load ${quantity} ${product}`)
            }
        }
       
        this.history = [...this.history, ...messageLog]
        return this.history.join('\n')  
        
    }
    addToMenu(meal, neededIngs, price) {
        if (!this.menu[meal]) {
            this.menu[meal] ={
                products: [neededIngs],
                price: +price,
            }
    
            if (Object.keys(this.menu).length > 1) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            } else
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meal in the menu, other ideas?` ;
        } else return `The ${meal} is already in the our menu, try something different.` ;
    
    }
    showTheMenu() {
        let toPrint = []
        for (let key of Object.keys(this.menu)) {
            toPrint.push(`${key} - $ ${this.menu[key].price}`) 
        }
        if (!toPrint.length) return ('Our menu is not ready yet, please come later...')
        else {return toPrint.join('\n')}  
 
    }
    makeTheOrder(meal) {
        if (!this.menu[meal]) return (`There is not ${meal} yet in our menu, do you want to order something else?`)
        
        let {products,price}= this.menu[meal];
        for (let item of products[0]) {  
            item = item.split(' ')
            let quantity = +item.pop()
            let product = item.join(' ')
            
            if (this.stockProducts[product] < quantity || !this.stockProducts[product]) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`) 
            }
        }
 
        for (let item of products[0]) {
            item = item.split(' ')
            let quantity = +item.pop()
            let product = item.join(' ')
            this.stockProducts[product] -= quantity
        } this.budgetMoney += price;
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`) 
    }
}
//  let kitchen = new Restaurant(1000);
//  console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
//  console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
//  console.log(kitchen.showTheMenu());
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));


