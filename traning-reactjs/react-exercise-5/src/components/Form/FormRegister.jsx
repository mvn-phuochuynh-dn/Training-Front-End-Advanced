import React, { Component } from 'react'

export default class FormRegister extends Component {

    render() {
        let { formRegister,handleSubmit,handleChange} = this.props;
        return (
            <form className="form-register pt-20" onSubmit={handleSubmit}>
                <h1 className="form-name">Form Register</h1>
                <div className="title mb-10">
                    <h2 className="p-10 ml-10">1</h2>
                    <h3 className="ml-10 ml-10">Basic Info</h3>
                </div>
                <label htmlFor="inpName">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="inpName"
                    value={formRegister.name}
                    placeholder="Input your name here"
                    className="inp-name pl-10 m-10"
                    onChange={handleChange} />
                <label htmlFor="inpBirthday">Birthday:</label>
                <input
                    type="date"
                    name="birthday"
                    id="inpBirthday"
                    value={formRegister.birthday}
                    className="inp-birthday pl-10 m-10"
                    onChange={handleChange} />
                <label htmlFor="inpEmail">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="inpEmail"
                    value={formRegister.email}
                    placeholder="Input your email"
                    className="inp-email pl-10 m-10"
                    onChange={handleChange} />
                <label htmlFor="inpPass">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="inpPass"
                    value={formRegister.password}
                    placeholder="Input your password"
                    className="inp-pass pl-10 m-10"
                    onChange={handleChange} />
                <label htmlFor="inpConfPass">Confirm Password:</label>
                <input
                    type="password"
                    name="confPass"
                    id="inpConfPass"
                    value={formRegister.passwordConf}
                    placeholder="Input your password"
                    className="inp-conf-pass pl-10 m-10"
                    onChange={handleChange} />
                <label>Gender:</label>
                <div className="Gender">
                    <input
                        type="radio"
                        name="gender"
                        id="inpGender1"
                        value="1"
                        defaultChecked={formRegister.gender == '1'}
                        className="gender pl-10 m-10"
                        onChange={handleChange} />Male
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        id="inpGender2"
                        value="0"
                        defaultChecked={formRegister.gender == '0'}
                        className="gender pl-10 m-10"
                        onChange={handleChange} />Female
                    <br />
                </div>
                <div className="title mb-10">
                    <h2 className="p-10 ml-10">2</h2>
                    <h3 className="ml-10 ml-10"> Profile</h3>
                </div>
                <label htmlFor="txtAreaBiogr">Biography:</label>
                <textarea
                    name="biography"
                    id="txtAreaBiogr"
                    cols={30} rows={10}
                    value={formRegister.biography}
                    className="biogr pl-10 m-10"
                    onChange={handleChange}/>
                <select
                    name="jobRole"
                    id="selectJobRole"
                    aria-placeholder="Front End Developer"
                    className="job pl-10 m-10"
                    value={formRegister.jobRole}
                    onChange={handleChange}>
                    <optgroup label="Web">
                        <option value="Front_End_Developer">Front End Developer</option>
                        <option value="PHP_Developer">PHP Developer</option>
                        <option value="Python_Developer">Python Developer</option>
                        <option value="Rails_Developer">Rails Developer</option>
                        <option value="Web_Designer">Web Designer</option>
                        <option value="WordPress_Developer">WordPress Developer</option>
                    </optgroup>
                    <optgroup label="Mobile">
                        <option value="Android_Developer">Android Developer</option>
                        <option value="IOS_Developer">IOS Developer</option>
                        <option value="Mobile_Developer">Mobile Developer</option>
                    </optgroup>
                    <optgroup label="Bussiness">
                        <option value="Business_Owner">Business Owner</option>
                        <option value="Freelancer">Freelancer</option>
                    </optgroup>
                    <optgroup label="other">
                        <option value="Secretary">Secretary</option>
                        <option value="Manternance">Manternance</option>
                    </optgroup>
                </select>
                <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    defaultValue="agree"
                    checked={formRegister.agree}
                    className="interest-item pl-10 m-10"
                    onChange={handleChange} />
                <label>I agree to reagister</label>
                <button className="btn-submit m-10" type="submit">Sign Up</button>
            </form>
        )
    }
}

