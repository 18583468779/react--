import React from "react"

class Person extends React.Component{
    constructor(props){
        super();
        console.log('hello ,i am person')
    }
    componentDidMount(){
        console.log('1111') // 这个被继承的不会执行
    }
    eat(){
        console.log('吃饭')
    };
    sleep(){
        console.log('')
    }
   render (){
       return  <div>
            大家好，我是一个Person
        </div>
    }
}

class Programmer extends Person{
    constructor(props){
        super();
        console.log('hello ,i am Programmer')
    }
    componentDidMount(){
        console.log('2222')
    }
    code(){
        console.log('打代码')
    }

    render (){
      return  <div>
            {
                super.render() // 执行Person的render();
            }
            大家好，我是一个Programmer
        </div>
    }
}

export default Programmer;