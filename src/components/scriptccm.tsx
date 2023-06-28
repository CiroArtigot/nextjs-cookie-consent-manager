import { useEffect } from 'react'

const useScriptCCM = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/cookieconsent.js'
    script.async = false

    document.body.appendChild(script)

    script.onload = function () {
      console.log('cargado script')
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

export default useScriptCCM
