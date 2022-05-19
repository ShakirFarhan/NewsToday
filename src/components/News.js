import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropType from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static PropType = {
    country: PropType.string,
    category: PropType.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      total: 0,
    };
    document.title = this.props.category.toUpperCase();
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a83543dbc79e4add9f272a44b1c61cec&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("parsed data is ",parsedData);
    this.setState({
      article: parsedData.articles,
      total: parsedData.totalResults,
      loading: false,
    });
  }
  // async updateNews() {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a83543dbc79e4add9f272a44b1c61cec&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     article: parsedData.article,
  //     loading: false,
  //     total: parsedData.totalResults,
  //   });

  NextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.total / this.props.pageSize)
    ) {
    } else {
      console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=a83543dbc79e4add9f272a44b1c61cec&page=${
        this.state.page + 1
      } &pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        article: parsedData.articles,
        loading: false,
      });
    }
  };
  // this.setState({
  //   page: this.state.page + 1,
  // });
  // this.updateNews();
  // console.log("Updated");
  // }
  // fetchMoreData = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a83543dbc79e4add9f272a44b1c61cec&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     article: this.state.article.concate(parsedData.article),
  //     loading: false,
  //     total: parsedData.totalResults,
  //   });
  // };
  PreviousClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=a83543dbc79e4add9f272a44b1c61cec&page=${
      this.state.page - 1
    } &pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
      loading: false,
    });
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  render() {
    return (
      <div className="container">
        <div className="container my-3">
          {this.state.loading && <Spinner />}
          <div className="text-center">
            <h2>Top Headline In {this.props.category} Sector</h2>
          </div>

          <div className="row">
            {!this.state.loading &&
              this.state.article.map((element) => {
                return (
                  <div className="col md-3 my-3">
                    <Newsitem
                      title={element.title ? element.title : ""}
                      discription={
                        element.description ? element.description : ""
                      }
                      Imgurl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://petapixel.com/assets/uploads/2022/02/Hubble-Captures-Space-Triangle-of-Colliding-Galaxies.jpg"
                      }
                      date={element.publishedAt}
                      NewsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>
       
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page - 1 < 1}
              onClick={this.PreviousClick}
              type="button"
              className="btn btn-dark"
            >
              Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.total / this.props.pageSize)
              }
              onClick={this.NextClick}
              type="button"
              className="btn btn-dark"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
