import React from "react"
import { connect } from "react-redux"
import {Link, withRouter} from 'react-router-dom'
import axios from "axios";
class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      picture: "",
      description: ""
    }
  }

  onEditProject = () => {
    axios
      .put(`/Administration/${this.props.adminid}/update-project/${this.state._id}`, {
        title: this.state.title,
        picture: this.state.picture,
        description: this.state.description
      })
      .then(() => {
      this.props.onEditProjectReducerAction(this.state)
      this.props.history.push(`/Administration/${this.props.adminid}`)}
       )
      .catch(err => alert(err));
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidMount() {
    this.setState({
      ...this.props.ProjectsList.filter(e => e._id === this.props.projectid)[0]
      //.filter(e => e._id === this.props._id)
    })
    // axios.get(`/Administration/${this.props.adminid}/update-project/${this.props._id}`).then(res => 
    //   this.props.initproject(res.data)
     // )
    // .catch(error => {console.log(error)});
  }
  render() {
    console.log(this.state);

    return ( 
      <div>
        <div>
          <label>Title</label>
          <input name="title" onChange={this.onChange} value={this.state.title} />
        </div>
        <div >
          <label>Picture</label>
          <input name="picture" onChange={this.onChange} value={this.state.picture} />
        </div>
        <div >
          <label>Description</label>
          <input type="textarea" name="description" onChange={this.onChange} value={this.state.description} />
        </div>
        <Link to={`/Administration/${this.props.adminid}/update-project/${this.state._id}`}>
        <button onClick={this.onEditProject}>Edit Project</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ProjectsList: state.ProjectReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onEditProjectReducerAction: project => {
      dispatch({
        type: "EDIT_PROJECT",
        editedProject: project
      });
    }
    
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispacthToProps
)(EditProject))
