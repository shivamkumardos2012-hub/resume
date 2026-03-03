function generateCaptions(){

  let business = document.getElementById("business").value || "Cafe";
  let offer = document.getElementById("offer").value || "Special Offer";
  let tone = document.getElementById("tone").value;

  let results = document.getElementById("results");
  let loader = document.getElementById("loader");

  results.innerHTML = "";
  loader.classList.remove("hidden");

  setTimeout(()=>{

    loader.classList.add("hidden");

    let emojis = ["🔥","✨","🚀","💎","🌟","💥","🎯","❤️","⚡"];
    let ctas = ["Don't miss it!", "Limited time only!", "Grab yours now!", "Shop today!", "Tag your friends!"];

    /* ===== Generate 5 Captions ===== */
    for(let i=0;i<5;i++){

      let randomEmoji = emojis[Math.floor(Math.random()*emojis.length)];
      let randomCTA = ctas[Math.floor(Math.random()*ctas.length)];

      let caption = `${randomEmoji} ${tone} vibes at our ${business}! ${offer}! ${randomCTA} ${randomEmoji}`;

      results.innerHTML += `
        <div class="result-item">
          <h3>Caption ${i+1}</h3>
          <p>${caption}</p>
          <button class="copy-btn" onclick="copyText(\`${caption}\`)">Copy Caption</button>
        </div>
      `;
    }

    /* ===== Generate 3 Hashtag Sets ===== */
    for(let j=0;j<3;j++){

      let hashtagSet = `
#${business.replace(/\s/g,"")}
#${offer.replace(/\s/g,"")}
#${tone}
#Trending${j+1}
#ExplorePage
#InstaDaily
`;

      results.innerHTML += `
        <div class="result-item">
          <h3>Hashtag Set ${j+1}</h3>
          <p>${hashtagSet}</p>
          <button class="copy-btn" onclick="copyText(\`${hashtagSet}\`)">Copy Hashtags</button>
        </div>
      `;
    }

  },1200);
}

function copyText(text){
  navigator.clipboard.writeText(text);
  alert("Copied Successfully ✅");
}