import React,{Component,Fragment} from 'react';


class RobotRow extends React.Component {

 

 // [{"RobotId":14,"RobotName":"Robot one ATX1","UserId":2,"RtypeId":1,"userFullName":"jad Khalil","RTypeName":"A","ModelName":"A1","userEmail":"jad@gmail.com"},{"RobotId":15,"RobotName":"ReefBot Pro Two","UserId":3,"RtypeId":1,"userFullName":"Sara Ahmad","RTypeName":"A","ModelName":"A1","userEmail":"Sara@hotmail.com"},{"RobotId":16,"RobotName":"ReefBot Lab","UserId":2,"RtypeId":2,"userFullName":"jad Khalil","RTypeName":"B","ModelName":"A2","userEmail":"jad@gmail.com"},{"RobotId":17,"RobotName":"robot test 1","UserId":3,"RtypeId":1,"userFullName":"Sara Ahmad","RTypeName":"A","ModelName":"A1","userEmail":"Sara@hotmail.com"}]

  render() {
    const {robot}= this.props;
    const theRobots = robot.map(robot =>{
      return(
        <Fragment key= {robot.RobotId}>
        <td>{robot.RobotName}</td>
        <td>{robot.userFullName}</td>
        <td>{robot.userEmail}</td>
        <td>{robot.RTypeName}</td>
        <td>{robot.ModelName}</td>
        </Fragment>
        
      )


    })
    return (
    
    <div>
      {theRobots}
    </div>
     
      );
  }
}

export default RobotRow;