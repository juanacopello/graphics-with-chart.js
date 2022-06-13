//importando json de carpeta
import myJson from './data/global-annual-means.json' assert {type: 'json'};
let dataJson = myJson
//console.log(dataJson.arrTemperatures)


let gsmtData = dataJson.arrTemperatures.map(values => {
    return values.global;
})

let yearData = dataJson.arrTemperatures.map(values => {
    return values.anio;
})

// console.log(gsmtData)
// console.log(yearData)

let myChart = document.getElementById("myChart").getContext('2d')

const lineChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: yearData,
        datasets: [{
            label: 'GMST Data',
            data: gsmtData,
            borderColor: '#2836b0',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0, //elimina puntos
            //fill: true
            //backgroundColor: '#2836b0'
        }],

    },
    options: {
        tooltip: {
            backgroundColor: ['rgba(0, 0, 0, 0.68)']

        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                displayColors: false,
                //editar texto de tooltip
                //editar tamaño de gráfico
                //editar años de eje X para que no aparezcan todos
                //hacer un fill 
            }
        }
    }
})