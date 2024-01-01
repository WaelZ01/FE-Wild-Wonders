import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import dayjs
import dayjs from "dayjs";

// import relativeTime plugin
import relativeTime from "dayjs/plugin/relativeTime"; 

// extend dayjs with relativeTime plugin
dayjs.extend(relativeTime);

export default function User(props) {
  return (
    <>
    <td>{props.index}</td>
    <td>{props.firstName} {props.lastName}</td>
    <td>{props.emailAddress}</td>
    <td>{props.phoneNumber}</td>
    <td>{props.userType == 1 ? "Administrator" : props.userType == 2 ? "Scientist" : props.userType == 3 ? "Contributor" : "" }</td>
    <td>{dayjs(props.createdAt).format('YYYY-MM-DD')}</td>
    <td>{dayjs(props.updatedAt).fromNow(true)} ago</td>
    <td>
        <button type="button" onClick={() => props.editView(props._id)} className="btn btn-sm btn-warning"><FontAwesomeIcon icon="pencil" /></button> <button type="button" onClick={() => props.deleteUser(props._id)} className="btn btn-sm btn-danger" disabled><FontAwesomeIcon icon="trash"/></button>
    </td>
    </>
  )
}