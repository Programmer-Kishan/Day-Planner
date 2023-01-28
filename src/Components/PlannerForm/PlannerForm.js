
import Button from '../UI/Button/Button';

import styles from './PlannerForm.module.css';

const PlannerForm = () => {
    return (
        <form action="" className={styles["planner-form"]}>
            <h3>What's Your Plan for today?</h3>
            <input type="text" />
            <Button type = 'submit'> Add Task </Button>
        </form>
        
    );
}

export default PlannerForm;