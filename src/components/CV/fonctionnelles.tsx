import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Fonctionnelle from './fonctionnelle';
import './cv.css'

type TFonc = {
    id: number,
    libelle: string
}
export default function Fonctionnelles() {

    /*  const [fonctionnelle, setFonctionnelle] = useState<TFonc[]>([]); */
    const [foncInput, setFoncInput] = useState<string>("");

    //POST request fetch inside useEffect React hooks

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;
    /* console.log(user); */

    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;

    async function createFonctionnelle() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                libelle: foncInput
            })
        };
        const response = await fetch('http://localhost:8000/fonctionnelles', requestOptions)
        const responseJson = await response.json();
        console.log("Success", responseJson);
        test!.user.fonctionnelles = [...test!.user.fonctionnelles, responseJson.data]

        /* const newFonc= [...fonctionnelle, responseJson.data];
        console.log(newFonc);
        
        setFonctionnelle([...fonctionnelle, responseJson.data]); */
        setUser({ ...test! });
        setFoncInput("");
    };


    /* async function getFonctionnelle() {
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        const response = await fetch('http://localhost:8000/fonctionnelles', requestOptions)
        const responseJson = await response.json();
        console.log(responseJson);
        console.log("Success!", responseJson);
        setFonctionnelle(responseJson.data);
    };

    useEffect(() => {
        getFonctionnelle();
    }, []); */
    function patchFonctionnelle(item: TFonc){
        const fonctionnelle = test!.user.fonctionnelles.filter((elm) => elm.id !== item.id);
        console.log(fonctionnelle);

        const newFonc = [...fonctionnelle, item];
        console.log(newFonc);
        test!.user.fonctionnelles = newFonc;
        setUser({ ...test! }); 
       
    }
    function deleteFonctionnelle(id: number) {
        const newFonctionnelle = test!.user.fonctionnelles.filter(item => item.id !== id)
        /* setFonctionnelle */test!.user.fonctionnelles = newFonctionnelle;
        setUser({ ...test! });
    }
    const listFonctionnelle = user?.fonctionnelles?.map(item =>
        <Fonctionnelle del={deleteFonctionnelle} patch ={patchFonctionnelle} item={item} key={item.id} />)


    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                        <button className="accordion-button collapsed shadow p-3  bg-body-tertiary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            <div className="position-absolute top-50 start-50 translate-middle text-center">COMPÉTENCES FONCTIONNELLES</div>
                        </button>
                    </h2>

                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                        <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <div className="col">
                                        {listFonctionnelle}
                                    </div>
                                </div>

                                {/* <!-- Add button --> */}
                                <div className="input-group mb-3">
                                    <input type='text' className="form-control" value={foncInput} placeholder="Votre Compétence fonctionnelle" onChange={(event) => setFoncInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <button onClick={() => createFonctionnelle()} type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                        <i className="bi bi-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

