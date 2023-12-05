document.getElementById('open-camera-btn').addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement('video');
        document.body.appendChild(video);
        video.srcObject = stream;
        await video.play();

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        setInterval(() => {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
        }, 1000);

        document.getElementById('id_facial').value = canvas.toDataURL('image/png');

        // Puedes detener el intervalo después de cierto tiempo o cuando se presiona otro botón
        // clearInterval(captureInterval);
    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
    }
});