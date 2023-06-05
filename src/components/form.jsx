import React from 'react';
import {
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTextArea
} from 'mdb-react-ui-kit';
import "../custom.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function Form() {
  return (
    <>
    <div class="row d-flex justify-content-center">
        <form style={{ width: "26rem" }}>
          <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' className='bg-white' />
          <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' className='bg-white' />
          <MDBTextArea wrapperClass='mb-4' textarea id='form4Example3' label='Message' rows={4} className='bg-white' />

          <MDBCheckbox
            wrapperClass='d-flex justify-content-center mb-4'
            id='form4Example4'
            label='Send me a copy of this message'
            defaultChecked
          />

          <MDBBtn type='submit' className='mb-4' block>
            Submit
          </MDBBtn>
        </form>
      </div>
    </>
  );
}

export default Form;