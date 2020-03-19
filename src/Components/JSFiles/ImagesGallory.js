import React from 'react'
import '../CSSFiles/OurWorksGridItemDisplay.css'
class ImagesGallory extends React.Component {
    constructor() {
        super();
        this.state = {
          // todos: ["b","d","e","t","et","hqet"],
          currentPage: 1,
          todosPerPage: 1,
          active: 1
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id),
          active: Number(event.target.id)
        });

      }
    
      render() {
        const { currentPage, todosPerPage } = this.state;
        const activeStyle = { opacity: '1' };
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.todos.slice(indexOfFirstTodo, indexOfLastTodo);
    
        const renderTodos = currentTodos.map((e,i ) => {
          return <img src={e} className="ZoomedImages" key={i} />;
        });
    
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
    
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <img src={this.props.todos[number-1]} className="Image-Gallory-Button"
                 style={this.state.active === number ? activeStyle : {}} 
                 key={number}
                 id={number}
                 onClick={this.handleClick}  />
          );
        });
    
        return (
          <div  className="Image-Gallory-Style">
              {renderTodos}
              <div style={{display: "flex", justifyContent: "center"}}>{renderPageNumbers}</div>
          </div>
        );
      }
}

export default ImagesGallory
