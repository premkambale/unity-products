import { createContext, useState } from 'react';

export const contextData = createContext();


const UnityContext = ({ children }) => {
    const [productIdToEdit, setProductIdToEdit] = useState("");
    return (
        <contextData.Provider
            value={{
                productIdToEdit,
                setProductIdToEdit
            }}>
            {children}
        </contextData.Provider>
    )
}

export default UnityContext;