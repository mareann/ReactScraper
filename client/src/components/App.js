import React, { Component } from 'react';
import ArticlesList from './ArticlesList'
import Nav from './Nav'
import Search from './Search'
import SearchStartDate from './SearchStartDate'
//import SearchButton from './SearchButton'
import ReadingList from './ReadingList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import './App.css';
import API from "../utils/API.js"
import FormBtn from './FormBtn.js'

class App extends Component {

state={
  articles: [],
  searchTerm: '',
  i: 0,
  searchURL: '',
  startDate: '',
  endDate: '',
  title: '',
  url: '',
  readingList: []
}
  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    console.log("loadArticles")
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", url: ""})
      )
      .catch(err => console.log(err));
  };
 
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    //error
    //TypeError: event is undefined
    //event.preventDefault();
    console.log("handleFormSubmit")
   // if (this.state.title && this.state.url) {
      API.saveArticle({
        title: this.state.title,
        url: this.state.url
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
   // }
  };
fetchArticles=()=> {
  console.log("*** fetchArticles")
      //let counter = this.state.i
    let currentState = this.state.articles
      API.search(this.state.searchTerm,this.state.startDate,this.state.endDate)
 // API.search("dog","20170101","20181231")
   //console.log("api.search "+JSON.stringify(res)); 
  .then( (res) => this.setState({articles: currentState.concat(res.data.response.docs)}) )
  .then( this.setState({i: this.state.i + 1}) )

  
}

  fetchInitialArticles=()=>{
   // let counter = this.state.i
    console.log("fetchInitialArticles")
    let currentState = this.state.articles
    if ( this.state.searchTerm === '') {
      API.search("dog","20170101","20181231")
      .then((res) => this.setState({articles: currentState.concat(res.data.response.docs)}))
      .then(this.setState({i: this.state.i + 1}))
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })

  //  const { name, value } = event.target;
      //  let currentState = this.state.name
  //  this.setState({
    //  [name]: value
  //  })
  //console.log("searchTerm"+this.state.searchTerm)
  }
  handleChangeStartDate = (event) => {
    this.setState({
      startDate: event.target.value
    })
    console.log("handleChangeStartDate "+this.state.startDate)
 }
  handleChangEndDate = (event) => {
    this.setState({
      endDate: event.target.value
    })
 }
  handleClick =(event) => {
    console.log("handleClick")
  }

  handleSubmit=(event) => {
    event.preventDefault()
    console.log("handleSubmit before fetch"+this.state.searchTerm)
    this.fetchArticles(this.state.searchTerm,this.state.startDate,"20181231");
    console.log("handleSubmit "+this.state.searchTerm)
  }

  handleLoadClick=(event) => {
        event.preventDefault()
    console.log("handleLoadClick")
    if ( this.state.searchTerm === '')
      this.fetchInitialArticles()
    else
      this.fetchArticles()
    //else
    //  this.handleFormSubmit()
  }

  handleArticleClick = (event) => {
    //let a = API.getArticles
    //let a = this.articleController.findAll
    console.log("handleArticleClick")
  }

  handleReadingClick = (event) => {
    let allArticles = this.state.articles
    let currentReadingList = this.state.readingList
    let eventId=event.target.parentElement.parentElement.id
    let article = allArticles.find((eachArticle)=> {
      return eachArticle._id === eventId
    })
    let newState = [...currentReadingList, article]
    this.setState({readingList: newState})
    console.log(this.state.readingList)
  }

  render() {
    console.log("render: searchTerm "+this.state.searchTerm)
        console.log("render: startDate "+this.state.startDate)
    return (
    <Router>
      <div className="App">
      <Nav />

      <Search searchTerm={this.state.searchTerm}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <br />
      <SearchStartDate startDate={this.state.startDate} handleChangeSD={this.handleChangeStartDate} handleSubmitSD={this.handleSubmit}/>
      <br />
      <FormBtn onLoadClick={this.handleLoadClick} onClick={this.handleFormSubmit}>Search</FormBtn>

      <br /><br/>
      <Route exact path='/' render={({match})=> (
         <ArticlesList articles={this.state.articles} onClick={this.handleLoadClick} onReadingClick={this.handleReadingClick} />
      )} />
      <Route exact path='/articles' render={({match})=> (
         <ArticlesList articles={this.state.articles} onClick={this.handleLoadClick} onReadingClick={this.handleArticleClick} />
      )} />
      <Route exact path='/readinglist' render={({match}) => (
        <ReadingList readingList={this.state.readingList}/>
      )} />
      </div>
    </Router>
    )
  }
}

export default App;
//<Route exact path='/readinglist' render={ReadingList} />
