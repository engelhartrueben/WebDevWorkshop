# Instructions

We will not be focusing on .css today, so that will be provided. Instead, we will primarily focus on HTML and some minor JavaScript. Our **goal** today is to build a form app that we can submit to a server to see who is going to join the IEEE U Albany Hackathon, as well as what events they wish to attend!

Lets start off with the HTML of this project. HTML is a mark up langauge that guides how webpages loads, looks, and behaves. JavaScript interacts with HTML documents and allows us to do fine tune the behavior of our app.

HTML is accessible, and once you have a hang of the syntax, you are well on your way to creating you own webpage!

Provided in the `index.html` file is what we call boilerplate code. This is code that is generally the same between all html files. things like the `<!DOCTYPE html>` and some of the `<head>` attributes.

`<head>` tag is used to help describe the attributes of our html file. 

`<meta>` tags help describe how to decode our file. In this case, we are using the character set UTF-8.

`<link>` tags are used to connect to external files outside of this html document. Here, we are connected to a style sheet, `styles.css`, which contains all of our styling information, and an `icon`, found in file `favicon.ico` file. The favicon is the little image found on the tab of the page. 

Next is the body, which is where we will script how our page should look. This is where nearly all of our time will be spent today. 

You may have noticed thed `<script>` tag within the `<body>` tag. This is how we connect to external JavaScript files. There is a way to add JavaScript scripts directly in the HTML file, but for organization sake, it is nearly always best to seperate the two.

We will first start by adding a `<form>` tag within the `<body>`. This tag is useful because we can bundle all the submit logic into one element, rather than having to individually go through each input (think first name, last name, events, etc). `<form>` tags must be closed as well, looking like:

```html
<form>
</form>
```

Most tags will need to be closed, but sometimes we are allowed to ommit the closing tag. If you don't know, it is best to add the closing tag!

Lets give this `<form>` tag an `id` like so:

```html
<form id="form">
</form>
```

The `id` attribute is useful as it allows us to "query" this tag (sometimes called an element). This will become helpful later. 

NOTE: All `strings` in HTML should be wrapped in double quotes ("...")

Within this `<form>` element, we will now add a `<div>` element. A `<div>` element standes for "division", as in, we are dividing our page into seperate components. `<div>` is especially usefull when we have many parts to a page. In this `<div>` element, lets add a `class` attribute set to "form-container". While `id` should be unique, `class` can spread across many different elements. This is especially useful when we have many components of HTML that we wish to be styled the same. 

After we add the `<div class="form-container">`, lets add our first piece of text, a `<h2>` element! This is also known as a "Header 2" element. There are many different types of Headers. It is best to think that the smaller the header number, the higher/larger that element will be. Within this `<h2>` element, add the text: "Welcome to the 2024 UAlbany IEEE Hackathon!". 

Generally, when we are developing we applications such as this form, we want to be able to see waht exactly we are working on visually. Browsers support viewing HTML files, and generally all you have to do is open your selected `.html` file by double clicking. Otherwise, you can manually input the path of the file in your browser, like so: `file://path/to/file/index.html`. Go ahead and do that now so we see our `<h2>` text!

After we add the `<h2>` text, lets add our first label and input to ask for the users First Name! Lets first add the label with the `<label>` tag. Don't forget to close it! Within the opening and closing `<label>`, lets add the text "First Name: " (with the space!). Lets add a `for` attribute set to "fname", which will tell the browser that this label is specifically made for the input we will be adding next. Next, add an `<input>` tag with the attritubes `type` set to `"text"`, `id` set to "fname", `name` set to "fname", and lastly, the word `required` without quotes surrounding it. The `for` attribute we set in the label element specifically binds to the `id` of the input element. The `type` is a built in tool that tells the HTML that only text should be entered into this input. The `name` is important as it tells our form what data is being submitted. `required` tells the browser that this input is needed within the form, and stops the user from submitting before this input has some text inputted.

Click on the box below to reveal what these input and labels should look like, but first, give it a good faith effort!

<details>
<summary>Label:</summary>
```html
<label for="fname">First Name: </label>
```
</details>

<details>
<summary>Input:</summary>

```html
<input type="text" id="fname" name="fname" required></input>
```
</details>


Lets add three more inputs for some additional information we would like! First, add another label with the text "Last Name:" and a for attribute set to "lname". Add another input with the tags id and name set to "lname", as well as `required`. Don't forget the type! The next input with the label "Email:" with the for attribute set to "email", and its input with the id and name set to "email" as well and `required`. Last, lets grab the student id, as that will help us keep track of which students attended. The label should have the text "Student ID:" with for element set to "sid", and its input with id and name also set to "sid" with `required`.

See the drop down below to see if you got it right!

<details>
<summary>Spoiler</summary>
 
