var bg = ['/assets/images/background.jpg','/assets/images/background2.jpg']
document.querySelector("#bg1").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[0];
})
document.querySelector("#bg2").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[1];
})
var playButton = document.getElementById('playButton');
var changeButton = document.getElementById('changeButton');
var music = document.getElementById('music');

playButton.addEventListener('click', function() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

changeButton.addEventListener('click', function() {
  music.src = "./assets/audio/music2.mp3";
  music.play();
});