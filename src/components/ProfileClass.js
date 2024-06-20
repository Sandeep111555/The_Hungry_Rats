import React from "react"; //else
import{Component} from "react"; 
//using class based component 
class Profile extends Component{
    constructor(props)
    {
        console.log("constructor")
        super(props);
        this.state = {
            userInfo:{}
        }
    }
    //it is same like UseEffect in functional component where we will fetch api's

    //life cycle of react class based component
    //first constructor is called,then render method is called and then componentDidMount is called


    async componentDidMount(){
            // this.timer = setInterval(()=>{
            //     console.log("hello");
            // },1000);


            const data = await fetch("https://api.github.com/users/sandeep111555");
            const json = await data.json();
            // console.log(json);
            this.setState({
                userInfo:json
            })
            console.log("Component Did Mount");

    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }
    componentWillUnmount()
    {
        // clearInterval(this.timer);
        console.log("ComponentWillUnmount");
    }
    render()
    {
        const {name,location,avatar_url} = this.state.userInfo;
        return <>
                {
                    console.log("render")
                }
            <img src={avatar_url} alt="not rendered" className="w-40 rounded-lg shadow-md m-2"/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
        </>
    }
}
export default Profile;









/*

{constructor
render} --- render phase

{   update the DOM
    ComponentDidMount} --- commit phase

when ComponentDidMount is invoked?  after first render
when setState method is invoked rerender or reconciliation process will start i.e DOM will be updated

After DOM is updated ComponentDidUpdate is invoked

there is something called unmounting ComponentWillUnmount
it is called when component is about to unmount i.e when go to another component


*/









/*
sequence of function call in class based component in react
Parent constructor
Parent render method
    Child1 constructor
    Child1 render method
        Child2 constructor
        Child2 render method
    DOM update
    Child1 ComponentDidMount
        Child2 ComponentDidMount
Parent ComponentDidMount
*/

