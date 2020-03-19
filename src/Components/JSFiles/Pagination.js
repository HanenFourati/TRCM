import React from 'react'
import OurWorksGridItem from "./OurWorksGridItem.js"
import LoaderHOC from "./LoaderHoc.js"
import '../CSSFiles/Pagination.css'
class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      // todos: ["b","d","e","t","et","hqet"],
      currentPage: 1,
      todosPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { currentPage, todosPerPage } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((e,i ) => {
      return <OurWorksGridItem key={i} project={e} />;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
        className="Menu-Buttons-Style"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

    return (
      <div>
          {renderTodos}
          <div style={{display: "flex", justifyContent: "center", padding: "2%"}}>{renderPageNumbers}</div>
      </div>
    );
  }
}

export default LoaderHOC(Pagination)