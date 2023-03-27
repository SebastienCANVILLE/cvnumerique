import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Competence from './competence';
import './cv.css'

type TComp = {
    id: number,
    competence_clé: string
}
export default function Competences() {

    /* const [competence, setCompetence] = useState<TComp[]>([]); */
    const [compInput, setCompInput] = useState<string>("");
    //POST request fetch inside useEffect React hooks

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;

    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;

    async function createCompetence() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                competence_clé: compInput
            })
        };

        const response = await fetch('http://localhost:8000/competences', requestOptions)
        const responseJson = await response.json();
        test!.user.competences = [...test!.user.competences, responseJson.data];
        setUser({ ...test! });
        setCompInput("");
    };

    /* async function getCompetence() {
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        const response = await fetch('http://localhost:8000/competences', requestOptions)
        const responseJson = await response.json();
        console.log(responseJson);
        console.log("Success!", responseJson);
        setCompetence(responseJson);
    };

    useEffect(() => {
        getCompetence();
    }, []);
 */
    /*  function patchCompetence(id: number) {
         const newCompetence = test!.user.competences?.map(item =>item.id)
         const CompetenceList = newCompetence;
     } */
     function patchCompetence(item:TComp) {
        const comp = test!.user.competences.filter(elm => elm.id !== item.id);
        const newComp =[...comp, item];
        test!.user.competences= newComp;
        setUser({...test!});
     }


    function deleteCompetence(id: number) {
        const newCompetence = test!.user.competences.filter(item => item.id !== id)
        test!.user.competences = newCompetence;
        setUser({ ...test! });
    }


    const competenceList = user?.competences?.map((item :({id : any}))=>
        <Competence del={deleteCompetence} patch = {patchCompetence} item={item} key={item.id} />)



    return (
        <div className='container px-0 mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-1 me-1">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                        <button className="accordion-button collapsed shadow p-3  bg-body-tertiary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                            <div className="position-absolute top-50 start-50 translate-middle text-center"> SAVOIR ÊTRE</div>
                        </button>
                    </h2>

                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                        <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <div className="col">
                                        {competenceList}
                                    </div>
                                </div>


                                <div className="input-group mb-3">
                                    <input type='text' className="form-control" value={compInput} placeholder="Votre Soft Skill" onChange={(event) => setCompInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <button onClick={() => createCompetence()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
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

