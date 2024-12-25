
import React, { createContext, useContext, useState } from 'react'

const SliderContext = createContext();

export const ContextApiProvider = ({ children }) => {
    const [open, setOpen] = useState(localStorage.getItem('open') === 'true' || false);
    return (
        <SliderContext.Provider value={[open, setOpen]}>
            {children}
        </SliderContext.Provider>
    )
};

export const useSliderContext = () => {
    return useContext(SliderContext);
};

