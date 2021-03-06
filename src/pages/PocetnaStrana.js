import SvaGradilista from "../components/SvaGradilista";
import { useState, useEffect } from 'react'
import axios from 'axios'


function PocetnaStrana() {

    const [gradilista, setGradilista] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/gradiliste').then(response => {

            setGradilista(response.data.data);

        });

    }, []);


    return (
        <div>
            <h1 className="mb-5 mt-3">Spisak aktivnih gradilišta</h1>

            <SvaGradilista spisak={gradilista} />
        </div>
    )
}

export default PocetnaStrana;