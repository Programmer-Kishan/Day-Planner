
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import styles from './Task.module.css';

const Task = () => {
    return (
        <div className={styles["task-box"]}>
            <p>Get Up Early</p>
            <div className={styles["icon-list"]}>
                <FontAwesomeIcon icon={faCircleMinus} className={styles.icon}/>
                <FontAwesomeIcon icon={faPen} className={styles.icon}/>
            </div>
        </div>
    );
}

export default Task;