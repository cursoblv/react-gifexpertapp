import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    // const [categories, setCategories] = useState(['One Punch', 'Samuray X', 'Dragon Ball']);
    // const handleAdd = () => {
    //     setCategories(['Hola mundo', ...categories]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />

            <ul>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ul>

        </>
    );
}

export default GifExpertApp;