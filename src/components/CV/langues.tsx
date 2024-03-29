import { useState, useContext } from "react";
import { AuthContext } from '../../context/authContext';
import ModificationLangue from "./langue";

// Typage de la table 'langues'
type TLangue = {
    id: number;
    langue: string;
    niveau: string;
}


/** Foncton qui appelle:
 * * **CreateLangue : fonction qui va utiliser le front pour faire un 'POST'.
 * * **GetLangue    : fonction qui va utiloser le front pour faire un 'GET'.
 */
export default function Langues() {
    const [langueInput, setLangueInput] = useState("");
    const [niveauInput, setNiveauInput] = useState("");

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;
    

    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;

    // Création d'une langue dans la BDD.
    async function CreateLangue() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                langue: langueInput,
                niveau: niveauInput
            })
        };
        const response = await fetch('http://localhost:8000/langues', requestOptions);
        const responseJson = await response.json();


        /* setLangue([...langue, responseJson.data]); */
        test!.user.langues = [...test!.user.langues, responseJson.data]
        setUser({ ...test! });
        setLangueInput("");
        setNiveauInput("");
    }


    function patchLangue(item: TLangue) {
        /*  const langue = test!.user.langues.filter((elm)=> elm.id !== item.id);
        console.log(langue);
        
        const newLangue = [...langue, item];
         console.log(newLangue); */

        /*    test!.user.langues = newLangue; */
        const index = test!.user.langues.findIndex(elm => elm.id === item.id);
        test!.user.langues[index] = item;
        setUser({ ...test! });

    }
    function deleteLangue(id: number) {
        /* const newLangue = langue.filter(item => item.id !==id)
        setLangue(newLangue) */
        const langue = test!.user.langues.filter(item => item.id !== id);
        test!.user.langues = langue;

        setUser({ ...test! });
    }

    const listLangue = user?.langues?.map((item: { id: any }) => <ModificationLangue del={deleteLangue} patch={patchLangue} item={item} key={item.id} />)
    console.log(listLangue);
    console.log(user);

    return (
        <div className='container px-0 mt-5'>

            {/* Récupération de toutes les langues et niveaux */}
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-1 me-1">

                    {/*Titre dans l'entête accordéon */}
                    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                        <button className="accordion-button collapsed shadow p-3  bg-body-tertiary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                            <div className="position-absolute top-50 start-50 translate-middle text-center"> LANGUES</div>
                        </button>
                    </h2>
                    {/* Récupération de toutes les langues lors de l'effondrement */}
                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                        <div id="collapseEight" className="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <ul className="list-inline">
                                        {listLangue}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group"> */}

                        {/* <!-- Add button --> */}

                        <div className="row-fluid input-group mb-3 px-1">

                            <div className="col-12 col-md-3 px-1 mt-1">
                                <input type='text' className="form-control" value={langueInput} placeholder="Saisir votre langue" onChange={(event) => setLangueInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                            </div>

                            <div className="col-12 col-md-3 px-1 mt-1">
                                <input type='text' className="form-control" value={niveauInput} placeholder="Saisir votre niveau" onChange={(event) => setNiveauInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                            </div>

                            <div className="col-12 col-md-3 px-1 mt-1">
                                <button onClick={() => CreateLangue()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
