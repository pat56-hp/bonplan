import React from "react";

export default function Prestataire (){
    return (
        <form>
            <div className="form-group">
                <label>Username</label>
                <input
                    type="text"
                    className=" form-control"
                    placeholder="Username"
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    className=" form-control"
                    placeholder="Email"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className=" form-control"
                    id="password1"
                    placeholder="Password"
                    isPassword = {true}
                />
            </div>
            <div className="form-group">
                <label>Confirm password</label>
                <input
                    type="password"
                    className=" form-control"
                    id="password2"
                    placeholder="Confirm password"
                    isPassword = {true}
                />
            </div>
            <div id="pass-info" className="clearfix"></div>
            <button className="btn_full">S'inscrire</button>
        </form>
    )
}