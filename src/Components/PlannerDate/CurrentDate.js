
const CurrentDate = (props) => {

    const day = props.date.getDate();
    const month = props.date.getMonth();
    const year = props.date.getFullYear();

    return (
        <div>
            <p>{day}/{month+1}/{year}</p>
        </div>
    );

}

export default CurrentDate;