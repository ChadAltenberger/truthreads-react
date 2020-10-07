import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export default () => {
  const [toggle, setToggle] = useState(false);

  const paymentWindow = [
    <Modal
      className='modal-lg'
      isOpen={toggle}
      toggle={() => setToggle(!toggle)}
    >
      <ModalHeader id='paymentModalHeader' toggle={() => setToggle(!toggle)}>
        Pay a Bill
      </ModalHeader>
      <ModalBody>
        <div className='row justify-content-center'>
          <p className='lead'>
            Please follow the link below to make a secure payment via PayPal
          </p>
        </div>
        <div className='row justify-content-center'>
          <form
            action='https://www.paypal.com/cgi-bin/webscr'
            method='post'
            target='_blank'
          >
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input
              type='hidden'
              name='hosted_button_id'
              value='E4DZ8MMJKDMR2'
            />
            <input
              type='image'
              src='https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif'
              border='0'
              name='submit'
              alt='PayPal - The safer, easier way to pay online!'
            />
            <img
              alt=''
              border='0'
              src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
              width='1'
              height='1'
            />
          </form>
        </div>
      </ModalBody>
    </Modal>
  ];

  return (
    <>
      <div id='intro' className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h1 id='introTitle'>Truthreads</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3>Custom Apparel</h3>
          </div>
        </div>
        <hr />
        <div className='row justify-content-center'>
          <div className='col-md-2 text-center'>
            <p>Screen-Printing</p>
          </div>
          <div className='col-md-2 text-center'>
            <p>Embroidery</p>
          </div>
          <div className='col-md-2 text-center'>
            <p>CADD Cut Vinyl</p>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-2 text-center'>
            <button type='button' className='btn btn-dark btn-lg'>
              <a href='#contactForm'>Get In Touch</a>
            </button>
          </div>
          <div className='col-md-2 text-center'>
            <button
              type='button'
              className='btn btn-info btn-lg'
              onClick={() => setToggle(!toggle)}
            >
              Pay Bill
            </button>
            {toggle ? paymentWindow : null}
          </div>
        </div>
      </div>
    </>
  );
};
