import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleUpdate } from '../redux/Action/action';

function EditForm(props) {
    const { updateUser, setFormData } = props;
    const [userData,setUserData] = useState(updateUser);
    // console.log("Updated User", updateUser);

    const dispatch = useDispatch();
    const users = useSelector((state)=>state.items);
    function handleChange(e){
        setFormData({ ...updateUser, [e.target.name]: e.target.value });
    }
    const clickToUpdateUser = (e)=>{
        // e.preventDefault();
        console.log('111111111');
        dispatch(handleUpdate(updateUser))
    }
  return (
    <div>
      {" "}
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={updateUser.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={updateUser.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={updateUser.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={updateUser.date}
          onChange={handleChange}
        />
        <button onClick={()=> clickToUpdateUser()}>UPDATE</button>
      </form>
    </div>
  );
}

export default EditForm