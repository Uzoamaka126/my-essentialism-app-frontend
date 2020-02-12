import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getValues } from '../../redux-store/actions/fetch-values';
import { getToken } from '../../_helpers/authenticationChecker'
import AuthNavbar from '../../components/_navigation_/AuthNavbar';
import Navbar from '../../components/_navigation_/Navbar';
import { StyledDashboard } from '../../components/_styles_/StyledDashboard';

export function Dashboard(props) {
    // console.log(loading, values, error);
    // const { getValues, isFetching } = props;
    // const { values } = props;
    const token = getToken();
    useEffect(() => {
        getValues();
    }, []);


    return (
        <>
            {token ? <AuthNavbar /> : <Navbar />}
            <StyledDashboard>
                <h3>Choose your list of values</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            {/* <ul>
                                {values.map(value => (
                                    <li key={value.id}>{value.value_name}</li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </StyledDashboard>
        </>
    )
}

const mapStateToProps = store => {
    // console.log(store);
    return {
        values: store.values,
        loading: store.values.isLoading,
        error: store.values.error
    }
}

export default connect(mapStateToProps, { getValues })(
    Dashboard
);