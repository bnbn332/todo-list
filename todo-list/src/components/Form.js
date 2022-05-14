// 인풋과 버튼이 담겨있는 Form 컴포넌트

import React from "react";
import "./Form.css";

// value: 인풋내용,  onCreate: 버튼이 클릭될 때 실행되는 함수,  onChange: 인풋 내용이 변경될 때 실행되는 함수,  onKeyPress: 인풋에서 키를 입력될 때 실행되는  함수

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
