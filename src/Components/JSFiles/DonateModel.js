import React,{Component} from 'react'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import '../CSSFiles/DonateModel.css'
class DonateModel extends Component{
    constructor () {
        super();
        this.state = {
          showModal: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }
    render(){
        return(
          <div>
                <button onClick={this.handleOpenModal} >
                DONATE NOW
                </button>
                <Modal isOpen={this.state.showModal}  className="donate-model-style">
                    <div className="donate-model-box-style">
                      <div className="donate-model-box-content-style">
                          <div className="donate-model-box-contentt-style">
                              <h4> To Donate Please call this number (+216) 21 746 129 or send us a e-mail to croissant.rouge.metlaoui@gmail.com</h4>
                              <h5>Thank You For Your Help</h5>
                              <button className="donate-model-close-button-style" onClick={this.handleCloseModal}>
                                  Bye !
                              </button>
                          </div>
                      </div>
                    </div>
                </Modal>
         </div>
        )
    }

}
export default DonateModel