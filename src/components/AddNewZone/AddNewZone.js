import React from 'react';

import { CardContainer, Modal, LocationInput } from '../';

import styles from './AddNewZone.css';

class AddNewZone extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <CardContainer>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add new zone"
        >
          <LocationInput handleClose={this.closeModal} />
        </Modal>

        <button className={styles.card} onClick={this.openModal}>
          <span className={styles.heading}>Add new</span>
          <span className={styles.sub}>Zone</span>
        </button>
      </CardContainer>
    );
  }
}


export default AddNewZone;
