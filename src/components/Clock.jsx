import { useEffect, useState } from "react";


function ClockComponent() {

    const InitialUser={
        fecha: new Date(),
        edad:0,
        nombre:'Martin',
        apellidos:'San Jose'
    }

    const [User, setUser] = useState(InitialUser)

    const tick=()=>{
        setUser(User=>{
            let edad = User.edad+1
            return {
               ...User,
                fecha: new Date(),
                edad
            }
        })
    }

    useEffect(() => {
        const intervalID=setInterval(()=>{
            tick()
        },1000)
        
        return()=>{
            clearInterval(intervalID)
        }
    }, [])
    

    return (
        <div>
            <h1>Hora Actual: {User.fecha.toLocaleTimeString()}</h1>
            <br />
            <h2>{User.nombre} {User.apellidos}</h2>
            <br />
            <h2>Edad: {User.edad}</h2>
        </div>
    )
}

export default ClockComponent