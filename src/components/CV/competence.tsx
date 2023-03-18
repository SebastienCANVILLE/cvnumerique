import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

/* type TComp = {
    id: number;
    competence_clé: string;
} */

export default function Competence(props: any) {
    /*   console.log(props); */
    const [showInput, setShowInput] = useState(false)
    const [compInput, setCompInput] = useState<string>("");


    const token = useContext(AuthContext).user?.access_token;


    async function patchCompetence() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                competence_clé: compInput
            })
        };
        const response = await fetch(`http://localhost:8000/competences/${props.item.id}`, requestOptions)
        const responseJson = await response.json();
        console.log("Success!", responseJson);

        if (responseJson.statusCode === 200) {
            props.patch(responseJson.data)
            console.log(props.patch);
            setShowInput(false);
            
        }
        
        
    };


    async function deleteCompetence() {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await fetch(`http://localhost:8000/competences/${props.item.id}`, requestOptions)
        const responseJson = await response.json()
        console.log("Success!test2", responseJson);
        if (responseJson.statusCode === 200) {
            props.del(props.item.id)
        }
    };
 function update(){
    setShowInput(true)
 };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills">
                        {props.item?.competence_clé}
                    </li >
                    {showInput && <li>
                    <input type='text' className="form-control" value={compInput} placeholder="Modifier votre soft skill" onChange={(event) => setCompInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    <button onClick={patchCompetence} type="button" className="btn btn-outline-success btn-sm" data-mdb-ripple-color="dark" >
                            <i className="bi bi-check-circle-fill"></i>
                        </button>
                </li>}
                </div>
                <div className="col">
                    <div className="btn-group mb-2 mt-2 ms-5" role="group" aria-label="Third group">
                        {/* <!-- Update button --> */}
                        <button onClick={update} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>
                        {/* <!-- Delete button --> */}
                        <button onClick={deleteCompetence} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}