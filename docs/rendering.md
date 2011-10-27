
### Rendering
When you're ready to render the document, you can use `html` utility function:

    $.html()
    =>  <ul id = "fruits">
          <li class = "apple">Apple</li>
          <li class = "orange">Orange</li>
          <li class = "pear">Pear</li>
        </ul>

If you want to render just a piece of the document you can use selectors:

    $('.pear').html()
    => <li class = "pear">Pear</li>