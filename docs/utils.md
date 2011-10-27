### Utilities

#### $.dom()
Get the raw DOM of the parsed HTML document.

    $.dom()
    => [ { raw: 'ul id="fruits"',
        data: 'ul id="fruits"',
        type: 'tag',
        name: 'ul',
        attribs: { id: 'fruits' },
        children: 
         [ [Object],
           [Object],
           [Object],
           [Object],
           [Object],
           [Object],
           [Object] ],
        parent: null,
        prev: null,
        next: null } ]

#### $.isArray( array )
Checks to see the passed argument is an array.

    $.isArray( $.dom() )
    => true

#### $.inArray( elem, arr )
Checks to see if the element is in the array

#### $.makeArray( obj )
Turns an array-like object (like $) into a native array.
    
#### $.each( obj, function(index, elem) )
Generic iterator function.

#### $.merge( one, two )
Merge the contents of two arrays together into the first array.

