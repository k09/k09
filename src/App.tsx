import './App.css'
import { 
  Laptop, PersonSquare, People, ChevronRight,
  Twitter, Facebook, Instagram, Linkedin,
  ArrowUpCircle
} from 'react-bootstrap-icons';

export default function App() {
  const img1 = 'https://www.sinfonia.is/media/hljodfaeraleikarar/c870x510/ptvrxqdh.jpg';
  const img2 = 'https://www.sinfonia.is/media/hljodfaeraleikarar-2/c870x510/Gudmundur_Hafsteinsson_SINFO.jpg';
  const img3 = 'https://www.sinfonia.is/media/hljodfaeraleikarar-2/c870x510/Nimrod_Ron_SINFO.jpg';
  const img4 = 'https://www.sinfonia.is/media/hljodfaeraleikarar-2/c870x510/Gunnhildur_Dadadottir_SINFO.jpg'

  const lego1 = 'https://randomuser.me/api/portraits/lego/1.jpg';
  const lego2 = 'https://randomuser.me/api/portraits/lego/2.jpg';
  const lego3 = 'https://randomuser.me/api/portraits/lego/3.jpg';
  const lego4 = 'https://randomuser.me/api/portraits/lego/4.jpg';
  const lego5 = 'https://randomuser.me/api/portraits/lego/5.jpg';
  const lego6 = 'https://randomuser.me/api/portraits/lego/6.jpg';
  const lego7 = 'https://randomuser.me/api/portraits/lego/7.jpg';
  const lego8 = 'https://randomuser.me/api/portraits/lego/8.jpg';
  const lego9 = 'https://randomuser.me/api/portraits/lego/9.jpg';


  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">logo</a>
          <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navmenu'>
            <span className="navbar-toggler-icon" />                
          </button>
          <div className="collapse navbar-collapse" id='navmenu'>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link">What You'll Learn</a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">Questions</a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">Instructors</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>Become a <span className="text-warning">Web Developer</span></h1>
              <p className='lead my-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fugit nulla eos, cumque aut quaerat?
              </p>
              <button className="btn btn-primary btn-lg" data-bs-toggle='modal' data-bs-target='#enroll'>Start The Enrollment</button>
            </div>
            <img className='img-fluid w-50 d-none d-sm-block' src={img1} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-between">
            <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
            <div className="input-group new-input">
              <input type="text" className="form-control" placeholder='Enter Email' />
              <button className="btn btn-dark btn-lg" type='button'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>       

      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3"><Laptop /></div>
                  <h3 className="card-title mb-3">Virtual</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, exercitationem possimus! Perferendis eius earum expedita.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3"><PersonSquare /></div>
                  <h3 className="card-title mb-3">Hybrid</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, exercitationem possimus! Perferendis eius earum expedita.</p>
                  <a href="#" className="btn btn-dark">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-warning">
                <div className="card-body text-center">
                  <div className="h1 mb-3"><People /></div>
                  <h3 className="card-title mb-3">In Person</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, exercitationem possimus! Perferendis eius earum expedita.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id='questions' className="p-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button data-bs-toggle="collapse" data-bs-target="#question-1" className="accordion-button collapsed" type="button">
                  Where exactly are you located?
                </button>
              </h2>
              <div id="question-1" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo impedit? Libero, vitae ut. Omnis ipsum, maxime tenetur rerum dignissimos tempore quam veniam iusto accusamus minus placeat dicta itaque recusandae porro error nulla eos nisi perferendis, sunt et, a debitis. Nulla amet nisi autem fugit. Eaque aliquam quae sint cupiditate.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button data-bs-toggle="collapse" data-bs-target="#question-2" className="accordion-button collapsed" type="button">
                  How much does it cost to attend?
                </button>
              </h2>
              <div id="question-2" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum similique fuga quod consectetur sequi, quis provident minus iusto labore perferendis doloremque ipsam nobis iure sed quaerat cum voluptatibus voluptates porro? Eius ea quo vitae cumque, alias a? Sunt, facilis explicabo beatae dolore pariatur voluptas facere, qui at asperiores eum neque! Officiis ex odio laboriosam iure, minima, dolorum tempore voluptatibus quia nulla perspiciatis eos libero architecto modi ullam ratione delectus unde tempora rem quis voluptas fuga!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button data-bs-toggle="collapse" data-bs-target="#question-3" className="accordion-button collapsed" type="button">
                  What do I need to know?
                </button>
              </h2>
              <div id="question-3" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla! Cumque at, tempora cum quisquam corporis iusto ipsum maxime officiis quia corrupti, quas libero a optio sunt assumenda, placeat repellendus sed nulla nemo nihil dolor.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button data-bs-toggle="collapse" data-bs-target="#question-4" className="accordion-button collapsed" type="button">
                  How do I sign up?
                </button>
              </h2>
              <div id="question-4" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla! Cumque at, tempora cum quisquam corporis iusto ipsum maxime officiis quia corrupti, quas libero a optio sunt assumenda, placeat repellendus sed nulla nemo nihil dolor.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button data-bs-toggle="collapse" data-bs-target="#question-5" className="accordion-button collapsed" type="button">
                  Do you help me find a job?
                </button>
              </h2>
              <div id="question-5" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla! Cumque at, tempora cum quisquam corporis iusto ipsum maxime officiis quia corrupti, quas libero a optio sunt assumenda, placeat repellendus sed nulla nemo nihil dolor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="instructors" className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">Our Instructors</h2>
          <p className="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web developer.
          </p>
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
            <div className="col-md-6 col-lg-3">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <img src={lego6} alt="" className="rounded-circle img-fluid mb-3" />
                  <h3 className="card-title mb-3">Jane Doe</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ad expedita at modi mollitia alias?
                  </p>
                  <p className="text-info px-5"><Twitter />&nbsp;<Facebook />&nbsp;<Instagram />&nbsp;<Linkedin /></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <img src={lego9} alt="" className="rounded-circle img-fluid mb-3" />
                  <h3 className="card-title mb-3">Simon Smith</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ad expedita at modi mollitia alias?
                  </p>
                  <p className="text-info px-5"><Twitter />&nbsp;<Facebook />&nbsp;<Instagram />&nbsp;<Linkedin /></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <img src={lego4} alt="" className="rounded-circle img-fluid mb-3" />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ad expedita at modi mollitia alias?
                  </p>
                  <p className="text-info px-5"><Twitter />&nbsp;<Facebook />&nbsp;<Instagram />&nbsp;<Linkedin /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span>
                  50 Main Street Boston MA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span>
                  (555) 555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone:</span>
                  (333) 333-3333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span>
                  enroll@k09.music
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email:</span>
                  student@k09.music
                </li>
              </ul>
            </div>
            <div className="col-md">
              <img className='img-fluid d-none d-sm-block' src={img4} alt="" />
            </div>
          </div>
        </div>
      </section>

      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy 2023 k09</p>
          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <h1><ArrowUpCircle /></h1>
          </a>
        </div>
      </footer>

      <div id='enroll' className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="lead">
                Fill out this form and we will back to you  
              </p>              
              <form>
                <div className="mb-3">
                  <label htmlFor="first-name" className='col-form-label'>
                    First Name:
                  </label>
                  <input type="text" className="form-control" id="first-name" />
                  <label htmlFor="last-name" className='col-form-label'>
                    Last Name:
                  </label>
                  <input type="text" className="form-control" id="last-name" />
                  <label htmlFor="email" className='col-form-label'>
                    Email:
                  </label>
                  <input type="text" className="form-control" id="email" />
                  <label htmlFor="phone" className='col-form-label'>
                    Phone:
                  </label>
                  <input type="text" className="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}