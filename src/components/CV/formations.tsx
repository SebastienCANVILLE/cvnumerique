import { useState, useEffect } from 'react';

type TForm = {
    id: number;
    specialite: string,
    diplôme: string,
    date_obtention: Date,
    user: {}
}
export default function Formation() {

    const [formation, setFormation] = useState<TForm | undefined>();
    const [formInput, setFormInput] = useState("")

    const body = {
        specialite: formInput,
        diplôme: formInput,
        date_obtention: formInput
    }
    async function fetchData() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6OCwiaWF0IjoxNjc2OTY4NTA5LCJleHAiOjE2ODE5Njg1MDl9.BwDYPpK0WHJYcviyhTb05rCmqI0I1wWXbiYjC_VZbiY'
            },
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/formations', requestOptions)
        const responseJson = await response.json();

        if (!response.ok) {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        }
        console.log("Success!", responseJson);

        setFormation(responseJson);

        async function getFormations() {

            const requestOptions = {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
                },
                body: JSON.stringify(body)
            };


            const response = await fetch('http://localhost:8000/formations', requestOptions)
            const responseJson = await response.json();

            if (!response.ok) {
                // get error message from body or default to response status
                const error = (responseJson && responseJson.message) || response.status;
                return Promise.reject(error);
            }
            console.log("Success!", responseJson);

            setFormation(responseJson.formation);

        }
        /* useEffect(() => {

            getFormations();

        }, []); */
    }
        return (


            <div className='container mt-5'>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Formations
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">

                            <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">
                                <button type="button" className="btn btn-info justify-content-end">+</button>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

        )
    }








