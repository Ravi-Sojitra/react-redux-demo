import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./card.css"; // Import the CSS file for styling
import { handleAdd } from "./../redux/Action/action";
import EditForm from "./EditForm";
const Card = () => {
  const [cards, setCards] = useState([]); // State to store the submitted cards
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
  }); // State to store form data

  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.items);
//   console.log("userData", userData.items);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
setFormData({...formData,id:Date.now()})
    const newCard = { ...formData, id: Date.now() };

    dispatch(handleAdd(newCard));
    console.log('new card',newCard);
    // setCards([...cards, newCard]);
    // setFormData({
    //   title: "",
    //   description: "",
    //   author: "",
    //   date: "",
    // });
  };

  const handleDelete = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };
  const clickToEditData = (userObj) =>{
    setFormData({
      ...formData,
      title: userObj.title,
      description: userObj.description,
      author: userObj.author,
      date: userObj.date,
    });
    // console.log('current obj is ===>',userObj);
  }

  return (
    <div className="card-component">
      <h2>Create Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <EditForm updateUser={formData} setFormData={setFormData}/>
      <h2>Submitted Cards</h2>
      <div className="card-list">
        {userData.items.map((card, index) => {console.log('cardddddddd',card);
            return (
              <div className="card" key={index}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p>Author: {card.author}</p>
                <p>Date: {card.date}</p>
                <div className="card-buttons">
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => clickToEditData(card)}>Update</button>
                  <button>View</button>
                </div>
              </div>
            );
         
})}
      </div>
    </div>
  );
};

export default Card;
