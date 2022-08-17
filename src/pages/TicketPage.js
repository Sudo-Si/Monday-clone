
import { useState } from 'react'

const TicketPage =()=>{

    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timestamp: new Date().toISOString()
    
    })

    const editMode= false;

    const handleSubmit= ()=>{
        console.log("Submitted")
    };

    const handleChange= (e)=>{
            const value = e.target.value
            const name = e.target.name
            setFormData((prevState)=>({
                ...prevState,
                [name]:value
            })
        )
    }
    const categories =['test1', 'test2']
    console.log(formData)

return(
    <div className="ticket">
        <h1> {editMode ? 'Update your ticket': 'Create a ticket'}</h1>
        <div className="ticket-container">
            <form onSubmit={handleSubmit}>
                <section>
                    <label for="title">Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={formData.title}
                        id="title"
                        onChange={handleChange}
                        required= {true}
                    />
                    <label for="description">Description</label>
                    <input 
                        id="description"
                        name="description"
                        type="text"
                        onChange={handleChange}
                        required= {true}
                        value={formData.description}
                    />

                    <label for="">Catagory</label>
                    <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    >
                        {categories?.map((category, _index)=>(
                            <option key={_index} value={category}>{category}</option>
                        ))}
                    </select>

                    <label for="new-category">New Category</label>
                    <input 
                        id="new-category"
                        name="category"
                        type="text"
                        onChange={handleChange}
                        required= {true}
                        value={formData.category}
                    />

                    <label>Priority</label>
                    <div className="multiple-input-container">
                        <input 
                            id="priority-1"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            valu= {1}
                            checked={formData.priority === 1}
                        /> 
                        <label for="priority-1">1</label>
                        <input 
                            id="priority-2"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            valu= {2}
                            checked={formData.priority === 2}
                        /> 
                        <label for="priority-2">2</label>
                        <input 
                            id="priority-3"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            valu= {3}
                            checked={formData.priority === 3}
                        /> 
                        <label for="priority-3">3</label>
                        <input 
                            id="priority-4"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            valu= {4}
                            checked={formData.priority === 4}
                        /> 
                        <label for="priority-4">4</label>
                        <input 
                            id="priority-5"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            valu= {5}
                            checked={formData.priority === 5}
                        /> 
                        <label for="priority-5">5</label>
                    </div>

                
                  {editMode &&   <><input 
                        type="range"
                        id="progress"
                        name="progress"
                        value={formData.progress}
                        min="0"
                        max="100"
                        onChange={handleChange}
                    />
                    <label for="progress">Progress</label>


                    <label>Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option selected={formData.status ==='done'} value="done">Done</option>
                        <option selected={formData.status ==='working on it'} value="working on it">Working on it</option>
                        <option selected={formData.status ==='stuck'} value="stuck">Stuck</option>
                        <option selected={formData.status ==='not started'} value="not started">Not started</option>
                    </select>
                    </>                 
                    }
                    <input type={"submit"}/>
               </section>
                
                <section>
                <label>Owner </label>  
                <input 
                        id="owner" 
                        type="text" 
                        name="owner"
                        onChange={handleChange}
                        required={true}
                        value={formData.owner}
                    />   
                     <label>Avatar </label> 
                <input 
                        id="avatar" 
                        type="url" 
                        name="avatar"
                        onChange={handleChange}
                        required={true}
                        value={formData.avatar}
                    />   
                    <div className="img-preview">
                        {formData.avatar &&(
                            <img src={formData.avatar} alt="image Preview"/>
                        )}
                    </div>
                </section>
            </form>
        </div>

    </div>
)
}
export default TicketPage