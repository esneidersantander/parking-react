export const getParking = async ()=>{
    const url = 'http://localhost:3000/parkings';
    try {
        const resp = await fetch (url)
        if (resp.ok) {
            const data = await resp.json();
            return data
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}