import { useState } from 'react';
import { Alert } from 'react-bootstrap';

// permet le typage de la partie body
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

/**
  * @function Register
  * 
  * Elle permet de créer un composant globale de tous les éléments liés à la création d'un compte utilisateur:
  * 
  * * Variables de stockage des données
  * * Faire appel aux requêtes back-end pour la relation Front/Back
  * * Un return visuel avec bootstrap pour la partie visible en html
  * * Des méthodes de fonctionnement aux events onChange(input), Onclick(buttom)
  * * Gestion des erreurs en Front, visible de l'utilisateur pour le guider
  */
export default function Register() {

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

    /**
     * @function fetchDataRegister
     * 
     * Fonction qui permet de récupérer la data implémentée en Front par l'utilisateur et de la stocker en BDD
     * 
     * * Création du body register afin de les lier avec les input dans le return
     * * Faire appel aux requêtes back-end pour la relation Front/Back
     */
    async function fetchDataRegister(event: { preventDefault: () => void; }) {

        event.preventDefault()

        // body du register sur la partie html
        const body: ProfilRegister = {
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

        // Options de requêtes et envoi des données des input en BDD
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/users/register', requestOptions);
        const responseJson = await response.json();
        console.log(responseJson);

        //si nous avons la réponse json du register dans la console, alors nous faisons un reset des input du formulaire

        if (responseJson.statusCode === 201) {
            resetInput()
            alert("Compte créé avec succès");
        }

        else {
            return
        }

    }

    async function resetInput() { //resetInput

        setLastnameInput("")
        setFirstnameInput("")
        setEmailInput("")
        setPasswordInput("")
        setPasswordConfirmInput("")
        setPhoneNumberInput("")
        setResponsabilityInput("")
        setJobInput("")
        setRegionInput("")
        setCityInput("")

        document.getElementById('close-btn')?.click()

        /* setTimeout(() => {
            document.getElementById("close")?.click();
        }, 1500); */

    }

    return (<div>

        {/* <!-- Modal -->*/}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="position-fixed top-0 vw-100 vh-100">
                <div className=" w-100 h-100 bg-dark bg-opacity-10">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h1 className="modal-title fs-3 " id="staticBackdropLabel">Parlez-nous de vous ...</h1>

                                {/* <!-- Buttom Close --> */}
                                <button type="button" id="close-btn" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={resetInput}></button>
                            
                            </div>

                            <form className="modal-body" onSubmit={fetchDataRegister}>

                                {/* type: donne le type de donnée dans l'input, classname: peut recevoir un nom pour la partie css, placeholder: définit un nom 
                                dans l'input qui disparait une fois une donnée rentrée, value permet de revenir à l'état initiale sans les valeurs cf le schéma 
                                dans la fonction plus haut, onchange: permet de sauvegarder la donnée saisie dans l'input avant la validation par un onClick
                                form-control dans classname permet de dire à l'input d'appliquer le champs prévu par bootstrap quand le type est fixé soit email
                                (@.fr) ou password (... motif caché) */}

                                {/* <!-- Lastname input --> */}
                                <div className="form-outline mb-3 ">
                                    <input required type="text" className="form-control text-center" placeholder="Nom de famille" value={lastnameInput} onChange={(event) => setLastnameInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Firstname input --> */}
                                <div className="form-outline mb-3">
                                    <input required type="text" className="form-control text-center" placeholder="Prénom" value={firstnameInput} onChange={(event) => setFirstnameInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-3">
                                    <input required type="email" className="form-control text-center" placeholder="Email" value={emailInput} onChange={(event) => setEmailInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input required type="password" className="form-control text-center" placeholder="Mot de passe" value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Password_confirm input --> */}
                                <div className="form-outline mb-3">
                                    <input required type="password" className="form-control text-center" placeholder="Confirmation du mot de passe" value={passwordConfirmInput} onChange={(event) => setPasswordConfirmInput(event.target.value)}></input> {/* à vérifier */}
                                </div>

                                {/* <!-- Phone_number input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" className="form-control text-center" placeholder="Votre numéro de téléphone (facultatif)" value={phoneNumberInput} onChange={(event) => setPhoneNumberInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Responsability input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" className="form-control text-center" placeholder="Votre responsabilité hiérarchique" value={responsabilityInput} onChange={(event) => setResponsabilityInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Job input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" className="form-control text-center" placeholder="Votre métier" value={jobInput} onChange={(event) => setJobInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Region_of_job input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" className="form-control text-center" placeholder="Votre région d'affectation" value={regionInput} onChange={(event) => setRegionInput(event.target.value)}></input>
                                </div>

                                {/* <!-- City_of_job input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" className="form-control text-center" placeholder="Votre ville d'affectation" value={cityInput} onChange={(event) => setCityInput(event.target.value)}></input>
                                </div>

                                {/* <!-- Buttom register --> */}
                                {/* <div className="modal-footer col-center"> */}
                                <div className="col-center text-center align-items-center mt-4">
                                    <button type="submit" className="btn btn-primary mb-4 col-10">Enregister</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}