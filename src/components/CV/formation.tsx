import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';


export default function Formation(props:any) {

    const [formInput, setFormInput] = useState<string>("");
    const [diplomeInput, setDiplomeInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");

    const token = useContext(AuthContext).token;
    async function patchFormation() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({

                specialite: formInput,
                diplôme: diplomeInput,
                date_obtention: dateInput
            })
        };
        const response = await fetch(`http://localhost:8000/formations/${props.item.id}`, requestOptions)
        const responseJson = await response.json();

        console.log("Success!", responseJson);
        setFormInput(responseJson);
        setDiplomeInput(responseJson);
        setDateInput(responseJson);
    };

    async function deleteFormation() {
        /* const listTechnique = technique?.map((item) => {
            { item?.libelle }
        }); */

        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            }
        };
        const response = await fetch(`http://localhost:8000/formations/${props.item.id}`, requestOptions)
        const responseJson = await response.json()
        console.log("Success!", responseJson);
        setFormInput(responseJson);
        setDiplomeInput(responseJson);
        setDateInput(responseJson);
    }
    useEffect(()=>{
        deleteFormation();
}, []);

    return (

        <li className="hardSkills">

            <div className='grid_item'>
                <h5 className='grid_specialite'>{props.item.specialite}</h5>
            </div>
            <div className="grid text-left" >
                <div className="g-col-6">{props.item.date_obtention}</div>
                <div className="g-col-4">{props.item.diplôme}</div>
            </div>

            <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group">

                {/* <!-- Update button --> */}
                <button onClick={() => patchFormation()} type="button" className="btn btn-outline-warning btn-rounded-floating" data-mdb-ripple-color="dark" >
                    <i className="bi bi-pencil"></i>
                </button>
                {/* <!-- Delete button --> */}
                <button onClick={() => deleteFormation()} type="button" className="btn btn-outline-danger btn-rounded-floating" data-mdb-ripple-color="dark" >
                    <i className="bi bi-trash3"></i>
                </button>
            </div>
        </li>


    )
}







