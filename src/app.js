/*
* File: app.js
* Author: Kövesdi Ákos
* Copyright: 2025, Kövesdi Ákos
* Group: Szoft I-N
* Date: 2025-04-25
* Github: https://github.com/Akreez/
* Licenc: MIT
*/
const radiusInput = document.getElementById('radius')
const heightInput = document.getElementById('height')
const calcButton = document.getElementById('calcButton')
const areaOutput = document.getElementById('area')

calcButton.addEventListener('click' ,()=>{
    const radius = Number (radiusInput.value)
    const height = Number (heightInput.value)
    const area = 2*Math.PI*Math.pow(radius,2) + 2*Math.PI*radius*height

    console.log(area.toFixed(2))
    areaOutput.value = area.toFixed(2)
})