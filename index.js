function handleIframeVisibility() {
  const prayerTimeHomeDiv = document.querySelector('#mobile-prayer-widget');
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


  if (screenWidth <= 770) {
    // const iframe = createIframe();
     prayerTimeHomeDiv.src = 'https://masjidbox.com/prayer-times/islamic-society-of-schuylkill-county';
  } else {
    const iframe = document.getElementById('mobile-prayer-widget');
    if (iframe) {
      prayerTimeHomeDiv.removeChild(iframe);
    }
  }
}


window.addEventListener('load', handleIframeVisibility);
