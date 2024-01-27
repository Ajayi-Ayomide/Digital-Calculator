function cee(parameter) {
    document.getElementById('show').innerHTML += parameter;	
}
function clear() {
    document.getElementById('show').innerHTML = '';
}
function backSpace() {
    let lop = document.getElementById('show').innerHTML
    newLop = lop.slice(0, -1)
    document.getElementById('show').innerHTML = newLop
}
function calculate() {
    let lop = document.getElementById('show').innerHTML =eval(document.getElementById('show').innerHTML)
}