import { Container, Row } from "react-bootstrap";
import Kartya from "../components/Kartya";
import { useEffect, useState } from "react";
import { Sajt } from "./Listazas";


export default function Kereses(){
    
    
    const [sajtok, setSajtok] = useState<Sajt[]>();
    const [filtered, setFiltered] = useState<Sajt[]>();
    const [searchTerm, setSearchTerm] = useState<String>("");

    useEffect(() => {
        fetch("http://localhost:3000/sajt")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setSajtok(data);
                setFiltered(data);
            })
            
    }, [])

    function handleSearch(event:React.ChangeEvent<HTMLInputElement>){
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = sajtok?.filter((sajt) =>
            sajt.nev.toLowerCase().includes(term) ||
            sajt.szarmazasiHely.toLowerCase().includes(term) ||
            sajt.allag.toLowerCase().includes(term)
        );
        setFiltered(filtered);
    }

    return <>
    <Container>
        <h1 className="pt-2">Keresés</h1>
        <input type="search" className="form-control mt-3" placeholder="Keresés" onChange={handleSearch}/>
        <hr/>
        <Row>
           {
            filtered?.map(element =>
                <Kartya {...element} torlesE={false}></Kartya>
            )
           }
        </Row>

    </Container>
    </>
}