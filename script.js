// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let coverImage = ["https://i.ytimg.com/vi/Ba9xcp7OO1o/maxresdefault.jpg", "https://i.ytimg.com/vi/IGrhyOtikQ0/maxresdefault.jpg", "https://images.genius.com/5e7cab20ce655a8d7bb0beb3e77ee5a6.720x720x1.png", "https://i1.sndcdn.com/artworks-z1RW7yEz7EVynXn3-GlXnJw-t500x500.jpg"]
let songArtist = ["Porter Robinson", "Porter Robinson", "Porter Robinson", "Dabin & RUNN"]
let name = ["Mother", "Something Comforting", "Trying to Feel Alive", "Alive (Acoustic)"]
let vidLink = ["https://www.youtube.com/watch?v=Ba9xcp7OO1o", "https://www.youtube.com/watch?v=IGrhyOtikQ0", "https://www.youtube.com/watch?v=qytgJ2mbzfM", "https://www.youtube.com/watch?v=3ESS_e-RMXo"]

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let song1={
  name:"Mother",
  artist:"Porter Robinson",
 image:"https://i.ytimg.com/vi/Ba9xcp7OO1o/maxresdefault.jpg",
  vidLink:"https://www.youtube.com/watch?v=Ba9xcp7OO1o" 
};

let song2={
  name:"Something Comforting",
  artist:"Porter Robinson",
 image:"https://i.ytimg.com/vi/IGrhyOtikQ0/maxresdefault.jpg",
  vidLink:"https://www.youtube.com/watch?v=IGrhyOtikQ0" 
};
let song3={
  name:"Trying to Feel Alive",
  artist:"Porter Robinson",
 image:"https://images.genius.com/5e7cab20ce655a8d7bb0beb3e77ee5a6.720x720x1.png",
  vidLink:"https://www.youtube.com/watch?v=qytgJ2mbzfM" 
};
let song4={
  name:"Alive",
  artist:"Dabin & RUNN",
 image:"https://i1.sndcdn.com/artworks-z1RW7yEz7EVynXn3-GlXnJw-t500x500.jpg",
  vidLink:"https://www.youtube.com/watch?v=3ESS_e-RMXo" 
};

// const songArray = [ song1, song2, song3, song4 ]
const songArray = [ song1, song2, song3, song4 ]

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.

//okay
// ok I see! it looks like you might be skipping the iteration step
// so you want to push the value of the object into the array
// then you want to loop over the array to display the HTML for each song
// lets pseudo code it out below
// hang on 1 min -- have a lot of people asking for help right now and trying to bounce around
// ok back
// so it looks like you missed a step in task 14 to make an array -- I made it up there for you and commented it out
//ah

function addSongInfo() {
  let userI={
   image : image.value,
   artist : artist.value,
   name : songName.value,
   vidLink : songLink.value,
};
  // ^^ your object looks great! well done
  // then we want to push this object into the array from task 14
 
  songArray.push(userI)
  displayImage.insertAdjacentHTML("beforeend", `<p><img   src="${userI.image}"></p>`);
  displaySong.insertAdjacentHTML("beforeend", `<p>${userI.name}</p>`);
  displayArtist.insertAdjacentHTML("beforeend", `<p>${userI.artist}</p>`);
  displayLink.insertAdjacentHTML("beforeend", `<p>${userI.vidLink}</p>`)
  
  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


  // task 10: use `.push()` to add each input value to the correct array.
  // coverImage.push(userImg);
  //songArtist.push(userArtist);
  //name.push(userSong);
  //vidLink.push(userLink);


 // displayImage.innerHTML = "";
  //displaySong.innerHTML = "";
  //displayArtist.innerHTML = "";
  //displayLink.innerHTML = "";
  
};

/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/


function displaySongInfo() {
  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  coverImage.forEach(function(imgSrc) {
     displayImage.insertAdjacentHTML("beforeend", `<p><img src="${imgSrc}"></p>`)
   });

  songArtist.forEach(function(creator){
     displayArtist.insertAdjacentHTML("beforeend", `<p>${creator}</p>`)
   });

  name.forEach(function(songName){
    displaySong.insertAdjacentHTML("beforeend", `<p>${songName}</p>`)
  });

  vidLink.forEach(function(youtubeLink){
    displayLink.insertAdjacentHTML("beforeend", `<p>${youtubeLink}</p>`)
  });
}


// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  
};

// function call to display stored songs
displaySongInfo();
