import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const LogOutButton = ({onLogOut}) => {
    useEffect(() => {
        console.log('LogOutButton render');
    }, [onLogOut]);
   return <button className='btn btn-primary m-2' onChange={onLogOut}>Log Out</button>
}
LogOutButton.propTypes = {
   onLogOut: PropTypes.func.isRequired
};
function areEqual(prevProps, nextProps) {
    console.log('areEqual');
    return prevProps.onLogOut === nextProps.onLogOut;
}
const MemoLogOutButton = React.memo(LogOutButton, (prevProps, nextProps) => {
    console.log('MemoLogOutButton render');
    return areEqual(prevProps, nextProps);
});

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = React.useState(false);
    const handleLogOut = useCallback(() => { 
        localStorage.removeItem('auth');
     }, [props]);

    return <>
        <button className='btn btn-primary m-2' onClick={()=>setState(!state)}> initial rerender</button>
        <MemoLogOutButton onLogOut={handleLogOut} />
    </>
};

export default MemoWithUseCallbackExample;
