import React from "react"
import Heatmap from "./heatmap/heatmap"
import "./styles.css"

export default ({ githubData }) => {
  console.log(githubData)
  return (
    <div className="sidebar-container">
      <Heatmap githubData={githubData} />
    </div>
  )
}
