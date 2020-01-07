import React from "react"
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios"
import '../CSSFiles/Model.css'
class AddProject extends React.Component {
  onAddProject = () => {
    axios
      .post(`/Administration/${this.props.adminid}/${this.props.username}/add-project`, this.state)
      .then(() => {
      this.props.onAddProjectReducerAction(this.state)
      this.props.history.push(`/Administration/${this.props.adminid}/${this.props.username}`) }
       )
      .catch(err => alert(err));
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="Model-Style">
          <label>Title</label>
          <input type="text" name="title" onChange={this.onChange} placeholder="Write project title" />
          <label>Picture</label>
          <input type="text"  name="picture" onChange={this.onChange} placeholder="Project images" />
          <label>Brief</label>
          <input type="text"  name="brief" onChange={this.onChange} placeholder="Write project Intro"/>
          <label>Description</label>
          <input type="text"  name="description" onChange={this.onChange} placeholder="Write project artical" />
          <Link to={`/Administration/${this.props.adminid}/${this.props.username}/add-project`}>
          <button className="Model-button-style" onClick={this.onAddProject}>Add Project</button>
          </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispacthToProps = dispatch => {
  return {
    onAddProjectReducerAction: project => {
      dispatch({
        type: "ADD_PROJECT",
        newProject: project
      })
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispacthToProps
)(AddProject))
