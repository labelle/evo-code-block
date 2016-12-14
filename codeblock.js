$(document).ready(function() {
    // Grabs all the blocks
    var codeBlocks = document.getElementsByClassName("evo-codeblock");
    // Checks for blocks
    if (codeBlocks.length > 0 ) {
        // Loops through each block
        Array.prototype.forEach.call(codeBlocks, function() {
            // Grabs the identifier based on being first in order.
            var identifier = codeBlocks[0].attributes[0].nodeValue;
            // Get the html for the div with matching identifier
            var html = $( '[data-identifier=' + identifier + ']').html();
            // Fills the html in the target.
            $('.evo-codeblock-' + identifier + '-target pre code').text(html);
        });
    }
});
