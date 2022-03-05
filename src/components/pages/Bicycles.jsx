import React, { useEffect, useState } from "react";
import Plot from 'react-plotly.js'
import '../../css/Bicycles.css'


export default function Bicycles() {

    const preData = [{
        x: ["No funcionan"],
        y: [5],
        name: 5,
        type: 'bar',
    }, {
        x: ["Funcionan"],
        y: [1],
        name: 1,
        type: 'bar',
    }]

    const [barData, setBarData] = useState(preData)

    useEffect(() => {
        fetch("https://mapas.valencia.es/lanzadera/opendata/TRA_ESPIRAS_BICI_P/JSON?srsName=EPSG:4326")
        .then(response => { return response.json() }).then(res => {  
            res = res.features
            const disabledCount = res.filter(elem => elem.properties.fecha_actualizacion === '').length
            const abled = res.filter(elem => elem.properties.fecha_actualizacion.length > 0)

            setBarData([{
                x: ["No funcionan"],
                y: [disabledCount],
                name: disabledCount,
                type: 'bar',
            }, {
                x: ["Funcionan"],
                y: [abled.length],
                name: abled.length,
                type: 'bar',
            }])
        })
    }, [])

    return(
        <div className="bar-container">
            <Plot data = {barData}
            layout={{width: "30%", title: 'Detectores de bicicletas en puntos de medida'}} config={{scrollZoom:true}} />
        </div>
    )
}