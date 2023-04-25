import CardProps from './CardProps';
import {Laptop} from 'react-bootstrap-icons';
//Laptop Virtual
//PersonSquare Hybrid
//People In Person
export default function Card(props: CardProps) {
    return (
      <>
        <div className="card bg-dark text-light">
          <div className="card-body text-center">
            <div className="h1 mb-3"><Laptop /></div>
            <h3 className="card-title mb-3">{props.title}</h3>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">{props.more}</a>
            </div>
        </div>
      </>
    );
}