import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack on Titan']);

    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category= { category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}

/*  Llamar por referencia: AddCategory setCategories = { setCategories } */