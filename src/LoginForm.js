import "./LoginForm.module.css";

function LoginForm(){
    return(
        <div className="main">
            <form>
                <label>Name</label>
                <br></br>
                <input placeholder="Name" type="text"></input>
                <br></br><br></br>
                <label>Password</label>
                <br></br>
                <input placeholder="Password" type="password"></input>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default LoginForm