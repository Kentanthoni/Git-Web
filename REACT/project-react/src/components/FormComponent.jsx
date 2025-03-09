import {useState} from "react"

export const FormComponent = () => {

    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password:''
    })

    const {userName, email, password} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlForm="userName">User name</label>
                <input 
                    type="name"
                    className="form-control"
                    name="userName"
                    placholders="Enter your Username"
                    value={userName}
                    onChange={onInputChange}
                />
                </div>
                <div className="form-group">
                <label htmlForm="userName">User name</label>
                <input 
                    type="email"
                    className="form-control"
                    name="email"
                    placholders="Enter your email"
                    value={email}
                    onChange={onInputChange}
                />
                </div>
                <div className="form-group">
                <label htmlForm="userName">User name</label>
                <input 
                    type="password"
                    className="form-control"
                    name="password"
                    placholders="Enter your password"
                    value={password}
                    onChange={onInputChange}
                />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
        </form>
    )
}