
import TicketCard from '../components/TicketCard'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';

const Dashboard =()=>{
     

        const [tickets, setTickets] = useState(null)

        useEffect(() => {
            const fetchData = async () => {
              const response = await axios.get(`http://localhost:8000/tickets`);
            //   const newData = await response.json();
              const dataObject = response.data.data;

        const arrayOfKeys = Object.keys(dataObject)
        const arrayOfData = Object.keys(dataObject).map((key)=> dataObject[key])
        const formattedArray = []
        arrayOfKeys.forEach((key, index) => {
                    const formattedData = { ...arrayOfData[index]}
                    formattedData['documentId'] = key
                    formattedArray.push(formattedData)
                })
                setTickets(formattedArray)
                //     // console.log('arrayOfKeys', arrayOfKeys)
                //     // console.log(formattedArray)
                //     // console.log('arrayOfData', arrayOfData)
            };
        //    calls multiple times?
            fetchData();
          },[]);

       
    //catagory colours
    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ];

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
                    color={colors[categoryIndex] ||colors}
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