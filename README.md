<h1>Cheerio</h1>

<p>Fast, elegant, and tiny server-side implementation of jQuery. </p>

<h2>Introduction</h2>

<p>Teach your server HTML:</p>

<pre><code>var cheerio = require("cheerio"),
    $ = cheerio.load("&lt;h2 class = "title"&gt;Hello world&lt;/h2&gt;");

$('h2.title').text('Hello there!'); 
$('h2').addClass('welcome');

$.html() // "&lt;h2 class = "title welcome"&gt;Hello there!&lt;/h2&gt;"
</code></pre>

<h2>Installation</h2>

<p><code>npm install cheerio</code></p>

<p>... or to install the package globally:</p>

<p><code>npm install -g cheerio</code></p>

<h2>What about JSDOM!?</h2>

<p>I wrote Cheerio because I found myself increasingly frustrated with JSDOM. For me, there were three main sticking points that I kept running into again and again:</p>

<h3>• JSDOM's built-in parser is too strict</h3>

<p>JSDOM's bundled HTML parser cannot handle many popular sites out there today.</p>

<h3>• JSDOM is too slow.</h3>

<p>Parsing big websites with JSDOM has a noticeable delay.</p>

<h3>• JSDOM feels too heavy.</h3>

<p>The goal of JSDOM is to provide an identical DOM environment as what we see in the browser. I never really needed all this, I just wanted a simple, familiar way to do HTML manipulation.</p>

<h2>Features</h2>

<h3>• Familiar syntax</h3>

<p>Cheerio implements a subset of core jQuery. Cheerio removes all the DOM inconsistencies and browser cruft for the jQuery library, revealing a truly gorgeous API. </p>

<h3>• Blazingly fast</h3>

<p>Cheerio works with a very simple DOM model. As a result parsing, manipulating, and rendering are incredibly efficient. Preliminary end-to-end benchmarks suggest Cheerio is about 8x faster than JSDOM.</p>

<h3>• Insanely flexible</h3>

<p>Cheerio wraps around tautologies forgiving htmlparser. Cheerio can parse nearly any page or chunk of html.</p>

<h2>License</h2>

<p>(The MIT License)</p>

<p>Copyright (c) 2011 Matt Mueller &lt;<a href='mailto:mattmuelle@gmail.com'>mattmuelle@gmail.com</a>&gt;</p>

<p>Permission is hereby granted, free of charge, to any person obtaining<br />a copy of this software and associated documentation files (the<br />'Software'), to deal in the Software without restriction, including<br />without limitation the rights to use, copy, modify, merge, publish,<br />distribute, sublicense, and/or sell copies of the Software, and to<br />permit persons to whom the Software is furnished to do so, subject to<br />the following conditions:</p>

<p>The above copyright notice and this permission notice shall be<br />included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,<br />EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF<br />MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.<br />IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY<br />CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,<br />TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE<br />SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
