import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import db, { FieldValue } from "../firebase";

import { addReview, loadReview } from "../store";
function ProducDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  let productData = useSelector((state) => {
    return state.productData;
  });

  let addReviews = useSelector((state) => {
    return state.productReview.add;
  });
  let loadReviews = useSelector((state) => {
    return state.productReview.load;
  });
  const [inpuText, setInputText] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // 등록
         db
          .collection("Review")
          .doc("리뷰")
          .update({
            reviews: FieldValue.arrayUnion(...addReviews),
          });

        //가져오기
         db
          .collection("Review")
          .get()
          .then((결과) => {
            const productArray = [];
            결과.forEach((doc) => {
              productArray.push(doc.data());
            });

            const filterItem =
              productArray[0].reviews.filter((item) => item.id === id) || [];

            
            dispatch(loadReview(filterItem));
            console.log(loadReviews);
          });
      } catch (error) {
        console.error("데이터 처리 중 오류 발생:", error);
      }
    };

    fetchReviews();
  }, [addReviews]);


  const handleChange = () => {
    const reviewData = { id: id, review: inpuText };
    dispatch(addReview(reviewData));
    setInputText("");
  };

  return (
    
    <div>
      <img src={productData[id].url} />
      <h1>{productData[id].name}</h1>
      <p>{productData[id].description}</p>
      
      {
        
        loadReviews.map((i, v) => (
          <>
          <div key={v}>{i.review}</div>
          
          </>
        ))
        
      }
      <div>리뷰 {loadReviews.length} 건</div>
      <textarea
        value={inpuText}
        className="review"
        onChange={(e) => setInputText(e.target.value)}></textarea>
      <button className="btn" onClick={() => handleChange()}>
        리뷰입력
      </button>
    </div>
  );
  
}

export default ProducDetail;
