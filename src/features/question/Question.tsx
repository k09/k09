import QuestionProps from "./QuestionProps";
export default function Question(props: QuestionProps) {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button data-bs-toggle="collapse" data-bs-target="#question-1" className="accordion-button collapsed" type="button">
                        {props.question}
                    </button>
                </h2>
                <div id="question-1" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                        {props.answer}
                    </div>
                </div>
            </div>
        </>
    );
}