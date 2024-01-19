import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import UserClassApp from './UserClassBased';
import Counter from './Counter';
import CounterClassBased from './CounterClassBased';
import PropsClassBased from './PropsClassBased';

import FunProp from './PropsAsAFunction'

import PropsFunc from './PropsFunc';
import GetInputValue  from './inputFieldValue';
import {HideShowToggle,HideShow} from './HideShowToggle';
import Parent from './childToparentData/Parent';
import IfelseCondition from './IfelseCondition';  
import LoginForm from './LoginForm/LoginForm';
import ItemList from './ItemList';
import ParentFromGetFolder from './GetDataFromChild/Parent';

import {ComponentCreated} from './LifeCycleMethod/ComponentCreated';
import ComponentDidMounted from './LifeCycleMethod/ComponentDidMounted';
import ComponentDidUpdated from './LifeCycleMethod/ComponentDidUpdated';
import ComponentWillUnmount from './LifeCycleMethod/ComponentWillUnmount';
import UseEffectHooks from './hooksMethod/UseEffectHooks';
import myStyle from './myCss.module.css'
import LoopsB from './Loops-bootstrap/LoopsB';
import UseMemoHooks from './hooksMethod/UseMemoHooks';
import UseRefHooks from './hooksMethod/UseRefHooks';
import MainComp from './routersCompoent/MainComp';
function App() {

  let [myname,setName]=useState("Dharam");
  let [isUnmount,setIsUnmount]=useState(true);
  let [data,setData]=useState(100);
  const changeProps=()=>setName("Dharam Kumar");
  const setDataFromChild=(res)=> setData(res)

  return (
    <div className="App">
     <h1 className={myStyle.mysuccess}>Hello </h1>
     <div className='container'>
     <MainComp></MainComp>

     </div>

    <div className='container'>
        {/* <ComponentCreated/>
        <ComponentDidMounted/>
        <ComponentDidUpdated/>
        { isUnmount ? <ComponentWillUnmount/> :  <h2>Unmount</h2>}
        <button className='btn btn-primary' onClick={()=>{setIsUnmount(!isUnmount)}}>Unmount Component</button> */}

        {/* <div>
          <UseEffectHooks data = {data} setDataFromChild = {setDataFromChild}/>
        </div>

        <LoopsB></LoopsB>
        <UseMemoHooks></UseMemoHooks>
        <UseRefHooks></UseRefHooks> */}
    </div>

    {/* <Users />
    <UserClassApp></UserClassApp>
    <Counter/>
    <CounterClassBased/>
    <PropsFunc student={{name:"Dharam", email:"abcd@gmail.com"}}/>
    <PropsFunc student={{name:"Alex", email:"abcd@gmail.com"}} other={{altName:"Alex bhai"}} />
    <PropsClassBased name={myname}></PropsClassBased>
    <button onClick={changeProps}>Change Props</button>
    <FunProp funProp={changeProps}></FunProp>
    <GetInputValue></GetInputValue> */}

{/* 
    <HideShow></HideShow>
    <HideShowToggle></HideShowToggle>

    <Parent></Parent>
    <IfelseCondition></IfelseCondition> */}
    {/* <div className='container'>

    <LoginForm></LoginForm>
    <ItemList></ItemList>
    <ParentFromGetFolder></ParentFromGetFolder>
    </div> */}




    </div>
  );
}

export default App;
