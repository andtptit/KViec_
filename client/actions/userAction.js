// Import actionType constants
import {
    GET_LIST_USER
} from '../constants/actionType';

export const getListUser = (data) => {
    return {
        type: GET_LIST_USER,
        data
    };
};
