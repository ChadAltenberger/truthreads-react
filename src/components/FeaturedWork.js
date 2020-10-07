import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Modal,
  ModalBody,
  ModalHeader
} from 'reactstrap';
import { FEATURES } from '../shared/features';

class FeaturedWork extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      features: FEATURES,
      selectedFeature: null,
      isModalOpen: false
    };
  }

  onFeatureSelect = feature => {
    this.setState({ selectedFeature: feature });
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  renderSelectedFeature(feature) {
    if (feature) {
      return (
        <Card>
          <CardImg top src={feature.image} alt={feature.name} />
          <CardBody>
            <CardTitle className='lead text-center'>
              <strong>{feature.name}</strong>
            </CardTitle>
            <hr />
            <CardText className='text-center'>{feature.details}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const featDisplay = this.state.features.map(feature => {
      return (
        <div id='featureImage' key={feature.id} className='col-md-5 m-1'>
          <Card id='displayCard' onClick={() => this.onFeatureSelect(feature)}>
            <CardImg
              id='featureImage'
              className='top'
              src={feature.image}
              alt={feature.name}
            />
            <CardTitle className='lead text-center mb-0'>
              <strong>{feature.name}</strong>
            </CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>{featDisplay}</div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.onFeatureSelect}>
          <ModalHeader
            id='featureModalHeader'
            className='border-0'
            toggle={this.onFeatureSelect}
          ></ModalHeader>
          <ModalBody>
            {this.renderSelectedFeature(this.state.selectedFeature)}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default FeaturedWork;
