import Card from './Card'
import classes from './Request.module.css'
import {useRef, useState} from 'react'
import axios from 'axios'

function PutRequest() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")
    const nameInput = useRef()
    const emailInput = useRef()
    const idInput = useRef()

    function putHandler() {
        axios.put(`https://gabriellateh-ototb.herokuapp.com/api/contacts/${id}`,
        {name, email}).then((res) => {
            console.log(res.data)
        }).catch((err) => console.log(err))
    }

    return <Card>
        <h1>PUT</h1>
        <form className={classes.form} onSubmit={(event) => { event.preventDefault(); putHandler()}}>
            <div className={classes.control}>
                <label>id</label>
                <input type='text' ref={idInput} onChange={(event) => {
                    setId(event.target.value)
                }}></input>
            </div>
            <div className={classes.control}>
                <label>name</label>
                <input type='text' ref={nameInput} onChange={(event) => {
                    setName(event.target.value)
                }}></input>
            </div>
            <div className={classes.control}>
                <label>email</label>
                <input type='text' ref={emailInput} onChange={(event) => {
                    setEmail(event.target.value)
                }}></input>
            </div>
            <div className={classes.action}>
                <button>Send</button>
            </div>
        </form>
    </Card>
}

export default PutRequest