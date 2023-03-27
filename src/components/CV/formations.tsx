import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Formation from './formation';

type TForm = {
    id: number,
    lieu_formation: string,
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
                lieu_formation: formInput,
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
    function patchFormation(item: TForm) {
        const index = test!.user.formations.findIndex(elm => elm.id === item.id);
        test!.user.formations[index] = item;
        setUser({ ...test! });


    }
    function deleteFormation(id: number) {
        /* const newTechnique = technique.filter(item => item.id !== id)
        setTechnique(newTechnique); */
        const form = test!.user.formations.filter(item => item.id !== id)
        test!.user.formations = form;
        console.log(test);

        setUser({ ...test! });

    }
    const listFormation = user?.formations?.map(item => <Formation del={deleteFormation} patch={patchFormation} item={item} key={item.id} />)
    console.log(listFormation);
    console.log(user);



    return (


        <div className='container px-0 mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-1 me-1">
                    <h2 className="accordion-header " id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed shadow p-3  bg-body-tertiary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <div className="position-absolute top-50 start-50 translate-middle text-center">  FORMATIONS</div>
                        </button>
                    </h2>

                    {/* <!-- Get All Formations --> */}
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">


                                {listFormation}




                                {/* <!-- Add Formations button --> */}
                                <div className="row-fluid input-group mb-3 px-1">

                                    <div className="col-12 col-md-3 px-1 mt-1">
                                        <input type='text' className="form-control" value={formInput} placeholder="Lieu de formation" onChange={(event) => setFormInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    </div>

                                    <div className="col-12 col-md-3 px-1 mt-1">
                                        <input type='text' className="form-control" value={diplomeInput} placeholder="Diplôme obtenu" onChange={(event) => setDiplomeInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    </div>

                                    <div className="col-12 col-md-3 px-1 mt-1">
                                        <input type='text' className="form-control" value={dateInput} placeholder="Date d'obtention" onChange={(event) => setDateInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    </div>

                                    <div className="col-12 col-md-3 px-1 mt-1">
                                        <button onClick={() => createFormation()} type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}








