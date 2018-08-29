import React from "react";
import ReactDOM from "react-dom";
import { Cropper } from "react-image-cropper";
import "./styles.css";

class App extends React.Component {
  handleClick = () => {
    this.photo.src = this.cropper.crop();
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <Cropper
          src="https://braavos.me/images/posts/gr/8.jpg"
          ref={ref => {
            this.cropper = ref;
          }}
        />
        <br />
        <br />
        <br />
        <button onClick={this.handleClick}>Crop</button>
        <br />
        <br />
        <br />
        <img
          src=""
          alt="cropped Image"
          ref={ref => {
            this.photo = ref;
          }}
        />
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
