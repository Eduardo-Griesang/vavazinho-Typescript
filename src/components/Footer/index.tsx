import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-icons'>
                <a className='footer-icons-icon' href='https://www.linkedin.com/in/eduardo-griesang-0b779921b/'> 
                    <FontAwesomeIcon icon={["fab" , "linkedin"]}/> 
                </a>

                <a className='footer-icons-icon' href='https://github.com/Eduardo-Griesang'> 
                    <FontAwesomeIcon icon={["fab", "github"]} /> 
                </a>
                
                <a className='footer-icons-icon' href='https://www.instagram.com/eduardo_griesang/'>
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                
            </div>

            <div className='footer-txt'>
                <h2>Desenvolvido por Eduardo Griesang</h2>
            </div>
        </section>
    )
}

export default Footer