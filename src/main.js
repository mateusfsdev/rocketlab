//usando query para seleção de dados sinal 
// de maior'q para selecional o "g"
//nth-child(1) seleção de primeiro nivel 
//nth-child(2) seleção de segundo"g"" nivel 


import "./css/index.css"

const cardBgColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const cardBgColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")


//setando a nova cor da propriedade FILL em path!!
cardBgColor1.setAttribute("fill", "orange")
cardBgColor2.setAttribute("fill", "red")

