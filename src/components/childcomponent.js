import React, {useContext} from 'react';
import {ThemeContext} from './App';


function GrandChildComponent() {
    // eslint-disable-next-line no-undef
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <>
            <div>The theme is {theme}</div>
            <button onClick={changeTheme}>
                Change To Light Theme
            </button>
        </>
    );
}


function ChildComponent() {
    return <GrandChildComponent />;
}
export default  ChildComponent;
