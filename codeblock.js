$(document).ready(function() {

    var codeBlocks = document.getElementsByClassName("evo-codeblock");

    if (codeBlocks.length > 0 ) {
        Array.prototype.forEach.call(codeBlocks, function() {
            // This needs to be fixed, position cannot be trusted
            var identifier = codeBlocks[0].attributes[0].nodeValue;
            var html = $( '[data-identifier=' + identifier + ']').html();
            $('.evo-codeblock-' + identifier + '-target pre code').text(html);
        });
    }
});
