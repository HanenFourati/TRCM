import React from "react"
import { Link } from "react-router-dom"
class OurWorksGridItem  extends React.Component {
  render() {
    return (
      <div>
        <div >
          <p>{this.props.project.title}</p>
        </div>
        <div >
          <p>{this.props.project._id}</p>
        </div>
        <div>
         <p> {this.props.project.description}</p>
        </div>
        <img src={this.props.project.picture} />
        <div>
        <Link to={`/works/${this.props.project._id}`}>
          See More 
        </Link>
        </div>
      </div>
    )
  }
}
export default OurWorksGridItem 
