import { useState } from 'react';

type ProfilLog = {
    email: string;
    password: string;
}

export default function Login() {

    const [login, setLogin] = useState<ProfilLog | undefined>();

    const [emailInput, setEmailLogInput] = useState("")
    const [passwordInput, setPasswordLogInput] = useState("")
    
    async function fetchDataLog() {

        const body = {

            email: emailInput,
            password: passwordInput,
            
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/auth/login', requestOptions);
        const responseJson = await response.json();
        console.log(responseJson);

        setLogin(responseJson);
        console.log(login);

    }
    
    return (<div>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-8">

                    <form className="rounded-5 shadow-5-strong p-5"> {/* à changer */}

                        {/* <!-- title connexion --> */}
                        <div className="col text-center text-white align-items-center mb-5 mt-5">
                            <h4>Connexion</h4>
                        </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="email" className="form-control" placeholder="Email" onChange={(event) => setEmailLogInput(event.target.value)}></input>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-4 mt-4">
                                <input type="password" className="form-control" placeholder="Mot de passe" onChange={(event) => setPasswordLogInput(event.target.value)}></input>
                            </div>

                            {/* <!-- Submit button Login--> */}
                            <div className="col-center text-center align-items-center mt-5">
                                <button type="submit" className="btn btn-primary btn-block col-12" onClick={fetchDataLog}>Se connecter</button>
                            </div>

                            {/* <!-- Simple link --> */}
                            <div className="col-center text-center align-items-center">
                                <a href="#!" className = "link-light">Mot de passe oublié ?</a>
                            </div>

                            {/* <!-- Submit button Register --> */}
                            <div className="col-center text-center align-items-center mt-4">
                                <button type="button" className="btn btn btn-dark btn-block col-8" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Créez votre compte</button>
                            </div>
                        
                    </form>

                </div>
            </div>
        </div>
    </div>

    )
}
 
