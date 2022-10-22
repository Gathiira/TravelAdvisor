import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px)')

    const defaultProps = {
        center: {
            lat: -1.286389,
            lng: 36.817223
        },
        zoom: 15
    };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB3CjkwyK4IW2OeolzoRzZQkd5O2PbhRxM' }}
                defaultCenter={defaultProps.center}
                center={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={() => { }}
                onChildClick={() => { }}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map