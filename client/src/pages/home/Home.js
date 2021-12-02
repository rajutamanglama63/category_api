import CategoryList from '../../components/categoryList/CategoryList'
import './home.css'

import {useState} from 'react'
import {useSelector} from 'react-redux'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const allCategories = useSelector(state => state.category);
    return (
        <div>
            <CategoryList allCategories={allCategories} currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    )
}

export default Home
