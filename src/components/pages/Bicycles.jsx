import React, { useEffect, useState } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Bicycles() {

    const [barData, setBarData] = useState([{
        name: "Sensores de bicicletas",
        "No funcionan": 5,
        "Funcionan": 1
    }])

    useEffect(() => {
        fetch("https://mapas.valencia.es/lanzadera/opendata/TRA_ESPIRAS_BICI_P/JSON?srsName=EPSG:4326")
        .then(response => { return response.json() }).then(res => {  
            res = res.features
            const disabledCount = res.filter(elem => elem.properties.fecha_actualizacion === '').length
            const abled = res.filter(elem => elem.properties.fecha_actualizacion.length > 0)

            setBarData([{
                "name": "Sensores de bicicletas",
                "No funcionan": disabledCount,
                "Funcionan":  abled.length,
            }])
        })
    }, [])

    return(
        <BarChart width={700} height={700} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip  position={{ x: 350, y: 125 }}/>
            <Legend />
            <Bar dataKey="Funcionan" fill="#82ca9d" />
            <Bar dataKey="No funcionan" fill="#ff5232" />
        </BarChart>
    )
}