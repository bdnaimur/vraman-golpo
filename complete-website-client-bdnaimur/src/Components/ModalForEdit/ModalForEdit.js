import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const ModalForEdit = ({ modalIsOpen, closeModal, orders, onSubmit, editItem }) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div className="container">
            <div className="row">
                <div className="ol-md-12">
                    {/* <button onClick={openModal}>Open Modal</button> */}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h3 className="text-secondary">Edit the Below</h3>
                        <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" ref={register({ required: true })} defaultValue={editItem.name} name="name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="price">Price</label>
                                <input type="text" ref={register({ required: true })} defaultValue={editItem.price} name="price" className="form-control" />
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="details">Details</label>
                                <textarea type="text" ref={register({ required: true })} defaultValue={editItem.details} name="details" className="form-control" />
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </div>
                            {console.log(editItem.details)}
                            <br/>
                            {editItem.day &&
                                <div className="form-group">
                                    <label for="ay">Number of Day</label>
                                    <input type="text" ref={register({ required: true })} defaultValue={editItem.day} name="day" className="form-control" />
                                    {errors.phone && <span className="text-danger">This field is required</span>}
                                </div>
                            }
                            {editItem.day && <br />}

                            {editItem.night &&
                                <div className="form-group">
                                    <label for="night">Number of Night</label>
                                    <input type="text" ref={register({ required: true })} defaultValue={editItem.night} name="night" className="form-control" />
                                    {errors.phone && <span className="text-danger">This field is required</span>}
                                </div>
                            }
                            {editItem.night && <br />}

                            <div className="form-group text-right d-flex">
                                <button type="submit" className="btn btn-info me-5">Send</button>
                                <button className="btn btn-primary" onClick={closeModal}>close</button>
                            </div>
                        </form>

                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ModalForEdit;