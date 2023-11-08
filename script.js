let slider = document.querySelector(".slider");
let darkMoon = document.querySelector(".darkMoon");
let lightMoon = document.querySelector(".lightMoon");
let h1 = document.querySelector("h1");
let input = document.querySelector("#search_word");
let pley = document.querySelector(".pleyr img");
let audio = document.querySelector("audio source");
let audio2 = document.querySelector("audio");
let ul = document.querySelectorAll(".Part ul .li2");
let key = document.querySelector(".key");
let none = document.querySelector(".none");

none.style.display = "none";

function getData(soz) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${soz}`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data[0].word == undefined) {
        none.style.display = "inline-block";
      }
      console.log(data);
      h1.textContent = data[0].word;
      document.querySelector(".pley p").textContent = data[0].phonetics[1].text;
      for (let i = 0; i < data[0].meanings[2].definitions.length - 2; i++) {
        console.log(i);
        let t = 0;
        for (let j = 0; j < data[0].meanings.length; j++) {
          t = j;
        }
        ul[i].textContent = data[0].meanings[t].definitions[i].definition;
      }
      // ul[0].textContent = data[0].meanings[2].definitions[0].definition;
      // ul[1].textContent = data[0].meanings[2].definitions[1].definition;
      // ul[2].textContent = data[0].meanings[2].definitions[2].definition;
      document.querySelector(".synonyms h5").textContent =
        data[0].meanings[0].synonyms;
      document.querySelector(".li").textContent =
        data[0].meanings[1].definitions[0].definition;
      key.textContent = data[0].meanings[0].definitions[0].definition;

      pley.onclick = function () {
        console.log(data[0].phonetics[0].audio);
        audio.setAttribute("src", data[0].phonetics[1].audio);
        // audio.pley();
        //  (e) => {
        //   e.textContent = data[0].phonetics[0].audio;
        //   console.log(data[0].license.url);
        // });
        // // var audio = new Audio("data[0].license.url");
        // audio.play();
        // audio.addEventListener("canplaythrough", (event) => {
        //   /* the audio is now playable; play it if permissions allow */
        //   event.play();
        // });
      };
    });
}

input.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key == "Enter") {
    getData(input.value);
  }
});

slider.addEventListener("click", () => {
  document.body.classList.toggle("darkTheme");
  // darkMoon.classList.toggle("none");
  // lightMoon.classList.toggle("none");
});
