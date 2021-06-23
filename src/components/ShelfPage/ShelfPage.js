import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function ShelfPage() {
  const item = useSelector(store => store.item);
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const [image_url, setImage_Url] = useState('')

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, [])

  // handling change for input values
  const handleDescChange = (event) => {
    setDescription(event.target.value)
  }
  const handleImageChange = (event) => {
    setImage_Url(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault
    console.log('adding item');

    // dispatch sent to item.saga, payload as below
    dispatch({
      type:'ADD_ITEM',
        payload: {
          description: description,
          image_url: image_url,
        }
      })

      // clearing inputs
    setDescription('')
    setImage_Url('')
    }

    const handleDelete = (item) => {
      dispatch({
        type: 'DELETE_ITEM',
        payload: {id: item}
      })
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
      
      <ul>
        {item.map (item => {
          return (
            <li key={item.id}>
              {item.description}
              <img src={item.image_url} alt={item.description} width="200px"/>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
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