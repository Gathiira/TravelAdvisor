import axios from 'axios'

export const getPlacesData = async (sw, ne, type) => {
    try {
        // request
        const options = {
            method: 'GET',
            url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_latitude: ne.lat,
                tr_longitude: ne.lng,
                currency: 'KSH',
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_TRIPADVISOR_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        const { data: { data } } = await axios.request(options);
        return data
    } catch (error) {
        console.log(error);
    }
}