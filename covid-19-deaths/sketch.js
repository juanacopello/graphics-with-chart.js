import { myData } from './data/fallecidos.js'
let covidData = myData
let date = []
let number = []
let fallecidosDiarios
let fallecidosDiariosTotal = []
let promedioMuertes = []


covidData.forEach(values => {
    values.splice(4, 2)
    values.splice(1, 2)
    // console.log(values)
    date.push(values[0])
    number.push(values[1])
    promedioMuertes.push(values[2])
})

console.log(promedioMuertes)

// console.log(date)
// console.log(number.length)

for (let i = number.length; i > 0; i--) {
    fallecidosDiarios = number[i] - number[i - 1]
    fallecidosDiariosTotal.push(fallecidosDiarios)
}

console.log(fallecidosDiariosTotal)

let newChart = document.getElementById("newChart").getContext('2d')

const mixedChart = new Chart(newChart, {
    type: 'bar',
    data: {
        labels: date,
        datasets: [{
            label: 'Fallecidos',
            data: fallecidosDiariosTotal,
            backgroundColor: '#707070',
            order: 1
        },
        {
            type: 'line',
            label: 'Promedio? Ndeah',
            data: promedioMuertes,
            order: 2
           
            
        }]
    },
    options:{
        scales: {
            y:{
                beginatZero: true,
            }
        }
    }
})
