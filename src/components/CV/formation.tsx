import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';


export default function Formation(props: any) {

    const [formInput, setFormInput] = useState<string>("");
    const [diplomeInput, setDiplomeInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");

    const token = useContext(AuthContext).user?.access_token;

    
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
        setFormInput(responseJson.data);
        setDiplomeInput(responseJson.data);
        setDateInput(responseJson.data);
    };

    async function deleteFormation() {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await fetch(`http://localhost:8000/formations/${props.item.id}`, requestOptions)
        const responseJson = await response.json()
        console.log("Success!", responseJson);

        if (responseJson.statusCode === 200) {

            props.del(props.item.id)
        }
        console.log(responseJson);
    };

    return (


        <div className="Formations">

            <div className="container text-center">
                <div className="row row-cols-1">
                    <h5 className="col mt-5 ">{props.item?.date_obtention}</h5>
                    <div className="col ">{props.item?.specialite}</div>
                    <div className="col ">{props.item?.diplôme}</div>

                </div>


                <div className="col">
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
                </div>
            </div>
        </div>

    )
}







