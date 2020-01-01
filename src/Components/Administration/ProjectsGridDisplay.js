import React, { Component } from "react"
import ProjectItem from "./ProjectItem"
import { connect } from "react-redux"
import axios from "axios"
class ProjectsGridDisplay extends Component {

  componentDidMount() {
    axios.get(`/Administration/`+this.props.adminid).then(res => 
    this.props.initProjectsList(res.data)
   
    );
  }
  render() {
    
    return (
      <div>
        <div> 
          {this.props.ProjectsList.map((e, i) => (
            <ProjectItem adminid={this.props.adminid} key={i} project={e} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ProjectsList: state.ProjectReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initProjectsList: projects => {
      dispatch({
        type: "UPDATE_PROJECTS_LIST",
        projects
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsGridDisplay)
