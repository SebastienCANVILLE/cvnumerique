import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Technique from './technique';

type TTech = {
    id: number,
    libelle: string
}

export default function Techniques() {


    const [techInput, setTechInput] = useState<string>("");

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;


    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;


    async function createTechnique() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                libelle: techInput
            })
        };
        const response = await fetch('http://localhost:8000/techniques', /*{ method: "POST" }*/requestOptions);
        const responseJson = await response.json();


        test!.user.techniques = [...test!.user.techniques, responseJson.data]

        setUser({ ...test! });
        setTechInput("");
    };



    function patchTechnique(item: TTech) {
        const technique = test!.user.techniques.filter((elm) => elm.id !== item.id);


        const newTech = [...technique, item];

        test!.user.techniques = newTech;
        setUser({ ...test! });

    }

    function deleteTechnique(id: number) {

        const tech = test!.user.techniques.filter(item => item.id !== id)
        test!.user.techniques = tech;

        setUser({ ...test! });

    }
    const listTechnique = user?.techniques?.map(item => <Technique del={deleteTechnique} patch={patchTechnique} item={item} key={item.id} />)


    return (
        <div className='container px-0 mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-1 me-1">
                    <h2 className="accordion-header " id="panelsStayOpen-headingFive">
                        <button className="accordion-button collapsed shadow p-3  bg-body-tertiary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            <div className="position-absolute top-50 start-50 translate-middle text-center">  COMPÉTENCES TECHNIQUES</div>
                        </button>
                    </h2>
                    {/* <!-- Get All Compétences Techniques --> */}
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                {listTechnique}


                                {/* <!-- Add Technique button --> */}
                                <div className="input-group mb-3">
                                    <input type='text' className="form-control" value={techInput} placeholder="Votre Hard Skill" onChange={(event) => setTechInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <button onClick={() => createTechnique()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
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
}

