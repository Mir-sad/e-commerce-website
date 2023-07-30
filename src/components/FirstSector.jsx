import "./firstSector.scss"
import foto from "../img/transparent.png"
import Typewriter from "typewriter-effect"

const FirstSector = () => {
  return (
    <div className="container">
        <div className="foto">
        <img src={foto} alt="phone photo" />
        </div>
        <div className="text">
        <h1>Here you can find all<br/> <span>
          <Typewriter
          options={{
            strings: ["Products", "Technologies", "Brands"],
            autoStart:true,
            delay:75,
            loop:true,  
          }} 
          />
          </span></h1>

        </div>

    </div>
  )
}

export default FirstSector