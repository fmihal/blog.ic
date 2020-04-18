import React from "react"
import CalendarHeatmap from "react-calendar-heatmap"
import "./styles.css"

export default ({ githubData }) => {
  const { weeks } = githubData
  const transformedContributionsData = weeks.reduce(
    (accumulator, currentValue) => {
      return accumulator.concat(currentValue.contributionDays)
    },
    []
  )
  return (
    <div className="heatmap-container">
      <CalendarHeatmap
        startDate={new Date("2020-01-01")}
        endDate={Date.now()}
        values={transformedContributionsData}
        classForValue={value => {
          if (!value) {
            return "color-empty"
          }
          return `color-scale-${value.contributionCount}`
        }}
      />
      {githubData.totalContributions} contributions this year.
    </div>
  )
}
