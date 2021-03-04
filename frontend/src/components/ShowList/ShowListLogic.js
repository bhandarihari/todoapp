import React, { Component } from 'react'
import ShowListUi from './ShowListUi';
import toastify from '../../Utils/Toastify';
import fechData from '../../Utils/FechData';

export default class ShowListLogic extends Component {
    constructor() {
        super();
    
        this.state = {
          items:[],
          isLoading: false,
        };
      }
    
      componentDidMount() {
        this.setState({
          isLoading: true,
        });
        fechData
          .GET("/todo",true)
          .then((res) => {
            this.setState({
              items: res.data,
            });
          })
          .catch((err) => {
            toastify.errorMsg(err);
          })
          .finally(() => {
            this.setState({
              isLoading: false,
            });
          });
      }
   
      handleDelete=(id,i)=>{
        
          const confirm = window.confirm("Are you sure to remove one item??");
          if(confirm){
              fechData.DELETE(`/todo/${id}`,true)
              .then((res)=>{
                toastify.showSuccess("Item deleted success")
                this.props.history.push("view_list")
                this.state.items.splice(i,1);
                this.setState({
                    items:this.state.items
                })
              })
              .catch((err)=>{
                  toastify.errorMsg(err)
              })
          }
      }
    
      onChange=(itm,checked)=>{
        fechData.PUT(`/todo/${itm}`,{},true)
        .then(()=>{
          fechData.GET('/todo',true)
          .then((res)=>{
            this.setState({
              items:res.data
            })
          })
          .catch((err)=>{
            toastify.errorMsg(err)
          })
          this.props.history.push('/view_list')
        })
        .catch((err)=>{
          toastify.errorMsg(err)
        })
      }
    

    render() {
        return (
       <ShowListUi
           handleDelete={this.handleDelete}
           isLoading={this.state.isLoading}
           items={this.state.items}
           onChange={this.onChange}
       />
        )
    }
}
