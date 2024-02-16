//usando query para seleção de dados sinal 
// de maior'q para selecional o "g"
//nth-child(1) seleção de primeiro nivel 
//nth-child(2) seleção de segundo"g"" nivel 
//setando a nova cor da propriedade FILL em path!!
// exemplo""
//""cardBgColor1.setAttribute("fill", "orange")""""

import "./css/index.css"

const cardBgColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const cardBgColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

function setCardType(type) {
  const colors = {
    "visa": ["#436D99", "#2D57F2"],
    "master": ["#DF6F29", "#C69347"],
    "default": ["violet", "purple"],
  }
  //setando a nova cor da propriedade FILL em path!!
  cardBgColor1.setAttribute("fill", colors[type][0])
  cardBgColor2.setAttribute("fill", colors[type][1])

}
setCardType('visa')