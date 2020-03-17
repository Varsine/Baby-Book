import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"
import ThreePage from "./components/ThreePage"
import FourPage from "./components/FourPage"
import "./components/App.css"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="switch-data">
          <Switch>
            <Route exact={true} path="/" component={FirstPage} />
            <Route path="/խաչբառ" component={SecondPage} />
            <Route path="/տեսարժան-վայրեր" component={ThreePage} />
            <Route path="/հանելուկներ" component={FourPage} />{" "}
          </Switch>
          <img
            className="page-img"
            src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Elements-PNG/Gold_Corner_Decoration_PNG_Clipart.png?m=1434276875"
          />
        </div>
        <div className="first-footer">
          <img src="https://media1.giphy.com/media/ykvRcYBJBiQwg/giphy.gif" />
          <div className="next-page">
            {" "}
            <ul className="full-page">
              <li>
                <Link
                  exact="true"
                  to={"/"}
                  className="is-active"
                  className="nav-link"
                >
                  Գլխավոր Էջ
                </Link>
              </li>
              <li>
                <Link to={"/խաչբառ"} className="nav-link">
                  Խաչբառ
                </Link>
              </li>
              <li>
                <Link to={"/տեսարժան-վայրեր"} className="nav-link">
                  Տեսարժան վայրեր
                </Link>
              </li>
              <Link to={"/հանելուկներ"} className="nav-link">
                Հանելուկներ
              </Link>
            </ul>{" "}
          </div>
        </div>
      </Router>
    )
  }
}

export default App
