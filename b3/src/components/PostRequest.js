import Card from './Card'
import classes from './PostRequest.module.css'
import {useRef, useState} from 'react'
import axios from 'axios'

function PostRequest() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState('')
    const nameInput = useRef()
    const emailInput = useRef()

    function postHandler() {
        axios.post("https://gabriellateh-ototb.herokuapp.com/api/contacts",
        {name, email}).then((res) => {
            setData(res.json()._id)
            console.log(res)
        }).catch((err) => console.log(err))
    }

    return <Card>
        <h1>POST</h1>
        <form className={classes.form} onSubmit={(event) => { event.preventDefault(); postHandler()}}>
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

export default PostRequest