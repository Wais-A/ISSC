let iframeBigMode = true;

function handleIframeVisibility() {
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

  function removeIframe(n) {
    iframeContainer[n].style.height = "0px";
    iframeContainer[n].firstElementChild.src = '';
  }

  if (screenWidth <= 1024) {
    if (iframeBigMode) {
      removeIframe(0);
      iframeBigMode = false;
    }
    makeIframe(1);
  } else {
    if (!iframeBigMode) {
      removeIframe(1);
      iframeBigMode = true;
    }
    makeIframe(0);
  }
}


window.addEventListener('resize', handleIframeVisibility);
window.addEventListener('load', handleIframeVisibility);
