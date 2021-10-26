import request from "../../utilis/request"

function Nav() {
    return (
        <nav> 
           <div className="nav">
             {Object.entries(request).map(([key , {title , url}]) => (
                 <h2 key={key} className="cursor-pointer transition duration-100 transform hover:scale-125">{title}</h2>
             ))}
             </div>
        </nav>
    )
}

export default Nav
