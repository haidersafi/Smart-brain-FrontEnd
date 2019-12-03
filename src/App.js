import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js'
import Imagelinkform from './Components/Imagelinkform/Imagelinkform.js'
import Rank from './Components/Rank/Rank.js'
import Facerecognition from './Components/Facerecognition/Facerecognition.js'
import Particles from 'react-particles-js';
import Signin from './Components/Signin/Signin.js'
import Register from './Components/Register/Register.js'

const particalOptions={
      "particles": {
          "number": {
              "value": 80
          },
          "density":{
            enable:true,
            value_area:900
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }
  const initialState={
    input:'',
    imageUrl:'',
    box:{},
    route:'signInPage',
    signedIn:false,
    user:{
    id:'',
    name:'',
    email:'',
    password:'',
    entries:0,
    joined:''
    }}
class App extends Component {
  constructor()
  {
    super()
    this.state=initialState;
  }
  loadProfile=(data)=>{
    this.setState({user:{id:data.id,
    name:data.name,
    email:data.email,
    password:data.password,
    entries:data.entries,
    joined:data.joined}})
  }
  calculateFaceLocation=(data)=>{
const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
const image=document.getElementById('imageInput');
const width=Number(image.width);
const height=Number(image.height);
return{
  bottom_row:height-(height*clarifaiFace.bottom_row),
left_col:width*clarifaiFace.left_col,
right_col: width-(width*clarifaiFace.right_col),
top_row:height*clarifaiFace.top_row} 
}
displayFaceBox=(box)=>{
  console.log('box',box)
  this.setState({box:box})
}
  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }
  onRouteChange=(route)=>{
    console.log(route)
    if(route==='homePage')
      {
        this.setState({signedIn:true})
  }
      else{
        this.setState(initialState)
      }
    this.setState({route:route})
  }
  onSubmit=()=>{
    console.log('click')



    this.setState({imageUrl: this.state.input})
  
fetch('https://fast-gorge-46931.herokuapp.com/imageurl',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({input:this.state.input})}).then(response=>response.json())
 .then(response=>{
  console.log(response.outputs)
    if (response.outputs)
    {
      fetch('https://fast-gorge-46931.herokuapp.com/image',{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({id:this.state.user.id})
      }).then(resp=>resp.json()).then(count=>{
        this.setState(Object.assign(this.state.user,{entries:count}))
      }).catch(console.log)
    }
    this.displayFaceBox(this.calculateFaceLocation(response))
    }).catch(err=>console.log('invalid response'));
  }
  render()
  {

    const {imageUrl,box,signedIn,route}=this.state;
  return (
    <div>
    <Particles className='particles' params={particalOptions} />
     <Navigation onRouteChange={this.onRouteChange} signedIn={this.state.signedIn}  />
     {(route==='signInPage')?<Signin loadProfile={this.loadProfile} onRouteChange={this.onRouteChange}/>:(route==='registrationPage')?<Register loadProfile={this.loadProfile} onRouteChange={this.onRouteChange}/>:
<div>
     <Logo/>
   
     
     <Rank name={this.state.user.name} entries={this.state.user.entries}/>
     <Imagelinkform onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
     <Facerecognition box={box} imageUrl={imageUrl}/>
   </div>
   }

    </div>
  );
}
}

export default App;
