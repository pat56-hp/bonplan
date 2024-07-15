import React from 'react'

export default function ProfileInfo() {
  return (
    <div className="profile-part dropdown-button order-md-2">
        <img className="img-fluid profile-pic" src="/assets/images/icons/p5.png" alt="profile" />
        <div>
            <h6 className="fw-normal">Hi, Mark Jecno</h6>
            <h5 className="fw-medium">My Account</h5>
        </div>
        <div className="onhover-box onhover-sm">
            <ul className="menu-list">
                <li>
                    <a className="dropdown-item" href="profile.html">Profile</a>
                </li>
                <li>
                    <a className="dropdown-item" href="my-order.html">My orders</a>
                </li>
                <li>
                    <a className="dropdown-item" href="saved-address.html">Saved Address</a>
                </li>
                <li>
                    <a className="dropdown-item" href="saved-card.html">Saved cards</a>
                </li>
                <li>
                    <a className="dropdown-item" href="setting.html">Settings</a>
                </li>
            </ul>
            <div className="bottom-btn">
                <a href="signin.html" className="theme-color fw-medium d-flex"><i
                        className="ri-login-box-line me-2"></i>Logout</a>
            </div>
        </div>
    </div>
  )
}
