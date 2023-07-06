import dot from '../assets/dot.png';
import star from '../assets/star.png';

const Card = (props:{id:string;coverImg:string;badge:string;description:string;title:string;rating:number;location:string;stats:any;reviewCount:number;price:number}) => {
  return (<>
    <div className="card" id={props.id} aria-label={props.title} aria-details={props.description}>
        <div className="card-img">
            <img src={props.coverImg} alt=''/>
            {props.badge && <p className="card-status">{props.badge}</p>}
        </div>
        <div className="card-info">
            <div className="card-rating">
                <img src={star} className='star-icon' alt=''/>
                <p className='rating-number fs-small text-gray'>{props.stats.rating}</p>
                <p className="fs-small text-gray">({props.stats.reviewCount})</p>
                <img src={dot} className='dot-icon' alt=''/>
                <p className="country fs-small text-gray">{props.location}</p>
            </div>
            <h3 className="card-title fs-small">{props.title}</h3>
            <p className="card-price fs-small text-bold">From $<span className="price text-bold">{props.price}</span><span className='text-reg'> / person</span></p>
        </div>
    </div>

  </>)
}

export default Card






