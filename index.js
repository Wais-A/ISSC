alert("Hello! I am an alert box!!");


function createIframe() {
  const iframe = document.createElement('iframe');
  iframe.id = 'myIframe';
  iframe.src = 'https://masjidbox.com/prayer-times/islamic-society-of-schuylkill-county';
  iframe.scrolling = "no";
  return iframe;
}



function handleIframeVisibility() {
  const prayerTimeHomeDiv = document.querySelector('.iframe-container');
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	
  if (screenWidth <= 700) {
    const iframe = createIframe();
    prayerTimeHomeDiv.appendChild(iframe);
  } else {
    const iframe = document.getElementById('myIframe');
    if (iframe) {
      prayerTimeHomeDiv.removeChild(iframe);
    }
  }
}

// Call the function on page load
window.addEventListener('load', handleIframeVisibility);

// Call the function on window resize
 window.addEventListener('resize', handleIframeVisibility);
