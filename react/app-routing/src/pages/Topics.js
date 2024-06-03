import React from 'react';
import { Link} from 'react-router-dom'


function Topics() {
    return (
        <div>
            <h1>Topics</h1>
            <strong>select a topic</strong>
            <ul>
                <li>
                    <Link to="/topics/1">Topic 1 </Link>
                </li>
                <li>
                    <Link to="/topics/2">Topic 2 </Link>
                </li>
                <li>
                    <Link to="/topics/3">Topic 3 </Link>
                </li>
            </ul>
            
        </div>
    )

}

export default Topics;