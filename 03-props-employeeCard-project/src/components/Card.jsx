import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <div className='top'>
        <img src={props.logo} alt="" />
        <button>Save <Bookmark size={13} /></button>
      </div>
      <div className='middle'>
        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div>
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
        </div>
      </div>
      </div>
      <div className='end'>
        <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card
