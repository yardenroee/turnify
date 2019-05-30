import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        };
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state).then(()=> this.props.history.push('/'));
    }

    renderErrors(){
        if(this.props.errors.length > 0){
        return (
            <ul>
                {this.props.errors.map(error=>(
                   <li key={'error'}>
                       {error}
                   </li> ))}
            </ul>
        )} else { return null}
    }
    render() {
        return (
            <div>
                <div className="session-header">
                    <Link className="logo" to='/'></Link>
                    <Link className="link-to-home" to='/'>Turnify</Link>
                </div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                        &nbsp;
                    <h3>{this.props.directionMessage}</h3>
                        &nbsp;
                        {this.renderErrors()}
                        &nbsp;
                    <label>
                        <input type="text" 
                        value={this.state.username} 
                        onChange={this.update('username')}
                        placeholder="Username"/>
                    </label>
                        &nbsp;
                    <label>
                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.update('password')}
                        placeholder="Password"/>
                    </label>
                        &nbsp;
                    <input type="submit" value={this.props.formType}/>
                        &nbsp;
                        <p>{this.props.switchMessage} {this.props.navLink}</p>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);