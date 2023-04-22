import Instructor from "./Instructor";

export default function Instructors() {
    return (
        <>
            <section id="instructors" className="p-5 bg-primary">
                <div className="container">
                    <h2 className="text-center text-white">Our Instructors</h2>
                    <p className="lead text-center text-white mb-5">
                        Our instructors all have 5+ years working as a web developer.
                    </p>
                    <Instructor />
                    <Instructor />
                    <Instructor />
                    <Instructor />
                </div>
            </section>
        </>
    );
}