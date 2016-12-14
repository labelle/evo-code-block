# evo - Multi-line code block

## Summary

Block that will show multiple lines of code. It looks for an identifier and then grabs the html.  

#### Dependency
* Jquery - Reference it in the document.  Any path could be used so if the jQuery files are local just adjust the path to fit.
````shell
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
````

## Setup 

* Wrap the HTML you want to show with a div tag that has the class "evo-codeblock".  That div will need an identifier which will be called "data-identifier".  The identifier is how it will link to the target box that shows it.  The codeblock displaying the HTML will have an attribute "data-target" that must match the identifier of the section you want to show in the block. See example below.

* Add the reference to the stylesheet and set it's pathway.

* Add the reference to the javascript file and set it's pathway.

####Example

The main focus is on the identifier/target pairing.  The identifier marks the section and then that code will get placed in the matching target.

````shell
data-identifier="list"
data-target="list"
````

In the example below the identifier is set to "list".  The div is placed around the HTML you want to display.  Everything within that div will then be displayed in the target codeblock. 
````shell
<!-- Start Example -->
<div class="evo-codeblock" data-identifier="list"><!-- the identifier is set there -->
  <ul>
    <li>First item</li>
    <li>Second clear</li>
    <li>Third item</li>
    <li>Fourth item</li>
  </ul>
</div>
<!-- End Example -->
````
Then the codeblock with a data-target to match the identifier will show the HTML.  A div with a pre tag and then code tage inside to format the html.

````shell
<!-- the identifier is matched by the class in the codeblock's target.  The position needs to stay the same.  After codeblock, before target -->
<div class="evo-codeblock-target" data-target="list">
    <pre>
        <code>
            <!-- HTML will show up inside here -->  
        </code>
    </pre>
</div>
````

#### Code tag classes
This code tag can have all the same classes as the inline block.

>No class on the code tag fullscreen

![inline codeblock](./img/multilinecodeblock.png "inline codeblock")

>No class on the code tag small screen

![inline codeblock](./img/smallscreenmultiline.png "inline codeblock")


>class="nowrap" on the code tag removes text wrapping causing the box to scroll if needed.


>class="short" on the code tag

![inline codeblock](./img/shortclassonmultiline.png "inline codeblock")

>class="darktheme" on the code tag

![inline codeblock](./img/multilinedarktheme.png "inline codeblock")

>class="darktheme short" on the code tag

![inline codeblock](./img/darkthemeshortmultiline.png "inline codeblock")

## Structure

#### Index.html
> Contains an example of an html section wrapped with the identifer needed.

#### codeblock.js
> Conatins the javascript needed to put the code into the codeblock on page load.

#### codeblock-style.css
> Contains the styles used

## Screenshot

![inline codeblock](./img/multilinecodeblock.png "inline codeblock")