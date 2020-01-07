import React from "react"
import { connect } from "react-redux"
import {Link, withRouter} from 'react-router-dom'
import axios from "axios"
import '../CSSFiles/Model.css'
class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      picture: "",
      brief: "",
      description: ""
    }
  }

  onEditProject = () => {
    axios
      .put(`/Administration/${this.props.adminid}/${this.props.username}/update-project/${this.state._id}`, {
        title: this.state.title,
        picture: this.state.picture,
        brief: this.state.brief,
        description: this.state.description
      })
      .then(() => {
      this.props.onEditProjectReducerAction(this.state)
      this.props.history.push(`/Administration/${this.props.adminid}/${this.props.username}`)}
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
      <div className="Model-Style">
          <label>Title</label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          <label>Picture</label>
          <input type="text" name="picture" onChange={this.onChange} value={this.state.picture} />
          <label>Brief</label>
          <input type="text" name="brief" onChange={this.onChange} value={this.state.brief} />
          <label>Description</label>
          <input type="text" name="description" onChange={this.onChange} value={this.state.description} />
          <Link to={`/Administration/${this.props.adminid}/${this.props.username}/update-project/${this.state._id}`}>
          <button className="Model-button-style" onClick={this.onEditProject}>Edit Project</button>
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
