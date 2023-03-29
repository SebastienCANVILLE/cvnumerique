import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function ProfilPatch (){

    const token = useContext(AuthContext).user?.access_token;

const [lastnameInput, setLastnameInput] = useState<string>("");
const [firstnameInput, setFirstnameInput] = useState<string>("");
const [classeProInput, setClasseProInput] = useState<string>("");
const [jobInput, setJobInput] = useState<string>("");
const [cityInput, setCityInput] = useState<string>("");
const [regionInput, setRegionInput] = useState<string>("");
const [emailInput, setEmailInput] = useState<string>("");
const [phoneInput, setPhoneInput] = useState<string>("");

async function patchCompetence() {
    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            lastname : lastnameInput,
            firstname : firstnameInput,
            classe_professionnelle : classeProInput,
            poste_actuel : jobInput,
            ville_affectation : cityInput,
            region_affectation : regionInput,
            email : emailInput,
            telephone : phoneInput
        })
    };
    const response = await fetch(`http://localhost:8000/users/${test}`, requestOptions)
    const responseJson = await response.json();
    
}

return(
    <div></div>
)


}