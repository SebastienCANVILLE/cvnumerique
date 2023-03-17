import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Formation from './formation';

type TForm = {
    id: number,
    specialite: string,
    diplôme: string,
    date_obtention: Date,
}



export default function Formations() {

    /*   const [formation, setFormation] = useState<TForm[]>([]); */

    const [formInput, setFormInput] = useState<string>("");
    const [diplomeInput, setDiplomeInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;

    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;


    async function createFormation() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                specialite: formInput,
                diplôme: diplomeInput,
                date_obtention: dateInput
            })
        };

        const response = await fetch('http://localhost:8000/formations', requestOptions)
        const responseJson = await response.json();

        /*  if (!response.ok) {
             // get error message from body or default to response status
             const error = (responseJson && responseJson.message) || response.status;
             return Promise.reject(error);
         } */
        console.log("Success!", responseJson);
        test!.user.formations = [...test!.user.formations, responseJson.data]
        /*  setFormation([...formation, responseJson.data]); */
        setUser({ ...test! });
        setFormInput("");
        setDiplomeInput("");
        setDateInput("");

    };

    /*  async function getFormations() {
 
         const requestOptions = {
             method: 'GET',
             headers: {
                 Authorization: `Bearer ${token}`
             },
         };
 
 
         const response = await fetch('http://localhost:8000/formations', requestOptions)
         const responseJson = await response.json();
 
         /* if (!response.ok) {
             // get error message from body or default to response status
             const error = (responseJson && responseJson.message) || response.status;
             return Promise.reject(error);
         } */
    /*    console.log("Success!", responseJson);
       setFormation(responseJson.data);

   };
   useEffect(() => {
       getFormations();
   }, []);  */
    function deleteFormation(id: number) {
        /* const newTechnique = technique.filter(item => item.id !== id)
        setTechnique(newTechnique); */
        const form = test!.user.formations.filter(item => item.id !== id)
        test!.user.formations = form;
        console.log(test);

        setUser({ ...test! });

    }
    const listFormation = user?.formations?.map(item => <Formation del={deleteFormation} item={item} key={item.id} />)
    console.log(listFormation);
    console.log(user);



    return (


        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <div className="position-absolute top-50 start-50 translate-middle text-center"> FORMATIONS</div>
                        </button>
                    </h2>

                    {/* <!-- Get All Formations --> */}
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        </div>
                        <ul>
                            {listFormation}
                        </ul>

                        {/* <!-- Add Formations button --> */}
                        <div className="btn-group mb-2 mt-2 ms-2 me -2" role="group" aria-label="Third group">
                            <input type='text' value={formInput} placeholder="Saisir votre formation" onChange={(event) => setFormInput(event.target.value)}></input>
                            <input type='text' value={diplomeInput} placeholder="Saisir votre diplôme" onChange={(event) => setDiplomeInput(event.target.value)}></input>
                            <input type='text' value={dateInput} placeholder="Date d'obtention" onChange={(event) => setDateInput(event.target.value)}></input>
                            <button onClick={() => createFormation()} type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}








