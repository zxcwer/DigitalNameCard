import profilepic from '../profile.jpg';
export default function Header(){
	return (
		<nav>
			<img src={profilepic} className='prof--pic'></img>
		</nav>
	)
}