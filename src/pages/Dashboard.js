
import TicketCard from '../components/TicketCard'
const Dashboard =()=>{
    const tickets=[{
            category:'Q2 2022',
            color:'red',
            title:'Create Monday Clone',
            owner:'Simon',
            status: 'working on',
            progress:40,
            priority: 5,
            description:'follow tut on how to code a crm ',
            avatar:'https://www.linkedin.com/in/othusitse-dalgleish-maswabi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BkUiBOyZ8QDGaA8TejaqMcQ%3D%3D',
            timestamp:'2022-08-16T15:53:00'
        },
    {
            category:'Q3 2022',
            color:'red',
            title:'Create Monday Create website for resume',
            owner:'Simon',
            status: 'working on',
            progress:15,
            priority: 4,
            description:'create personal website ',
            avatar:'https://www.linkedin.com/in/othusitse-dalgleish-maswabi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BkUiBOyZ8QDGaA8TejaqMcQ%3D%3D',
            timestamp:'2022-08-16T15:58:00'
        },
    {
            category:'Q3 2022',
            color:'blue',
            title:'Connect Github ',
            owner:'Simon',
            status: 'done',
            progress:15,
            priority: 4,
            description:'connect repo to site ',
            avatar:'https://www.linkedin.com/in/othusitse-dalgleish-maswabi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BkUiBOyZ8QDGaA8TejaqMcQ%3D%3D',
            timestamp:'2022-08-16T15:58:00'
        }, {
            category:'Q3 2022',
            color:'red',
            title:'Rock Paper Scissors Game',
            owner:'Simon',
            status: 'stuck',
            progress:15,
            priority: 4,
            description:'create personal website ',
            avatar:'https://www.linkedin.com/in/othusitse-dalgleish-maswabi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BkUiBOyZ8QDGaA8TejaqMcQ%3D%3D',
            timestamp:'2022-08-16T15:58:00'
        }
    ]

    // return Unique values in array
    const uniqueCatagories = [
       ...new Set(tickets?.map(({category}) => category))
    ]

    console.log(uniqueCatagories)
    return(
        <div className="dashboard" >
            <h1>My Projects</h1>
            <div className="ticket-conainer"> 
             {tickets && uniqueCatagories?.map((uniqueCatagory, categoryIndex)=>(
                // holds catagory Name 
                <div key={categoryIndex}>
                    <h3>{uniqueCatagory}</h3>
                    {tickets.filter(ticket => ticket.category === uniqueCatagory)
                    .map((filterdTicket, _index)=>(
                    <TicketCard
                    id ={_index}
                    color={filterdTicket.color}
                    ticket={filterdTicket}
                    />
                    ))
                }

                </div>
             ))}
            </div>
        </div>
    )
}
export default Dashboard