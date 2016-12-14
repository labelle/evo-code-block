$(document).ready(function() {
    // Grabs all the blocks
    var codeBlocks = document.getElementsByClassName("evo-codeblock");
    // Checks for blocks
    if (codeBlocks.length > 0 ) {
        // Loops through each block
        $('.evo-codeblock').each(function() {
            // Grabs the identifier based on being first in order.
            var identifier = $(this).attr('data-identifier');
            // Get the html for the div with matching identifier
            var html = $('[data-identifier=' + identifier + ']').html();
            // Fills the html in the target.
            $('[data-target=' + identifier + '] pre code').text(html);
        });
    }
});
