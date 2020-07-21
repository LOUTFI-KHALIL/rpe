import React, { Component } from "react";
import Item from "antd/lib/list/Item";
import { Input } from "antd";
var a 
class Essei extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentItem: {
        id: null,
        nom: "",
        prenom: "",
      },
      items: [
        {
          id: 0,
          nom: "loutfi",
          prenom: "youssef",
        },
        {
          id: 1,
          nom: "loutfi",
          prenom: "ilyass",
        },
        {
          id: 2,
          nom: "loutfi",
          prenom: "khalil",
        },
      ],
    };
  }
  handeleChange = (e) => {
  
    const valeur = e.target.value
    this.setState({
      curentItem: {... this.state.curentItem,
        [e.target.name]: valeur,
      },
    });
    console.log(this.state.curentItem);
  };

    
  addClient = (e) => {
    e.preventDefault();
    const newLine = this.state.curentItem;
    const Items = [...this.state.items, newLine];
    console.log(Items);
    this.setState({
      items: Items,
      curentItem: {
        id: 0,
        nom: "",
        prenom: "",
      },
    });
  };
 

 valueId =( valeurId)=>{
  a= valeurId
 }

  handleDelete =(ids)=>{
  
   const filtredItems=this.state.items.filter((item)=> item.id !== ids);
   this.setState({items:filtredItems});
  };

  handelDubleClick =()=>{ 
    const selectedline= this.state.items.filter((item)=> item.id===a)
   
     this.setState({curentItem: selectedline });
    
   console.log(selectedline);

  };
  render() {
    return (
      <div>
        <form>
          {this.state.items.map((item) => (
            <tr key={item.id}  onClick={()=>this.valueId(item.id)} onDoubleClick={()=>this.handelDubleClick(a)}>
              <td>
                <input
                  placeholder="Id"
                  value={item.id}
                  onChange={this.handeleChange}
                          />
              </td>
              <td>
                <input
                  placeholder="enter le nom"
                  value={item.nom}
                  onChange={this.handeleChange}
                />
              </td>
              <td>
                <input
                  placeholder="enter le prenom"
                  value={item.prenom}
                  onChange={this.handeleChange}
                 
                />
              </td>
              <td></td>
            </tr>
          ))}
          <input type="text"
          name="id"
            placeholder="Id"
            value={this.state.curentItem.id}
            onChange={this.handeleChange}
          />
          <input type="text"
          name="nom"
            placeholder="enter le nom"
            value={this.state.curentItem.nom}
            onChange={this.handeleChange}
          />
          <input type="text"
          name="prenom"
            placeholder="enter le prenom"
            value={this.state.curentItem.prenom}
            onChange={this.handeleChange}
          />
          <button on onClick={this.addClient}>
            Add
          </button>
          <button onClick= {()=>this.handleDelete(a)}>delete</button>
          <button>update</button>
        </form>
      </div>
    );
  }
}
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
export default Essei;
