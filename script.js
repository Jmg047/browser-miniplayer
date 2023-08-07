const video = document.getElementById('video');
const button = document.getElementById('button');

// select media to stream
async function selectedMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream; // pass to video element
        video.onloadedmetadata = () => {
            video.play();  // play video in small window
        }
    } catch (error) {
       
    }
}

button.addEventListener('click', async () => {
    button.disabled=true;   // disable
    await video.requestPictureInPicture();
    button.disabled=false;  // reset
});

 selectedMediaStream();