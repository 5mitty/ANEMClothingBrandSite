import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footerSection'>
            <div className="footerBtm">
            </div>
            <div className="justify-content-center">
                {/* GitHub Icon if wanted */}
                <Link to={`https://github.com/`} target="_blank" className="footerLink">GitHub</Link>
                {/* LinkedIn Icon if wanted */}
                <Link to={`https://www.linkedin.com `} target="_blank" className="footerLink">LinkedIn</Link>
                {/* Stack overflow Icon if wanted */}
                <Link to={`https://stackoverflow.com`} target="_blank" className="footerLink">Stack Overflow</Link>
            </div>
            <div className="footerBtm">
            </div>
        </div>
    );
}

export default Footer;