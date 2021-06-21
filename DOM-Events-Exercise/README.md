# **Exercise: DOM Events**

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/js-advanced)&quot;. Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/2763/DOM-Manipulation-and-Events-Exercise](https://judge.softuni.bg/Contests/2763/DOM-Manipulation-and-Events-Exercise)

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


## 1. Sections

You will receive an **array** of strings. For each string, create a **div** with a **paragraph** with the **string** in it. Each paragraph is initially **hidden** **(display:none)**. Add a **click**** event ****listener** to **each div** that **displays** the **hidden** paragraph. Finally, you should **append** all divs to the element with an **id**&quot; **content**&quot;.


## 2. Time Converter

Create a program that **converts** different time units. Your task is to add a **click** event listener to **all** [**CONVERT**] **buttons**. When a button is **clicked** , read the **corresponding** input field, **convert** the value to the **three other** time units and **display** it in the input fields.


One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we **click**** , **the input fields should** change** depending on the added value on the left. (For example, if we write 48 hours and click convert the days, the field value should change to 2).


## 3. Locked Profile

In this problem, you should **create a JS functonality** which **shows** and **hides** the additional
information about users.
When one of the [**Show**  **more**] **buttons** is clicked, the **hiden information** inside the div should
be shown, only if **the profile is not locked**! If the current profile is **locked,** nothing should
happen.
If the **hidden information is displayed** and we **lock**** the profile again**, the [**Hide it**] button
should **not be working**! Otherwise, when the profile is **unlocked** and we click on the **[Hide it****]**
button, the new fields must hide again.


## 4. Fill Dropdown

Your task is to take values from **input** fields with **ids**  **&quot;newItemText****&quot; **and**&quot; ****newItemValue****&quot; **.Then you should create and append an** \&lt;option\&gt; **to the** \&lt;select\&gt; **with** id ****&quot;menu&quot;.**
**Hints**

- Your function should take the values of **newItemText** and **newItemValue**. After that you should create a new **option** element and set its **textContent** and its **value** to the newly taken ones.
- Once you have done all of that, you should **append** the newly created **option** as a **child** to the **select** item with id **&quot;**** menu ****&quot;****.**
- Finally, you should **clear** the value of the two **input** fields.


## 5. Encode and Decode Messages

In this problem, you should **create a JS functonality** which **encodes and decodes some**
**messages which travel to the network.**
This program should contain **two functionalities**.

* The first one is to **encode the given message** and **send it** to the **receiver**.

* The second one is to **decode the received message** and **read it (display it)**.

When the [**Encode and send it**] **button** is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:

- **Change** the **ASCII CODE** on **every single character** in that message when you **add 1** to the current **ASCII NUMBER** , that represent the current character in that message
- **Clear** the **sender**** textarea **and** added **the encoded message to the** receiver textarea**


After that, when the [**Decode and read it**] **button** is clicked. You need to get the **encoded message** from **the receiver textarea** and do the **opposite logic** from encoding:

- **Subtract 1** from the current **ASCII NUMBER** , that represents the current character in that message
- Replace the **encoded message** with the already **decoded message** in the receiver textrea, to make it readable

## 6.Furniture

You will be given some furniture as an **array of objects**. Each object will have a **name** , a **price** and a **decoration factor**.

When the **&quot;Generate&quot;**  **button is clicked** , add a **new row to the table** for each piece of furniture with **image**** , **** name ****,**  **price** and **decoration factor** (code example below).

When the **&quot;**** Buy ****&quot;** button is clicked, get all **checkboxes that are marked** and show in the **result textbox** the **names** of the piece of furniture that **were checked** , separated by a **comma** and **single**** space**(**&quot;, &quot;**) in the following format:**&quot;Bought furniture: {furniture1}, {furniture2}…&quot;**.

On the next line, print the total price in format: **&quot;Total price: {totalPrice}&quot;** (formatted to the second decimal point). Finally, print the average decoration factor in the format: **&quot;Average decoration factor: {decFactor}&quot;**

### Input Example

**[{&quot;name&quot;: &quot;Sofa&quot;, &quot;img&quot;: &quot;https://res.cloudinary.com/maisonsdumonde/image/upload/q\_auto,f\_auto/w\_200/img/grey-3-seater-sofa-bed-200-13-0-175521\_9.jpg&quot;, &quot;price&quot;: 150, &quot;decFactor&quot;: 1.2}]**

