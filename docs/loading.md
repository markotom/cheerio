
### Loading
First you need to load in the HTML. This step in jQuery is implicit, since jQuery operates on the one, baked-in DOM. With Cheerio, we need to pass in the HTML document. 

This is the preferred method:
    
    var cheerio = require('cheerio'),
        $ = cheerio.load('<ul id = "fruits">...</ul>');

Optionally, you can also load in the HTML by passing the string as the context:

    $ = require('cheerio');
    $('ul', '<ul id = "fruits">...</ul>');

Or as the root:

    $ = require('cheerio');
    $('li', 'ul', '<ul id = "fruits">...</ul>');