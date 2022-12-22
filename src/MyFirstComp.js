import React from 'react'

// predetermind orders --> life cycle methods 

// Component life cycle

// 1. Mounting -- constructor()  getDerivedStateFromProps shouldComponentUpdate  render componentdidMount()
// 2. Updating/Mounted-->  getDerivedStateFromProps shouldComponentUpdate render componentDidUpdate()
// 3. Unmounting phase--> componentWillUnmount()

 export default class MyFirstComp extends React.Component{

       constructor(props){

        console.log("in contrcutor")
              super(props)
              this.state={
                Countries : props.Countries
        }
       }


       static getDerivedStateFromProps(state,props){
        console.log("in getderivedstate")
        return{
            Name : "Ekanth"
        }

       }


        
       componentDidMount(){

                 //only once
        // best method to make api call
 
  
       }


    handleChange = (e)=>{

      var searchTerm = e.target.value

      var filteredArray = this.props.Countries.filter((elem)=>elem.includes(searchTerm))
      this.setState({
        Countries : filteredArray
      })
   }

   handleChange1(e){

    console.log(this)
    console.log(e)
    console.log(e.target.name)
    this.setState({
           [e.target.name] : e.target.value
    })

   }

    render(){

        return  <div>
            <h4>



                Countries  
                </h4>

                Search <input type="text" onChange={this.handleChange}/>
                {
                    this.state.Countries.map((e)=><li>{e}</li>)
                }
            
        </div>
    }
}

