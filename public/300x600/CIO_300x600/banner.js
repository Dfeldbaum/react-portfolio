// Reference to the creative's various properties and elements.
var creative = {};

/**
 * Called on the window load event.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('banner');
  creative.dom.exit = document.getElementById('exit');
  // frame containers
  creative.dom.frame1 = document.querySelector('.frame-1');
  // global elements
  creative.dom.colorLogo = document.querySelector('.logo-google-cloud-color');
  creative.dom.colorLogoIcon = document.querySelector('.logo-google-cloud-color--icon');
  creative.dom.colorLogoCopy = document.querySelector('.logo-google-cloud-color--copy');
  creative.dom.staggerCopy = document.querySelector('.stagger');
  // frame 1 elements
  creative.dom.copyOne = document.querySelector('.frame-1__copy__one');
  creative.dom.copyTwo = document.querySelector('.frame-1__copy__two');
  creative.dom.cta = document.querySelector('.frame-1__cta--link');
  creative.dom.featureImg = document.querySelector('.frame-1__feature-img');


}

function runAnimationLoop() {
  creative.MainTimeline = new TimelineMax({repeat: 3
    // onComplete: repeatMainTimeline
  });

  creative.MainTimeline

  .addLabel('frame-1')
  .set({}, {}, "+=1")
  .to([creative.dom.colorLogoIcon, creative.dom.colorLogoCopy],  1.5, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 'frame-1')
  .to(creative.dom.copyOne, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
  .to([creative.dom.copyTwo, creative.dom.featureImg], 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, '-=.5')
  .to(creative.dom.cta, 1, {autoAlpha: 1})
  .set({}, {}, "+=.5")
  .to(creative.dom.cta, .2, {scaleX: .9, scaleY: .9, ease: Power4.easeOut, force3D: true})
  .to(creative.dom.cta, .2, {scaleX: 1, scaleY: 1, ease: Power4.easeOut, force3D: true})
  .set({}, {}, "+=3");

  // creative.playedOnce = false;

  // function repeatMainTimeline() {
  //   if (creative.playedOnce == false) {
  //     creative.playedOnce = true;
  //
  //     setTimeout(function() {
  //       creative.MainTimeline.restart();
  //     }, 2100)
  //   } else {
  //     //donothing
  //   }
  // }

}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  addListeners();
  // Wait for the page to load (also known as polite loading).
  if (Enabler.isPageLoaded()) {
    showAd();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, showAd);
  }
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function showAd() {
  runAnimationLoop();
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);
