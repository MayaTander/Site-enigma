document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = 'escuridão';

        if (senha.toLowerCase() === senhaCorreta.toLowerCase()) {
            window.location.href = 'indexrec.html';
        } else {
            alert('Errrrrrrrrrrroouuuuuu');
        }
    }
});
