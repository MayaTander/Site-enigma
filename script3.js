document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = 'tornei-me a morte, a destruidora dos mundos';

        if (senha.toLowerCase() === senhaCorreta.toLowerCase()) {
            window.location.href = 'index4.html';
        } else {
            alert('Errrrrrrrrrrroouuuuuu');
        }
    }
});
