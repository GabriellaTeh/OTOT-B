import Card from './Card'
import classes from './Request.module.css'
import axios from 'axios'

function GetRequest() {

    function getHandler() {
        axios.get("https://gabriellateh-ototb.herokuapp.com/api/contacts").then((res) => {
            console.log(res.data)
        }).catch((err) => console.log(err))
    }
    return <Card>
        <h1>GET</h1>
        <form className={classes.form} onSubmit={(event) => { event.preventDefault(); getHandler()}}>
            <div className={classes.action}>
                <button>Send</button>
            </div>
        </form>
    </Card>
}

export default GetRequest