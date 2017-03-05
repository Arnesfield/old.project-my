// this script lets you transfer styles from parent to child (or even grandchildren)

function getClasses(e) {
    var parentClasses = e.attr('class').split(' ');
    var classes = "";
    parentClasses.forEach(function(f) {
        if (f.match(/--/)) {
            classes += f.substring(1) + " ";
            e.removeClass(f);
        }
    });
    return classes;
}

while ($('[class*="--"]').length) {
    $('[class*="--"]').each(function(i, obj) {
        $(this).children().addClass( getClasses($(this)) );
    });
}
