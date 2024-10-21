var varno1 = document.getElementById('textno1');
var varno2 = document.getElementById('textno2');
var varresult = document.getElementById('textres');

function plus_click(e) {
    var no1 = varno1.value;
    var no2 = varno1.value;
    var res = parseInt(varno1.value) + parseInt(varno2.value);
    varresult.value = res;
}

function minous_click(e) {
    var no1 = varno1.value;
    var no2 = varno1.value;
    var res = parseInt(varno1.value) - parseInt(varno2.value);
    varresult.value = res;
}

function mulltiply_click(e) {
    var no1 = varno1.value;
    var no2 = varno1.value;
    var res = parseInt(varno1.value) * parseInt(varno2.value);
    varresult.value = res;
}

function divide_click(e) {
    var no1 = varno1.value;
    var no2 = varno1.value;
    var res = parseInt(varno1.value) / parseInt(varno2.value);
    varresult.value = res;
}