//get logo png
import MyLogo from '../assets/Logo.png'

//creating and exporting Logo function component, essentially
//just a container for the logo png
export default function Logo() {
  return(
    <div className='Logo'>
    <img className='logoimg' src={MyLogo} alt='logo' />
    </div>
  );
}