import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'
import './TodoListItem.scss'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <li className="TodoListItem">
      <span className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </span>
      <span className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </span>
    </li>
  );
};

export default React.memo(TodoListItem);