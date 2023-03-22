import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import CentreInteret from "./centreInteret";


type TCInt = {
    id: number,
    intitule: string
}

export default function CentreInterets() {

    /* const [interet, setInteret] = useState<TCInt[]>([]); */
    const [intInput, setIntInput] = useState<string>("");

    //POST request fetch inside useEffect React hooks

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;

    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;
    async function createInteret() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                intitule: intInput
            })
        };
        const response = await fetch('http://localhost:8000/interets', /*{ method: "POST" }*/requestOptions);
        const responseJson = await response.json();
        console.log("Success!", responseJson);
        test!.user.centres_interets = [...test!.user.centres_interets, responseJson.data]
        setUser({ ...test! });
        setIntInput("");
    };
    /* async function getInteret() {
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        const response = await fetch('http://localhost:8000/interets', requestOptions)
        const responseJson = await response.json();
        console.log(responseJson);
        console.log("Success!", responseJson);
        setInteret(responseJson);

    };
    useEffect(() => {
        getInteret();
    }, []);
 */
    function patchInteret(item: TCInt) {
        /* const interet = test!.user.centres_interets.filter((elm) => elm.id !== item.id);
        const newInteret= [...interet, item];
        test!.user.centres_interets = newInteret;
        setUser({...test!}); */
        const index = test!.user.centres_interets.findIndex(elm => elm.id === item.id);
        test!.user.centres_interets[index] = item;
        setUser({ ...test! });
    }
    function deleteInteret(id: number) {
        const interet = test!.user.centres_interets.filter(item => item.id !== id);
        test!.user.centres_interets = interet;
        console.log(test);

        setUser({ ...test! });
    }
    const listInteret = user?.centres_interets?.map(item => <CentreInteret del={deleteInteret} patch={patchInteret} item={item} key={item.id} />)

    return (

        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                        <button className="accordion-button collapsed shadow p-3  bg-body-tertiary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                            <div className="position-absolute top-50 start-50 translate-middle text-center"> CENTRES D'INTÉRÊTS</div>
                        </button>
                    </h2>


                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                        <div id="collapseNine" className="accordion-collapse collapse show" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <div className="col">
                                        {listInteret}
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type='text' className="form-control" value={intInput} placeholder="Votre Centre d'intérêt" onChange={(event) => setIntInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <button onClick={() => createInteret()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
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

