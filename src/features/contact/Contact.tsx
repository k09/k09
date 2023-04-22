export default function Contact() {
  const img4 = 'https://www.sinfonia.is/media/hljodfaeraleikarar-2/c870x510/Gunnhildur_Dadadottir_SINFO.jpg'
    return (
      <>
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
                    [email]]
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Student Email:</span>
                    [email]
                  </li>
                </ul>
              </div>
              <div className="col-md">
                <img className='img-fluid d-none d-sm-block' src={img4} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}