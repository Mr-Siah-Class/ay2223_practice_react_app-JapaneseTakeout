class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      sResponse: "Response will show here.",
    };
  }
  TestGet() {
    axios
      .get("http://localhost:3000/api", { params: { message: "Hello World!" } })
      .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        this.DisplayResponse(response.data);
      })
      .catch(function (error) {
        this.DisplayResponse(error);
        console.log(error);
      });
  }
  // FUnctions
  DisplayResponse(objData) {
    console.log("DisplayResponse: " + JSON.stringify(objData));
    this.setState({
      sResponse: JSON.stringify(objData),
    });
  }
  render() {
    return (
      <div>
        <div>
          <div id="Response"></div>
        </div>
        <div>
          <button>Test GET</button>
          <button>Test POST</button>
        </div>
        <div id="Response">{this.state.sResponse}</div>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(Menu, {}), document.getElementById("root"));
