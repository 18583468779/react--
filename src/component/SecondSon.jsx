import { useEffect, useState } from "react"
import  eventBus from "../util/eventBus"


export function SecondSon(props){
    const [say,setSay] = useState("");
    // eventBus进行组件通信
    
    useEffect(()=>{
        eventBus.on('firstEvent',(val)=>{
            setSay(val)
        });
        return ()=>{
            eventBus.off('firstEvent');
        }
    },[])

    return <div  className="color">
        我是兄弟组件
        <div>兄弟对我说：{say}</div>
        <input type="text" placeholder="我是兄弟组件" onChange={e => eventBus.emit('secondEvent',e.target.value)}/>
    </div>
}