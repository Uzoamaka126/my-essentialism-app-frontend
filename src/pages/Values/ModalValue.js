import React from 'react';

function ModalValue({ value, closeModal, isOpen, children }) {
    const changeModalClass = isOpen ? "modal fade show" : "modal fade"
    return (
        // {/* ----------------- Value Modal ------------ */}
        <div className={changeModalClass} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalValue;