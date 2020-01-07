import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import EditProjectModel from './EditProjectModel.js'
import '../CSSFiles/ProjectItem.css'
class ProjectItem extends React.Component {
  onRemoveProject = () => {
    axios
      .delete(`/Administration/${this.props.adminid}/${this.props.username}/delete-project/${this.props.project._id}`)
      .then(() =>
        this.props.onRemoveProjectReducerAction(this.props.project._id)
      )
      .catch(err => alert(err));
  };
  render() {
    return (
      <div className="Work-Grid-Item-Display">
      <div className="Work-Grid-Item-Part-One-Display">
        <img src={this.props.project.picture} />
      </div>
      <div className="Work-Grid-Item-Part-Two-Display">
        <div className="Work-Grid-Item-Part-Two-Content-Display">
            <h1>{this.props.project.title}</h1>
            <p> {this.props.project.brief}</p> 
            <div className="Projects-Button-Style">
            <Link to={`/Administration/${this.props.adminid}/${this.props.username}/display-project/${this.props.project._id}`}>
              See More 
            </Link> 
            <Link to={`/Administration/${this.props.adminid}/${this.props.username}`}> {/** here i can do the model without the link */}
            <EditProjectModel  id={this.props.project._id} adminid={this.props.adminid} username={this.props.username}/>
            </Link>
            <button onClick={this.onRemoveProject}>
              Remove
            </button> </div>
        </div>

      </div>
    </div>
      // <div>
      //   <div >
      //     <p>{this.props.project.title}</p>
      //   </div>
        
      //   <div>
      //    <p> {this.props.project.description}</p>
      //   </div>
      //   <img src={this.props.project.picture} />
      //   <div>
      //   <Link to={`/Administration/${this.props.adminid}/display-project/${this.props.project._id}`}>
      //     See More 
      //   </Link> {/** */}
      //     <Link to={`/Administration/${this.props.adminid}`}> {/** here i can do the model without the link */}
      //       <EditProjectModel  id={this.props.project._id} adminid={this.props.adminid}/>
      //     </Link>
      //     <button style={{ marginLeft: "7px" }} onClick={this.onRemoveProject}>
      //       Remove
      //     </button> 
      //   </div>
      // </div>
    ); ///update-project/${this.props.project._id}
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveProjectReducerAction: id => {
      dispatch({
        type: "REMOVE_PROJECT",
        id
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectItem)
