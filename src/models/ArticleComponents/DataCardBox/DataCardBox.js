import React from 'react'
import {DataCard} from '../DataCard/DataCard'
import "./DataCardBox.css"
function DataCardBox() {
  return (
    <div className="data-cards-box">
    <DataCard
      yearData="In  2022"
      incidentData="THE FIRST TRUE ENERGY CRISIS"
      verbData="OCCURRED."
      linkData="https://www.iea.org/reports/world-energy-outlook-2022/the-global-energy-crisis"
      organization="International Energy Association"
    />
    <DataCard
      yearData="In  2021"
      incidentData="828 Million People"
      verbData="SUFFERED FROM HUNGER."
      linkData="https://www.who.int/news/item/06-07-2022-un-report--global-hunger-numbers-rose-to-as-many-as-828-million-in-2021"
      organization="United Nations"
      backgroundColor="#FFFFFE"
      textColor="#161616"
    />
    <DataCard
      yearData="Between 2030-2052"
      incidentData="A 1.5°C INCREASE in temperatures likely"
      verbData="by current estimates."
      linkData="https://www.ipcc.ch/sr15/chapter/spm/"
      organization="Intergovernmental Panel On Climate"
    />
  </div>       
  )
}

export default DataCardBox;