```html
<label for="fname">First Name:</label>
<input type="text" id="fname" name="fname" value="Ruby" required>

<label for="lname">Last Name:</label>
<input type="text" id="lname" name="lname" value="Engelhart" required>

<label for="email">Email:</label>
<input type="text" id="email" name="email" value="re@gmail.com" required>

<label for="sid">Student ID:</label>
<input type="text" id="sid" name="sid" value="RE443322" required>
```
</details>


Sweet! Lets next ask the user what year of college they are in. We are going to stick to the basic four: Freshman, Sophomore, Junior, and Senior. Instead of asking the user to type in, I think some buttons would work much better. We are going to use something radio buttons, which are presented in groups where only one input is allowed. For instance, a student connot be both a freshman and sophomore.

After our last input element, lets add a title. Add a `<h4>` element and name it "Year of College:". Don't forget to close it!

Lets use another `<div>` element as well to seperate these buttons out. Git it a class attribute set to "radio-group". 

Within that `<div>` element, add antother FOUR `<div>` elements. They do not need a class. In the first `<div>` element lets ask if the user is a freshman. First, add an `<input>` element with the attributes: type set to "radio", id set to "freshman", name set to "year", value set to "0", and then add the word checked within the tag as well. This makes the default answer Freshman by checking this button for the user. After, add a `<label>` element with the the atribut for set to "freshman", and withing the opening and closing tags add the text "Freshman".

Make a good faith effort, then take a look to see if your implementation matched ming!

<details>
<summary>Freshman input</summary>
 
```html
<div>
    <input type="radio" id="freshman" name="year" value="0 checked>
    <label for="freshman">Freshman</label>
</div>
```
</details>

Lets add options for Sophomore, Junior, and Senior now!
Effectively, copy the freshman template, changing the appropriate attributes to match the year. The `value` attribute will increment by one, so Sophomore will have a value of 1, Junior 2, and Senior 3.

Once you are done, take a look at my code to see how you did!

<details>
<summary>Year of College</summary>

```html
<div class="radio-group">
             <div>
                <input type="radio" id="freshman" name="year" value="0" checked>
                <label for="freshman">Freshman</label>
             </div>
             <div>
                <input type="radio" id="sophomore" name="year" value="1">
                <label for="sophomore">Sophomore</label>
             </div>
             <div>
                 <input type="radio" id="junior" name="year" value="2">
                 <label for="junior">Junior</label>
             </div>
             <div>
                 <input type="radio" id="senior" name="year" value="3">
                 <label for="senior">Senior</label>
             </div>
</div>
```
</details>

Next, lets ask the user what events they wish to attend! Lets stick with three simple ones: Competition, Guest, or Web Development Workshop!

First, lets add another `<h4>` tag with the text "Events you wish to attend:". After, add a `<div>` with the class "checkbox-group". As you may have guessed, we are going to use checkboxes instead of radio buttons. Check boxes inheriently allow the user to select multiple options. So our user may want to both compete and participate in the Web Development Workshop. It may be silly to be all three, but oh well, we can deal with that when we are analyzing the results.

In this `div` with class "checkbox-group", add three empty `<div>` elements similar to how we did the radio buttons for the year of the user. Lets start with a checkbox for "Web Development Workshop".

Add an `<input>` element with the type set to "checkbox", id set to "web_dev_work_shop", name set to "event_1", and value set to "web_dev_wrk_shop". Under this input, add a `<label>` element withe the attribute for set to "web_dev_wrk_shp" and the inner text set to "Web Development Workshop". 

Try your best, then double check your work!

<details>
<summary>Web Development Workshop</summary>

```html
<div>
    <input types="checkbox" id="web_dev_wrk_shp" name="event_1" value="web_dev_wrk_shp">
    <label for="web_dev_wrk_shop">Web Development Workshop</label>
</div>
```
</details>

Awesome! Lets add the other two, "Competition" and "Guest".

Follow the similar pattern with "Web Development Workshop". "Competition" input should have the id attribute set to "competition", name set to "event_2", and value set to "competition". Its label tag should have the for attribute set to "competition", and inner text of "Competition". "Guest" input should have the id set to "guest", name set to "event_3", and value set to "guest". Its label should have the for attribute set to "guest", and inner text of "Guest".

Give it a go, then check your work!

<details>
<summary>Events you wish to attend:</summary>

```html
        <div class="checkbox-group">
            <div>
                <input type="checkbox" id="web_dev_wrk_shp" name="event_1" value="web_dev_wrk_shp">
                <label for="web_dev_wrk_shp">Web Development Workshop</label>
            </div>
            <div>
                <input type="checkbox" id="competition" name="event_2" value="competition">
                <label for="competition">Competition</label>
            </div>
            <div>
                <input type="checkbox" id="guest" name="event_3" value="guest">
                <label for="guest">Guest</label>
            </div>
        </div>
```
</details>












