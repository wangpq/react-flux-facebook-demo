
import React, { Component } from 'react';

import MyHeader from "../components/MyHeader";

import axios from "axios";


class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      id : props.location.state.id,
      topic : ""
    }
  }
  componentDidMount(){
    axios.get('https://cnodejs.org/api/v1/topic/'+this.state.id)
    .then((response)=>{ 
      if(response && response.data && response.data.data){
        this.setState({
          topic : response.data.data
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() { 
    let topic=this.state.topic;
    return (
      <div className="detail">
        <MyHeader></MyHeader>
        <div style={{"padding":"12px","backgroundColor":"#f0f0f0"}}>
          <h2 style={{"color":"#cc0","marginBottom":"10px"}}>{topic.title}</h2>
          <div style={{"fontSize":"14px","color":"#888","marginBottom":"12px"}}>发表于 {topic.create_at} </div>
          <div className="content" style={{"overflow":"hidden"}} dangerouslySetInnerHTML={{ __html: topic.content }} />
        </div>

      </div>
    );
  }
}

export default Detail;


