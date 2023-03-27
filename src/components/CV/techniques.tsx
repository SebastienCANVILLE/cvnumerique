import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Technique from './technique';

type TTech = {
    id: number,
    libelle: string
}

export default function Techniques() {

    /* const [technique, setTechnique] = useState<TTech[]>([]); *///array qui contient des techniques
    const [techInput, setTechInput] = useState<string>("");

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;
    /* console.log(user); */

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
        console.log("Success!", responseJson);

        test!.user.techniques = [...test!.user.techniques, responseJson.data]
        /* console.log(test); */
        setUser({ ...test! });
        setTechInput("");
    };


    /*  async function getTechnique() {
         const requestOptions = {
             method: 'GET',
             headers: {
                 Authorization: `Bearer ${token}`
             },
         };
         const response = await fetch('http://localhost:8000/techniques', requestOptions)
         const responseJson = await response.json();
         console.log(responseJson);
         console.log("Success!", responseJson); */
    /*   setTechnique(responseJson); */
    /* };

    useEffect(() => { */
    // getTechnique();
    /*   }, []); */
    function patchTechnique(item: TTech) {
         const technique = test!.user.techniques.filter((elm) => elm.id !== item.id);
        console.log(technique);

        const newTech = [...technique, item];
        console.log(newTech);
        test!.user.techniques = newTech;
        setUser({ ...test! });
        
    }

    function deleteTechnique(id: number) {
        /* const newTechnique = technique.filter(item => item.id !== id)
        setTechnique(newTechnique); */
        const tech = test!.user.techniques.filter(item => item.id !== id)
        test!.user.techniques = tech;
        /* console.log(test); */
        setUser({ ...test! });

    }
    const listTechnique = user?.techniques?.map(item => <Technique del={deleteTechnique} patch={patchTechnique} item={item} key={item.id} />)
    /* console.log(listTechnique);
    console.log(user); */

    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header " id="panelsStayOpen-headingFive">
                        <button className="accordion-button collapsed shadow p-3  bg-body-tertiary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            <div className="position-absolute top-50 start-50 translate-middle text-center">  COMPÉTENCES TECHNIQUES</div>
                        </button>
                    </h2>
                    {/* <!-- Get All Compétences Techniques --> */}
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <div className="col">
                                        {listTechnique}
                                    </div>
                                </div>

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

