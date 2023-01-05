/** @format */

import React from "react";
import Header from "./Header";
import Main from "./Main";
import ErrorBoundary from "./ErrorBoundary";
import UserContext from "./Context";
class App extends React.Component {
  state = { isDarkMode: false };
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <UserContext.Provider value={{ isDarkMode: this.state.isDarkMode }}>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <ErrorBoundary>
            <Main />
          </ErrorBoundary>
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
