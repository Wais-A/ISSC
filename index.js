function handleIframeVisibility() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const iframeContainer = document.getElementsByClassName("iframe-container")[1];
  const iframeElement = document.createElement("iframe");
  iframeContainer.append(iframeElement);
  
  if (screenWidth <= 1024) {
    iframeElement.src = 'https://masjidbox.com/prayer-times/islamic-society-of-schuylkill-county';
    iframeElement.scrolling = 'no';
    iframeContainer.style.height = "600px";
    
  } else {
      iframeContainer.removeChild(iframeElement);
      iframeContainer.style.height = "0px";
    }
  }


window.addEventListener('resize', handleIframeVisibility);
window.addEventListener('load', handleIframeVisibility);
