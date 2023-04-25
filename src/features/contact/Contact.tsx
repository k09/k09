import ContactProps from "./ContactProps";
export default function Contact(props: ContactProps) {
    return (
      <>
        <section className="p-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md">
                <h2 className="text-center mb-4">{props.title}</h2>
                <ul className="list-group list-group-flush lead">
                  <li className="list-group-item">
                    <span className="fw-bold">{props.addressLabel}</span>
                    {props.address}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">{props.phoneLabel}</span>
                    {props.phone}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">{props.emailLabel}</span>
                    {props.email}
                  </li>
                </ul>
              </div>
              <div className="col-md">
                <img className='img-fluid d-none d-sm-block' src={props.imageUrl} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}