import React from "react"
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios"
class AddProject extends React.Component {
  onAddProject = () => {
    axios
      .post(`/Administration/${this.props.adminid}/add-project`, this.state)
      .then(() => {
      this.props.onAddProjectReducerAction(this.state)
      this.props.history.push(`/Administration/${this.props.adminid}`) }
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
      <div>
        <div>
          <label>Title</label>
          <input name="title" onChange={this.onChange} />
        </div>
        <div >
          <label>Picture</label>
          <input name="picture" onChange={this.onChange} />
        </div>
        <div >
          <label>Description</label>
          <input name="description" onChange={this.onChange} />
        </div>
        <Link to={`/Administration/${this.props.adminid}/add-project`}>
        <button onClick={this.onAddProject}>Add Project</button>
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
