import { useState } from "react";

type TLangues = {
    id: number;
    langue: string;
    niveau: string;
    user: {}
}

export default function CreateLangue() {
    const [langues, setLangues] = useState <TLangues |undefined > ();
    const [niveau, SetNiveau] = useState <TLangues |undefined >();
    const [languesInput, setLanguesInput] = useState ("");
    const [niveauInput, SetNiveauInput] = useState ("");

    //useEffect (() => {
    async function fetchData() {
        const body = {
            langue: languesInput,
            niveau: niveauInput
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch ('http://localhost:8000/langues', requestOptions);
        const responseJson = await response.json();
        console.log(responseJson);

        setLangues(responseJson);
        console.log(langues);
        SetNiveau(responseJson);
        console.log(niveau);        
    }
    //fetchData();
//},[]);

    return (
        <div>
            <div className="card text-center m-3">
                <h5 className="card-title">Connaissance d'une langue</h5>
                <h5 className="card-header">{langues?.langue}</h5>
                <input type='text' onChange={(event) => setLanguesInput(event.target.value)}></input>
                
                <h5 className="card-title">Mon niveau de connaissance de la langue:</h5>
                <h5 className="card-header"> {langues?.niveau} </h5>
                <input type='text' onChange={(event) => SetNiveauInput(event.target.value)}></input>
                <button onClick={fetchData}>Valider</button>
            </div>
        </div>
    );
}
export { CreateLangue}



    /* return (
        <div className='container mt-5'>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                    Langues
                </button>
            </h2>
            <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-info justify-content-end">+</button>
                </div>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        </div>
    ); */
