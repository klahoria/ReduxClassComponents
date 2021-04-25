import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/actions";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  Iclicked = () => {
    this.props.ilogin();
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.Iclicked();
          }}
        >
          Click to dispatch action
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ilogin: () => dispatch(actions.Log_In()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
