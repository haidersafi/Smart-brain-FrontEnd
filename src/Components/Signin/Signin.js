import React,{Component} from 'react';

class Signin extends Component{
	constructor(props)
	{   super(props)
		this.state={signInEmail:'',signInPassword:''}
	}
	onEmailChange=(event)=>{
		console.log(event.target.value)
this.setState({signInEmail:event.target.value})
	}
	onPasswordChange=(event)=>{
		console.log('password',event.target.value)
		this.setState({signInPassword:event.target.value})
	}
	onSubmit=()=>{
		fetch('https://fast-gorge-46931.herokuapp.com/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({email:this.state.signInEmail,
				password:this.state.signInPassword})
		}).then(response=>response.json()).then(user=>{
			if (user.id)
			{

				this.props.loadProfile(user);
				this.props.onRouteChange('homePage')
	        }
			})
		}
				
		
	render()
	{
		const {onRouteChange}=this.props;
	return(<article className="br3  shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"><main className="pa4 black-80 w-80">
  <div className="measure tc">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onEmailChange} type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onPasswordChange} type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" onClick={this.onSubmit} type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3 center">
    <p className="f4 black">NewUser?</p>
      <p className="f4 link underline dim black fw6 pointer" onClick={()=>onRouteChange('registrationPage')}>Register</p>
      
    </div>
  </div>
</main>>
</article>
)
    }
}
export default Signin