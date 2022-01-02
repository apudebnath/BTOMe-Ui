import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
    return (
        <div>
            {/* social media icons  */}
            <p>
                <a href="https://www.facebook.com/"
                    target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="mx-2" icon={faFacebookF} size='1x' />
                </a>
                <a href="https://twitter.com/"
                    target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="mx-2" icon={faTwitter} size='1x' />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="mx-2" icon={faLinkedin} size='1x' />
                </a>
            </p>
        </div>
    );
};

export default SocialMedia;