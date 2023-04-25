import LogoProps from './LogoProps';
import {Fan} from 'react-bootstrap-icons';

export default function Logo(props: LogoProps) {
    return (
        <>
            <div className="container text-info">
                <div className="row">
                    <div className="col"><Fan /></div>
                    <div className="col">
                        <span className="font-size-lg text-warning">
                            {props.name}
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="font-size-sm text-success">
                            {props.slogan}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}