import {POST_CATEGORY, GET_INDIVIDUAL_CATAGORY, GET_ALL_CATAGORY, UPDATE_CATEGORY, DELETE_CATEGORY} from '../constants/actionTypes'


export const categoryReducers = (categories = [], action) => {
    switch(action.type) {
        case POST_CATEGORY:
            return [...categories, action.payload];
        case GET_ALL_CATAGORY:
            return action.payload;
        case GET_INDIVIDUAL_CATAGORY:
            return action.payload;
        case UPDATE_CATEGORY:
            return categories.map((category) => category._id === action.payload._id ? action.payload : category);
        case DELETE_CATEGORY:
            return categories.filter((category) => category._id !== action.id);
        default:
            return categories;
    }
};