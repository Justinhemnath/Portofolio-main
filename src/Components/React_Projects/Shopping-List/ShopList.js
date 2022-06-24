import React, { useState, useRef } from 'react'
import './ShopList.css'
import Alert from './Alert'
import List from './List'

const ShopList = () => {

  const [ alert, setAlert ] = useState({ show: false, message: '', type: '' })
  const [ name, setName ] = useState("")
  const [ list, setList ] = useState([])
  const [ editing, setEditing ] = useState(false)

  const inputfield = useRef()


  const handleSubmit = () => {

    if (!name) {

      alerter(true, 'Enter An Item', 'danger')

    }

    else {

      alerter(true, 'Item added', 'success')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
      inputfield.current.value = ""
    }
    
  } 

  const alerter = (show = false, message = '', type = '') => {
    setAlert({ show, message, type })
  }

  const clearList = () => {
    alerter(true, 'List Cleared', 'danger')
    setList([])
  } 

  const removeItem = (id) => {
    alerter(true, 'Item Removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  };

  return (
  
    <div className="ShopList">

      

      <div className="List-card">

      <h1 className="shoplist-header">SHOPPING LIST</h1>
      <div className="shoplist-underline"></div>
        
        <div className="alertbox">
          {alert.show && <Alert alert={alert} list={list} removeAlert={alerter} />}
        </div>

        <div className="topPart">


            <input 
              type="text" 
              className="shoplist-input"
              placeholder="Enter items" 
              onChange={(e) => setName(e.target.value)} 
              ref={inputfield} />

            <button className="shoplist-submit-btn" onClick={handleSubmit}>
              {editing ? "Editing" : "Submit"}
            </button>

        </div>

        <List list={list} removeItem={removeItem} />
        
        <div className="clearlist" onClick={() => clearList()}>
          CLEAR ITEMS
        </div>

      </div>    




    </div>
  
  )
  
  
}

export default ShopList