let player;
let currentSongIndex = 0;
const songs = [
{ title: "Why This Kolaveri Di - Dhanush", id: "YR12Z8f1Dh8" },
{ title: "Vaathi Coming - Master", id: "2oKbs4jAf7A" },
{ title: "Rowdy Baby - Dhanush, Sai Pallavi", id: "x6Q7c9RyMzk" },
{ title: "Enjoy Enjaami - Arivu & Dhee", id: "eYq7WapuDLU" },
{ title: "Arabic Kuthu - Beast", id: "sa3DuH_qP5Y" },
{ title: "Tum Tum - Enemy", id: "oougKhaFFz0" },
{ title: "Chill Bro - Pattas", id: "DytmY4uLNcM" },
{ title: "Aalaporan Thamizhan - Mersal", id: "hG4lT4fxj8o" },
{ title: "Sodakku - Thaana Serndha Kootam", id: "oxXPB_7k9Uw" },
{ title: "Marana Mass - Petta", id: "BkS1-El_WlE" },
{ title: "Selfie Pulla - Kaththi", id: "9sJZ9tH4R-c" },
{ title: "Mukkala Mukabla - Kadhalan", id: "L6U8brJY7b0" },
{ title: "Otha Sollaala - Aadukalam", id: "oNk5gYH5Z5A" },
{ title: "Pudhu Metro Rail - Master", id: "SC0t7wRwsh0" },
{ title: "Jimikki Kammal (Tamil Version)", id: "s8ZaGq7dCFE" },
{ title: "Petta Theme", id: "l8JZ4zDLR2E" },
{ title: "Kaavaalaa – Jailer", id: "ZzrUOJc2WXE" },
{ title: "Kanaa Kaanum Kalangal - Movie", id: "dZvHKjAdO0w" },
{ title: "Vaseegara – Minnale", id: "rlAl_mjfSvY" },
{ title: "Munbe Vaa – Sillunu Oru Kaadhal", id: "JjxAas1UZOc" },
{ title: "Enna Solla Pogirai – Kandukondain Kandukondain", id: "bGw3pzx5hIk" },
{ title: "Kannamma – Kaala", id: "7x2q0Q2p1q8" },
{ title: "Anbil Avan – Hit Compilation", id: "XPxfvWGTZTs" },
{ title: "Nenjukkule – A.R. Rahman", id: "UzD58bmzUT8" },
{ title: "Snehidhane – A.R. Rahman Jukebox", id: "i4uXbSgVjZ8" },
{ title: "Kadhal Anukkal – Vip", id: "ae2rNTZSb_Y" },
{ title: "Sid Sriram Melodies – Collection", id: "-aHmVsJV64c" },
{ title: "Thaarame Thaarame – Rocky", id: "gB1gPmtDohY" },
{ title: "Ennadi Maayavi – Pyaar Prema Kaadhal", id: "s20GxxYUhfA" },
{ title: "Visiri – Ghibran Hits", id: "N5pP7k7qppE" },
{ title: "High On Love – Sid Sriram Collection", id: "IGI4jnKn6IU" },
{ title: "Evergreen Tamil Love Jukebox", id: "PSJ8UD7khR4" },
{ title: "Best of 2024 Tamil Hits", id: "Xk3O6Pr1HGY" },
{ title: "Latest Tamil Hits 2025 Playlist", id: "PL3oW2tjiIxvTaC6caIGR55W3ssqGvb_LR" }, // playlist ID
{ title: "All Time Super Hit Tamil Songs", id: "PLylD6xtQiKW4vmrxn835IcJu_ICJkXNoe" },
{ title: "Tamil Hits | New Songs Playlist", id: "PLtfYbW1flhRXvKFK6rw7OLBFcvi0C-1Tv" },
{ title: "Top Tamil Hits Songs", id: "PLHuHXHyLu7BG-gV5fc8y_jir4rKtUPHKr" },
{ title: "Latest Tamil Hit Songs Playlist", id: "PLtfYbW1flhRV0HJbWyOTEfUuogPg6S3vJ" },
{ title: "Tamil Songs 2025 Playlist (Top Tamil Hits 2025-2026)", id: "PLdPQQOxV3l0_11bBrgSX5CCb0YtcBGhhA" },
{ title: "New Tamil Songs 2025 Top Tamil Music Playlist", id: "PLinS5uF49IBpPnKzwrk8nu29EQiK4fuQs" },
{ title: "Top Tamil Hit Songs 2025 - Best Tamil Music 2025 Playlist", id: "PL-nuykztplffR1eV_m6b1l9jaZpl3fpoZ" },
{ title: "Tamil Hits 2025 Top 50 Tamil Hit Songs 2025 Playlist", id: "PLIL5WbYWoB-tMBpnQ40fkZyTmVb7JGhux" },
{ title: "Best Tamil Songs 2025 - New Tamil Music Playlist", id: "PLjazO1G219bcXt9BKFQAWdjrkEFPmB03b" },
{ title: "Top Tamil Hits Songs ~ New Tamil Songs 2025", id: "PLC3jGHcn7eGy22DDeqJwFnKSSwHiwPkRr" },
{ title: "Top New Tamil Songs 2025 List (Recent Tamil Music Mix 2025-2026)", id: "PL1wNGMba9T60pzl5LL_dWdvOVsEIF7Une" },
{ title: "All Time Tamil Hit Songs | Tamil Video Songs 2024 | Tamil Latest Hits", id: "PL_DaWb6RFQc0K6jZFSy6dJmUbCfP3ICOA" },
{ title: "Tamil Hits | New Songs | Tamil Songs Playlist", id: "PLtfYbW1flhRXvKFK6rw7OLBFcvi0C-1Tv" },
{ title: "Latest Tamil Hit Songs", id: "PLtfYbW1flhRV0HJbWyOTEfUuogPg6S3vJ" },
{ title: "TOP 50 Songs of A.R. Rahman | Alaipayuthey | Rhythm", id: "i4uXbSgVjZ8" },
{ title: "Hits of Chinmayi - Jukebox | Tamil Hit Songs", id: "XPxfvWGTZTs" }
  ],
// The rest of script (YouTube API and playlist logic) remains the same...


// YouTube API
function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    videoId: songs[currentSongIndex].id,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  loadPlaylist();
  highlightSong();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nextSong();
  }
}

function playSong() {
  player.playVideo();
}

function pauseSong() {
  player.pauseVideo();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
}

function loadSong() {
  player.loadVideoById(songs[currentSongIndex].id);
  highlightSong();
}

function loadPlaylist() {
  const playlist = document.getElementById("playlist");
  playlist.innerHTML = ""; // clear existing
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong();
    });
    playlist.appendChild(li);
  });
}

function highlightSong() {
  const items = document.querySelectorAll("#playlist li");
  items.forEach((item, index) => {
    item.classList.toggle("active", index === currentSongIndex);
  });
}
