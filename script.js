var a = " ";
var b = " ";
var sum = " ";
var prev = 0;
var str = " ";
var val = 0;
var acc = 0;

function one() {
    if (prev == 0) {
        a += '1';
    } else {
        b += '1';
    }
    str = document.getElementById("display").value = str + '1';
}

function two() {
    if (prev != 0) {
        b += '2';
    } else {
        a += '2';
    }
    str = document.getElementById("display").value = str + '2';
}

function three() {
    if (prev == 0) {
        a += '3';
    } else {
        b += '3';
    }
    str = document.getElementById("display").value = str + '3';
}

function four() {
    if (prev == 0) {
        a += '4';
    } else {
        b += '4';
    }
    str = document.getElementById("display").value = str + '4';
}

function five() {
    if (prev == 0) {
        a += '5';
    } else {
        b += '5';
    }
    str = document.getElementById("display").value = str + '5';
}

function six() {
    if (prev == 0) {
        a += '6';
    } else {
        b += '6';
    }
    str = document.getElementById("display").value = str + '6';
}

function seven() {
    if (prev == 0) {
        a += '7';
    } else {
        b += '7';
    }
    str = document.getElementById("display").value = str + '7';
}

function eight() {
    if (prev == 0) {
        a += '8';
    } else {
        b += '8';
    }
    str = document.getElementById("display").value = str + '8';
}

function nine() {
    if (prev == 0) {
        a += '9';
    } else {
        b += '9';
    }
    str = document.getElementById("display").value = str + '9';
}

function zero() {
    if (prev == 0) {
        a += '0';
    } else {
        b += '0';
    }
    str = document.getElementById("display").value = str + '0';
}

function add() {
    if (prev != 0) {
        if (prev == '+') {
            sum = parseInt(a) + parseInt(b);
        } else if (prev == "-") {
            sum = parseInt(a) - parseInt(b);
            prev = '+';
        } else if (prev == "*") {
            sum = parseInt(a) * parseInt(b);
            prev = '+';
        } else {
            sum = parseInt(a) / parseInt(b);
            prev = '+';
        }
        a = sum;
        b = 0;
    } else {
        prev = '+';
    }
    str = document.getElementById("display").value = str + prev;
}

function sub() {
    if (prev != 0) {
        if (prev == '+') {
            sum = parseInt(a) + parseInt(b);
            prev = '-';
        } else if (prev == "-") {
            sum = parseInt(a) - parseInt(b);
        } else if (prev == "*") {
            sum = parseInt(a) * parseInt(b);
            prev = '-';
        } else {
            sum = parseInt(a) / parseInt(b);
            prev = '-';
        }
        a = sum;
        b = 0;
    } else {
        prev = '-';
    }
    str = document.getElementById("display").value = str + prev;
}

function mul() {
    if (prev != 0) {
        if (prev == '+') {
            sum = parseInt(a) + parseInt(b);
            prev = '*';
        } else if (prev == "-") {
            sum = parseInt(a) - parseInt(b);
            prev = '*';
        } else if (prev == "*") {
            sum = parseInt(a) * parseInt(b);
        } else {
            sum = parseInt(a) / parseInt(b);
            prev = '*';
        }
        a = sum;
        b = 0;
    } else {
        prev = '*';
    }
    str = document.getElementById("display").value = str + prev;
}

function divi() {
    if (prev != 0) {
        if (prev == '+') {
            sum = parseInt(a) + parseInt(b);
            prev = '/';
        } else if (prev == "-") {
            sum = parseInt(a) - parseInt(b);
            prev = '/';
        } else if (prev == "*") {
            sum = parseInt(a) * parseInt(b);
            prev = '/';
        } else {
            sum = parseInt(a) / parseInt(b);
        }
        a = sum;
        b = 0;
    } else {
        prev = '/';
    }
    str = document.getElementById("display").value = str + prev;
}

function fun() {
    if (prev == '+') {
        sum = parseInt(a) + parseInt(b);
    } else if (prev == "-") {
        sum = parseInt(a) - parseInt(b);
    } else if (prev == "*") {
        sum = parseInt(a) * parseInt(b);
    } else {
        sum = parseInt(a) / parseInt(b);
    }
    document.getElementById("input").value = sum;
}
