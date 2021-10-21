import FooterContainer from './Footer';
import {FiGithub} from 'react-icons/fi';

export default function Footer() {
    return (
        <FooterContainer >
            <p>&copy;2021 Alex Gioffre'</p>
            <div>
                <a href="https://github.com/AlexGioffDev/" target="_blank" rel="noreferrer"><FiGithub /></a>
            </div>
        </FooterContainer>
    )
}