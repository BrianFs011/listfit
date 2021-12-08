import {createStore} from 'redux';

const initialState={
  listData: [], 
}

function Redux (state= initialState, action){
  switch (action.type){
    case 'listData':
      return {listData: action.listData}
    default :
      return state;
  }
}

const redux = createStore(Redux);

export default redux;