import FooterProps from './FooterProps';
import {ArrowUpCircle} from 'react-bootstrap-icons';

export default function Footer(props: FooterProps) {
    return (
      <>
        <footer className="p-5 bg-dark text-white text-center position-relative">
            <div className="container">
                <p className="lead">Copyright &copy 2023 k09</p>
                <a href="#" className="position-absolute bottom-0 end-0 p-5">
                    <h1><ArrowUpCircle /></h1>
                </a>
            </div>
        </footer>
      </>
    );
}