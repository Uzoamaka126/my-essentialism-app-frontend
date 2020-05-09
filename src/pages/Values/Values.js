import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

export function Values(props) {
    const { getValues, isFetching, values } = props;
    const [isOpen, setIsOpen] = useState(false);

    console.log(values);
    useEffect(() => {
        getValues();
    }, [getValues]);

    // if(!values) return <Spinner />

    return (
        <>
            {/* <h3>Choose your list of values</h3> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    {/* {values && values.map((value, index) => {
                        return (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{value.name}</h5>
                                    <button type="button" className="btn btn-primary" onClick={openModal}>
                                        View Description
                                    </button>
                                </div>
                                <ModalValue value={value} closeModal={closeModal} isOpen={isOpen}>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">{value.name}</h5>
                                        <button type="button" className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>{value.description}</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </ModalValue>
                            </div>
                        )
                    })} */}
                    Values
                    </div>
                </div>
            </div>
            
        </>
        // <li key={key}>
        //     <input
        //     onChange={handleChange}
        //     type="checkbox"
        //     id={`checkbox${key}`}
        //     value={name}
        //     />
        //     <label htmlFor={`checkbox${key}`}>{name}</label>
        // </li>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        values: state.values,
        isFetching: state.values.isFetching,
        error: state.values.error
    }
}

export default connect(mapStateToProps, null)(Values);