import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import Pagination from './Pagination.js'
class ProjectsGridDisplay extends Component {

  componentDidMount() {
    axios.get(`/Administration/${this.props.adminid}/${this.props.username}`).then(res => 
    this.props.initProjectsList(res.data)
   
    );
  }
  render() {
    
    return ( 
      <div>
        {/* <div> 
          {this.props.ProjectsList.map((e, i) => (
            <ProjectItem adminid={this.props.adminid} key={i} project={e} />
          ))}
        </div> */}
        <Pagination todos={this.props.ProjectsList} adminid={this.props.adminid} username={this.props.username}/>
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
