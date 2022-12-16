const smallbox = document.getElementById('smallbox');
var bordercollision = 450;

smallbox.style.top = '0px';
smallbox.style.left = '0px';
smallbox.style.height = '50px';
smallbox.style.width = '50px';

function up() {
    var top = parseInt(smallbox.style.top);
    if (top > 0) {
        smallbox.style.top = (top - 10) + 'px';
    }
}

function down() {
    var top = parseInt(smallbox.style.top);
    if (top < bordercollision) {
        smallbox.style.top = (top + 10) + 'px';
    }

}

function left() {
    var left = parseInt(smallbox.style.left);
    if (left > 0) {
        smallbox.style.left = (left - 10) + 'px';
    }
}

function right() {
    var left = parseInt(smallbox.style.left);
    if (left < bordercollision) {
        smallbox.style.left = (left + 10) + 'px';
    }
}
