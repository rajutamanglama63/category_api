import './categoryList.css'
import {Delete, Edit, Info} from '@material-ui/icons'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCategory, postCategory, deleteCategory, updateCategory} from '../../redux/actions/catagoryAction'
import Pagination from '../pagination/Pagination'

const CategoryList = ({allCategories, currentId, setCurrentId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const categories = useSelector((state) => currentId ? state.category.find((singleCategory) => singleCategory._id === currentId) : null);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryPerpage] = useState(3);
    const [categoryData, setCategoryData] = useState({
        name : ""
    });


    useEffect(() => {
        setLoading(true);
        dispatch(getAllCategory());
        setLoading(false);
    }, [dispatch]);

    // Get current posts
    const indexOfLastCategory = currentPage * categoryPerpage;
    const indexOfFirstCategory = indexOfLastCategory - categoryPerpage;
    const currentCategories = allCategories.slice(indexOfFirstCategory, indexOfLastCategory);

    useEffect(() => {
        if(categories) setCategoryData(categories);
    }, [categories]);


    const editBtnHandler = (id) => {
        setCurrentId(id);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(currentId === null) {
            dispatch(postCategory(categoryData));
            setCategoryData({
                name : ""
            });
        } else {
            dispatch(updateCategory(currentId, categoryData));
            setCategoryData({
                name : ""
            });
        }
    }

    const deleteHandler = (id) => {
        dispatch(deleteCategory(id))
    }

    const detailHandler = (id) => {
        navigate(`/${id}`);
    }


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <div>
            <h1 className="heading">Category List</h1>
            <form autoComplete="off" noValidate className="post_category" onSubmit={submitHandler}>
                <label>{currentId ? "Edit Category:" : "Create Category:"}</label>
                <input 
                 placeholder="Enter category name" 
                 type="text" 
                 className="input_field" 
                 value={categoryData.name}
                 onChange={(e) => setCategoryData({...categoryData, name : e.target.value})}
                />
                <button className="post_btn" type="submit">{currentId ? "Edit" : "Post"}</button>
            </form>
            <ul className="catagory_list">
                {
                    currentCategories.map((category) => (
                        <li className="catagory_item" key={category._id}>
                            <span className="category_name">{category.name}</span>
                            <div className="options">
                                <button style={{background : "yellow"}} onClick={() => detailHandler(category._id)}><Info /></button>
                                <button style={{background : "red"}} onClick={() => deleteHandler(category._id)}><Delete /></button>
                                <button style={{background : "pink"}} onClick={() => editBtnHandler(category._id)}><Edit /></button>
                            </div>
                        </li>
                    ))
                }
                
            </ul>
            <Pagination categoryPerpage={categoryPerpage} paginate={paginate} totalCategories={allCategories.length} />
        </div>
        </>
    )
}

export default CategoryList
