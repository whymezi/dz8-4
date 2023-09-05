import React from 'react'
import './footer.css'
import instagram from '../image/instagram.png'
import spotify from '../image/spotify.png'

function Footer() {
    return (
        <div>
            <footer>
                <div className='footer-wrapper'>
                    <div>
                        <p>Наши соц. сети</p>
                        <p>Наш номер</p>
                    </div>
                    <div>
                        <div>
                            <a href="https://instagram.com/mr.atickdev?igshid=YTQwZjQ0NmI0OA==">
                                <img className='logo' src={instagram} alt="instagram-logo" />
                            </a>
                            <a href="https://open.spotify.com/">
                                <img className='logo' src={spotify} alt="spotify-logo" />
                            </a>
                        </div>
                        <p>+996 574-54-54-54</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
