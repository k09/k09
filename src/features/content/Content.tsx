import ContentProps, { ImagePosition } from './ContentProps';
import {ChevronRight} from 'react-bootstrap-icons';

export default function Content(props: ContentProps) {
    const firstColumnOrder = props.imagePosition === ImagePosition.RIGHT ? 0 : 1;
    const secondColumnOrder = firstColumnOrder === 0 ? 1 : 0;
    const firstColumnClassName = `col-md order-${firstColumnOrder}`;
    const secondColumnClassName = `col-md p-5 order-${secondColumnOrder}`;
    return (
      <>
        <section id='learn' className="p-5">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className={firstColumnClassName}>
                <img src={props.imageUrl} alt="" className='img-fluid' />
              </div>
              <div className={secondColumnClassName}>
                <h2>{props.title}</h2>
                <p className="lead">{props.subtitle}</p>
                <p>{props.description}</p>
                <a href="#" className="btn btn-light-mt-3"><ChevronRight/> {props.more}</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}