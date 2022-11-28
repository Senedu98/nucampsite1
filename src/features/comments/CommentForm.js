import React, { useState } from 'react';
import{Button, Modal, ModalHeader, FormGroup, Label} from 'reactstrap';
import {Formik, Field, Form} from 'formik';

const CommentForm =({campsiteId}) => {

    const [modalOpen, setModalOpen] = useState(false);
    
    const handleSubmit = (values) => {
      const comment = {


        campsiteId: parseInt(campsiteId),
        rating: values.rating,
        author: values.author,
        text: values.commentText

      };
      console.log(comment)
      setModalOpen(false);

         };

  
    return (
      <>
      <Button onClick={() => setModalOpen(true)}>
      <i className='fa fa-pencil fa-lg' /> Add Comment

</Button>
    <Modal isOpen={modalOpen}>

    <ModalHeader toggle={() => setModalOpen(false)}> Add Comment

</ModalHeader>

<Formik 

      initialValues= {{
      rating: undefined,
      author: '',
      commentText: ''
      

    }}

    onSubmit= {{handleSubmit}}
    >
      

<Form>
  <FormGroup>
    <Label htmlFor='rating' >Rating</Label>
  </FormGroup>

  <Field
                                  
                                  name='rating'
                                  as='select'
                                  className='form-control'
                              >
                                  <option>Select...</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </Field>

  <FormGroup>
  <Label htmlFor='author'>Your Name</Label>

  </FormGroup>
  <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
  <FormGroup>
  <Label htmlFor='commentText'> Comment</Label>

  </FormGroup>
  <Button type='submit' color='primary'>
                                Submit
                            </Button>

</Form>

</Formik>



    </Modal>

    </>



  );
};




export default CommentForm 
