import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const data = [
        { id: 1, Author: "RealL" , Date: "2024.8.10" , Contact: "BMLL9597@outlook.com" },
    ];

    return (
        <div className="info-table">
            <button className="return-home" >
                <Link to='/'><b>返回首页</b></Link>
            </button>
            <h2>Contact</h2>
            <table>
                <thead>
                <tr>
                    <th>制作人</th>
                    <th>日期</th>
                    <th>联系方式</th>
                </tr>
                </thead>
                <tbody>
                {data.map(person => (
                    <tr key={person.id}>
                        <td>{person.Author}</td>
                        <td>{person.Date}</td>
                        <td>{person.Contact}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contact;