import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import EditProjectModel from './EditProjectModel.js'
class ProjectItem extends React.Component {
  onRemoveProject = () => {
    axios
      .delete(`/Administration/${this.props.adminid}/delete-project/${this.props.project._id}`)
      .then(() =>
        this.props.onRemoveProjectReducerAction(this.props.project._id)
      )
      .catch(err => alert(err));
  };
  render() {
    return (
      <div>
        <div >
          <p>{this.props.project.title}</p>
        </div>
        
        <div>
         <p> {this.props.project.description}</p>
        </div>
        <img src={this.props.project.picture} />
        <div>
        <Link to={`/Administration/${this.props.adminid}/display-project/${this.props.project._id}`}>
          See More 
        </Link> {/** */}
          <Link to={`/Administration/${this.props.adminid}`}> {/** here i can do the model without the link */}
            <EditProjectModel  id={this.props.project._id} adminid={this.props.adminid}/>
          </Link>
          <button style={{ marginLeft: "7px" }} onClick={this.onRemoveProject}>
            Remove
          </button>
        </div>
      </div>
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
