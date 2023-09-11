import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'

const TodoListItem = () => {
  return(
    <li className='TodoListItem'>
      <span className='checkbox'>
        <MdCheckBoxOutlineBlank/>
        <span className='text'>할일</span>
      </span>
      <span className='remove'>
        <MdRemoveCircleOutline/>
      </span>
    </li>
  )
}

export default TodoListItem;