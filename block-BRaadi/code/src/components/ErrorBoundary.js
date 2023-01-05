/** @format */

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>
            something went wrong!Reload the page
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
