document.getElementById("plus").onclick = function () {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var result = document.getElementById("result");
    var c = parseInt(a) + parseInt(b);
    result.value = c;
} //addition

document.getElementById("minus").onclick = function () {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var result = document.getElementById("result");
    var c = parseInt(a) - parseInt(b);
    result.value = c;
} //subtraction

document.getElementById("multiply").onclick = function () {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var result = document.getElementById("result");
    var c = parseInt(a) * parseInt(b);
    result.value = c;
} //multiplication

document.getElementById("divide").onclick = function () {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if (b == 0) { //check divided by 0
        window.alert("cannot divide by 0");
    } else {
        var result = document.getElementById("result");
        var c = parseFloat(a) / parseFloat(b);
        result.value = c;
    }
} //division

document.getElementById("sqrt").onclick = function () {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var result = document.getElementById("result");
    parseInt(a);
    var c = Math.sqrt(a);
    result.value = c;
}