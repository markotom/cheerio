
### Selectors

Cheerio's selector implementation is nearly identical to jQuery's, so the API is very similar.

#### $( selector, [context], [root] )
`selector` searches within the `context` scope which searches within the `root` scope. `selector` and `context` can be an string expression, DOM Element, array of DOM elements, or cheerio object. `root` is typically the HTML document string. 

This selector method is the starting point for traversing and manipulating the document. Like jQuery, it's the primary method for selecting elements in the document, but unlike jQuery it's built on top of the soup-select library, not the Sizzle engine. 

__Examples:__

    $(".apple", '#fruits').text()
    => Apple
  
    $('ul .pear').attr('class')
    => pear
  
    $('li[class=orange]').html()
    => <li class = "orange">Orange</li>


> See http://api.jquery.com/jQuery/ for more information
