
import React from 'react';
import './Help.css';
import {Link} from "react-router-dom";


const Help = () => {
    return (
        <div className="help-container">
            <h1 className="help-title">帮助页面</h1>
            <button className="return-home">
                <Link to='/'><b>返回首页</b></Link>
                <br/>
                <br/>
                <Link to='/homepage'><b>Homepage</b></Link>
            </button>
            <div className="manual-section">
                <h2 className="section-title">使用手册</h2>
                <p className="manual-content">
                    本手册将指导您如何有效使用本应用。以下是一些主要功能：
                </p>
                <ul className="manual-list">
                    <li>功能1：创建和删除项目。</li>
                    <li>功能2：在对应项目下创建任务。</li>
                    <li>功能3：在相应任务下添加评论。</li>
                    <li>功能4：在相应任务中添加附件</li>
                </ul>
            </div>
            <div className="tips-section">
                <h2 className="section-title">使用小贴士</h2>
                <p className="tips-content">
                    - 定期检查更新以获取新功能。<br/>
                    - 如有疑问，请联系支持
                    <button><Link to='/contact'><b>制作人</b></Link></button>
                    。
                </p>
            </div>
        </div>
    );
};

export default Help;