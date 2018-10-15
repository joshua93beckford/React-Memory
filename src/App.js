import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: [],
    count: 0,
    top: 0,
    message: "Game Started"
  };

  ifClicked = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({ count: 0, clicked: [], message: "You Guessed Incorrectly" });
    }
    else {
      this.state.clicked.push(id);
      this.setState({ friends: this.shuffle(this.state.friends), count: this.state.count + 1, message: "You Guessed Correctly" });

      if (this.state.count + 1 > this.state.top) {
        this.setState({ top: this.state.count + 1 });
      }
    }
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>
          <Title message={this.state.message} points={this.state.count} top={this.state.top}></Title>
        </NavBar>

        {this.state.friends.map(friend => (
          <FriendCard
            ifClicked={this.ifClicked}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
