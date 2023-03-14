import { useEffect, useState } from "react";
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
export default function Langue()
{
    const [ langue, setLangue ] = useState<TLangue[]>([]);
    const [ langueInput, setLangueInput ] = useState("");
    const [ niveauInput, setNiveauInput ] = useState("");



    // Création d'une langue dans la BDD.
    async function CreateLangue()
    {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
            },
            body: JSON.stringify({
                langue: langueInput,
                niveau: niveauInput
            })
        };
        const response = await fetch('http://localhost:8000/langues', requestOptions);
        const responseJson = await response.json();

        console.log("Success", responseJson.data);

        setLangue([...langue, responseJson.data]);
        setLangueInput("");
        setNiveauInput("");
    }



    // Récupération de toutes les langues dans la BDD.
    async function GetLangue()
    {
        const requestOptions = {
            method: 'GET',
            headers: {
                /* 'Content-Type': 'application/json', */
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
            },
           /*  body: JSON.stringify(body) */
        };
        const response = await fetch('http://localhost:8000/langues', requestOptions);

        const responseJson = await response.json();

        console.log("Success", responseJson);

        setLangue(responseJson.data);
    }


    useEffect(() => {
        GetLangue();
    }, []);

    function DeleteLangue(id:number){
        const newLangue = langue.filter(item => item.id !==id)
        setLangue(newLangue)
    }
    const listLangue = langue?.map(item => 
        <ModificationLangue del={DeleteLangue} item={item} key={item.id}/>
    )


    return (
        <div className='container mt-5'>

            {/* Récupération de toutes les langues et niveaux */}
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">

                    {/*Titre dans l'entête accordéon */}
                    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
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

                        <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group">



                            {/* <!-- Add button --> */}


                            <div className="input-group mb-3">
                                <input type='text' className="form-control" value={langueInput} placeholder="Saisir votre compétence" onChange={(event) => setLangueInput(event.target.value)}aria-label="Recipient's username" aria-describedby="button-addon2"></input>

                                <input type='text' className="form-control" value={niveauInput} placeholder="Saisir votre compétence" onChange={(event) => setNiveauInput(event.target.value)}aria-label="Recipient's username" aria-describedby="button-addon2"></input>

                                <button onClick={() => GetLangue()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>





                            {/* <button type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                <i className="bi bi-plus"></i>
                                <h5 className="card-header">{langue?.langue}</h5>
                                <h5 className="card-header">{langue?.niveau}</h5>
                                <input type='text' onChange={(event) => setLangueInput(event.target.value)}></input>
                                <button onClick={CreateLangue}>Valider</button>
                            </button> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Langue }
