import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';
import Editor from './Editor'
import FirebaseDao from './FirebaseDao'
import config from './config'
import CardList from './CardList'

/*
* App Component
*/
class App extends Component {
  constructor(){
    super();
    this.dao = new FirebaseDao(config);
    this.submit = this.submit.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles:[]
    }
  }
  submit(article){
    if(article){
      let key = this.dao.newKey();
      let updated = this.dao.update( key, article );
      return updated;
    }
  }
  isAnonymous(){
    return true;
  }
  getArticles(){
    let lis = [];
    for(let i=0;i<this.state.articles.length;i++){
      lis.push(<li key={this.state.articles[i].key}>{this.state.articles[i].content}</li>);
    }
    return lis;
  }
  componentWillMount() {
    this.dao.list(25,(articles)=>{
      var items = [];
      //목록을 루프를 태워서
      articles.forEach(function(article){
        var item = article.val();
        item['key'] = article.key;
        items.push(item);
      })
      //state 값에 입력
      if(items && items.length>0){
        this.setState({
          //최신 데이타가 위에 올라와야 하므로 데이타의 역순으로 확인
          articles: items.reverse()
        });
      }
    });
  }
  componentWillUnmount(){
    this.dao.off();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Editor submit={this.submit} isAnonymous={this.isAnonymous}/>
        <CardList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;