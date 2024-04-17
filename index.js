const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const iframeContainer = document.getElementsByClassName("iframe-container");
const iframeElement = document.createElement("iframe");


function makeIframe(n) {
  iframeElement.title = "prayer times";
  iframeElement.src = 'https://masjidbox.com/prayer-times/islamic-society-of-schuylkill-county';
  iframeElement.scrolling = 'no';
  iframeContainer[n].style.height = "600px";
  iframeContainer[n].append(iframeElement);
}

function handleIframeVisibility() {
  if (screenWidth <= 1400) {
    makeIframe(1);
  } else {
    makeIframe(0);
  }
}


window.addEventListener('load', handleIframeVisibility);
window.addEventListener('resize', handleIframeVisibility);
