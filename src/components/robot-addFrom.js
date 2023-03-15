import React, {  Component } from "react";
import axios from "axios";



class robotForm extends Component{

    add =(e) =>{
        e.preventDefault();
        const robotobject={
            
            RobotName:e.target[0].value,
            UserId:e.target[1].value,
            RtypeId:e.target[2].value
        }
       const res =  axios.post('http://localhost:29835/api/tbRobots/PosttbRobot', robotobject)
    }
    render(){
        
        return (

            <form onSubmit={this.add} >
        <div className="input-container">
          <label>Robot Name </label>
          <input type="text"  />
        </div>
        <div className="input-container">
          <label>User Name </label>
          <select key={this.props.Users.UserId}> 
      <option value="NULL"> -- Select a User -- </option>
      {this.props.Users.map((Users) => <option value={Users.UserId}>{Users.FullName}</option>)}
    </select>
        </div>
        <div className="input-container">
          <label>Robot Type </label>
          <select key={this.props.Type.RtypeId}> 
      <option value="NULL"> -- Select a Type -- </option>
      {this.props.Type.map((Type) => <option value={Type.RtypeId}>{Type.RtypeName}</option>)}
    </select>
        </div>
        <div className="button-container">
        <button type="submit" >add Robot</button>
        </div>
      </form>

           

        
           
            
        )
    }
}

    
    


export default robotForm