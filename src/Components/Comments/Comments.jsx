import React, { useState } from 'react';
// import { Box, Button, Checkbox, FormControlLabel, FormGroup, Input, Modal, Snackbar, Stack, Switch, TextareaAutosize } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import './scss/Comments.scss'
import { toast, ToastContainer } from 'react-toastify';
import AxiosCall from '../AxiosCall/AxiosCall';
import Rodal from 'rodal';
const Comments = ({ content, visible, closeCommentModal }) => {
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [telOrEmail, setTelOrEmail] = useState("");
    const [body, setBody] = useState("");
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const sendComment = (e) => {
        e.preventDefault()
        let obj = {
            firstname,
            lastname,
            telOrEmail,
            body
        }
        AxiosCall("post", `/comment/${contentId}`, obj).then(data => {
            setFirstname("")
            setLastname("")
            setBody("")
            setTelOrEmail("")
            toast.success("Komentariya jo'natildi!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })

    };
    const { contentId } = content
    return (
        <Rodal visible={visible} onClose={closeCommentModal} height={450} width={600}>
            <div className="comment-box">
                <ToastContainer />
                <div className="header">
                    <h5>Izoh qoldirish</h5>
                </div>
                <div className="body">
                    <form onSubmit={sendComment}>
                        <div className="inputs">
                            <input required placeholder='Ism' onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                            <input required placeholder='Familya' onChange={(e) => setLastname(e.target.value)} value={lastname} />
                            <input required placeholder='Elektron pochta yoki telefon raqam' onChange={(e) => setTelOrEmail(e.target.value)} value={telOrEmail} />
                            <textarea required placeholder='Izoh' minRows={3} maxRows={6} onChange={(e) => setBody(e.target.value)} value={body} />
                        </div>
                        <div className="btns">
                            <button type='submit'>Jo'natish</button>
                        </div>
                    </form>
                </div>
            </div>

        </Rodal>

    );
}

export default Comments;
