import { createContext, useContext, useEffect, useState } from 'react';
import { fetchCategories } from '../api/categoryApi';

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                console.error(err);
            }
        };
        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    );
};

export const useCategories = () => useContext(CategoriesContext);
