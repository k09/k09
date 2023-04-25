import Card from './Card'
import CardsProps from './CardsProps';
export default function Cards(props: CardsProps) {
    return (
        <>
            <section className="p-5">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md">
                            <Card 
                                title='Card One'
                                text='Lorem ipsum dolor sit amet, tempor'
                                more='Read More......'
                            />
                            </div>
                            <div className="col-md">
                            <Card 
                                title='Card Two'
                                text='Lorem ipsum dolor sit amet, tempor'
                                more='Read More......'
                            />
                            </div>
                            <div className="col-md">
                            <Card 
                                title='Card Three'
                                text='Lorem ipsum dolor sit amet, tempor'
                                more='Read More......'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}