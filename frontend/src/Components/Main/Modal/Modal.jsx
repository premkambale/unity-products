import React from 'react'
import './Modal.css'
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";
import Lottie from "lottie-react";
import Warning from './../Assets/Animations/Warning.json'
import Success from './../Assets/Animations/Success.json'
import Delete from './../Assets/Animations/Delete.json'
import ErrorCode from './../Assets/Animations/ErrorCode.json'

const Modal = (props) => {
  const customStyles = {
    content: {
      width:"370px",
      height:"260px",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: "10px",
      overflow :'hidden'
    },
  };
  const style = {
    width: "30%"
  };
  return (
    <ReactModal ariaHideApp={false}
    isOpen={props.isOpen}
    contentLabel="Minimal Modal Example"
    className={props.class}
    overlayClassName="Overlay"
    onRequestClose={props.onRequestClose}
    style={customStyles}
  >
    <button  type="button" onClick={props.onRequestClose} className="closeIcon">
      <AiOutlineClose />
    </button>
    <div className="MsgDiv">
      {props.successMsg == true ? <Lottie animationData={Success} style={style} /> : props.wrongMsg == true ? <Lottie animationData={Warning} style={style} /> : props.deleteMsg == true ? <Lottie animationData={Delete} style={style} /> : <></>}
      <span style={{textAlign: 'center'}}>{props.errorMsg}</span>
      <button onClick={props?.okBtnFunCondition? props.modelOkBtnFun: props.onRequestClose} className="ModalBtn"> Ok </button>
    </div>
  </ReactModal>
  )
}
export default Modal;