
import { useState } from 'react';

import Button from '../UI/Button/Button';

import styles from './PlannerForm.module.css';

const PlannerForm = (props) => {

    const notValidContent = <p className={styles.invalid}>The input field cannot be empty</p>

    const [task, setTask] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (event) => {
        setTask(event.target.value);
        setIsValid(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim().length === 0) {
            setIsValid(false);
            return ;
        }

        props.onAddTask(task);
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles["planner-form"]}>
            <h3>What's Your Plan for today?</h3>
            <input type="text" onChange={handleChange} value={task}/>
            {!isValid ? notValidContent : ''}
            <Button type = 'submit'> Add Task </Button>
        </form>
        
    );
}

export default PlannerForm;