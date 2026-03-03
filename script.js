let lastGenerated = "";

/* Navigation */
function showGenerate(){
  document.getElementById("generatePage").classList.remove("hidden");
  document.getElementById("historyPage").classList.add("hidden");
}

function showHistory(){
  document.getElementById("generatePage").classList.add("hidden");
  document.getElementById("historyPage").classList.remove("hidden");
  loadHistory();
}

/* Generate */
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

    let emojis = ["🔥","✨","🚀","💎","🌟","💥","🎯"];
    let randomEmoji = emojis[Math.floor(Math.random()*emojis.length)];

    let caption = `${randomEmoji} ${tone} vibes at our ${business}! ${offer}! Don't miss it! ${randomEmoji}`;

    let hashtags = `
#${business.replace(" ","")}
#${offer.replace(" ","")}
#Trending
#Explore
#Viral
`;

    lastGenerated = caption + "\n\n" + hashtags;

    results.innerHTML = `
      <div class="result-item">
        <p>${lastGenerated}</p>
        <button class="copy-btn" onclick="copyContent()">Copy</button>
      </div>
    `;

  },1200);
}

/* Copy & Save Only When Copied */
function copyContent(){

  if(!lastGenerated) return;

  navigator.clipboard.writeText(lastGenerated);

  let history = JSON.parse(localStorage.getItem("copiedHistory")) || [];

  history.unshift({
    text:lastGenerated,
    date:new Date().toLocaleString()
  });

  localStorage.setItem("copiedHistory", JSON.stringify(history));

  alert("Copied & Saved to History ✅");
}

/* Load History */
function loadHistory(){

  let history = JSON.parse(localStorage.getItem("copiedHistory")) || [];
  let container = document.getElementById("historyContainer");

  container.innerHTML = "";

  if(history.length === 0){
    container.innerHTML = "<p>No copied items yet</p>";
    return;
  }

  history.forEach(item=>{
    container.innerHTML += `
      <div class="history-card">
        <p>${item.text}</p>
        <small>${item.date}</small>
      </div>
    `;
  });
}

/* Clear */
function clearHistory(){
  localStorage.removeItem("copiedHistory");
  loadHistory();
}
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