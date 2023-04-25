import InstructorProps from './InstructorsProps';
import {Twitter, Facebook, Instagram, Linkedin} from 'react-bootstrap-icons';

export default function Instructor(props: InstructorProps) {
    return (
        <>
            <div className="col-md-6 col-lg-3">
                <div className="card bg-secondary text-light">
                    <div className="card-body text-center">
                        <img src={props.imageUrl} alt="" className="rounded-circle img-fluid mb-3" />
                        <h3 className="card-title mb-3">{props.name}</h3>
                        <p className="card-text">{props.description}</p>
                        <p className="text-info px-5"><Twitter />&nbsp;<Facebook />&nbsp;<Instagram />&nbsp;<Linkedin /></p>
                    </div>
                </div>
            </div>
        </>
    );
}