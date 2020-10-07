import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

export default () => {
  const MissionCard = () => {
    return (
      <Card className='mt-4'>
        <CardImg
          id='mission'
          top
          src='/assets/images/mission-logo.png'
          alt='Mission Image'
        />
        <CardBody>
          <CardText>
            <p className='lead'>
              Delivering quality and creativity since 2013. With people at the
              heart of what we do, our passion is serving, not selling.
            </p>
            <hr />
            <p className='text-center'>
              Find out more about who we are and what we do.
            </p>
            <div id='buttonDiv'>
              <button type='button' className='btn btn-outline-dark btn-lg'>
                <Link className='link text-center' to='/about-us'>
                  Find out more
                </Link>
              </button>
            </div>
          </CardText>
        </CardBody>
      </Card>
    );
  };

  const FeaturedCard = () => {
    return (
      <Card className='mt-4'>
        <CardImg
          id='featured'
          top
          src='/assets/images/o-grave.png'
          alt='O Grave Shirt'
        />
        <CardBody>
          <CardTitle className='text-center'>
            <strong>Check out some of our work.</strong>
          </CardTitle>
          <CardText>
            <p className='lead'>
              Browse photos of some of our featured work to get a feel for what
              we do.
            </p>
            <hr />
            <div id='buttonDiv'>
              <button type='button' className='btn btn-outline-dark btn-lg'>
                <Link className='link' to='/featured'>
                  Browse
                </Link>
              </button>
            </div>
          </CardText>
        </CardBody>
      </Card>
    );
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mr-10'>
            <MissionCard />
          </div>
          <div className='col-md-6 ml-10'>
            <FeaturedCard />
          </div>
        </div>
      </div>
    </>
  );
};
