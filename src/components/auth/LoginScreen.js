import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import {getUsers} from '../../helpers/getUsers'
import { postUser } from '../../helpers/postUser';

export const LoginScreen = () => {
    const [formValues, handleInputChange]= useForm({name:''});
    const {name}=formValues;
    
    const {user, setUser} = useContext(UserContext);

    


    const handleLogin = async (e)=>{
        e.preventDefault();
        const users = await getUsers();
        users.map(auxUser=>{
            if (auxUser.name===name) {
                console.log('NO hay que crear un usuario');
                setUser({
                    id:auxUser.id,
                    name:auxUser.name,
                    parkings: auxUser.parkings
                })
            }else{
                const resp = postUser(name);
                if (resp) {
                    console.log('agregado');
                }
            }
        })
    }
    return (
        <>
            <div className="auth__main ">
                <div className="auth__box-container">
                    <h3 className="auth__title">Name</h3>   
                    <form 
                        onSubmit={handleLogin}
                    >
                        <input 
                            className="auth__input"
                            type="text"
                            placeholder="Name"
                            name="name"
                            autoComplete="off"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <button 
                            className="btn btn-primary btn-block"
                            type="submit"
                        >
                            Login
                        </button>
                        <hr/>
                    </form>
                </div>
            </div>
        </>
    )
}
