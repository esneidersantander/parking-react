export const postUser = async (name)=>{
    const url = 'http://localhost:3000/users';
    try {
        const resp = await fetch (url, {
            method:'POST',
            body:{
                name:name,
                parkings:[]
            }
        })
        if (resp.ok) {
            const data = await resp.json();
            return data;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}