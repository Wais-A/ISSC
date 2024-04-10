function handleIframeVisibility() {
  const prayerTimeHomeIframe = document.querySelector('#mobile-prayer-widget');
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


  if (screenWidth <= 770) {
    // const iframe = createIframe();
     prayerTimeHomeIframe.src = 'https://masjidbox.com/prayer-times/islamic-society-of-schuylkill-county';
  } else {
    const iframe = document.getElementById('mobile-prayer-widget');
    if (iframe) {
      prayerTimeHomeIframe.removeChild(iframe);
    }
  }
}


window.addEventListener('load', handleIframeVisibility);
