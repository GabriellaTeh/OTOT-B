import Card from './Card'
import classes from './Request.module.css'
import {useRef, useState} from 'react'
import axios from 'axios'

function DeleteRequest() {
    const [id, setId] = useState("")
    const idInput = useRef()

    function deleteHandler() {
        axios.delete(`https://gabriellateh-ototb.herokuapp.com/api/contacts/${id}`).then((res) => {
            console.log(res.data)
        }).catch((err) => console.log(err))
    }

    return <Card>
        <h1>DELETE</h1>
        <form className={classes.form} onSubmit={(event) => { event.preventDefault(); deleteHandler()}}>
            <div className={classes.control}>
                <label>id</label>
                <input type='text' ref={idInput} onChange={(event) => {
                    setId(event.target.value)
                }}></input>
            </div>
            <div className={classes.action}>
                <button>Send</button>
            </div>
        </form>
    </Card>
}

export default DeleteRequest