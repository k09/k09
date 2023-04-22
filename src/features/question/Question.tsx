export default function Question() {
//Where exactly are you located?
//How much does it cost to attend?
//What do I need to know?
//How do I sign up?
//Do you help me find a job?
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button data-bs-toggle="collapse" data-bs-target="#question-1" className="accordion-button collapsed" type="button">
                        Spurning?
                    </button>
                </h2>
                <div id="question-1" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo impedit? Libero, vitae ut. Omnis ipsum, maxime tenetur rerum dignissimos tempore quam veniam iusto accusamus minus placeat dicta itaque recusandae porro error nulla eos nisi perferendis, sunt et, a debitis. Nulla amet nisi autem fugit. Eaque aliquam quae sint cupiditate.
                    </div>
                </div>
            </div>
        </>
    );
}