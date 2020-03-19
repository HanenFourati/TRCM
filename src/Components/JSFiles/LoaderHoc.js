import React, {Component} from 'react';
import '../CSSFiles/LoaderHOC.css'
function LoaderHOC(WrappedComponent) {
  return class LoaderHOC extends Component{
  
    render(){
    
        return this.props.todos.length===0 ? <div><p className="pidesgin" ></p><div className="loader"></div></div> : <WrappedComponent {...this.props}/>;
    
      }
  }

}
export default LoaderHOC;