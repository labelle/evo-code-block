# evo - Multi-line code block

## Summary

Block that will show multiple lines of code. It looks for an identifier and then grabs the html.  

#### Dependency
* Jquery - Reference it in the document.  Any path could be used so if the jQuery files are local just adjust the path to fit.
````shell
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
````

## Setup 

* Wrap the HTML you want to show with a div tag that has the class "evo-codeblock-multiline".  Add the class of "evo-codeblock-multiline-taget" to the multi line codeblock.  The code will be grabbed on page load and loaded into the multi line code block below it.

    * On a page containing multiple blocks this would need to be adjusted with a unique identifier.  In place of "evo-codeblock-multiline", "evo-codeblock-multiline-1" could be used.  Any unique identifer would work so, for example, a more descriptive identifier like "evo-codeblock-multiline-tableff" would be fine as well.  The target  needs to have the matching identifier.  In the previous example the target would need the class "evo-codeblock-multiline-tableff-taget".

* Add the reference to the stylesheet and set it's pathway.

* Add the reference to the javascript file and set it's pathway.

## Structure

#### Index.html
> Contains an example of an html section wrapped with the identifer needed.

#### codeblock.js
> Conatins the javascript needed to put the code into the codeblock on page load.

#### codeblock-style.css
> Contains the styles used

## Screenshot