import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Interet(props: any) {
    /*   console.log(props); */



    const [intInput, setIntInput] =  useState<string>("");
    const token = useContext(AuthContext).token;

    async function patchInteret() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({

                intitule: intInput
            })
        };
        const response = await fetch(`http://localhost:8000/interets/${props.item.id}`, requestOptions)
        const responseJson = await response.json();

        console.log("Success!", responseJson);
        setIntInput(responseJson);
    };

    async function deleteInteret() {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            }
        };
        const response = await fetch(`http://localhost:8000/interets/${props.item.id}`, requestOptions)
        const responseJson = await response.json()
        console.log("Success!", responseJson);
        if (responseJson.statusCode === 200) {
            props.del(props.item.id)
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills">
                        {props.item?.intitule}
                    </li >
                </div>

                <div className="col">

                    <div className="btn-group mb-2 mt-2 ms-5" role="group" aria-label="Third group">

                        {/* <!-- Update button --> */}
                        <button onClick={() => patchInteret()} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>
                        {/* <!-- Delete button --> */}
                        <button onClick={deleteInteret} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>


                    </div>
                </div>

            </div>

        </div>

    )
}