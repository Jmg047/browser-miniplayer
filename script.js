const video = document.getElementById('video');
const button = document.getElementById('button');

// select media to stream
async function selectedMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.error("error here:", error);
    }
}

button.addEventListener('click', async () => {
    button.disabled=true;
    await video.requestPictureInPicture();
    button.disabled=false;
});

 selectedMediaStream();