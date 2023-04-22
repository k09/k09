import {ChevronRight} from 'react-bootstrap-icons';

export default function Content() {
    const img2 = 'https://www.sinfonia.is/media/hljodfaeraleikarar-2/c870x510/Gudmundur_Hafsteinsson_SINFO.jpg';
    const img3 = 'https://www.sinfonia.is/media/hljodfaeraleikarar-2/c870x510/Nimrod_Ron_SINFO.jpg';
    return (
      <>
      <section id='learn' className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={img2} alt="" className='img-fluid' />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid facilis modi temporibus officiis maxime?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem impedit eos accusamus aperiam velit nulla sequi optio a totam ipsa voluptatum harum assumenda, dolorum enim modi quae nam consequuntur?</p>
              <a href="#" className="btn btn-light-mt-3"><ChevronRight/> Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section id='react' className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid facilis modi temporibus officiis maxime?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem impedit eos accusamus aperiam velit nulla sequi optio a totam ipsa voluptatum harum assumenda, dolorum enim modi quae nam consequuntur?</p>
              <a href="#" className="btn btn-light-mt-3"><ChevronRight/> Read More</a>
            </div>
            <div className="col-md">
              <img src={img3} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>



      </>
    );
}