# OpenMage GDPR Cookie Consent Banner

This module adds a GDPR-compliant cookie consent banner to your OpenMage store using the [Beyonk GDPR Cookie Consent Banner](https://github.com/beyonk-group/gdpr-cookie-consent-banner) library.

## Features

- Fully configurable cookie consent banner
- Support for multiple cookie categories (necessary, tracking, analytics, marketing)
- Customizable texts and labels
- Configurable privacy policy page link
- Edit icon with configurable position (left/right)
- Responsive design with high z-index to ensure visibility

## Installation

### Using Modman

```bash
modman clone https://github.com/empiricompany/openmage-gdpr-cookie
```

### Using Composer

```bash
composer require mm/openmage-gdpr-cookie
```

## Configuration

All settings can be configured in the OpenMage admin panel under:
System > Configuration > MM Extensions > GDPR Cookie Consent

Available settings include:
- Enable/disable the banner
- Cookie name
- Banner visibility
- Text settings (heading, description, button labels)
- Cookie categories with default states
- Edit icon settings
- Privacy policy page selection

## Important Note About Cookie Blocking

Currently, this module does not implement preventive cookie blocking. However, you can implement this functionality by leveraging the library's events. Here's an example:

```javascript
// Listen for consent events on window
window.addEventListener('consent:analytics', (event) => {
  if (event.detail.agreed) {
    // Initialize analytics
    // Example: Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  }
})

window.addEventListener('consent:tracking', (event) => {
  if (event.detail.agreed) {
    // Initialize tracking scripts
    // Example: Facebook Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  }
})

window.addEventListener('consent:marketing', (event) => {
  if (event.detail.agreed) {
    // Initialize marketing scripts
  }
})
```

The library emits events for each cookie category when consent is given or revoked. You can use these events to conditionally load your tracking, analytics, and marketing scripts.