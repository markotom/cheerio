## API

### Load
First you need to load in the HTML. This step in jQuery is implicit, since jQuery operates on the one, baked-in DOM.

`$ = cheerio.load( HTMLString )`

Optionally, you can also load in the HTML by passing the string as the context

`$("h2", "<h2>Movies Tonight</h2>")`

Or as the root

`$(".ghostly", "h2", "<p>Are you ready for this <span class = "ghostly">scary</span> movie?</p>")`


### Selectors

Cheerio's selector implementation is nearly identical to jQuery's, so the API is very similar

#### $( selector [, context] )
*selector* A string containing a selector expression
*context* A DOM Element, Document, or jQuery to use as context

#### $( element )
*element* A DOM element to wrap in a jQuery object.

#### $( elementArray )
*elementArray* An array containing a set of DOM elements to wrap in a jQuery object.

#### $( Cheerio object )
*Cheerio object* An existing Cheerio object to clone.

#### $()
Returns an empty *Cheerio object*

---
#### Example:
The markup:

    <div id="wrapper">
      <h1 class="title">Batman</h1>
      <p class="summary">This is a really cool movie you should go see it.</p>
      <a href="purchase.html">Click here to buy tickets</a>
    </div>

Selectors in action: 

    $(".title", '#wrapper).text() // Batman
    $('#wrapper summary').attr('class') // summary
    $('a[href=*.html]').html() // <a href="purchase.html">Click here to buy tickets</a>

### Traversing
