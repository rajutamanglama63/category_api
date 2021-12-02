import {POST_CATEGORY, GET_INDIVIDUAL_CATAGORY, GET_ALL_CATAGORY, UPDATE_CATEGORY, DELETE_CATEGORY} from '../constants/actionTypes'
import axios from 'axios'

export const postCategory = (inputCatagory) => async (dispatch) => {
    try {
        const newCatagory = await axios.post("/api/category/post", inputCatagory);

        dispatch({
            type : POST_CATEGORY,
            payload : newCatagory.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllCategory = () => async (dispatch) => {
    try {
        const allCategories = await axios.get("/api/category/");

        dispatch({
            type : GET_ALL_CATAGORY,
            payload : allCategories.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const getIndividualCategory = (id) => async (dispatch) => {
    try {
        const individualCategory = await axios.get(`/api/category/${id}`);

        dispatch({
            type : GET_INDIVIDUAL_CATAGORY,
            payload : individualCategory.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateCategory = (id, categoryData) => async (dispatch) => {
    try {
        const updatedCategory = await axios.put(`/api/category/${id}`, categoryData);

        dispatch({
            type : UPDATE_CATEGORY,
            payload : updatedCategory.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteCategory = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/category/${id}`);

        dispatch({
            type : DELETE_CATEGORY,
            id
        });
    } catch (error) {
        console.log(error);
    }
}