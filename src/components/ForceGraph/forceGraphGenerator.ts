// @ts-nocheck
import * as d3 from 'd3'
import {
  NodeFormat,
  LinkFormat,
  NodeCategory,
  NodeCategoryEnum,
} from './config'

const runForceGraph = (
  container: any,
  nodesData: NodeFormat[],
  linksData: LinkFormat[],
  scaleRatio? = 1
): any => {
  console.log(scaleRatio)
  const nodes = nodesData.map((d) => Object.create(d))
  const links = linksData.map((d) => Object.create(d))

  const containerRect = container.getBoundingClientRect()
  const { height } = containerRect
  const { width } = containerRect
  const nodeRadius = 36 * scaleRatio
  const legendRadius = 7 * scaleRatio
  const fontSize = 16 * scaleRatio

  const scale = d3.scaleOrdinal(d3.schemeTableau10)

  const color = (d: number) => {
    return scale(d)
  }

  const drag = (simulation: any) => {
    const dragstarted = (event: any) => {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    }

    const dragged = (event: any) => {
      event.subject.fx = event.x
      event.subject.fy = event.y
    }

    const draggended = (event: any) => {
      if (!event.active) simulation.alphaTarget(0)
      event.subject.fx = null
      event.subject.fy = null
    }

    return d3
      .drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', draggended)
  }

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id((d: any) => d.id)
        .distance(60)
        .strength(0.5)
    )
    .force('charge', d3.forceManyBody().strength(-1000))
    .force('x', d3.forceX())
    .force('y', d3.forceY())

  const svg = d3
    .select(container)
    .append('svg')
    .attr('id', 'graphSvg')
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .attr('fill', '#F8F9FA')

  const link = svg
    .append('g')
    .attr('class', 'link')
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke', '#aaa')
    .attr('stroke-opacity', '0.8')
    .attr('stroke-width', 1)

  const node = svg
    .append('g')
    .attr('class', 'node')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', nodeRadius)
    .attr('fill', (d: any) => color(d.type))
    .attr('fill-opacity', '0.9')
    .attr('stroke', (d: any) => color(d.type))
    .attr('stroke-width', 4)
    .call(drag(simulation))

  node.append('title').text((d: any) => d.name)

  const label = svg
    .append('g')
    .attr('class', 'label')
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')
    .attr('fill', '#fff')
    .attr('font-size', fontSize)
    .text((d: any) => d.name)
    .call(drag(simulation))

  // legend
  const legend = svg
    .append('g')
    .attr('class', 'legend')
    .selectAll('.legend')
    .data(NodeCategory)
    .enter()

  legend
    .append('circle')
    .attr('r', legendRadius)
    .style('fill', (d: any) => color(d))
    .attr('cx', legendRadius * 2 - width / 2)
    .attr('cy', (_, i) => (i + 1) * legendRadius * 4 - height / 2)

  legend
    .append('text')
    .text((d: any) => NodeCategoryEnum[d])
    .attr('fill', '#aaa')
    .attr('font-size', fontSize)
    .attr('x', legendRadius * 4 - width / 2)
    .attr('y', (_, i) => (i + 1) * legendRadius * 4 - height / 2)
    .attr('text-anchor', 'left')
    .attr('alignment-baseline', 'middle')

  // update positions
  simulation.on('tick', () => {
    link
      .attr('x1', (d: any) => d.source.x)
      .attr('y1', (d: any) => d.source.y)
      .attr('x2', (d: any) => d.target.x)
      .attr('y2', (d: any) => d.target.y)

    node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y)

    label
      .attr('x', (d: any) => {
        return d.x
      })
      .attr('y', (d: any) => {
        return d.y
      })
  })

  // zoom svg
  const zoomed = ({ transform }) => {
    node.attr('transform', transform)
    link.attr('transform', transform)
    label.attr('transform', transform)
  }
  svg.call(
    d3
      .zoom()
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([1 / 8, 8])
      .on('zoom', zoomed)
  )

  return {
    destory: () => {
      simulation.stop()
    },
    nodes: () => {
      return svg.nodes
    },
  }
}

export { runForceGraph }
