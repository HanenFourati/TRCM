import React from "react"
import { Link } from "react-router-dom"
import '../CSSFiles/WorksGridItem.css'
class OurWorksGridItem  extends React.Component {
  render() {
    return (
      <div className="Work-Grid-Item-Display">
        <div className="Work-Grid-Item-Part-One-Display">
          <img src={this.props.project.picture} />
        </div>
        <div className="Work-Grid-Item-Part-Two-Display">
          <div className="Work-Grid-Item-Part-Two-Content-Display">
              <h1>{this.props.project.title}</h1>
              <p> {this.props.project.brief}</p> <br/>
              <Link to={`/works/${this.props.project._id}`} className="Grid-Link-Style">
              See More 
              </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default OurWorksGridItem 
