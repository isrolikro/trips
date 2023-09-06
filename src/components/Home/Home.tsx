import { Link } from "react-router-dom";
// import Trips from '../Trips'
import './Home.css'

const Home = () => {

    return ( 
<div>
    <Link to ='/Trips'>
    <button>all the trips</button>
    </Link>
    
    <Link to ='/register'>
    <button>registration form</button>
    </Link>
    

    <Link to ='/Login'>
    <button>connection</button>
    </Link>



</div>
     );
}

export default Home;