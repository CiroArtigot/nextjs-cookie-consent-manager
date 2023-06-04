# NextJS Cookie Consent Manager

## Free npm package for managing cookie consent in NextJS projects.
> This npm package is intended to add cookie consent management to your NextJS project with TypeScript, using Google Consent Mode technology.

## This package is in beta version
> This software is provided "as is," without any express or implied warranty. The authors will not be held liable for any damages arising from the use of this software.

## This package works with Google Consent Mode

> Google Consent Mode is a new, optional feature for managing your visitors’ consent preferences when interacting with Google properties like Google Analytics and Google Ads. Google introduced this feature to allow websites to collect anonymized metrics while still honoring each user’s consent preferences.

> <a href="https://support.google.com/analytics/answer/9976101?hl=en">More info of Google Cookie Consent Mode</a>

## Quickstart

Install the package with the following command:

```bash
npm install nextjs-cookie-consent-manager@latest
```

### Rename and configure cookieconsent.json

After installing the package with npm, you will need to configure your cookieconsent.json file in the root of your NextJS project. Rename the example file cookieconsent.json.change to cookieconsent.json and set your Google tracking code in ga_id, and adjust the Locales based on your language configuration.

```json
{
  "id": "cookie_consent",
  "json": {
    "Main": {
      "ga_id": "your GA code"
    },
    "Locales" : {
      "en" : {
        "first_sentence": "This site uses third-party cookies to measure and improve your experience.",
        "second_sentence": "You decide whether to accept or reject them:",
        "more_info_text": "More info",
        "more_info_link": "/cookies",
        "button_necesary": "Accept",
        "button_accept_all": "Reject"
      },
      "es" : {
        "first_sentence": "Este sitio utiliza cookies de terceros para medir y mejorar su experiencia.",
        "second_sentence": "Tu decides si quieres aceptarlas o rechazarlas:",
        "more_info_text": "Más información",
        "more_info_link": "/cookies",
        "button_necesary": "Rechazar",
        "button_accept_all": "Aceptar"
      }
    } 
  }
}
```

Create a NexJS component, for example components/CookieConsent.tsx
```js
  import cookiesModalSettings from 'cookieconsent.json';
  import { MyCookieCCM } from 'nextjs-cookie-consent-manager'

  export default function CookieAlert({
      locale
    }: {
      locale: string
    }) {
      
      return (
          <MyCookieCCM value={locale} cookiesModalSettings={cookiesModalSettings} />
      )
    }
  
```

Then you can use it on your NextJS Layouts:

```tsx
import CookieAlert from 'components/CookieConsent'

  return (
    <>
      <CookieAlert locale={locale} />
    </>
  )

```


## License

MIT-licensed. See [LICENSE](LICENSE).