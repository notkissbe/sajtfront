import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export interface KartyaAdatok {
    id:number;
    nev:string;
    szarmazasiHely:string;
    iz:string;
    allag:string;
    allagIndex:number;
    torlesE:boolean;
}

export default function Kartya(adatok:KartyaAdatok) {
  return (
    <>
      <Card style={{ width: "18rem" }}className="mx-auto my-3" key={adatok.id}>
        <Card.Title className="pt-2">{adatok.nev}</Card.Title>
        <Card.Body>
            <ListGroup variant="flush">
                <ListGroupItem>Származási hely: {adatok.szarmazasiHely}</ListGroupItem>
                <ListGroupItem>Íz: {adatok.iz}</ListGroupItem>
                <ListGroupItem>Állag: {adatok.allag}</ListGroupItem>
            </ListGroup>
            {adatok.torlesE &&
                <Button variant="danger" className="w-100">Törlés</Button>
            }
        </Card.Body>
      </Card>
    </>
  );
}
