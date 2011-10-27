# cheerio

Tiny, fast, and elegant implementation of core jQuery designed specifically for the server. 

## Introduction
Teach your server HTML.

    var cheerio = require("cheerio"),
        $ = cheerio.load("<h2 class = 'title'>Hello world</h2>")
  
    $('h2.title').text('Hello there!')
    $('h2').addClass('welcome')

    $.html() 
    => <h2 class = "title welcome">Hello there!</h2>


## Installation
`npm install cheerio`

... or to install the package globally:

`npm install -g cheerio`

## Features
__&#10084; Familiar syntax:__
Cheerio implements a subset of core jQuery. Cheerio removes all the DOM inconsistencies and browser cruft from the jQuery library, revealing a truly gorgeous API. 

__&#991; Blazingly fast:__
Cheerio works with a very simple, consistent DOM model. As a result parsing, manipulating, and rendering are incredibly efficient. Preliminary end-to-end benchmarks suggest that cheerio is about 8x faster than JSDOM.

__&#10049; Insanely flexible:__
Cheerio wraps around @tautologistics forgiving htmlparser. Cheerio can parse nearly any page or chunk of html or xml.

## What about JSDOM?
I wrote cheerio because I found myself increasingly frustrated with JSDOM. For me, there were three main sticking points that I kept running into again and again:

__&#8226; JSDOM's built-in parser is too strict:__
  JSDOM's bundled HTML parser cannot handle many popular sites out there today.

__&#8226; JSDOM is too slow:__
Parsing big websites with JSDOM has a noticeable delay.

__&#8226; JSDOM feels too heavy:__
The goal of JSDOM is to provide an identical DOM environment as what we see in the browser. I never really needed all this, I just wanted a simple, familiar way to do HTML manipulation.

## API

### Markup example we'll be using:

    <ul id = "fruits">
      <li class = "apple">Apple</li>
      <li class = "orange">Orange</li>
      <li class = "pear">Pear</li>
    </ul>


