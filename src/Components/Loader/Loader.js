import {useState,useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import '../../css/main.css';
const Loader = ({loading}) => {
    let color = "#1dacff";

    return (
        <section id="loader">
             <HashLoader color={color} loading={loading} size={70} />
        </section>
    )
}
export default Loader;