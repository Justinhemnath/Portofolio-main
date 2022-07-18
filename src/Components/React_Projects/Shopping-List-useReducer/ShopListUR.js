import React, { useState, useReducer } from "react";
import Alert from './Alert'
import { SLStyle, formStyle, buttonStyle, divStyle, listStyle, alertStyle } from './Styles' 


const initialState = {
  people: [],
  show: false,
  type: '',
  message: ''
}


function ShopListUR() {
    
  const [ name, setName ] = useState('')


                                          //// useReducer ////
  const reducer = (state, action) => {
    
    switch (action.type) {

      case 'ADD_ITEM': 
      const addedState = [ ...state.people, action.payload] 
      return {
        people: addedState,
        show: true,
        type: 'green',
        message: 'Item added'
      }

      case 'REMOVE_ITEM':
      const removedState = state.people.filter(filitem => filitem.id !== action.payload ) 
      return {
        ...state, 
        people: removedState
      }

      case 'CLOSE_MODAL': 
      return {
        ...state, 
        show: false
      }

      case 'NO_ITEM': 
      return { 
        people: [...state.people],
        show: true,
        type: 'red',
        message: 'No item entered'
      }

    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);


                                          ////////////////



  const handleSubmit = (e) => {
    
    e.preventDefault()

    if(name) {
      const newItem = { id: new Date().getTime().toString(), title: name }

      dispatch({ type: 'ADD_ITEM', payload: newItem })

      setName('')

    }

    else {

      dispatch({ type: 'NO_ITEM' })

    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }


  return (
    <div style={SLStyle}>

      {state.show && <Alert message={state.message} type={state.type} closeModal={closeModal} />}


      <form onSubmit={handleSubmit} style={formStyle}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button style={buttonStyle} onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <div style={divStyle}>

        {state.people.map(item => 

          <div key={item.id} style={listStyle}>

            <p style={{ flex: '90%', margin: 0, padding: '.3em' }}>
              {item.title}
            </p>

            <span 
              style={{ flex: '10%', fontSize: '1.8rem', cursor: 'pointer' }}
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id }) }>
                &times;
            </span>

          </div> )
        }

      </div>

    </div>
  );
}

export default ShopListUR;
