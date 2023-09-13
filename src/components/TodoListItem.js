import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'
import './TodoListItem.scss'

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <li className="TodoListItem">
      <span className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </span>
      <span className="remove">
        <MdRemoveCircleOutline />
      </span>
    </li>
  );
};

export default TodoListItem;