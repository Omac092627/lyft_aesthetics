'use strict';

$('#lips').on('click', fadeIn());

function fadeIn() {
    $('#lyft').hide();
    $('#lyft').fadeIn(1000);
    $('#scroll').hide();
    $('#scroll').fadeIn(9000);
}