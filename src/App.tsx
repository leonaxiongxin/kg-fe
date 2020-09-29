import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ForceGraph } from './components/ForceGraph'
import { useWindowScaleRatio } from './hooks'
import data from './components/ForceGraph/mock.json'
import './App.css'

function App() {
  const { scaleRatio } = useWindowScaleRatio()
  return (
    <div className="App">
      <Header />
      <section className="Main">
        <ForceGraph
          nodesData={data.nodes}
          linksData={data.links}
          scaleRatio={scaleRatio}
        />
      </section>
      <Footer />
    </div>
  )
}

export default App
