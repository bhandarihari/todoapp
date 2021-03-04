import React from 'react'
import {formateDate} from '../../Utils/Moment';

export default function ShowListUi(props) {
    let content = props.isLoading
                 ?<p>loading...</p>
                 :(
<table className="table table-bordered">
            <thead>
            <tr>
                <th>s.n</th>
                <th>todo</th>
                <th>set at</th>
                <th>remarks</th>
                <th>actions</th>
                </tr>
            </thead>
            <tbody>
            { 
                props.items.map((itm,i)=>(
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{itm.todo}</td>
                    <td>{formateDate(itm.createdAt)}</td>
                    <td><input type="checkbox" onChange={()=>props.onChange(itm._id,itm.checked)} checked={itm.checked} /></td>
                    <td><>
                    <button className="btn btn-danger " onClick={()=>props.handleDelete(itm._id,i)} >Delete</button>
                    </></td>
                </tr>
                ))
            }
                
            </tbody>
        </table>
                 )
    return content
}
