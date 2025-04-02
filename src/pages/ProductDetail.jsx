import { useParams  } from "react-router-dom";
import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import db, { FieldValue } from "../firebase"; 

import { setReviews, addReview } from "../store"; 
function ProducDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();


  let productData = useSelector((state) => {
    return state.productData;
  });
  let productReview = useSelector((state) => {
    return state.productReview.list;
  });

  const [inpuText, setInputText] = useState("");
  useEffect(() => {
    // 등록하기
    db.collection("Review")
    .doc("리뷰")
    .update({
      reviews: FieldValue.arrayUnion(...productReview)
    })
    
    
    console.log("변함")
  }, [productReview])

  // // 가져오기
    // db.collection('product').get().then((결과) => {
    //   const productArray = [];
    //   결과.forEach((doc) => {
    //     productArray.push(doc.data());
    //   })
    //   dispatch(setProducts(productArray));
    // })

  const handleChange = () =>{
    const reviewData = {id : id , review : inpuText};
    dispatch(addReview(reviewData));
    console.log("저장된 리뷰", reviewData)
    setInputText("");
    
  }

  return (
    <div>
      <img src={productData[id].url} />
      <h1>{productData[id].name}</h1>
      <p>{productData[id].description}</p>
      {/* <div>{ 가져온값 }</div> */}
      <textarea value={inpuText} className="review" onChange={(e) => setInputText(e.target.value)}></textarea>
      <button className="btn" onClick={() => handleChange()}>리뷰입력</button>
    </div>
  );
}

export default ProducDetail;
