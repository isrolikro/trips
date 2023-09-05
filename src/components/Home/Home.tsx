import { Link } from "react-router-dom";
import Trips from '../Trips'

const Home = () => {

    return ( 
<div>
    <Link to ='/Trips'>
    <button>all the trips</button>
    </Link>

    <button>registration form</button>
    
    <Link to ='/UserLogin'>
    <button>connection</button>
    </Link>

</div>
     );
}

export default Home;