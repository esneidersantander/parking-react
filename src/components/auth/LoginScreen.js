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
        const match = users.find(x => x.name === name);
        if (match) {
            login(match);
        }else{
            const newUser = await postUser(name);
            login(newUser);
        }
    }
    const login =(user)=>{
        localStorage.setItem('user', JSON.stringify({
            logged:true,
            id:user.id,
            name:user.name,
            parkings: user.parkings
        }))
        setUser(
            {
                logged:true,
                id:user.id,
                name:user.name,
                parkings: user.parkings
            }
        )
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
