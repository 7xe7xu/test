document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var consolas = document.querySelectorAll('.consola');
    var marcas = document.querySelectorAll('.marca');

    consolas.forEach(function(consola) {
        var marca = consola.querySelector('.marca').textContent.toLowerCase();
        var modelo = consola.querySelector('.consola span').textContent.toLowerCase();
        if (marca.includes(searchValue) || modelo.includes(searchValue)) {
            consola.style.display = '';
        } else {
            consola.style.display = 'none';
        }
    });

    marcas.forEach(function(marca) {
        var marcaTexto = marca.querySelector('h2').textContent.toLowerCase();
        if (marcaTexto.includes(searchValue)) {
            marca.style.display = '';
        } else {
            marca.style.display = 'none';
        }
    });
});
