import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Website(){
	return(
		<footer>
			<div className='website--icon'>
				<a href="https://www.facebook.com/Nitiphon.keoduangdy/">
					<FontAwesomeIcon className="icon--setting" icon={faFacebook} size="2x" />
				</a>
				<a href="https://www.instagram.com/_kk_kdd/">
					<FontAwesomeIcon className="icon--setting" icon={faInstagram} size="2x" ></FontAwesomeIcon>
				</a>
				<a href="https://github.com/zxcwer">
					<FontAwesomeIcon className="icon--setting" icon={faGithub} size="2x"></FontAwesomeIcon>
				</a>		
			</div>
		</footer>
		
	)
}