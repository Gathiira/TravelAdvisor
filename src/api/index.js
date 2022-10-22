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
                'X-RapidAPI-Key': 'e50074b8b0msh0b02a527444b16ap12b1d1jsna8043874b830',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        const { data: { data } } = await axios.request(options);
        return data
    } catch (error) {
        console.log(error);
    }
}