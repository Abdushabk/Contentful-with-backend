import React, { useState } from "react";
import axios from 'axios'
import './createRecipe.css'



const CreateRecipe = () => {
    // const [error,setError] = useState("");
    const [info, setInfo] = useState({
        title: "",
        category: "",
        image: "",
        ingredients: "",
        recipe: "",
        username: "",
    })
    

  

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();




            const { data } = await axios.post(
                "https://avc-food-blog.herokuapp.com/api/recipes",
                {
                    title: info.title,
                    category: info.category,
                    image: info.image,
                    ingredients: info.ingredients,
                    recipe: info.recipe,
                    username: info.username,
                }

            ).then(res => console.log(res.data));
            console.log(data)
            
        } catch (error) {
            console.log(error)
            // setError("Created")
        }
        

    };
    function handle(event) {
        const newInfo = { ...info }
        newInfo[event.target.id] = event.target.value
        setInfo(newInfo)
        console.log(newInfo)
    }

    // const history = useHistory
    const alert = () => {
        window.alert('Wohoo!! recipe created successfully :), please check in the section were you have created the recipe')  
    }
    


    return (
        <>
            <h2 className="h22">Create a new recipe</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <input className="title" type="text" placeholder="title" onChange={(event) => handle(event)} id="title" value={info.name}></input>
                <br />

                <select className="category" type="text" placeholder="category" onChange={(event) => handle(event)} id="category" value={info.category}>
                    <option value="B">Breakfast</option>
                    <option value="S">Dessert</option>
                    <option value="L">Lunch</option>
                    <option value="D">Dinner</option>
                </select>


                <br />
                <input className="image" type="text" placeholder="image" onChange={(event) => handle(event)} id="image" value={info.image}></input>
                <br />
                <textarea cols="40" rows="8" className="ingredients" type="text" placeholder="ingredients" onChange={(event) => handle(event)} id="ingredients" value={info.ingredients} ></textarea>
                <br />
                <textarea cols="40" rows="8" className="recipe" type="text" placeholder="recipe" onChange={(event) => handle(event)} id="recipe" value={info.recipe}></textarea>
                <br />
                <input className="username" type="text" placeholder="username" onChange={(event) => handle(event)} id="username" value={info.username}></input>
                <br />
                <button onClick={alert} className="btns">Submit</button>
                
            </form>
            {/* {(error != "") ? (<div className="error">{error}</div>) : ""} */}
            
        </>
    );
};

export default CreateRecipe;
