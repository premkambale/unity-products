import { createContext, useState } from 'react';

export const contextData = createContext();


const UnityContext = ({ children }) => {
    const [productIdToEdit, setProductIdToEdit] = useState("");
    const [activeTab, setActiveTab] = useState("tab1")
    console.log(activeTab)
    return (
        <contextData.Provider
            value={{
                productIdToEdit,
                setProductIdToEdit,
                setActiveTab,
                activeTab
            }}>
            {children}
        </contextData.Provider>
    )
}

export default UnityContext;