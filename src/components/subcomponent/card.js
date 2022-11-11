import { useState } from 'react';

const Cards = (props) => {

    const [header, setHeader] = useState(props.card_header);


    return (
        <>
            <div className="card text-center">
                <h5 className="card-header">{header}</h5>
                <div className="card-body">
                    <h5 className="card-title">{props.card_title}</h5>
                    <p className="card-text">{props.card_text}</p>
                    <button class="btn btn-primary" onClick={() => setHeader('Changed Title')}>{props.card_button}</button>
                    {/* <button class="btn btn-primary" onClick={Header}>{props.card_button}</button> */}

                </div>
            </div>
        </>
    )
}

export default Cards;