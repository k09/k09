import {Laptop, PersonSquare, People} from 'react-bootstrap-icons';
//Laptop Virtual
//PersonSquare Hybrid
//People In Person
export default function Card() {
    return (
      <>
        <div className="card bg-dark text-light">
          <div className="card-body text-center">
            <div className="h1 mb-3"><Laptop /></div>
            <h3 className="card-title mb-3">TEXTI</h3>
            <p className="card-text">Texti texti texti texti.</p>
            <a href="#" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </>
    );
}