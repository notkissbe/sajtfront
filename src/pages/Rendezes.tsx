import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Header from "../components/header";
import Kartya from "../components/Kartya";
import { useEffect, useState } from "react";

export interface Sajt {
  id: number;
  nev: string;
  szarmazasiHely: string;
  iz: string;
  allag: string;
  allagIndex: number;
}

export default function Rendezes() {
  const [sajtok, setSajtok] = useState<Sajt[]>();
  const [sortConfig, setSortConfig] = useState<{
    direction: "asc" | "desc";
  } | null>(null);
  const [filter, setFiltered] = useState<Sajt[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/sajt")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSajtok(data);
        setFiltered(data);
      });
  }, []);

  function handleRendezes(direction: "asc" | "desc") {
    const sortedSajtok = [...filter].sort((a, b) => {
      if (a.allagIndex < b.allagIndex) {
        return direction === "asc" ? -1 : 1;
      }
      if (a.allagIndex > b.allagIndex) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setFiltered(sortedSajtok);
    setSortConfig({ direction });
  }

  return (
    <>
      <Container>
        <h1 className="pt-2">Rendezés</h1>
        <Row>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Rendezés
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {handleRendezes("asc")}}>Növekvő keménység</Dropdown.Item>
              <Dropdown.Item onClick={() => {handleRendezes("desc")}}>Csökkenő keménység</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Row>
        <hr />
        <Row>
          {filter?.map((element) => (
            <Kartya {...element} torlesE={false}></Kartya>
          ))}
        </Row>
      </Container>
    </>
  );
}
