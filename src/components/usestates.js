import Cards from "./subcomponent/card";
const Managestate = () => {

    let cardList = [
        {
            card_header: 'feature',
            card_title: 'Hook start',
            card_text: 'Hooks always start with use key work.',
            card_button: "Change Title"
        },
        {
            card_header: 'feature',
            card_title: 'hook import',
            card_text: "without ract library hooks don't work.",
            card_button: "Change Title"
        },
        {
            card_header: 'feature',
            card_title: 'Hook return',
            card_text: 'Hooks return array ',
            card_button: "Change Title"
        },
        {
            card_header: 'feature',
            card_title: 'Hook used',
            card_text: 'Hooks are used to dom manupulation without grading the html elements ',
            card_button: "Change Title"
        }
    ]

    return (
        <div className="fluid-container my-md-5">
            <div className="container">
                <div className="row">
                    <h1 className="text-center text-primary py-md-5 fs-2 fw-bold">Manage UseState Hooks </h1>
                </div>
                <div className="row">

                    {cardList.map((val, index) => {
                        return <div className="col-3">
                            <Cards key={index} {...val} />
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Managestate;
