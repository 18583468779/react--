import { useEffect, useState } from "react";
import eventBus from "../util/eventBus";

export function Son(props){
    const {fatherSay,sayFather} = props;
    const [say,setSay] = useState("")
    // eventBus进行组件通信
    useEffect(()=>{
        eventBus.on('secondEvent',(val)=>{
            setSay(val)
        })
    },[])

    return <div className="color">
        我是子组件 :{say}
        <input type="text" placeholder="对兄弟组件说" onChange={e => eventBus.emit('firstEvent',e.target.value)}/>
        {/* <div>父组件对我说：{fatherSay}</div>
        <input type="text" placeholder="对父组件说" onChange={e => sayFather(e.target.value)}/> */}
    </div>
}