import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"; 
import{  Link} from "react-router-dom";

const TicketCard =({color, ticket})=>{
return (
        <div className="ticket-card">
            {/*Link needs a too to display */}
  <Link to={`/ticket/${ticket.documentId}`} id="link">         
              <div className="ticket-color"> </div>
                {/* <Link to="./AvatarDisplay.js"> <AvatarDisplay/></Link><Link to="./StatusDisplay.js.js"> <StatusDisplay/></Link><Link to="./PriorityDisplay.js"> <PriorityDisplay/></Link><Link to="./ProgressDisplay.js"> <ProgressDisplay/></Link> */}
           <h3>{ticket.title}</h3>
            <AvatarDisplay ticket={ticket}/>
            <StatusDisplay status={ticket.status}/>
            <PriorityDisplay priority={ticket.priority}/>
            <ProgressDisplay progress={ticket.progress}/>
    </Link> 
            <DeleteBlock/>
        </div>
       
    )
}
export default TicketCard