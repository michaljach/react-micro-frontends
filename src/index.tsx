import React, { useEffect, useState } from 'react'

declare global {
  // eslint-disable-next-line
  interface Window {
    React: any
    MfApp: any
  }
}

function Loading() {
  return <div>Loading...</div>
}

function useMicroFrontend(url: string) {
  window.React = React
  const [mf, setMf] = useState(null)

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = url
    scriptTag.onload = () => {
      setMf(() => window.MfApp)
      window.MfApp = undefined
    }
    document.head.appendChild(scriptTag)
  }, [url])

  return [mf || Loading]
}

export default useMicroFrontend
