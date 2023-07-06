import banerImg from '../assets/Group.png';
const Hero = () => {
    return (<>
        <div className='hero-img'>
            <img src={banerImg} alt=''/>
        </div>
        <div className='hero-text'>
            <h1 className='main-heading'>Online Experiences</h1>
            <p className='main-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </>)
}

export default Hero
