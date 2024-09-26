let progress=document.getElementById("progrees") ;
let song =document.getElementById("song");
let ctrlIcon =document.getElementById("ctrlIcon");


song.onloadedmetadata =function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playPaus(){
if(ctrlIcon.classList.contains("fa-pause")){
    song.play();
    ctrlIcon.classList.remove("fa-pause");
    
   

}else{
    song.pause(); 
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-pause");
}
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);

    progress.onchange=function(){
        song.play();
        song.currentTime=progress.value;
        ctrlIcon.classList.add("fa_pause");
        ctrlIcon.classList.remove("fa-play")
    }
}