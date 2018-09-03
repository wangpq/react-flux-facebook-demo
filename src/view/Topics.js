
import React, { Component } from 'react';

import MyHeader from "../components/MyHeader";

import axios from "axios";
import { Link } from 'react-router-dom';

class Topics extends Component {
  constructor(props){
    super(props);
    this.state={
      topics : []
    }
  }
  componentDidMount(){
    axios.get('https://cnodejs.org/api/v1/topics')
    .then((response)=>{ 
      this.setState({
        topics : response.data.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    let topics=this.state.topics;
    return (
      <div className="topics">
        <MyHeader></MyHeader>
        <h2 style={{"marginTop":"60px"}}> cnode 主题首页</h2>
        <ul>
          {
          topics.map(item => { 
            return (
              <li key={item.id} style={{"listStyle":"none","padding":"12px","backgroundColor":"#f0f0f0","margin":"8px"}} >
          
                  <div className="search-container">
                    <Link to={{ pathname: `/detail/${item.id}/`, state: { data: item , id : item.id  } }} key={item.id}>
                      <img className="search-item-pic" src={item.author.avatar_url} alt="" style={{display:"inline-block","maxWidth":"100%"}}/>
                      <p className="cartoon-title">{item.title}</p>
                    </Link>
                  </div>
                  <div>
                    <div className="author">
                      作者：{item.author.loginname}
                      被浏览：{item.visit_count}次
                    </div>
                  </div>
          
              </li>
            )
          })
          }
        </ul>


      </div>
    );
  }
}

export default Topics;


