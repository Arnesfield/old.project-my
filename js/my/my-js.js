function getClasses(e, n, regex) {
    var classes = "";
    e.attr('class').split(' ').forEach(function(f) {
        if (f.match(regex)) {
            classes += f.substring(n) + " ";
            e.removeClass(f);
        }
    });
    return classes;
}

// my add
// this lets you transfer styles from parent to child (or even grandchildren)
while ($('[class*="--"]').length) {
    $('[class*="--"]').each(function(i, obj) {
        $(this).children().not('.-no-my').addClass(getClasses($(this), 1, /--/));
    });
}

// my no
// this lets you remove classes succeeding the "-no" class
while ($('[class*="-no-"]').length) {
    $('[class*="-no-"]').each(function(i, obj) {
        $(this).removeClass( getClasses($(this), 3, /^-no-/) );
    });
}
