import React, { useState } from "react";
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.engine(search,location);
        

    }
    return (
        <div>
        <div className={styles.main}>
            <form onSubmit={handleSubmit}>
                <input className={styles.input} type="text" name="business_search" id="business_search" placeholder="Search Business"
                value={search} onChange={(e) => setSearch(e.target.value)} required />
                <input className={styles.input} type="text" name="location_search" id="location_search" placeholder="Where ?"
                value={location} onChange={(e) => setLocation(e.target.value)} required />
                <br />
                <br />
                <input className={styles.button} type="submit" value="Let's Go"/>
            </form>
        </div>
        </div>
    )
}

export default SearchBar;