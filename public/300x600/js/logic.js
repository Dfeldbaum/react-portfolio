
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
  creative.dom.exit.style.display = "block";
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
