import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const useBuildId = () => {
  const router = useRouter()
  const [DeployState, setDeployState] = useState(undefined)

  const fetchFunc = () => {
    const hash = new Date().getTime()
    fetch('/deploytimestamp.json?' + hash)
      .then((res) => res.json())
      .then(
        (result) => {
          setDeployState(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const shouldReload = async () => {
    const hash = new Date().getTime()
    const res = await fetch('/deploytimestamp.json?' + hash)
    const result = await res.json()

    if (localStorage.getItem('deploy') === null) {
      location.reload()
      localStorage.setItem('deploy', result.deploy)
      return
    }

    if (localStorage.getItem('deploy') !== result.deploy) {
      localStorage.setItem('deploy', result.deploy)
      location.reload()
    }
  }

  const VisibilityEvent = () => {
    let hidden: string
    let visibilityChange: string

    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden'
      visibilityChange = 'visibilitychange'
      //@ts-ignore
    } else if (typeof document.mozHidden !== 'undefined') {
      hidden = 'mozHidden'
      visibilityChange = 'mozvisibilitychange'
      //@ts-ignore
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden'
      visibilityChange = 'msvisibilitychange'
      //@ts-ignore
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden'
      visibilityChange = 'webkitvisibilitychange'
    }

    document.addEventListener(visibilityChange, () => {
      if (document.visibilityState === 'visible') {
        // location.reload()
        shouldReload()
      }
    })
  }

  useEffect(() => {
    fetchFunc()
    VisibilityEvent()
  }, [])

  useEffect(() => {
    if (DeployState !== undefined) {
      if (localStorage.getItem('deploy') === null) {
        localStorage.setItem('deploy', DeployState.deploy)
      }

      if (localStorage.getItem('deploy') !== DeployState.deploy) {
        localStorage.setItem('deploy', DeployState.deploy)
        location.reload()
      }
    }
  }, [DeployState])

  useEffect(() => {
    router.events.on('routeChangeComplete', shouldReload)

    return () => {
      router.events.off('routeChangeComplete', shouldReload)
    }
  }, [router.events])
}

export default useBuildId
