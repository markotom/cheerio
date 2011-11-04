
### Traversing

#### .find(selector)
Get a set of descendants filtered by `selector` of each element in the current set of matched elements.

    $('#fruits').find('li').size()
    => 3

#### .parent()
Gets the parent of the first selected element.

    $('.pear').parent().attr('id')
    => fruits

#### .next()
Gets the next sibling thats an element of the first selected element.

    $('.apple').next().hasClass('orange')
    => true
    
#### .prev()
Gets the previous sibling thats an element of the first selected element.

    $('.orange').prev().hasClass('apple')
    => true

#### .siblings()
Gets the first selected element's siblings, excluding itself.

    $('.pear').siblings().length
    => 2
    
#### .children()
Gets the children of the first selected element.

    $('#fruits').children().length
    => 3

#### .each( function(index, element) )
Iterates over a cheerio object, executing a function for each matched element. When the callback is fired, the function is fired in the context of the DOM element, so `this` refers to the current element, which is equivalent to the function parameter `element`.

    var fruits = [];
    
    $('li').each(function(i, elem) {
      fruits[i] = $(this).text();
    });
    
    fruits.join(', ');
    => Apple, Orange, Pear

