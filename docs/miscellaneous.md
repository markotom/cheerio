
### Miscellaneous 
DOM element methods that don't fit anywhere else

#### .get( [index] )
Retrieve the DOM elements matched by the cheerio object. If no index is specified, it will get an array of all matched elements.

    $('li').get(0)
    => { raw: 'li class="apple"', ... }
    
    $('li').get()
    => [ {...}, {...}, {...} ]
    
#### .size()
Return the number of elements in the cheerio object. Same as `length`.

    $('li').size()
    => 3
    
#### .toArray()
Retrieve all the DOM elements contained in the jQuery set, as an array.

    $('li').toArray()
    => [ {...}, {...}, {...} ]