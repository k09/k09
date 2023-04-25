import NewsletterProps from "./NewsletterProps";
export default function Newsletter(props: NewsletterProps) {
    return (
        <>
            <section className="bg-primary text-light p-5">
                <div className="container">
                    <div className="d-md-flex align-items-center justify-content-between">
                        <h3 className="mb-3 mb-md-0">
                            {props.title}
                        </h3>
                        <div className="input-group new-input">
                            <input type="text" className="form-control" placeholder={props.emailPlaceholder} />
                            <button className="btn btn-dark btn-lg" type='button'>
                                {props.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </section>       
      </>
    );
}