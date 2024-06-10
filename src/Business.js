import React from "react";
import styles from './Business.module.css'

function Business(props) {
    const {image_url, name, location, categories, rating, review_count} = props.info;
    return (
       /* <div>
            <img src={image} />
            <h1>{name}</h1>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipcode}</p>
            <h1>{category}</h1>
            <p>{rating}</p>
            <p>{reviewCount}</p>
        </div> 


        <div className={styles.main}>
            <img src={pizza} className={styles.image}/>
            <h2>MarginOtto Pizzeria</h2>
            <div className={styles.content}>
                <div style={{width: '50%'}}>
                    <p>1010 Paddington Way</p>
                    <p>Bordertown</p>
                    <p style={{display: 'inline'}}>NY   </p>
                    <p style={{display: 'inline'}}>10101</p>
                </div>
                <div className={styles.contentSub} style={{width: '50%'}}>
                    <p style={{fontWeight: 'bold'}}>ITALIAN</p>
                    <p>4.5 stars</p>
                    <p>90 reviews</p>
                </div>
            </div>
        </div>*/

        <div className={styles.main}>
            <img src={image_url} className={styles.image}/>
            <h2>{name}</h2>
            <div className={styles.content}>
                <div style={{width: '50%'}}>
                    <p>{location.address1}</p>
                    <p>{location.city}</p>
                    <p style={{display: 'inline'}}>{location.state}   </p>
                    <p style={{display: 'inline'}}>{location.zip_code}</p>
                </div>
                <div className={styles.contentSub} style={{width: '50%'}}>
                    <p style={{fontWeight: 'bold'}}>{categories[0].title}</p>
                    <p>{rating}</p>
                    <p>{review_count}</p>
                </div>
            </div>
        </div>

    )
}
export default Business;