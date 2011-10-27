### Load
First you need to load in the HTML. This step in jQuery is implicit, since jQuery operates on the one, baked-in DOM. With Cheerio, we need to pass in the HTML document. This is the preferred method:
    
    var cheerio = require('cheerio'),
        $ = cheerio.load( '<h2>Fruits on <em>Sale</em></h2>' )

Optionally, you can also load in the HTML by passing the string as the context:

    $ = require('cheerio')
    $('h2', '<h2>Fruits on <em>Sale</em></h2>')

Or as the root:

    $ = require('cheerio')
    $('em', 'h2', '<h2>Fruits on <em>Sale</em></h2>')
    
