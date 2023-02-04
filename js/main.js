// "use strict";

// video
const mediaStreamConstraints = {
  video: true,
};

const localVideo = document.querySelector("video");

// Local stream that will be reproduced on the video
let localStream;

// Handles success by adding the MediaStream to the video element
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message
function handleLocalMediaStreamError(error) {
  console.error({ "navigator.getUserMedia error: ": error });
}

// Initializes media stream
navigator.mediaDevices
  // promise
  .getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream)
  .catch(handleLocalMediaStreamError);
