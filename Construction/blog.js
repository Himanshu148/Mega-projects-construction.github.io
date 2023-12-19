const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideInterval = 5000; // Change this value to adjust slide duration (in milliseconds)

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlider() {
    setInterval(nextSlide, slideInterval);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

startSlider();
//--------------------------------------audio JS 
// Coded by: https://mmzand.ir
// Credit: https://code-boxx.com/html-custom-audio-player/#sec-audio
// (A) SUPPORT FUNCTION - FORMAT HH:MM:SS
var timeString = (secs) => {
    // (A1) HOURS, MINUTES, SECONDS
    let ss = Math.floor(secs),
      hh = Math.floor(ss / 3600),
      mm = Math.floor((ss - hh * 3600) / 60);
    ss = ss - hh * 3600 - mm * 60;
  
    // (A2) RETURN FORMATTED TIME
    if (hh > 0) {
      mm = mm < 10 ? "0" + mm : mm;
    }
    ss = ss < 10 ? "0" + ss : ss;
    return hh > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
  };
  
  function setProgress(elTarget) {
    let divisionNumber = elTarget.getAttribute("max") / 100;
    let rangeNewWidth = Math.floor(elTarget.value / divisionNumber);
    if (rangeNewWidth > 95) {
      elTarget.nextSibling.style.width = "95%";
    } else {
      elTarget.nextSibling.style.width = rangeNewWidth + "%";
    }
  }
  
  for (let i of document.querySelectorAll(".aWrap")) {
    // (B) AUDIO + HTML SETUP + FLAGS
    i.audio = new Audio(encodeURI(i.dataset.src));
    (i.aPlay = i.querySelector(".aPlay")),
      (i.aPlayIco = i.querySelector(".aPlayIco")),
      (i.aNow = i.querySelector(".aNow")),
      (i.aTime = i.querySelector(".aTime")),
      (i.aSeek = i.querySelector(".aSeek")),
      (i.aVolume = i.querySelector(".aVolume")),
      (i.aVolIco = i.querySelector(".aVolIco"));
    i.seeking = false; // user is dragging the seek bar
  
    // (C) PLAY & PAUSE
    // (C1) CLICK TO PLAY/PAUSE
    i.aPlay.onclick = () => {
      if (i.audio.paused) {
        i.audio.play();
      } else {
        i.audio.pause();
      }
    };
  
    // (C2) SET PLAY/PAUSE ICON
    i.audio.onplay = () => (i.aPlayIco.innerHTML = '<i class="fa fa-pause"></i>');
    i.audio.onpause = () => (i.aPlayIco.innerHTML = '<i class="fa fa-play"></i>');
  
    // (D) TRACK PROGRESS & SEEK TIME
    // (D1) TRACK LOADING
    i.audio.onloadstart = () => {
      i.aNow.innerHTML = "Loading";
      i.aTime.innerHTML = "";
    };
  
    // (D2) ON META LOADED
    i.audio.onloadedmetadata = () => {
      // (D2-1) INIT SET TRACK TIME
      i.aNow.innerHTML = timeString(0);
      i.aTime.innerHTML = timeString(i.audio.duration);
  
      // (D2-2) SET SEEK BAR MAX TIME
      i.aSeek.max = Math.floor(i.audio.duration);
  
      // (D2-3) USER CHANGE SEEK BAR TIME
      i.aSeek.oninput = () => (i.seeking = true); // prevents clash with (d2-4)
      i.aSeek.onchange = () => {
        i.audio.currentTime = i.aSeek.value;
        if (!i.audio.paused) {
          i.audio.play();
        }
        i.seeking = false;
      };
  
      // (D2-4) UPDATE SEEK BAR ON PLAYING
      i.audio.ontimeupdate = () => {
        if (!i.seeking) {
          i.aSeek.value = Math.floor(i.audio.currentTime);
        }
        i.aNow.innerHTML = timeString(i.audio.currentTime);
        let divisionNumber = i.aSeek.getAttribute("max") / 100;
        let rangeNewWidth = Math.floor(i.aSeek.value / divisionNumber);
        if (rangeNewWidth > 95) {
          i.aSeek.nextSibling.style.width = "95%";
        } else {
          i.aSeek.nextSibling.style.width = rangeNewWidth + "%";
        }
      };
    };
  
    // (E) VOLUME
    i.aVolIco.onclick = () => {
      i.audio.volume = i.audio.volume == 0 ? 1 : 0;
      i.aVolume.value = i.audio.volume;
      i.aVolIco.innerHTML =
        i.aVolume.value == 0
          ? '<i class="fa fa-volume-off"></i>'
          : '<i class="fa fa-volume-up"></i>';
      if (i.aVolume.value == 0) {
        i.aVolume.nextSibling.style.width = "0%";
      } else {
        i.aVolume.nextSibling.style.width = "95%";
      }
    };
    i.aVolume.onchange = () => {
      i.audio.volume = i.aVolume.value;
      i.aVolIco.innerHTML =
        i.aVolume.value == 0
          ? '<i class="fa fa-volume-off"></i>'
          : '<i class="fa fa-volume-up"></i>';
    };
  
    // (F) ENABLE/DISABLE CONTROLS
    i.audio.oncanplaythrough = () => {
      i.aPlay.disabled = false;
      i.aVolume.disabled = false;
      i.aSeek.disabled = false;
    };
    i.audio.onwaiting = () => {
      i.aPlay.disabled = true;
      i.aVolume.disabled = true;
      i.aSeek.disabled = true;
    };
  
    i.aSeek.addEventListener("input", function () {
      setProgress(this);
    });
  
    i.aVolume.addEventListener("input", function () {
      setProgress(this);
    });
  }
//---------------------------------------------------Video JS
if( $('.video-overlay').length){
    var options = {
        id: 76979871,
        width: 1200,
        loop: false
    };

    var player = new Vimeo.Player('video-container', options);

    // Open on play
    $('#video-trigger').click(function(){
        $('.video-overlay').addClass('show')
        player.play();
    })

    // Closes on click
    $('.video-toggle').click(function(){
      $('.video-overlay').removeClass('show')
player.pause();
      setTimeout(function() {
        TweenMax.to('.site-head', 0.3, {autoAlpha: 1});
          $('.video-overlay').css('left', '-100%')
        }, 300);
    })
}

  