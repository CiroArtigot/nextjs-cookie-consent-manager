import { useEffect } from 'react'

const useScriptCCM = () => {
  useEffect(() => {
    alert('esto es useScriptCCM npm')

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {}
  }, [])
}

export default useScriptCCM
