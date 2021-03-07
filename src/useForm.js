import {useState,useEffect} from 'react';
const useForm = () =>
{
    const [values,setValues] = useState({
        name:'',
        email:''
    });

    const [errors,setErrors] = useState({});

    const handleChange = e => {
        const{name,value} = e.target
        //destructure name and value from the target which is the input
        setValues({
            ...values,
            //[e.target.name]:e.target.value
            [name]:value
        });
    };

    const handleSubmit = e =>
    {
        e.preventDefault();
    }

    return{handleChange,values,handleSubmit};
}
export default useForm;