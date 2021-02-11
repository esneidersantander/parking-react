export const postUser = async (name)=>{
    const url = 'http://localhost:3000/users';
    try {
        const resp = await fetch (url, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                name:name,
                parkings:[]
            })
        })
        if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            return data;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}