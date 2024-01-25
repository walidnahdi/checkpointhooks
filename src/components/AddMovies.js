import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMovies = ({ addNewMovie }) => {
    const [modalIsOpen, setIsOpen] = useState("false");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    // modal function
    const openModal = () => {
       setIsOpen(true);
    };
    const closeModal =() => {
        setIsOpen(false);
    };
    // Submit finction
    const handleSumit = () =>{
      let newMovie ={
        name,
        description,
        date,
        type,
        image,
      };
      addNewMovie(newMovie);
      setIsOpen(false);
      setName("");
      setDate("");
      setDescription("");
      setType("");
      setImage("");
    };

    return (
        <div> 

      <Button variant="primary" onClick={openModal}>
        Ajouter un film
      </Button>

      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>add A Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name</Form.Label>
               <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} /> < br />
              
              <Form.Label>Movie Release Date</Form.Label>
              <input type="number" name="date" onChange={(e) => setDate(e.target.value)} value={date} /> < br />

              <Form.Label>Movie Image</Form.Label>
              <input type="url" name="Image" onChange={(e) => setImage(e.target.value)} value={image}  /> < br />

              <Form.Label>Movie Type</Form.Label>
              <input  type="text" name="type" onChange={(e) => setType(e.target.value)} value={type} /> < br />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1" >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}  value={description} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSumit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
    );       
}
    
export default AddMovies;