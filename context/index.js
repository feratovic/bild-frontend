import React, {createContext, useState, useEffect} from 'react';
export const PublicContext = createContext();

function PublicContextProvider(props) {
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState(null);

  const toggleModal = (prop, url) => {
    setModal(prop);
    setLink(url);
  };

  return (
    <PublicContext.Provider
      value={{
        modal,
        link,
        toggleModal: toggleModal,
      }}
    >
      {props.children}
    </PublicContext.Provider>
  );
}

export default PublicContextProvider;
