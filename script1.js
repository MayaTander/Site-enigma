document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = 'entrar';

        if (senha === senhaCorreta) {
            window.location.href = 'index2.html';
        } else {
            alert('Errrrrrrrrrrroouuuuuu');
        }
    }
});
