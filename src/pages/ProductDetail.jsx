import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import { db } from '../firebase'; 
const productData = {
  1: { name: "노트북", description: "최신형 고성능 노트북" },
  2: { name: "스마트폰", description: "최고의 카메라 성능을 자랑하는 스마트폰" },
  3: { name: "태블릿", description: "가볍고 강력한 태블릿" },
};

function ProducDetail() {
  const { id } = useParams();
  // 등록하기
  db.collection('product').doc('상품3').set({ 리뷰 : '' })
  // 가져오기
  db.collection('product').get().then((결과) => {
    결과.forEach((doc) => {
      console.log(doc.data());
    })
  })
  let productData = useSelector((state)=>{ 
    return state.productData
  });



  return (
    <div>
      <img src={ productData[id].url } />
      <h1>{productData[id].name}</h1>
      <p>{productData[id].description}</p>
    </div>
  );
}

export default ProducDetail;
