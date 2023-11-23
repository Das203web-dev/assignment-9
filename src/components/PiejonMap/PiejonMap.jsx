import { Map, Marker } from 'pigeon-maps';
import React from 'react';

const PiejonMap = () => {
    return (
        <div>
            <Map height={300} defaultCenter={[23.6850, 90.3563]} defaultZoom={11}>
                <Marker width={50} anchor={[23.6850, 90.3563]}></Marker>
            </Map>
        </div>
    );
};

export default PiejonMap;