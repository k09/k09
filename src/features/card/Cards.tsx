import Card from './Card'

export default function Cards() {
    return (
        <>
            <section className="p-5">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md"><Card /></div>
                        <div className="col-md"><Card /></div>
                        <div className="col-md"><Card /></div>
                    </div>
                </div>
            </section>
        </>
    );
}