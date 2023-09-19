import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'

const TodoListItem = ({ todo, reMove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <li className="TodoListItem">
      <span
        className={checked ? 'checkbox checked' : 'checkbox'}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </span>
      <span className="remove" onClick={() => reMove(id)}>
        <MdRemoveCircleOutline />
      </span>
    </li>
  );
};

export default TodoListItem;