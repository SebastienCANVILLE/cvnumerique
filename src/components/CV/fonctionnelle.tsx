import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';



export default function Fonctionnelle(props: any) {

    /* const [fonctionnelle, setFonc] = useState<TFonc[]>([]); */
    const [foncInput, setFoncInput] = useState<string>("");
    const [showInput, setShowInput] = useState(false);

    //POST request fetch inside useEffect React hooks
    const token = useContext(AuthContext).user?.access_token;


    async function patchFonctionnelle() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                libelle: foncInput
            })
        };
        const response = await fetch(`http://localhost:8000/fonctionnelles/${props.item.id}`, requestOptions)
        const responseJson = await response.json();
        console.log("Success!", responseJson);

        if (responseJson.statusCode === 200) {
            props.patch(responseJson.data)
            setShowInput(false);
        }
    };


    async function deleteFonctionnelle() {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await fetch(`http://localhost:8000/fonctionnelles/${props.item.id}`, requestOptions)
        const responseJson = await response.json()
        console.log("Success!", responseJson);
        if (responseJson.statusCode === 200) {
            props.del(props.item.id)
        }

    };
    function update() {
        setShowInput(true)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills">
                        {props.item?.libelle}
                    </li >
                    {showInput && <div>
                        <hr />
                        <input type='text' className="form-control" value={foncInput} placeholder="Modifiez votre compétence ici" onChange={(event) => setFoncInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button onClick={patchFonctionnelle} type="button" className="btn btn-outline-success btn-sm" data-mdb-ripple-color="dark" >
                            <i className="bi bi-check-circle-fill"></i>
                        </button>
                    </div>}
                </div>

                <div className="col">
                    <div className="btn-group mb-1 mt-1 ms-5 float-md-end" role="group" aria-label="Third group">
                        {/* <!-- Update button --> */}
                        <button onClick={update} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>
                        {/* <!-- Delete button --> */}
                        <button onClick={deleteFonctionnelle} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}