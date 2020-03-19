import React,{Component} from 'react'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import AddProject from './AddProject' // productid={this.props.productid} 
import '../CSSFiles/Model.css'
class AddProjectModel extends Component{
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
                <button onClick={this.handleOpenModal} className="Model-button-style" style={{width: "100px"}}>
                  Add Project
                </button>
                <Modal isOpen={this.state.showModal}>
                   <button className="model_close_button_style" onClick={this.handleCloseModal}>
                       <FaTimes/>
                    </button>
                    <AddProject adminid={this.props.adminid} username={this.props.username}/>
                </Modal>
         </div>
        )
    }

}
export default AddProjectModel