import { Container, Row } from "react-bootstrap";
import Header from "../components/header";
import Kartya from "../components/Kartya";
import { useEffect, useState } from "react";

export interface Sajt {
    id:number;
    nev:string;
    szarmazasiHely:string;
    iz:string;
    allag:string;
    allagIndex:number;
}





export default function Listazas(){
    
    
    const [sajtok, setSajtok] = useState<Sajt[]>();

    useEffect(() => {
        fetch("http://localhost:3000/sajt")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setSajtok(data);
            })
    }, [])


    return <>
    <Container>
        <h1 className="pt-2">Listázás</h1>
        <Row>
           {
            sajtok?.map(element =>
                <Kartya {...element} torlesE={false}></Kartya>
            )
           }
        </Row>

    </Container>
    </>
}