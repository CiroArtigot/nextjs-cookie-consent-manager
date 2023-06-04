# NextJS Cookie Consent Manager 🍪🍪🍪

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

### Create a NextJs component

Create a new NextJs component, for example components/CookieConsent.tsx
The MyCookieCCM module need a locale language and the cookiesModalSettings from the cookieconsent.json on your root directory.

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

Then you can use the component on your NextJS layouts:

```tsx
import CookieAlert from 'components/CookieConsent'

  return (
    <>
      <CookieAlert locale={locale} />
    </>
  )

```

If your site don´t use multi language option yo can can change 

```
 <CookieAlert locale={locale} />
```

to
```
<CookieAlert locale='es' />
<CookieAlert locale='en' />
<CookieAlert locale='fr' />
```

## Tailwind CSS

This package uses TailWind.css to run, so you muest add to your tailwind.config.js the module to the content:

```
'./node_modules/nextjs-cookie-consent-manager/**/*.{js,ts,jsx,tsx}', 
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',

    ....

    './node_modules/nextjs-cookie-consent-manager/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {},
  plugins: [],
}
```

## Contact
> You can contact me on Linked In
>> 🔵 https://www.linkedin.com/in/ciroartigot/


## License

MIT-licensed. See [LICENSE](LICENSE).