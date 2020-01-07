import React,{Component} from 'react'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import EditEvent from './EditEvent'
import '../CSSFiles/Model.css'
class EditEventModel extends Component{
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
                <button className="Model-button-style" onClick={this.handleOpenModal}>
                  Edit Upcomming Event
                </button>
                <Modal isOpen={this.state.showModal}>
                   <button className="model_close_button_style" onClick={this.handleCloseModal}>
                       <FaTimes/>
                    </button>
                    <EditEvent eventtable={this.props.eventtable} adminid={this.props.adminid} username={this.props.username}/>
                </Modal>
         </div>
        )
    }


}
export default EditEventModel