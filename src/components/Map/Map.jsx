import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab'

import useStyles from './styles'

const Map = ({ coordinates, setCoordinates, setBounds, places, setChildClicked }) => {
    const classes = useStyles()
    const isDesktop = useMediaQuery('(min-width:600px)')

    const defaultImage = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB3CjkwyK4IW2OeolzoRzZQkd5O2PbhRxM' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={15}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({
                        lat: e.center.lat, lng: e.center.lng
                    })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        key={i}
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                    >
                        {!isDesktop ? (
                            <LocationOnOutlinedIcon color='primary' fontSize='large' />
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography}>
                                    {place.name}
                                </Typography>
                                <img
                                    src={place.photo ? place.photo?.images?.large.url : defaultImage}
                                    alt={place.name}
                                    className={classes.pointer}
                                />
                                <Rating size='small' value={Number(place.rating)} readOnly />
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map