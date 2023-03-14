import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

type ProfilLog = {
    email: string;
    password: string;
}

export default function Login() {

    const [emailInput, setEmailLogInput] = useState("")
    const [passwordInput, setPasswordLogInput] = useState("")

    const auth = useContext(AuthContext)
    //console.log(auth);    

    async function fetchDataLog() {

        const body: ProfilLog = {
            email: emailInput,
            password: passwordInput,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/auth/login', requestOptions);
        const responseJson = await response.json();
        console.log(responseJson);

        if (responseJson.access_token) {
            auth.setToken(responseJson.access_token);
            resetInputLog()
        }

        else {
            return
        }

    }

    async function resetInputLog() { //resetInput
        setEmailLogInput("")
        setPasswordLogInput("")
    }

    return (

        <div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-8">

                        <div className=" form-log rounded-5 shadow-5-strong p-5"> {/* à changer en div */}

                            {/* <!-- title connexion --> */}
                            <div className="col text-center text-white align-items-center mb-5 mt-5">
                                <h4>Connexion</h4>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="email" className="form-control" placeholder="Email" value={emailInput} onChange={(event) => setEmailLogInput(event.target.value)}></input>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-4 mt-4">
                                <input type="password" className="form-control" placeholder="Mot de passe" value={passwordInput} onChange={(event) => setPasswordLogInput(event.target.value)}></input>
                            </div>

                            {/* <!-- Submit button Login--> */}
                            <div className="col-center text-center align-items-center mt-5">
                                <button type="button" className="btn btn-primary btn-block col-12" onClick={fetchDataLog}>Se connecter</button>
                            </div>

                            {/* <!-- Simple link --> */}
                            <div className="col-center text-center align-items-center">
                                <a href="#!" className="link-light">Mot de passe oublié ?</a>
                            </div>

                            {/* <!-- Submit button Register --> */}
                            <div className="col-center text-center align-items-center mt-4">
                                <button type="button" className="btn btn btn-dark btn-block col-8" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Créez votre compte</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

