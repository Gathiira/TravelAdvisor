import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({ place, selected, refProp }) => {
    const classes = useStyles()
    const defaultImage = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'

    if (selected) {
        refProp?.current?.scrollIntoView({ behavior: "smooth", block: 'start' })
    }

    return (
        <Card elevation={6} ref={refProp}>
            <CardMedia style={{ height: 350 }} image={place?.photo ? place.photo.images.large.url : defaultImage} title={place?.name} />
            <CardContent>
                <Typography gutterBottom variant='h5' >
                    {place.name}
                </Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Rating size='small' value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant='subtitle1'>Out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award, i) => (
                    <Box key={i} display='flex' alignItems='center' justifyContent='space-between' >
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant='subtitle2' color='textSecondary'> {award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }, i) => (
                    <Chip key={name} size='small' label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Typography className={classes.subtitle} variant='subtitle2' color='textSecondary' gutterBottom >
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography className={classes.spacing} variant='subtitle2' color='textSecondary' gutterBottom >
                        <PhoneIcon />{place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails