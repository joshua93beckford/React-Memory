import React from "react";
import "./Title.css";

const Title = props => <a href="/">Clicky Game<h1 className="title">{props.children}
    <h4>{props.message} | Points: {props.points} | Top Score: {props.top}</h4></h1></a>;

export default Title;
