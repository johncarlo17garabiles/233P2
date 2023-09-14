
const imageElement1 = document.getElementById('myImage1');
const buttonElement1 = document.getElementById('changeImageBtn1');

buttonElement1.addEventListener('click', function() {
    imageElement1.src = 'apple1.jpg';
    imageElement1.alt = 'A different image';
    buttonElement1.textContent = 'Bakit mo kinagat :<';
});

const imageElement2 = document.getElementById('myImage2');
const buttonElement2 = document.getElementById('changeImageBtn2');

buttonElement2.addEventListener('click', function() {
    imageElement2.src = 'imgba1(1).jfif';
    imageElement2.alt = 'A different image';
    buttonElement2.textContent = 'Dry Earth';
});

const imageElement3 = document.getElementById('myImage3');
const buttonElement3 = document.getElementById('changeImageBtn3');

buttonElement3.addEventListener('click', function() {
    imageElement3.src = 'on1.jpg';
    imageElement3.alt = 'A different image';
    buttonElement3.textContent = 'Light Off';
});

const videoElement1 = document.getElementById('vide1');
const buttonElement4 = document.getElementById('changeVidBtn1');

buttonElement4.addEventListener('click', function() {
    videoElement1.src = 'vid2.mp4';
    videoElement1.alt = 'A different video';
    buttonElement4.textContent = 'Vid 2!';
});
const videoElement2 = document.getElementById('vide2');
const buttonElement5 = document.getElementById('changeVidBtn2');

buttonElement5.addEventListener('click', function() {
    videoElement2.src = 'vid3.mp4';
    videoElement2.alt = 'A different video';
    buttonElement5.textContent = 'Vid 3!';
});
const videoElement3 = document.getElementById('vide3');
const buttonElement6 = document.getElementById('changeVidBtn3');

buttonElement6.addEventListener('click', function() {
    videoElement3.src = 'vid1.mp4';
    videoElement3.alt = 'A different video';
    buttonElement6.textContent = 'Vid 1';
});