import Question from './Question'

export default function Questions() {
    return (
        <>
            <section id='questions' className="p-5 bg-dark text-light">
                <div className="container">
                    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                    <div className="accordion accordion-flush" id="questions">
                        <Question />                    
                        <Question />                    
                        <Question />                    
                        <Question />                    
                        <Question />                    
                    </div>
                </div>
            </section>
        </>
    );
}