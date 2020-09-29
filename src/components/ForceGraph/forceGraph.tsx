import React from 'react'
import { runForceGraph } from './forceGraphGenerator'
import { NodeFormat, LinkFormat } from './config'
import styles from './forceGraph.module.scss'

export function ForceGraph({
  nodesData,
  linksData,
  scaleRatio,
}: {
  nodesData: NodeFormat[]
  linksData: LinkFormat[]
  scaleRatio?: number
}) {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    let destroyFn

    if (containerRef.current) {
      const { destroy } = runForceGraph(
        containerRef.current,
        nodesData,
        linksData,
        scaleRatio
      )
      destroyFn = destroy
    }

    return destroyFn
  }, [nodesData, linksData, scaleRatio])

  return <div ref={containerRef} className={styles.container} />
}
