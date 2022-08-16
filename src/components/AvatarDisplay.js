import blankAvatar from "../images/blankAvatar.png"
const AvatarDisplay =(ticket)=>{

    return(
        <div className="avatar-container">
            <div className="image-container">
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={`Photo of ${ticket.owner}`}/>
            </div>
        </div>
    )
}
export default AvatarDisplay