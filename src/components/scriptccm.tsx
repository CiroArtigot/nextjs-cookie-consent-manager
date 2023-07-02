import { useEffect } from 'react'

const useScriptCCM = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/cookieconsent.js'
    script.async = false
  })
}

export default useScriptCCM
