import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { Trash as TrashIcon } from 'react-bootstrap-icons';
import { Pencil as PencilIcon} from 'react-bootstrap-icons';



export default function Technique(props: any) {
    const [isTrashHovered, setIsTrashHovered] = useState(false);
    /*   console.log(props); */

    const [techInput, setTechInput] = useState<string>("");
    const [showInput, setShowInput] = useState(false);

    const token = useContext(AuthContext).user?.access_token;
    /*  console.log("test ", token); */



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

        if (responseJson.statusCode === 200) {
            props.patch(responseJson.data)
            setShowInput(false);
            console.log(props.patch);
            
        }
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
        /* console.log("Success!", responseJson); */
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
                        {props.item?.libelle}
                    </li >
                    {showInput && <div>
                        <hr />
                        <input type='text' className="form-control" value={techInput} placeholder="Modifiez votre compétence ici" onChange={(event) => setTechInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button onClick={patchTechnique} type="button" className="btn btn-outline-success btn-sm" data-mdb-ripple-color="dark" >
                            <i className="bi bi-check-circle-fill"></i>
                        </button>
                    </div>}
                </div>

                <div className="col">
                    <div className="btn-group mb-2 mt-2 ms-5" role="group" aria-label="Third group">
                        {/* <!-- Update button --> */}
                        {/* <button onClick={() => patchTechnique()} type="button" className="btn" data-mdb-ripple-color="dark" >
                        <PencilIcon size ={20}
                            onMouseEnter = {()=>setIsTrashHovered(true)}
                            onMouseLeave = {()=> setIsTrashHovered(false)}
                            style = {{color:isTrashHovered? "#e9c131": "#b8b8b8"}}/>
                        </button> */}
                        {/* <!-- Delete button -->  */}
                        {/*  <button onClick={deleteTechnique} type="button" className="btn" data-mdb-ripple-color="dark" >
                            <TrashIcon size ={20}
                            onMouseEnter = {()=>setIsTrashHovered(true)}
                            onMouseLeave = {()=> setIsTrashHovered(false)}
                            style = {{color:isTrashHovered? "#be0808": "#b8b8b8"}}/>
                        </button>   */}

                        <button onClick={update} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>

                        {/* bouton supprimer */}
                        <button onClick={deleteTechnique} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}