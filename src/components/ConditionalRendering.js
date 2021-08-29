import React,{useState,useEffect} from 'react'


const ConditionalRendering = () => {
    const Url="https://api.github.com/users/QuincyLarson";
    const [isLoading,setisLoading]=useState(true);
    const [isError,setisError]=useState(false);
    const [userName,setuserName]=useState("USERNAME FROM SERVER");

    useEffect(()=>{
        fetch(Url).then((response)=>{
            if(response.status>=200 && response.status<299){
                return response.json();
            }
            else{
                setisLoading(false);
                setisError(true);
                throw new Error(response.statusText)
            }
        }).then((userName)=>{
            const {login}=userName;
            setisLoading(false);
            setuserName(login);
        }).catch((error)=>{
            console.log(error)
        })

    },[]);
    if(isLoading){
        return (<div>
            <h1>LOADING....</h1>
        </div>)
    }
    if(isError){
        return (<div>
            <h1>NO SUCH USER EXISTS.....</h1>
        </div>)
    }
    return (<div>
        <h1>{userName}</h1>
    </div>)
}

export default ConditionalRendering
