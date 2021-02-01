import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className={this.props.classEmail} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.props.emailTKT}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className={this.props.classPassword} id="exampleInputPassword1" onChange={this.props.passwordTKT}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className={this.props.classButton} onChange={this.props.methode}>Submit</button>
            </form>
        )
    }

}

export default Form;