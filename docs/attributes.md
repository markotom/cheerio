### Attributes

#### .attr( name, value )
Method for getting and setting attributes. May also use a `map` and `function` like jQuery. Gets the attribute value for only the first element in the matched set. If you set an attribute's value to `null`, you remove that attribute.

    $('ul').attr('id')
    => fruits

    $('.apple').attr('id', 'favorite').html()
    => <li class = "apple" id = "favorite">Apple</li>

> See http://api.jquery.com/attr/ for more information

#### .removeAttr( name )
Method for removing attributes by `name`.

    $('.pear').removeAttr('class').html()
    => <li>Pear</li>

#### .hasClass( className )
Check to see if *any* of the matched elements have a given `className`.

    $('.pear').hasClass('pear')
    => true

    $('apple').hasClass('fruit')
    => false

    $('li').hasClass('pear')
    => true
  
#### addClass( className )
Adds class(es) to all of the matched elements. Also accepts a `function` like jQuery.

    $('.pear').addClass('fruit').html()
    => <li class = "pear fruit">Pear</li>

    $('.apple').addClass('fruit red').html()
    => <li class = "apple fruit red">Apple</li>

> See http://api.jquery.com/addClass/ for more information.

#### removeClass( [className] )
Removes one or more space-separated classes from the selected elements. If no `className` is defined, all classes will be removed. Also accepts a `function` like jQuery.

    $('.pear').removeClass('pear').html()
    => <li class = "">Pear</li>

    $('.apple').addClass('red').removeClass().html()
    => <li class = "">Apple</li>
    
> See http://api.jquery.com/removeClass/ for more information.

