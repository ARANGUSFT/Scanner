document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const photo = document.getElementById('photo');
    const captureButton = document.getElementById('capture');

    // Acceder a la cámara
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error al acceder a la cámara: ', error);
        });

    // Capturar foto
    captureButton.addEventListener('click', function() {
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const photoURL = canvas.toDataURL('image/png');
        photo.setAttribute('src', photoURL);

        // Aquí puedes enviar la foto al servidor o realizar otras acciones con ella.
        // Por ejemplo, podrías usar AJAX para enviarla a un servidor Django.

        // Limpiar la cámara
        video.srcObject.getTracks().forEach(track => track.stop());
    });
});
