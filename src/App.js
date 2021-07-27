import React, { Fragment, useState } from 'react';
import './App.css';
import { BsMusicNoteBeamed } from "react-icons/bs";
const App = () => {
  // hooks start
  const [cardData, setCardData] = useState([{ linkName: 'my link', linkHref: 'https://github.com' }])
  const [newCard, setNewCard] = useState({ linkName: '', linkHref: '' })

  // hooks end

  // dispatchCardSet
  const dispatchCardSet = (payload) => {
    let oldArray = cardData;
    let newArray = { ...oldArray, payload }
    setCardData(newArray);
    setNewCard({ linkHref: '', linkName: '' });
  }

  return (
    <Fragment>
      <nav className="navigation">
        <a><img /></a>
        <ul>
          <li></li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <BsMusicNoteBeamed className="icon" style={{ "color": "white", "height": "50px", "width": "50px" }} />
          <form onSubmit={e => e.preventDefault()}>
            <h2 className="formTitle">Add A Bookmark</h2>
            <div>
              {/* label begin */}
              <label
                for="linkTitle"
                className="formLabel">
                Enter the bookmark name
              </label>{/* label end */}
              <input
                value={newCard.linkName}
                onChange={e => setNewCard({ ...newCard, linkName: e.currentTarget.value })}
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 char max" />
            </div>
            <div>
              <label
                for="linkHref"
                className="formLabel">
                Enter the bookmark name
              </label>{/* label end */}
              <input
                value={newCard.linkHref}
                onChange={e => setNewCard({ ...newCard, linkHref: e.currentTarget.value })}
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com" />
            </div>
            <button onClick={() => dispatchCardSet(newCard)}>Add</button>
          </form>
        </div>

        <div className="rightContent">
          <div className="linkCard">
            <BsMusicNoteBeamed className="linkCardImage" />
            <div className="linkCardLink"><h2><a href={newCard.linkHref}>{newCard.linkName}</a></h2></div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
