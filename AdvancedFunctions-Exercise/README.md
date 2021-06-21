# Exercise: Advanced Functions

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the SoftUni judge system at[https://judge.softuni.bg/Contests/2765/Advanced-Functions-Exercise](https://judge.softuni.bg/Contests/Compete/Index/2765#0)


## 1.Sort Array

Write a function that **sorts an array** with **numeric** values in **ascending** or **descending** order, depending on an **argument** that is passed to it.

You will receive a **numeric array** and a **string** as arguments to the first function in your code.

- If the second argument is **asc** , the array should be sorted in **ascending order** (smallest values first).
- If it is **desc** , the array should be sorted in **descending order** (largest first).

### Input

You will receive a **numeric array** and a **string** as input parameters.

### Output

The output should be the **sorted array**.

### Examples

| **Input** | **Output** |
| --- | --- |
| **[14, 7, 17, 6, 8], &#39;asc&#39;** | **[6, 7, 8, 14, 17]** |
| **[14, 7, 17, 6, 8], &#39;desc&#39;** | **[17, 14, 8, 7, 6]** |


## 2.Argument Info

Write a function that displays **information** about the **arguments** which are passed to it ( **type** and **value** ) and a **summary** about the number of each type in the following format:

**&quot;{argument type}: {argument value}&quot;**

Print **each** argument description on a **new line**. At the end print a **tally** with counts for each type in **descending order** , each on a **new line** in the following format:

**&quot;{type} = {count}**&quot;

If two types have the **same count** , use **order of appearance**.

Do **NOT** print anything for types that do not appear in the list of arguments.

### Input

You will receive a series of arguments **passed** to your function.

### Output

**Print on the**  **console** the **type** and **value** of each argument passed into your function.

### Example

|  **Input** |
| --- |
| **&#39;cat&#39;, 42, function () { console.log(&#39;Hello world!&#39;); }** |
| **Output** |
| **string: cat**|
|**number: 42**|
|**function: function () { console.log(&#39;Hello world!&#39;); }**|
|**string = 1** **number = 1** **function = 1** |


## 3.Fibonacci

Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1. Use a **closure** to keep the current number.

### Input

There will be no input.

### Output

The **output** must be a Fibonacci number and must be **returned** from the function.

### Examples

| **Sample exectuion** |
| --- |
| **let fib = getFibonator();**|
|**console.log(fib()); _// 1_**|
|**console.log(fib()); _// 1_**|
|**console.log(fib()); _// 2_**|
|**console.log(fib()); _// 3_**|
|**console.log(fib()); _// 5_**|
|**console.log(fib()); _// 8_**|
|**console.log(fib()); _// 13_** |


## 4.Breakfast Robot

Your task is to write the management software for a breakfast chef robot - it needs to **take orders** , keep track of available **ingredients** and output an **error** if something&#39;s wrong. The cooking instructions have already been installed, so your module needs to **plug into** the system and only take care of **orders** and **ingredients**. And since this is the future and food is printed with nano-particle beams, all ingredients are microelements - **protein** , **carbohydrate** , **fat** and **flavours**. The library of recipes includes the following meals:

- **apple** - made with **1 carbohydrate** and **2 flavour**
- **lemonade** - made with **10 carbohydrate** and **20 flavour**
- **burger** - made with **5 carbohydrate** , **7 fat** and **3 flavour**
- **eggs** - made with **5 protein** , **1 fat** and **1 flavour**
- **turkey** - made with **10 protein** , **10 carbohydrate** , **10 fat** and **10 flavour**

The robot receives instructions either to **restock** the supply, **cook** a meal or **report** statistics. The input consists of one of the following commands:

- **restock <microelement> <quantity>** - increases the stored quantity of the given microelement
- **prepare <recipe> <quantity>** - uses the available ingredients to prepare the given meal
- **report** - returns information about the stored microelements, in the order described below, including zero elements

The robot is equipped with a quantum field storage, so it can hold an **unlimited quantity** of ingredients, but there is no guarantee there will be enough available to prepare a recipe, in which case an **error message** should be returned. Their availability is checked in the **order** in which they **appear** in the recipe, so the error should reflect the first requirement that was not met.

Submit a **closure** that returns the management function. The management function takes one parameter.

### Input

Instructions are passed as a **string argument** to your management function. It will be called **several times** per session, so internal state must be **preserved** throughout the entire session.

### Output

The **return** value of each operation is one of the following strings:

- **Success** - when restocking or completing cooking without errors
- **Error: not enough \&lt;ingredient\&gt; in stock** - when the robot couldn&#39;t muster enough microelements
- **protein={qty} carbohydrate={qty} fat={qty} flavour={qty}** - when a report is requested, in a single string

### Constraints

- Recipes and ingredients in commands will always have valid names.

### Examples

| **Execution** |
| --- |
| **let manager = solution();** |
|**console.log(manager(&quot;restock flavour 50&quot;));   // Success**|
|**console.log (manager(&quot;prepare lemonade 4&quot;)); // Error: not enough carbohydrate in stock**|

| **Input** | **Output** |
| --- | --- |
| **restock flavour 50** | **Success**|
|**prepare lemonade 4**| **Success**|
|**restock carbohydrate 10**|**Success**|
|**restock flavour 10**|**Success**|
|**prepare apple 1**|**Success**|
|**restock fat 10**|**Success**|
|**prepare burger 1**|**Success**|
|**report**|**protein=0 carbohydrate=4 fat=3 flavour=55**|


## 5.Functional Sum

Write a function that **adds** a number passed to it to an **internal sum** and returns **itself** with its internal sum set to the **new value** , so it can be **chained** in a functional manner.

**Hint:** Overwrite **toString()** of the function.



### Input

Your function needs to take one **numeric** **argument**.

### Output

Your function needs to **return** itself with an updated context.

### Example

| **Input** | **Output** |
| --- | --- |
| **add(1)** | 1 |
| **add(1)(6)(-3)** | 4 |




# DOM-Related Problems

The following problems must be solved using DOM manipulation techniques.

**Environment Specifics**

Please, be aware that every JS environment may **behave differently** when executing code. Certain things that work in the browser are not supported in **Node.js** , which is the environment used by **Judge**.

The following actions are **NOT** supported:

- **.forEach()** with **NodeList** (returned by **querySelector()** and **querySelectorAll()**)
- **.forEach()** with **HTMLCollection** (returned by **getElementsByClassName()** and **element.children** )
- Using the **spread-operator** ( **...** ) to convert a **NodeList** into an array
- **append()** in Judge (use only **appendChild()**)
- **prepend()**
- Always turn the collection into an **JS array** (forEach, forOf, et.)

If you want to perform these operations, you may use **Array.from()** to first convert the collection into an array.

## 6. Simple Calculator 

Create a function  **calculator**  which returns an object that can modify the DOM. The returned object should support the following functionality:

- **init(selector1, selector2, resultSelector)** - initializes the object to work with the elements corresponding to the supplied selectors.
- **add()** - **adds** the numerical value of the element corresponding to **selector1** to the numerical value of the element corresponding to **selector2** and then writes the result in the element corresponding to **resultSelector**

- **subtract()** - **subtracts** the numerical value of the element corresponding to **selector2** from the numerical value of the element corresponding to **selector1** and then writes the result in the element corresponding to **resultSelector**

### Input

There will be no input your function must only provide an object.

### Output

Your function should return an object that meets the specified requirements.

### Constraints

- **All commands will always be valid, there will be no nonexistent or incorrect input.**
- **All selectors will point to single textbox elements.**
- **Use the given skeleton to solve this problem.**

| **Sample execution** |
| --- |
| **const calculate = calculator**();|
|**calculate.init** **(&#39;#num1&#39;, &#39;#num2&#39;, &#39;#result&#39;);** |


