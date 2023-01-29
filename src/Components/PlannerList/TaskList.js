
import Task from './Task';

import styles from './TaskList.module.css';

const TaskList = (props) => {
    return (
        <div className={styles["list-box"]}>
            {props.tasks.map((curTask) => (
                <Task
                    key={curTask.id}
                    task={curTask.task}
                />
            ))}
        </div>
    )
}

export default TaskList;