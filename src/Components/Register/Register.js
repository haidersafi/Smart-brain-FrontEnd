import React,{Component} from 'react';

class Register extends Component
{
  constructor(props)
  {
    super(props)
    this.state={name:'',email:'',password:''}
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value})
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({password:event.target.value})
  }
  onSubmit=()=>{
 fetch('https://fast-gorge-46931.herokuapp.com/register',{method:'post',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({name:this.state.name,email:this.state.email,password:this.state.password})}).then(resp=>resp.json())
 .then(user=>{
  if (user.id)
  {
    this.props.loadProfile(user);
      this.props.onRouteChange('homePage')  
  }
 }
  )

}

  render()
  {
	return(<article className="br3  shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"><main className="pa4 black-80 w-80">
  <div className="measure tc">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onNameChange} type="text" name="name"  id="name"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onEmailChange} type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" onChange={this.onPasswordChange} name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" onClick={this.onSubmit} value="Register"/>
    </div>
  </div>
</main>>
</article>
)
  }
}
export default Register