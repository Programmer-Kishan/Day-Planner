
import Task from './Task';

import styles from './TaskList.module.css';

const TaskList = (props) => {
    
    const emptyContent = <p className={styles.empty}>No Tasks for today</p>
 
    return (
        <div className={styles["list-box"]}>
            {!props.isEmpty && props.tasks.map((curTask) => (
                <Task
                    key={curTask.id}
                    id={curTask.id}
                    task={curTask.task}
                    onDelete={props.onDeleteTask}
                />
            ))}
            {props.isEmpty && emptyContent}
        </div>
    )
}

export default TaskList;