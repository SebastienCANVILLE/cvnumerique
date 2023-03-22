import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';



export default function CentreInteret(props: any) {
    /*   console.log(props); */

    /*  const [interet, setInteret] = useState<TCInt[]>([]); */
    const [intInput, setIntInput] = useState<string>("");
    const [showInput, setShowInput] = useState(false);

    const token = useContext(AuthContext).user?.access_token;

    async function patchInteret() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({

                intitule: intInput
            })
        };
        const response = await fetch(`http://localhost:8000/interets/${props.item.id}`, requestOptions)
        const responseJson = await response.json();

        console.log("Success!", responseJson);

        if (responseJson.statusCode === 200) {
            props.patch(responseJson.data)
            setShowInput(false);
        };
    };
    async function deleteInteret() {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await fetch(`http://localhost:8000/interets/${props.item.id}`, requestOptions)
        const responseJson = await response.json()
        console.log("Success!", responseJson);
        if (responseJson.statusCode === 200) {
            props.del(props.item.id)
        }
    }
    function update() {
        setShowInput(true)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills">
                        {props.item?.intitule}
                    </li >
                    {showInput && <div>
                        <hr />
                        <input type='text' className="form-control" value={intInput} placeholder="Modifier votre centre d'intérêt ici" onChange={(event) => setIntInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button onClick={patchInteret} type="button" className="btn btn-outline-success btn-sm" data-mdb-ripple-color="dark" >
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
                        <button onClick={deleteInteret} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>


                    </div>
                </div>

            </div>

        </div>

    )
}