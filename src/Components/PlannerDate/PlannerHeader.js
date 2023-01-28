
import CurrentDate from './CurrentDate';

import styles from './PlannerHeader.module.css'

const PlannerHeader = (props) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']

    return (
        <div className={styles["header-format"]}>
            <h2>{days[props.date.getDay()]}</h2>
            <CurrentDate date = {props.date} />
        </div>
    );

}

export default PlannerHeader;