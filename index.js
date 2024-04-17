const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const iframeContainer = document.getElementsByClassName("iframe-container");
const iframeElement = document.createElement("iframe");


function makeIframe(n) {
  iframeContainer[n].append(iframeElement);
  iframeElement.title = "prayer times";
  iframeElement.src = 'https://masjidbox.com/prayer-times/islamic-society-of-schuylkill-county';
  iframeElement.scrolling = 'no';
  iframeContainer[n].style.height = "600px";
}

function handleIframeVisibility() {
  if (screenWidth <= 1024) {
    makeIframe(1);
  } else {
    makeIframe(0);
  }
}

function checkIframe(n) {
  const doesExist = iframeContainer[n].firstElementChild;
  return doesExist;
}

function handleIframeVisibilityOnResize() {

  function removeIframe(n) {
    iframeContainer[n].removeChild(iframeContainer[n].firstElementChild);
    iframeContainer[n].style.height = "0px";
  }

  if (screenWidth <= 1024) {
    makeIframe(1);
    if (checkIframe(0)) {
      removeIframe(0);
    }
  } else if (screenWidth >= 1024) {
    makeIframe(0);
    if (checkIframe(1)) {
      removeIframe(1);
    }
  }
}

window.addEventListener('load', handleIframeVisibility);
window.addEventListener('resize', handleIframeVisibilityOnResize);
