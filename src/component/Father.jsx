import { useState } from "react"
import {Son} from './Son';
import {SecondSon} from './SecondSon'

export function Father (){
    const [childSay,setChildSay] = useState("");
    const [fatherSay,setFatherSay] = useState("");
    
    return <div>
        我是父组件
        <br />
            {/* <div>子组件对我说：{childSay}</div>
            <input type="text" placeholder="对子组件说" onChange={e=>setFatherSay(e.target.value)}/> */}
            <br />
            <Son fatherSay={fatherSay} sayFather={setChildSay} />
            <br />
            <SecondSon />
    </div>
}