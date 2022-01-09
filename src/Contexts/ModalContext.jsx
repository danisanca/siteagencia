import React,{createContext, useContext,useState} from "react";


//context
const ModalContext = createContext({});


//provider
const ModalProvider =({children}) => {
    const [modalState, setState] = useState(false);

    const openModal = () => setState(true)
    const closeModal = () => setState(false)


    return <ModalContext.Provider value={{modalState, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
}

//hook

const useModalContext = ()=>{
    const context = useContext(ModalContext);
    return context;

}

export {useModalContext, ModalProvider}