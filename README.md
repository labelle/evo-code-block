# evo - Multi-line code block

## Summary

Block that will show multiple lines of code. It looks for an identifier and then grabs the html.  

#### Dependency
* Jquery - Reference it in the document.  Any path could be used so if the jQuery files are local just adjust the path to fit.
````shell
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
````

## Setup 

* Wrap the HTML you want to show with a div tag that has the class "evo-codeblock".  That div will need an identifier which will be called "data-identifier".  The identifier is how it will link to the target box that shows it.  The codeblock displaying the HTML will have the identifier in it's class. Place the data-identifier first in the order of attributes inside the div.  See example below.

* Add the reference to the stylesheet and set it's pathway.

* Add the reference to the javascript file and set it's pathway.

####Example

In the example below the identifier is set to "list".  The div is placed around the HTML you want to display.  Everything within that div will then be displayed in the codeblock. 
````shell
<!-- Start Example -->
<div data-identifier="list" class="evo-codeblock"><!-- the identifier is set there -->
  <ul>
    <li>First item</li>
    <li>Second clear</li>
    <li>Third item</li>
    <li>Fourth item</li>
  </ul>
</div>
<!-- End Example -->
````
Then the codeblock that will show this HTML.  A div with a pre tag inside to format the html.

````shell
<!-- the identifier is matched by the class in the codeblock's target.  The position needs to stay the same.  After codeblock, before target -->
<div class="evo-codeblock-list-target">
    <pre>
        <code>
            <!-- HTML will show up inside here -->  
        </code>
    </pre>
</div>
````
This will produce the screenshot at the end of this readme.

## Structure

#### Index.html
> Contains an example of an html section wrapped with the identifer needed.

#### codeblock.js
> Conatins the javascript needed to put the code into the codeblock on page load.

#### codeblock-style.css
> Contains the styles used

## Screenshot

![inline codeblock](./img/multilinecodeblock.png "inline codeblock")