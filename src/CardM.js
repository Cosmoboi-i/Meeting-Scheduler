import React from "react";
import database from "./data";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "12:00",
      link: "",
    };
  }

  handleTime = (e) => {
    this.setState({ time: e.target.value });
  };

  handleLink = (e) => {
    this.setState({ link: e.target.value });
  };

  save = () => {
    if (this.state.link === "") return;

    database[this.props.day].push(this.state);
    this.setState({
      time: "12:00",
      link: "",
    });
    this.props.handle();

    localStorage.setItem("db", JSON.stringify(database));
  };

  render() {
    return (
      <div
        className="card p-3 m-2
      is-flex is-justify-content-space-between"
      >
        <input type="time" value={this.state.time} onChange={this.handleTime} />
        <input
          type="url"
          className="input is-small column is-half mx-3"
          value={this.state.link}
          onChange={this.handleLink}
        />
        <button
          onClick={this.save}
          className="button is-small
          is-rounded is-success p-3 mx-2"
        >
          <span className="icon">
            <i className="fas fa-save" />
          </span>
        </button>
        <button
          className="button is-small
          is-rounded is-danger p-3"
          disabled
        >
          <span className="icon">
            <i className="fas fa-trash" />
          </span>
        </button>
      </div>
    );
  }
}

export default Card;
