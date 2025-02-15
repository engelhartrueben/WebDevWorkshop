# Setup
Check that you have python installed with `python --version`. If not, follow these steps:

## Ubuntu

`sudo apt install python`

## Windows

I highly recommend you use Windows Subsystem for Linux (WSL) for developing. 

To install WSL:

1. Open Windows terminal as admin

2. Type and run `wsl --install`

3. Run `wsl --list --online`

4. Install Ubuntu (I use v20) `wsl --install -d <Distribution Name>`

## Mac

You must have home brew installed!

1. Open terminal and run `$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

2. Insert homebrew at the top of your path like so `export PATH="/usr/local/opt/python/libexec/bin:$PATH"`

3. Then, install python with homebrew `brew install python`

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

We will first start by adding a `<form>` tag. This tag is useful because we can bundle all the submit logic into one element, rather than having to individually go through each input (think first name, last name, events, etc). `<form>` tags must be closed as well, looking like:

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

`id` is useful as it allows us to "query" this tag (sometimes called an element). This will become helpful later. 

NOTE: All `strings` in HTML should be wrapped in double quotes ("...")
