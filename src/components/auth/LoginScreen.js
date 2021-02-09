import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <div className="auth__main ">
                <div className="auth__box-container">
                    <h3 className="auth__title">Name</h3>   
                    <form 
            /*             onSubmit={handleLogin} */
                    >
                        <input 
                            className="auth__input"
                            type="text"
                            placeholder="Name"
                            name="name"
                            autoComplete="off"
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
