import Instructor from "./Instructor";
import InstructorsProps from "./InstructorsProps";
import InstructorProps from "./InstructorProps";

export default function Instructors(props: InstructorsProps) {
    return (
        <>
            <section id="instructors" className="p-5 bg-primary">
                <div className="container">
                    <h2 className="text-center text-white">{props.title}</h2>
                    <p className="lead text-center text-white mb-5">{props.description}</p>
                    <div className="row g4">
                        <Instructor     
                            imageUrl='https://cdn.pixabay.com/photo/2017/07/10/11/28/bulldog-2489829_960_720.jpg'
                            name='Pete Doe'
                            description='ajdf lkja dflkj adlkj alækdjf asdf' 
                        />
                        <Instructor 
                            imageUrl='https://cdn.pixabay.com/photo/2020/10/04/10/43/horse-5625922_960_720.jpg'
                            name='John Doe'
                            description='ajdf lkja dflkj adlkj alækdjf asdf' 
                        />
                        <Instructor 
                            imageUrl='https://cdn.pixabay.com/photo/2021/08/11/11/15/man-6538205_960_720.jpg'
                            name='Jane Doe'
                            description='ajdf lkja dflkj adlkj alækdjf asdf' 
                        />
                        <Instructor 
                            imageUrl='https://cdn.pixabay.com/photo/2015/01/28/23/24/woman-615421_960_720.jpg'
                            name='Paul Doe'
                            description='ajdf lkja dflkj adlkj alækdjf asdf' 
                        />
                    </div>
                </div>
            </section>
        </>
    );
}