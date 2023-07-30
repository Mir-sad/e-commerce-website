import React from 'react'
import laptop from "../img/gaming-p.png";

import "./boxes.scss"

const Boxes = () => {
  return (
    <div className='boxes'>
        <div className='box'>
            <img src={laptop} alt="" />
        </div>
       <div className="text">
       <h1>GAMING PC</h1>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus reprehenderit autem, rerum itaque temporibus a exercitationem assumenda ipsum in accusamus ducimus enim nisi atque placeat, quisquam vero error officia mollitia quis blanditiis, eius laborum magnam. Ad inventore, quam amet quo a ipsum cupiditate repellendus voluptatum voluptate ratione tenetur! Atque.
       </p>
            <button>Show More</button>
       </div>
    </div>
  )
}

export default Boxes