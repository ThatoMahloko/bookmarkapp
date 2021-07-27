import React, { Fragment } from 'react';
import { BsMusicNoteBeamed } from "react-icons/bs";

const LinkCard = props => {

    const mappedData = props.myCards.map((card, i) => {
        return (
            <div key={i} className="linkCard">
                <div className="linkCardLink"><h2><a href={card.linkHref}>{card.linkName}</a></h2></div>
            </div>
        )
    })
    return (
        <Fragment>
            {mappedData}
        </Fragment>
    )
}
export default LinkCard
