import { useState, useEffect } from 'react'

export interface WindowScaleRatioConfig {
  scaleRatio: number
}

export const useWindowScaleRatio = () => {
  const [WindowScaleRatio, setWindowScaleRatio] = useState({
    scaleRatio: 1,
  }) as [WindowScaleRatioConfig, any]

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      let scaleRatio = 1
      if (width > 1500 || height > 1000) {
        scaleRatio = 1.2
      } else if (width < 1200 || height < 800) {
        scaleRatio = 0.8
      }
      setWindowScaleRatio({ scaleRatio })
    }
    // add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return WindowScaleRatio
}
