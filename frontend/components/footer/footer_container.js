import React from 'react';
import { connect } from 'react-redux';
import Footer from "../footer/footer"

const msp = state => ({
  state,
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(Footer);