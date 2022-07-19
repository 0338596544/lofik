let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');




let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;


let track = document.createElement('audio');



let All_song = [
   {
     path: "1.mp3",
   },
   {
   
     path: "2.mp3",

   },
   {
    
     path: "3.mp3",
   
   }
   {
    
     path: "4.mp3",
   
   }
   {
    
     path: "5.mp3",
   
   }
];



function load_track(index_no){


	track.src = All_song[index_no].path;

}

load_track(index_no);



 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }



function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<img src="pause.svg" alt=""></img>'
}


function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<img src="play.svg" alt=""></img>'
}



function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}



function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

       