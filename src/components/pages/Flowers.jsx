import React, { useEffect, useState } from 'react';
import { TileLayer, Marker, Popup, MapContainer, ZoomControl } from 'react-leaflet';
import L from "leaflet"
import '../../css/Map.css'


export default function Flowers() {

    const [flowersData, setFlowersData] = useState([])

    useEffect(() => { 
        fetch("https://mapas.valencia.es/lanzadera/opendata/Oco_kioscos_flores/JSON?srsName=EPSG:4326")
        .then((response) => { return response.json() })
        .then((data) => {
            setFlowersData(data.features)
        })
    }, [])

    return (
        <div className="home">
            <MapContainer
            className="map"
            center={[39.475, -0.37739]} // Valencia
            zoom={15}
            zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | <a href="https://datos.gob.es/es/catalogo/l01462508-quioscos-de-flores1"><strong>datos.gob</strong>.es</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position='bottomright'/>
                { flowersData.map((element, i) => {
                    let iconName = 'flower.svg'
                    const icon = L.icon({
                        iconUrl: require(`../../../public/svg/markers/${iconName}`),
                        iconSize:[60, 84],
                        iconAnchor: [30, 73],
                        popupAnchor: [0, -50]
                    })

                    return (
                        <Marker key={i} icon={icon} position={[element.geometry.coordinates[1], element.geometry.coordinates[0]]}>
                            <Popup>
                                <span>
                                    <strong>Dirección: </strong>{element.properties.emplazamie} <br/>
                                    <a href={`http://www.google.com/maps/place/${[element.geometry.coordinates[1], element.geometry.coordinates[0]]}`}>¿Cómo llegar?</a>
                                </span>
                            </Popup>
                        </Marker> 
                    )
                })}
            </MapContainer>
        </div>
    );
}
