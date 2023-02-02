import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faPen, faCheck } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'


import styles from './Task.module.css';

const Task = (props) => {

    const [EditText, setEditText] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (event) => {
        setEditText(event.target.value);
    }

    const handleDeleteClick = () => {
        props.onDelete(props.id);
    }

    const handleCheckClick = () => {
        // console.log('check')
        setIsEdit(false);
        props.onEdit(props.id, EditText);
    }

    return (
        <div className={styles["task-box"]}>
            {!isEdit ? <p>{props.task}</p> : <input 
                                                type="text" 
                                                defaultValue={props.task} 
                                                onChange={handleChange}
                                            />}
            <div className={styles["icon-list"]}>
                <FontAwesomeIcon icon={faCircleMinus} className={styles.icon} onClick={handleDeleteClick}/>
                {!isEdit ? 
                    <FontAwesomeIcon icon={faPen} className={styles.icon} onClick={() => setIsEdit(true)}/> :
                    <FontAwesomeIcon icon={faCheck} className={styles.icon} onClick={handleCheckClick}/>
                }
            </div>
        </div>
    );
}

export default Task;