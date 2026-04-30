import React from 'react';

const MapComponent: React.FC = () => {
    const searchQuery = encodeURIComponent("Utthan Institute of Development & Studies");
    const mapUrl = `https://maps.google.com/maps?width=100%&height=600&hl=en&coord=52.70967533219885,-8.020019531250002&q=${searchQuery}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

    return (
        <iframe
            width="100%"
            height="600px"
            src={mapUrl}
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            title="Utthan Institute of Development & Studies Map"
            allowFullScreen
        ></iframe>
    );
};

export default MapComponent;