import React from 'react'
import { useState } from 'react';

export default function Form2(props) {
    let { onSubmit } = props;
    
    const [form2, setForm2] = useState({
        title: '',
        description: '',
        price: ''
    });

    const handleSubmit2 = e => {
		e.preventDefault();
		onSubmit(form2);
	};
	const handleChange2 = e => {
		const target = e.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		// const value = target.value;
		console.log(name, value);
		const newFormData = { ...form2 };
		newFormData[name] = value;
		setForm2(newFormData);
	};

    return (
        <form className="form-register pt-20" onSubmit={handleSubmit2}>
                <h1 className="form-name">Form Product Info</h1>
                <label htmlFor="inpName">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="inpTitle"
                    placeholder="Input your title here"
                    className="inp-name pl-10 m-10"
                    onChange={handleChange2} />
                <label htmlFor="inpBirthday">Description:</label>
                <input
                    type="text"
                    name="description"
                    id="inpDescription"
                    placeholder="Input description here"
                    className="inp-birthday pl-10 m-10"
                    onChange={handleChange2} />
                <label htmlFor="inpEmail">Price:</label>
                <input
                    type="text"
                    name="price"
                    id="inpPrice"
                    placeholder="Input price product"
                    className="inp-email pl-10 m-10"
                    onChange={handleChange2} />
                <button className="btn-submit m-10" type="submit">Submit</button>
            </form>
    )
}
