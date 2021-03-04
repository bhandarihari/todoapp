import React, { Component } from 'react'
import AddListUi from './AddListUi'
import fechData from '../../Utils/FechData';
import toastify from '../../Utils/Toastify';

export default class AddListLogic extends Component {
    constructor() {
        super()
    
        this.state = {
             item:''
        }
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        fechData.POST('/todo',{todo:this.state.item},true)
        .then((res)=>{
            toastify.showSuccess("Item Added Success");
            this.props.history.push('/view_list')
        })
        .catch((err)=>{
            toastify.errorMsg(err)
        })
    }

onChange=(e)=>{
    let {value} = e.target;
    this.setState({
        item:value
    })
}

    render() {
        return (
            <div>
                <AddListUi
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
