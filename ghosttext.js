/**
 * Input field ghost text
 * 
 * Use to display ghost text in an input field until the field gets focus.
 * When field loses focus, if field is empty, ghost will be displayed.
 * @example
 * <.. ghost="Search..."> - Display "Search..." in this input field
 * 
 * @requires
 * jquery.js
 * jquery.livequery.js
 */

var ghostTag = 'ghost', ghostSelector = '['+ghostTag+']';

	$(ghostSelector).livequery(function() {
        //set for first time
        if ($(this).val() == "") {
            $(this).val($(this).attr(ghostTag));
            $(this).addClass("ghost_text");
        }
        if ($(this).val() == $(this).attr(ghostTag)) {
            $(this).addClass("ghost_text");
        }

        $(this).focus(function() {
            if ($(this).attr(ghostTag) == $(this).val()) {
                $(this).val("");
                $(this).addClass("focus");
            }
        });
        $(this).blur(function() {
            if ($(this).val() == "") {
                $(this).val($(this).attr(ghostTag));
                $(this).addClass("ghost_text");
			 $(this).removeClass("focus");
            }
        });
    });
