import "./components/LoginForm.css";

function LoginForm(){
    return(
        <div className="main">
            <form className="form">
                <label className="label">Name</label>
                <br></br>
                <input className="input" placeholder="Name:" type="text"></input>
                <br></br><br></br>
                <label className="label">Password</label>
                <br></br>
                <input className="input" placeholder="Password:" type="password"></input>
                <br></br><br></br>
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}
export default LoginForm