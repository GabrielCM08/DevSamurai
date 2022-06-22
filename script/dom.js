var digaOla = function() {
    var texto = document.getElementById('campo').value

    console.log(texto)
};

var obj = document.getElementById('botao');
obj.addEventListener('click', digaOla);
