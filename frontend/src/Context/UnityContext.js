import { createContext, useState } from 'react';

export const contextData = createContext();


const UnityContext = ({ children }) => {
    const [productIdToEdit, setProductIdToEdit] = useState("");
    const [activeTab, setActiveTab] = useState("tab1")
    const [newsId, setNewsId]= useState("")
    const [role, setRole] = useState("")
    console.log(role)

    console.log(activeTab)
    return (
        <contextData.Provider
            value={{
                role,
                setRole,
                productIdToEdit,
                setProductIdToEdit,
                setNewsId,
                newsId,
                setActiveTab,
                activeTab
            }}>
            {children}
        </contextData.Provider>
    )
}

export default UnityContext;