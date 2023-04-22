import {Twitter, Facebook, Instagram, Linkedin} from 'react-bootstrap-icons';

export default function Instructor() {
    const lego2 = 'https://randomuser.me/api/portraits/lego/2.jpg';
    return (
        <>
            <div className="row g4">
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-secondary text-light">
                        <div className="card-body text-center">
                            <img src={lego2} alt="" className="rounded-circle img-fluid mb-3" />
                            <h3 className="card-title mb-3">Steve Smith</h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ad expedita at modi mollitia alias?
                            </p>
                            <p className="text-info px-5"><Twitter />&nbsp;<Facebook />&nbsp;<Instagram />&nbsp;<Linkedin /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}