import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      task1: "",
    };
  }

  add_value = (e) => {
    this.setState({ task1: e.target.value });
  };
  add_value_task = () => {
    this.setState({
      task: this.state.task.concat({
        id: Math.round(Math.random() * 1000),
        text: this.state.task1,
        complete: false,
      }),
      task1: "",
    });
  };
  // add_task = () => {
  //   this.state.task.map((element) => (
  //     <div>
  //       <button></button>
  //       <button></button>
  //       <h1>{element}</h1>
  //     </div>
  //   ));
  // };
  complete_undo = (id) => {
    this.setState({
      task: this.state.task.map((el) =>
        el.id === id ? { ...el, complete: !el.complete } : el
      ),
    });
  };
  delete_item = (id) => {
    this.setState({ task: this.state.task.filter((el) => el.id != id) });
  };
  render() {
    return (
      <div>
        <div className="item1">
          <h1 className="h1item1">To-Do App!</h1>
          <h5 className="h5item1">Add New To</h5>
         <div className="inputitem1"> <input 
            type="text"
            value={this.state.task1}
            placeholder="Item Name"
            onChange={this.add_value}
          />
          </div>
          <div className="buttonitem1">
          <button className="buttonapp" onClick={this.add_value_task}>Add</button>
          </div>
        </div>
        <div className="item2">Let's get some work done!</div>
        <div className="item3">
          {this.state.task.map((element) => (
            <div>
              <button onClick={() => this.complete_undo(element.id)}>
                {" "}
                {element.complete ? "Undo" : "Complete"}
              </button>
              <button onClick={() => this.delete_item(element.id)}>
                Delete
              </button>
              <h1 className={element.complete ? "complete" : ""}>
                {element.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
