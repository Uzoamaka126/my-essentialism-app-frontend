import React from 'react';
import { connect } from 'react-redux';
import Avatar from '../../Components/assets/avatar.svg';

export function DashboardHome() {
    return (
        <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 m-auto">
                                <div className="user-avatar mb-3">
                                    <img src={Avatar}  />
                                </div>
                                <h2>Fullname Here</h2>
                                <p>mail address here</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 m-auto mt-4">
                            </div>
                        </div>
                    </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user,
        loading: state.user.loading,
        error: state.user.error
    }
}

export default connect(mapStateToProps, null)(DashboardHome);