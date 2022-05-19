import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'

const AddMovie = ({ handleadd }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({
      title:"",description:"",poster:''
  })
  const handleSubmit = (e) => { 
      e.preventDefault();
      handleadd({...form,done:false,id: Math.random(),rate:rating})
      setForm({
        title:"",description:"",poster:'',rate:null
    })
    handleClose()
   }
  const handleChange = (e) => { 
      setForm({...form,[e.target.name]:e.target.value})
   }
   const [rating, setRating] = useState(0) // initial rating value

   // Catch Rating value
   const handleRating = (rate) => {
     setRating(rate)
     // other logic
   }
  return (
    <>
    <div className="addmovie">
    <Button onClick={handleShow}>
        Add new movie
      </Button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Title:</label>
              <input type="text" onChange={handleChange} name="title"required />
              <label htmlFor="">Description:</label>
              <input type="text"onChange={handleChange} name="description"requiired />
              <label htmlFor="">Poster:</label>
              <input type="url"onChange={handleChange} name="poster" required/>
              <label htmlFor="">Rating:</label>
              <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
              <button className="submit">submit</button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default AddMovie;
