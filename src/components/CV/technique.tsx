import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';



export default function Technique(props: any) {
    /*   console.log(props); */


    const [techInput, setTechInput] = useState<string>("");
    
    const token = useContext(AuthContext).token;

    async function patchTechnique() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({

                libelle: techInput
            })
        };
        const response = await fetch(`http://localhost:8000/techniques/${props.item.id}`, requestOptions)
        const responseJson = await response.json();

        console.log("Success!", responseJson);
        setTechInput(responseJson);
    };

    async function deleteTechnique() {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await fetch(`http://localhost:8000/techniques/${props.item.id}`, requestOptions)
        const responseJson = await response.json()
        console.log("Success!", responseJson);
        if (responseJson.statusCode === 200) {
            props.del(props.item.id)
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills">
                        {props.item?.libelle}
                    </li >
                </div>

                <div className="col">

                    <div className="btn-group mb-2 mt-2 ms-5" role="group" aria-label="Third group">

                        {/* <!-- Update button --> */}
                        <button onClick={() => patchTechnique()} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>
                        {/* <!-- Delete button --> */}
                        <button onClick={deleteTechnique} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>


                    </div>
                </div>

            </div>

        </div>

    )
}