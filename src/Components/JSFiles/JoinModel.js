import React,{Component} from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import '../CSSFiles/DonateModel.css'
class JoinModel extends Component{
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
                <button className="JoinUs-Button-Style" onClick={this.handleOpenModal} >
                Join Us
                </button>
                <Modal isOpen={this.state.showModal}  className="donate-model-style">
                    <div className="donate-model-box-style">
                      <div className="donate-model-box-content-style">
                          <div className="donate-model-box-contentt-style">
                              <h4> To Join our team member please call this number (+216) 21 746 129 or send us a e-mail to croissant.rouge.metlaoui@gmail.com</h4>
                              <h4>If you have any questions please fill the form in <Link to="/contact">Contact Page</Link> and we will respones immediately</h4>
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
export default JoinModel