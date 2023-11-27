// console.log("welcome to spotify")
//Intialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3.mp3")
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from( document.getElementsByClassName('songitem'));
let songs = [
    {SongName:"Salam-e-Ishq",filePath: "songs/1.mp3.mp3", coverPath: "cover/1.jpg.jfif"},
    {SongName:"Salam-e-Ishq",filePath: "songs/2.mp3.mp3", coverPath: "cover/2.jpg.jfif"},
    {SongName:"Salam-e-Ishq",filePath: "songs/3.mp3.mp3", coverPath: "cover/3.jpg.jfif"},
    {SongName:"Salam-e-Ishq",filePath: "songs/4.mp3.mp3", coverPath: "cover/4.jpg.jfif"},
    {SongName:"Salam-e-Ishq",filePath: "songs/5.mp3.mp3", coverPath: "cover/5.jpg.jfif"},
    {SongName:"Salam-e-Ishq",filePath: "songs/6.mp3.mp3", coverPath: "cover/6.jpg.jfif"},
    {SongName:"Salam-e-Ishq",filePath: "songs/7.mp3.mp3", coverPath: "cover/7.jpg.jfif"},
]
songItems.Array.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].filePath;
    
});
// audioElement.play();

//handle play/pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-guitar');
        masterPlay.classList.add('fa-pause-guitar');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-guitar');
        masterPlay.classList.add('fa-play-guitar');
        gif.style.opacity=0;
    }
})
//Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    //update seekBar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress)
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})