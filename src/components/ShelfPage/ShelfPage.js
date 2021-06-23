import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const [image_url, setImage_Url] = useState('')

  const handleDescChange = (event) => {
    setDescription(event.target.value)
  }
  const handleImageChange = (event) => {
    setImage_Url(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault
    console.log('adding item');
    dispatch({
      type:'ADD_ITEM',
        payload: {
          description: description,
          image_url: image_url,
        }
      })
    setDescription('')
    setImage_Url('')
    }

  return (
    <div className="container">
      <h2>Shelf</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="description" value={description} onChange={handleDescChange}/>
        <input type="text" placeholder="image_url" value={image_url} onChange={handleImageChange}/>
        <button type="submit">Add</button>
      </form>

      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;


  // array of objects 
//   {
//       id: ,
//       description: ,
//       image_url: , 
//       user_id: ,
//   }