import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';




/* type TFonc = {
    id: number,
    libelle: string
} */

export default function Fonctionnelle(props: any) {

    /* const [fonctionnelle, setFonc] = useState<TFonc[]>([]); */
    const [foncInput, setFoncInput] = useState<string>("");
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
        setFoncInput(responseJson.data);
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
                        <button onClick={() => patchFonctionnelle()} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
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