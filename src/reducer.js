import { queryString } from 'query-string';

export default function(state, action){
    switch (action.type) {
        case 'UPDATE_TITLE':
             location.search = queryString.stringify({title: action.payload});
            break;
    
        default:
            break;
    }
}