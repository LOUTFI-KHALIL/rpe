import React, { Component } from "react";
class Counter extends Component {
    
  state = {
   
    Clients: [
        {idClient:0,nom:'loutfi',prenom:'khalil',gsm:'0667125126'},
        {idClient:1,nom:'loutfi',prenom:'youssef',gsm:'0667125126'},
        {idClient:2,nom:'loutfi',prenom:'ilyass',gsm:'0667125126'},
        {idClient:3,nom:'loutfi',prenom:'sara',gsm:'0667125126'},
        {idClient:4,nom:'loutfi',prenom:'meryem',gsm:'0667125126'},
    ]
     };
    //  renderTags(){
    //      if (this.state.Clients.length ===0) return <h1>'There are not tags!'</h1>;
    //      return  <ul>{ this.state.Clients.map(client => <li key={client}> {client} </li>)}</ul>;
    //               }
                 handelAdd = () => {
                     console.log('clicked')
                     this.setState({nom : '54'});
                 }
  render() {
     
    return (
      <div>
      
      <ul> Nom    Prenom   { this.state.Clients.map(client => <li key={client.idClient}>  {client.nom}  {client.prenom} {client.gsm} </li>)}</ul>;
      <button onClick={this.handelAdd}>Add</button>
      </div>
    );
  }
//   formatCount(){
//       const {count} = this.state.count; 
//       return this.state.count===0 ?'Zero' :this.state.count;
//   }

       
       

}

export default Counter;






// imageUrl :'./img/logo',

// handelIncrement =() => {
//     this.setState ({count:this.state.count+1})};
// handelDecrement =() =>{this.setState({count:this.state.count-1})}
// }
// formatCount(){
// const {count} = this.state; 
// return count===0 ?'Zero' : count;//        }

  {/* <span>{this.state.count}</span> */}
        {/* <img src={this.state.imageUrl} alt="Logo"/> */}
          {/* <image imageUrl="./img/logo" /> */}
          // constructor(){
    //     super();
    //     this.handelIncrement=this.handelIncrement.bind(this);
    // }