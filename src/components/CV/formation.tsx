import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';


export default function Formation(props: any) {

    const [formInput, setFormInput] = useState<string>("");
    const [diplomeInput, setDiplomeInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");
    const [showInput, setShowInput] = useState(false);

    const token = useContext(AuthContext).user?.access_token;


    async function patchFormation() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({

                lieu_formation: formInput,
                diplôme: diplomeInput,
                date_obtention: dateInput
            })
        };
        const response = await fetch(`http://localhost:8000/formations/${props.item.id}`, requestOptions)
        const responseJson = await response.json();

        if (responseJson.statusCode === 200) {
            props.patch(responseJson.data)
            setShowInput(false);
        };
    }
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
    function update() {
        setShowInput(true)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills fw-bold">
                        {props.item?.lieu_formation}
                    </li>
                    <p className="formation_item formation_item degree-info ps-4">{props.item?.diplôme}</p>
                    <p className='formation_item formation_item--duration ps-4 fw-lighter'>
                        <time>{props.item?.date_obtention}</time>
                    </p>
                    {showInput && <div>
                        <hr />
                        <input type='text' className="form-control" value={formInput} placeholder="Modifiez le lieu de formation ici" onChange={(event) => setFormInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <input type='text' className="form-control" value={diplomeInput} placeholder="Modifiez votre diplôme ici" onChange={(event) => setDiplomeInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <input type='text' className="form-control" value={dateInput} placeholder="Modifiez la date d'obtention ici" onChange={(event) => setDateInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button onClick={patchFormation} type="button" className="btn btn-outline-success btn-sm" data-mdb-ripple-color="dark" >
                            <i className="bi bi-check-circle-fill"></i>
                        </button>
                    </div>}
                </div>


                <div className="col">
                    <div className="btn-group mb-2 mt-2 ms-5" role="group" aria-label="Third group">
                        {/* <!-- Update button --> */}
                        <button onClick={update} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>
                        {/* <!-- Delete button --> */}
                        <button onClick={deleteFormation} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}






