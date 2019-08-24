import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import { setSearchField, fetchRobots } from "./action";

class App extends Component {
  // state = { robots: [] }; // using props
  // removed searchfield: "" from state

  componentDidMount() {
    // jsonApi
    //   .get("/users")
    //   .then(users => {
    //     this.setState({ robots: users.data });
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });

    this.props.onFetchRobots();
  }

  renderSearchBar = () => {
    return (
      <div className="ui massive left icon input ">
        <input
          type="search"
          placeholder="search robots ..."
          onChange={this.props.onSearchChange}
        />
        <i className="users icon" />
      </div>
    );
  };

  // onSearchChange = e => {
  //   this.setState({
  //     searchfield: e.target.value
  //   });
  // };

  render() {
    const { searchField, robots, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return (
        robot.name
          .toLowerCase()
          // changed from this.state.searchfield
          .includes(searchField.toLowerCase())
      );
    });

    return isPending ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="ui container center aligned">
        <h1 className="">Robot Address Book</h1>
        <div>{this.renderSearchBar()}</div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.fetchRobots.robots,
    isPending: state.fetchRobots.isPending,
    error: state.fetchRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onFetchRobots: () => dispatch(fetchRobots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
