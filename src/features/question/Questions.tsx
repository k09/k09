import Question from './Question'
import QuestionsProps from './QuestionsProps';

export default function Questions(props: QuestionsProps) {
    return (
        <>
            <section id='questions' className="p-5 bg-dark text-light">
                <div className="container">
                    <h2 className="text-center mb-4">{props.title}</h2>
                    <div className="accordion accordion-flush" id="questions">
                        <Question 
                            question='Question one?'
                            answer='Answer one'
                        />                    
                        <Question 
                            question='Question two?'
                            answer='Answer two'
                        />                    
                        <Question 
                            question='Question three?'
                            answer='Answer three'
                        />                    
                        <Question 
                            question='Question four?'
                            answer='Answer four'
                        />                    
                    </div>
                </div>
            </section>
        </>
    );
}