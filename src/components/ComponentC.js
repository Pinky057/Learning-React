import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../App';

function ComponentC() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return <div> <h3>User is {user}</h3>
    <h3>{channel}</h3>
    </div>
}
export default ComponentC;