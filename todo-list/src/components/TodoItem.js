import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  // text: todo의 내용,  checked: 체크박스의 상태,  id: todo의 고유아이디,  onToggle: 체크박스를 켜고 끄는 함수,  onRemove:  아이템을 삭제시키는 함수

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); // onToggle이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-iext ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
