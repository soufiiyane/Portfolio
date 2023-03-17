import '../assets/css/work.css';
import yinas from '../assets/workImages/yinas.png'
function Work(){

    return(
        <div className="work">
            <div className='about-headline'>
                <div>
                    <span>03.</span>
                    <h2>Projects</h2>
                </div>
                <span></span>
          </div>
          <div className='work-card'>
            <div className='work-image' >
                
            </div>
            <div className='work-content'>
                <span>Featured Project</span>
                <h4>Yinas WordPress Theme</h4>
                <div className='work-text'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>   
                </div>
                <ul>
                    <li>Bootstrap</li>
                    <li>Javascript (ES6+)</li>
                    <li>jQuery</li>
                    <li>PHP</li>
                    <li>WordPress</li>
                </ul>
                <a href='#'>Learn More</a>
            </div>
          </div>
        </div>
    )

}
export default Work;