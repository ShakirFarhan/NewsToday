import React, { Component } from "react";
import News from "./News";

export class Newsitem extends Component {
  render() {
    let { title, discription, Imgurl, NewsUrl, date } = this.props;
    return (
      <>
        <div className="container">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discription}</p>
              <p>{new Date(date).toGMTString()}</p>
              <a
                href={NewsUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
