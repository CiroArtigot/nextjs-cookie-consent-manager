import React from 'react'

type Props = {
  value?: string
  cookiesModalSettings?: any // Configuración de cookies modal como parámetro (opcional)
}

const MyCookieCCM = ({ value = 'en', cookiesModalSettings }: Props) => {
  let CookieMain: any = cookiesModalSettings?.json.Main
  let localeObj: any = cookiesModalSettings?.json.Locales[value]

  if (typeof localeObj === 'undefined') {
    localeObj = {
      first_sentence: 'This site uses third-party cookies to measure and improve your experience.',
      second_sentence: 'You decide whether to accept or reject them:',
      more_info_text: 'More info',
      more_info_link: '/cookies',
      button_necesary: 'Accept',
      button_accept_all: 'Reject',
    }
  }

  if (typeof CookieMain === 'undefined') {
    CookieMain = {
      ga_id: 'your GA code',
    }
  }

  return (
    <>
      <div className='CCManager_cookie' id='CCManager_cookie'>
        <button
          type='button'
          id='CCManager_cookie_button'
          className='fixed bottom-0 left-0 p-1 m-2 border-0 cursor-pointer bg-white rounded-full'
        >
          <svg
            id='CCManager_modal_button_svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512.002 512.002'
            className='w-10 h-10 fill-current text-red-500'
          >
            <g>
              <g>
                <path d='M501.791,236.285c-32.933-11.827-53.189-45.342-50.644-71.807c0-4.351-2.607-8.394-5.903-11.25 c-3.296-2.842-8.408-4.072-12.686-3.384c-50.186,7.363-96.14-29.352-100.693-80.962c-0.41-4.658-2.959-8.848-6.914-11.353 c-3.94-2.49-8.848-3.032-13.198-1.406C271.074,71.02,232.637,44.084,217.3,8.986c-2.871-6.563-9.99-10.181-17.007-8.628 C84.82,26.125,0.001,137.657,0.001,256.002c0,140.61,115.39,256,256,256s256-115.39,256-256 C511.584,247.068,511.522,239.771,501.791,236.285z M105.251,272.131c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15 s15,6.714,15,15C120.251,265.415,113.534,272.131,105.251,272.131z M166.001,391.002c-24.814,0-45-20.186-45-45 c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45C211.001,370.816,190.816,391.002,166.001,391.002z M181.001,211.002 c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C211.001,197.54,197.539,211.002,181.001,211.002z M301.001,421.002c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30 C331.001,407.54,317.539,421.002,301.001,421.002z M316.001,301.002c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45 c24.814,0,45,20.186,45,45C361.001,280.816,340.816,301.002,316.001,301.002z M405.251,332.131c-8.284,0-15-6.716-15-15 c0-8.286,6.716-15,15-15s15,6.714,15,15C420.251,325.415,413.534,332.131,405.251,332.131z' />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <span className='hidden'></span>
      <div
        className='z-50 fixed bottom-2 right-2 bg-black text-white p-2 transition-opacity duration-1000 text-base font-sans leading-5 text-center flex flex-col items-center justify-center content-center flex-wrap border-white border-2 rounded-md pl-5 pr-5 opacity-0 hidden'
        id='CCManager_modal'
      >
        <svg
          id='closeams'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute fill-current absolute top-2 right-2 text-white cursor-pointer'
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
        </svg>
        <div className='pt-7 pb-3 text-sm'>
          {localeObj.first_sentence}
          <br />
          {localeObj.second_sentence}
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center content-center'>
          <button
            type='button'
            className='m-2 p-2 cursor-pointer bg-transparent border border-white rounded-md text-white hover:bg-white hover:text-black transition duration-500 ease-in-out'
            id='CCManager_modal_decline'
          >
            <span>{localeObj.button_necesary}</span>
          </button>
          <button
            type='button'
            className='m-2 p-2 cursor-pointer bg-transparent border border-white rounded-md text-white hover:bg-white hover:text-black transition duration-500 ease-in-out'
            id='CCManager_modal_accept'
          >
            <span>{localeObj.button_accept_all}</span>
          </button>
        </div>
        <div className='pt-3 pb-3 text-sm'>
          <a href={localeObj.more_info_link} className='no-underline hover:underline'>
            {localeObj.more_info_text}
          </a>
        </div>
        <input type={'hidden'} id='gaid' value={CookieMain.ga_id} />
      </div>
      <script>{`
          
          let gaid = ''
          let CmCookieConsent = ''
          let consent = 0
          let accepted = false

          const myCookieModal = () => {
            function gtag() {
              // eslint-disable-next-line no-undef
              dataLayer.push(arguments)
            }

            const CCManager_cookie_button = document.getElementById('CCManager_cookie_button')
            CCManager_cookie_button.addEventListener('click', () => {
              popup('show')
            })

            const closeams = document.getElementById('closeams')
            closeams.addEventListener('click', () => {
              popup('hide')
            })

            const CCManager_modal_decline = document.getElementById('CCManager_modal_decline')

            CCManager_modal_decline.addEventListener('click', () => {
              document.cookie = 'Cm_modal_cookie=0; expires=Thu, 01-Jan-1970 00:00:01 GMT UTC; path=/'
              popup('hide')
              return
            })

            const CCManager_modal_accept = document.getElementById('CCManager_modal_accept')
            CCManager_modal_accept.addEventListener('click', () => {
              CCManagerAccept(2)
            })

            const CCManager_modal = document.getElementById('CCManager_modal')

            const popup = (option) => {
              if (option == 'show') {
                CCManager_modal.classList.remove('opacity-0')
                CCManager_modal.classList.remove('hidden')
                setTimeout(() => {
                  CCManager_modal.classList.add('opacity-100')
                }, 10)
              } else {
                CCManager_modal.classList.remove('opacity-100')
                CCManager_modal.classList.add('opacity-0')
                setTimeout(() => {
                  CCManager_modal.classList.add('hidden')
                }, 1000)
              }
              return false
            }

            const getCookie = (cname) => {
              var name = cname + '='
              var ca = document.cookie.split(';')
              for (var i = 0; i < ca.length; i++) {
                var c = ca[i]
                while (c.charAt(0) == ' ') {
                  c = c.substring(1)
                }
                if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length)
                }
              }
              return ''
            }

            const CCManagerAccept = (modo) => {
              document.cookie = 'Cm_modal_cookie=' + modo + '; expires=Thu, 18 Dec 2035 12:00:00 UTC; path=/'

              if (!accepted) {
                //UPDATE GTAG
                if (modo == 2) {
                  gtag('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted' })
                  console.log('The third-party cookies have been accepted.')
                  //load extra script;
                  /*
                    const cookieconsentaccept = document.createElement('script');
                    script.src = '/cookieconsentaccept.js';
                    script.onload = function() {
                        console.log('The code for accepting cookies has been full loaded successfully.');
                    };
                    document.head.appendChild(script);
                  */
                }
              }

              accepted = true
              popup('hide')
              return
            }

            gaid = document.getElementById('gaid').value
            CmCookieConsent = getCookie('Cm_modal_cookie')

            let script = document.createElement('script')
            script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaid
            script.onload = function () {
              window.dataLayer = window.dataLayer || []
              gtag('js', new Date())
              if (CmCookieConsent == '2') {
                consent = 2
                gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted' })
              }
              if (consent == 0) gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied' })
              gtag('config', gaid)

              console.log('consent:' + consent)

              if (!consent) popup('show')
              if (consent) {
                CCManagerAccept(consent)
              }
            }

            document.head.appendChild(script)
          }

          if (document.readyState !== 'loading') {
            myCookieModal()
          } else {
            document.addEventListener('DOMContentLoaded', function () {
              myCookieModal()
            })
          }
        `}</script>
    </>
  )
}

export default MyCookieCCM
