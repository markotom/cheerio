# Cheerio

Fast, elegant, and tiny implementation of core jQuery built specifically for the server. 


## Introduction
Teach your server HTML:

    var cheerio = require("cheerio"),
        $ = cheerio.load("<h2 class = "title">Hello world</h2>")
  
    $('h2.title').text('Hello there!')
    $('h2').addClass('welcome')

    $.html() 
    => <h2 class = "title welcome">Hello there!</h2>


## Installation
`npm install cheerio`

... or to install the package globally:

`npm install -g cheerio`

## Features
__• Familiar syntax__
Cheerio implements a subset of core jQuery. Cheerio removes all the DOM inconsistencies and browser cruft for the jQuery library, revealing a truly gorgeous API. 

__• Blazingly fast__
Cheerio works with a very simple DOM model. As a result parsing, manipulating, and rendering are incredibly efficient. Preliminary end-to-end benchmarks suggest Cheerio is about 8x faster than JSDOM.

__• Insanely flexible__
Cheerio wraps around tautologies forgiving htmlparser. Cheerio can parse nearly any page or chunk of html.

## What about JSDOM!?
I wrote Cheerio because I found myself increasingly frustrated with JSDOM. For me, there were three main sticking points that I kept running into again and again:

__• JSDOM's built-in parser is too strict__
  JSDOM's bundled HTML parser cannot handle many popular sites out there today.

__• JSDOM is too slow__
Parsing big websites with JSDOM has a noticeable delay.

__• JSDOM feels too heavy__
The goal of JSDOM is to provide an identical DOM environment as what we see in the browser. I never really needed all this, I just wanted a simple, familiar way to do HTML manipulation.

## API

### Markup example we'll be using:

    <ul id = "fruits">
      <li class = "apple">Apple</li>
      <li class = "orange">Orange</li>
      <li class = "pear">Pear</li>
    </ul>


