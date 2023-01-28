
import Task from './Task';

import styles from './TaskList.module.css';

const TaskList = () => {
    return (
        <div className={styles["list-box"]}>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}

export default TaskList;