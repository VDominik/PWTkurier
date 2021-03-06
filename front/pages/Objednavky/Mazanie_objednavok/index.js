import {Button} from "react-bootstrap";
import Link from 'next/link'
import React from "react";
import axios from "axios";

const StudentTableRow = (props) => {
    const {id, name, email, vaha} = props.obj;

    const deleteStudent = () => {
        axios
            .delete(
                "http://localhost:8000/api/Vymazanie/" + id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Vaša objednávka bola úspešne vymazaná!");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Niekde nastala chyba!"));
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <Link className="edit-link"
                      to={"/edit-student/" + _id}>
                    Edit
                </Link>
                <Button onClick={deleteStudent}
                        size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default StudentTableRow;