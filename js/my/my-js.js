function getClasses(e, n, my, regex) {
    var classes = "";
    e.attr('class').split(' ').forEach(function(f) {
        if (f.match(regex)) {
            var s = f.substring(n);
            classes += ( (!s.match(/^--/) && !my) ? s.substring(1) : s ) + " ";
            e.removeClass(f);
        }
    });
    return classes;
}

// param my is false if you're not using my
function initMy(my) {
    
    // my add
    // this lets you transfer styles from parent to child (or even grandchildren)
    while ($('[class*="--"]').length) {
        $('[class*="--"]').each(function(i, obj) {
            $(this).children().not('.-no-my').addClass(getClasses($(this), 1, my, /--/));
        });
    }

    // my no
    // this lets you remove classes succeeding the "-no" class
    while ($('[class*="-no-"]').length) {
        $('[class*="-no-"]').each(function(i, obj) {
            $(this).removeClass( getClasses($(this), 3, my, /^-no-/) );
        });
    }

}
