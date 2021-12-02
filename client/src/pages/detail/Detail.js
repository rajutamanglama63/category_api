import './detail.css'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const categories = useSelector(state => state.category)
    const [categoryDetail, setCategoryDetail] = useState({});


    useEffect(() => {
        if(params.id) {
            categories.forEach((category) => {
                if(category._id === params.id) setCategoryDetail(category);
            })
        }
    })

    const goBackHandler = () => {
        navigate("/");
    }
    return (
        <div>
            <h1 className="heading">Category's Detail Info</h1>
            <div className="detail">
                <span className="info">id : {categoryDetail._id}</span>
                <span className="info">name : {categoryDetail.name}</span>
            </div>
            <button className="back" onClick={goBackHandler}>Go back</button>
        </div>
    )
}

export default Detail
