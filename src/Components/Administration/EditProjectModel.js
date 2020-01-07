import React,{Component} from 'react'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import EditProject from './EditProject' // productid={this.props.productid} 
import '../CSSFiles/ProjectItem.css'
class EditProjectModel extends Component{
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
          <div className="Edit-Model-Style">
                <button onClick={this.handleOpenModal} className="button_decoration">
                  Edit Project
                </button>
                <Modal isOpen={this.state.showModal}>
                   <button className="model_close_button_style" onClick={this.handleCloseModal}>
                       <FaTimes/>
                    </button>
                    <EditProject projectid={this.props.id} adminid={this.props.adminid} username={this.props.username}/>
                </Modal>
         </div>
        )
    }

}
export default EditProjectModel