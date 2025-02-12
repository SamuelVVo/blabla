document.addEventListener('DOMContentLoaded', function() {
    const mensaje1 = document.getElementById('mensaje1');
    const mensaje2 = document.getElementById('mensaje2');
    const button = document.getElementById('toggleButton');
    let showFirstMessage = true;

    function toggleMessages() {
        if (showFirstMessage) {
            mensaje1.classList.remove('active');
            mensaje2.classList.add('active');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            mensaje2.classList.remove('active');
            mensaje1.classList.add('active');
            document.body.style.backgroundColor = 'lightblue';
            document.body.style.color = 'black';
        }
        showFirstMessage = !showFirstMessage;
    }

    button.addEventListener('click', toggleMessages);

    // Inicialmente muestra el primer mensaje y fondo
    mensaje1.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = 'black';
});
