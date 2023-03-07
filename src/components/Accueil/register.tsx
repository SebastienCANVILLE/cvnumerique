import { useState } from 'react';

type ProfilRegister = {
    lastname: string;
    firstname: string,
    email: string,
    password: string,
    password_confirm: string,
    telephone: string,
    classe_professionnelle: string,
    poste_actuel: string,
    region_affectation: string,
    ville_affectation: string,
}


export default function Register() {

    const [register, setRegister] = useState<ProfilRegister | undefined>();

    const [lastnameInput, setLastnameInput] = useState("")
    const [firstnameInput, setFirstnameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [passwordConfirmInput, setPasswordConfirmInput] = useState("")
    const [phoneNumberInput, setPhoneNumberInput] = useState("")
    const [responsabilityInput, setResponsabilityInput] = useState("")
    const [jobInput, setJobInput] = useState("")
    const [regionInput, setRegionInput] = useState("")
    const [cityInput, setCityInput] = useState("")

    async function fetchDataRegister() {

        setLastnameInput("")



        
        const body : ProfilRegister = {
            lastname: lastnameInput,
            firstname: firstnameInput,
            email: emailInput,
            password: passwordInput,
            password_confirm: passwordConfirmInput,
            telephone: phoneNumberInput,
            classe_professionnelle: responsabilityInput,
            poste_actuel: jobInput,
            region_affectation: regionInput,
            ville_affectation: cityInput,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/users/register', requestOptions);
        const responseJson = await response.json();
        console.log(responseJson);

        setRegister(responseJson);
        console.log(register);

    }

    return (<div>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" /* tabindex="-1" */ aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="position-fixed top-0 vw-100 vh-100">
                <div className=" w-100 h-100 bg-dark bg-opacity-10">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h1 className="modal-title fs-3 " id="staticBackdropLabel">Parlez-nous de vous ...</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">

                                {/* <!-- Lastname input --> */}
                                <div className="form-outline mb-3 ">
                                    <input type="text" /* id="form1Example1" */ className="form-control text-center" placeholder="Nom de famille" value ={lastnameInput}  onChange={(event) => setLastnameInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Firstname input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" /* id="form1Example1" */ className="form-control text-center" placeholder="Prénom" onChange={(event) => setFirstnameInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-3">
                                    <input type="email" /* id="form1Example1" */ className="form-control text-center" placeholder="Email" onChange={(event) => setEmailInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" /* id="form1Example1" */ className="form-control text-center" placeholder="Mot de passe" onChange={(event) => setPasswordInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Password_confirm input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" /* id="form1Example1" */ className="form-control text-center" placeholder="Confirmation du mot de passe" onChange={(event) => setPasswordConfirmInput(event.target.value)}></input> {/* à vérifier */}
                                </div>

                                {/* <!-- Phone_number input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" /* id="form1Example1" */ className="form-control text-center" placeholder="Votre numéro de téléphone (facultatif)" onChange={(event) => setPhoneNumberInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Responsability input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" /* id="form1Example1" */ className="form-control text-center" placeholder="Votre responsabilité hiérarchique" onChange={(event) => setResponsabilityInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Job input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" /* id="form1Example1" */ className="form-control text-center" placeholder="Votre métier" onChange={(event) => setJobInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Region_of_job input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" /* id="form1Example1" */ className="form-control text-center" placeholder="Votre région d'affectation" onChange={(event) => setRegionInput(event.target.value)}></input>
                                </div>

                                {/* <!-- City_of_job input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" /* id="form1Example1" */ className="form-control text-center" placeholder="Votre ville d'affectation" onChange={(event) => setCityInput(event.target.value)}></input>
                                </div>

                            </div>

                            {/* <!-- Buttom register --> */}
                            {/* <div className="modal-footer col-center"> */}
                            <div className="col-center text-center align-items-center mt-4">
                                <button type="submit" className="btn btn-primary mb-4 col-10" onClick={fetchDataRegister}>Enregister</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}