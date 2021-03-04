import React from 'react'

export default function AddListUi(props) {
    return (
        <form className=" bg-secondary mt-4" onSubmit={props.onSubmit} style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
        <h3>Add new to list</h3>
        <div className="form-group">
            <input type="text" required onChange={props.onChange} className="form-control" />
            <button type='submit'  className="btn btn-primary mt-2 mb-2">Add</button>
        </div>
        </form>
    )
}
