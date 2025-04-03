import { useState } from "react";
import { auth } from "../firebase"; 
import { Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 로그인 함수 수정
  const handleLogin = async () => {
    console.log("✅ 로그인 함수 실행됨");
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      console.log("로그인 성공:", userCredential.user);
    } catch (error) {
      console.error("로그인 오류:", error.message);
    }
  };

  return (
    <div>
      <input 
        type="email" 
        placeholder="이메일 입력" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="비밀번호 입력" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button variant="outline-light" onClick={handleLogin}>
        로그인
      </Button>
    </div>
  );
};


export default Login;
