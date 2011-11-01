
### Manipulation
Methods for modifying the DOM structure.

#### .append( content, [content, ...] )
Inserts content as the *last* child of each of the selected elements.

    $('ul').append('<li class = "plum">Plum</li>')
    $.html()
    =>  <ul id = "fruits">
          <li class = "apple">Apple</li>
          <li class = "orange">Orange</li>
          <li class = "pear">Pear</li>
          <li class = "plum">Plum</li>
        </ul>

#### .prepend( content, [content, ...] )
Inserts content as the *first* child of each of the selected elements.

    $('ul').prepend('<li class = "plum">Plum</li>')
    $.html()
    =>  <ul id = "fruits">
          <li class = "plum">Plum</li>
          <li class = "apple">Apple</li>
          <li class = "orange">Orange</li>
          <li class = "pear">Pear</li>
        </ul>
        
#### .after( content, [content, ...] )
Insert content next to each element in the set of matched elements. 

    $('.apple').after('<li class = "plum">Plum</li>')
    $.html()
    =>  <ul id = "fruits">
          <li class = "apple">Apple</li>
          <li class = "plum">Plum</li>
          <li class = "orange">Orange</li>
          <li class = "pear">Pear</li>
        </ul>
        
#### .before( content, [content, ...] )
Insert content previous to each element in the set of matched elements. 

    $('.apple').before('<li class = "plum">Plum</li>')
    $.html()
    =>  <ul id = "fruits">
          <li class = "plum">Plum</li>
          <li class = "apple">Apple</li>
          <li class = "orange">Orange</li>
          <li class = "pear">Pear</li>
        </ul>

#### .remove( [selector] )
Removes the set of matched elements from the DOM and all their children. `selector` filters the set of matched elements to be removed.

    $('.pear').remove()
    $.html()
    =>  <ul id = "fruits">
          <li class = "plum">Plum</li>
          <li class = "apple">Apple</li>
          <li class = "orange">Orange</li>
        </ul>
        
#### .empty()
Empties an element, removing all it's children.

    $('ul').empty()
    $.html()
    =>  <ul id = "fruits"></ul>
    
#### .html( [htmlString] )
Gets an html content string from the first selected element. If `htmlString` is specified, each selected element's content is replaced by the new content.

    $('.orange').html()
    => <li class = "orange">Orange</li>
    
    $('#fruits').html('<li class = "mango">Mango</li>').html()
    =>  <ul id="fruits">
          <li class="mango">Mango</li>
        </ul>
        
#### .text( [textString] )
Get the combined text contents of each element in the set of matched elements, including their descendants.. If `textString` is specified, each selected element's content is replaced by the new text content.

    $('.orange').text()
    => Orange
    
    $('ul').text()
    =>  Apple
        Orange
        Pear
