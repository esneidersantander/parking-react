export const getParking = async (setParkings)=>{
    const url = 'http://localhost:3000/parkings';
    try {
        const resp = await fetch (url)
        if (resp.ok) {
            const data = await resp.json();
            setParkings(data)
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}