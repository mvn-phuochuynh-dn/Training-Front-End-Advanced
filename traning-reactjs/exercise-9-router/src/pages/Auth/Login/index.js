import React, { useState } from 'react'

export default function Login(props) {

    //Khai báo 1 state user 
    const [userLogin, setUserLogin] = useState({userName: '',passWord:''});

    //Định nghĩa handleChange
    console.log(userLogin);
    const handleChange = (event) => {
        //Lấy name & value của ele có event onChange
        const {name,value} = event.target;
        //Mỗi lần thay đổi input thì sẽ setStae lại
        setUserLogin({
            //truyền state mới
            ...userLogin,
            [name]:value
        });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if(userLogin.userName === 'myphuoc' && userLogin.passWord === '123') {
            //khi đăng nhập thành công
            // props.history.goBack();//về lại trang trước đó
            //chỉ định trang chuyển hướng
            // props.history.push('/home');//khi back lại sẽ về trang trước(login page)
            props.history.replace('/home');//khi back lại sẽ về trang trước khi chuyển đến login(login page), tức là homePage sẽ thay thế loginPage
        } else {
            alert("Login Fail! Check your Username and your Password, please!!")
            return;
        }
    }
    return (
        <form className="form-sign-in pt-20" onSubmit={handleLogin}>
            <h4 className="form-name mb-30">Form Login</h4>
            <div className="form-group flex-around">
                <input
                    type="text"
                    name="userName"
                    id="inpUserName"
                    placeholder="Input your User name"
                    className="inp-name pl-10 m-10"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group flex-around">
                <input
                    type="password"
                    name="passWord"
                    id="inpPass"
                    placeholder="Input your password"
                    className="inp-pass pl-10 m-10"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <button className="btn-submit m-10" type="submit">Sign Up</button>
            </div>
        </form>
    )
}
