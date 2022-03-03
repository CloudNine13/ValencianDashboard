import React, { useEffect, useState } from 'react';
import { TileLayer, Marker, Popup, MapContainer, ZoomControl } from 'react-leaflet';
import L from "leaflet"
import '../../css/Map.css'


export default function Valenbisi() {

    const [valenbisiData, setValenbisiData] = useState([])

    useEffect(() => { 
        fetch("https://mapas.valencia.es/lanzadera/opendata/Valenbisi/JSON?srsName=EPSG:4326")
        .then((response) => { return response.json() })
        .then((data) => {
            setValenbisiData(data.features)
        })
    }, [])

    return (
        <div className="home">
            <MapContainer
            className="map"
            center={[39.46975, -0.37739]} // Valencia
            zoom={14}
            zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | <a href="https://datos.gob.es/es/catalogo/l01462508-estaciones-de-valenbisi"><strong>datos.gob</strong>.es</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position='bottomright'/>
                {
                    valenbisiData.map((element, i) => {
                        
                        let percentOfBikes = element.properties.free / element.properties.total
                        let iconName = "100.svg"
                        if (percentOfBikes === 0) {
                            iconName = "0.svg"
                        } else if (percentOfBikes > 0 && percentOfBikes <= 0.25) {
                            iconName = "25.svg"
                        } else if (percentOfBikes > 0.25 && percentOfBikes <= 0.5) {
                            iconName = "50.svg"
                        } else if (percentOfBikes > 0.5 && percentOfBikes <= 0.75) {
                            iconName = "75.svg"
                        }
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
                                        <strong>Nombre: </strong>{element.properties.address},
                                        <br/> <strong>Aparcamientos: </strong>{element.properties.total},
                                        <br/> <strong>Ap. libres: </strong>{element.properties.available},
                                        <br/> <strong>Bicicletas disponibles: </strong>{element.properties.free},
                                        <br/> <strong>Actualizado: </strong>{element.properties.updated_at}
                                        <br/> <a href={`http://www.google.com/maps/place/${[element.geometry.coordinates[1], element.geometry.coordinates[0]]}`}>¿Cómo llegar?</a>
                                    </span>
                                </Popup>
                            </Marker> 
                        )}
                    )
                }
            </MapContainer>
        </div>
    );
}
