window.onload = function () {
  const button = document.getElementById("joke-button");
  const speech = document.getElementById("speech");
  button.addEventListener("click", getDataFromAPI);
};

//functie care ia date de la API
async function getDataFromAPI() {
  const url = "https://v2.jokeapi.dev/joke/Dark";
  let joke = " ";
  try {
    const response = await fetch(url);
    const data = await response.json(); //convert in format json

    if (data.type === "twopart") {
      //conditii
      joke = `${data?.setup}...${data?.delivery}`;
    } else if (data.type === "single") {
      joke = `${data.joke}`;
    }

    renderJoke(joke); //asta-i joke-ul care ne rezulta in urma conditiilor de sus
    tellTheJoke(joke);

    console.log(joke);

    // console.log(data);
  } catch (eroare) {
    console.log(eroare);
  }
}

//functie pentru a randa gluma in html div
function renderJoke(gluma) {
  //un parametru random
  speech.textContent = gluma;
}

//functie penru a folosi voice rss (sa va citi gluma)
function tellTheJoke(gluma) {
  VoiceRSS.speech({
    key: "5ff4b1b6ab8143f488a977bc3a2f2a9c",
    src: gluma,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

//adaugare functionalitate pt deschidere pagina About:
const aboutBtn = document.getElementById("about-page-button");
aboutBtn.addEventListener("click", function () {
  window.location.href = "about.html";
});

