import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, kubernetes!</h1>
        <p>Welcome to the Kubernetes Workshop for Developers.</p>
        <ul>
          <li>Demo Web Application <a href='https://github.com/hectorescalante/Tokiota.Workshops.Kubernetes.DemoApp'>Source Code</a></li>
          <li>PowerPoint <a href='https://tokiota-my.sharepoint.com/:p:/p/hector_escalante/EcYHpjwVO7JBjixzy4SVNjMBdntKgWdEKSHl_b_QfaLaeg?e=3xxdJM'>Presentation</a></li>
          <li>Docker <a href='https://hub.docker.com/r/hescalante/k8s-demo/tags'>Image</a></li>
        </ul>
        <br />
        <br />
        <img src="https://thepracticaldev.s3.amazonaws.com/i/ak6gbidy8nqkmnl6nbv7.png" alt="Dilbert" />
      </div>
    );
  }
}
