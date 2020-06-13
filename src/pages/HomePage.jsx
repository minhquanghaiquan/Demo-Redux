import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux'
import HobbyList from '../components/HomePage/HobbyList';

import { addNewHobby, setActiveHobby } from '../actions/hobby';
HomePage.propTypes = {
    
};

const randomNumber =() => {
    return 1000+ Math.trunc((Math.random()*9000));
}

function HomePage(props) {
    const hobbyList = useSelector(state=> state.hobby.list);
    const activeId = useSelector(state=> state.hobby.activeId);

    // const hobbyState = useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.list,
    // }), shallowEqual)


    console.log('Hobby list: ' , hobbyList);
    const dispatch = useDispatch();

    const handleAddhobbyClick =() => {
        const newId = randomNumber();
        const newHobby = {
            // id: casual.uuid,
            // title: casual.title,
            id: newId,
            title: `Hobby ${newId}`,
        }
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className='home-page'>
            <h1>Hello</h1>
            <button onClick= {handleAddhobbyClick}>Random hobby</button>
            <HobbyList 
                hobbyList={hobbyList} 
                activeId ={activeId}
                onHobbyClick={handleHobbyClick}   />
        </div>
    );
}

export default HomePage;