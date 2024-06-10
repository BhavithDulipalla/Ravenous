import React from "react";
import Business from "./Business";
import styles from './BusinessList.module.css'

function BusinessList(props) {
    const list = props.data;
    return (
        <div className={styles.main}>
            {list.map((business,place) => <Business info={business} key={place} />)}
        </div>
    )
}

export default BusinessList;