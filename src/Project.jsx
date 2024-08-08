import React, {useEffect} from 'react';
import './bootstrap-combined.min.css'
import IMG from './photo.jpg';


const Project = () => {
        return (
        <div className="container-fluid">
            <div className="row-fluid">
                <div className="span12">
                    <div className="carousel slide" id="carousel-813470">
                                <ol className="carousel-indicators">
                                    <li data-slide-to="0" data-target="#carousel-813470" className="active"></li>
                                    <li data-slide-to="1" data-target="#carousel-813470"></li>
                                    <li data-slide-to="2" data-target="#carousel-813470"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <img
                                            className="img-fluid"
                                            src={IMG}
                                            style={{ width: '1600px', height: '500px' }}
                                        />
                                        <div className="carousel-caption">
                                            <h4>创建任务</h4>
                                            <p>点击按钮即可创建任务</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img
                                            className="img-fluid"

                                            src={IMG}
                                            style={{ width: '1600px', height: '500px' }}
                                        />
                                        <div className="carousel-caption">
                                            <h4>编辑任务</h4>
                                            <p>点击按钮即可编辑任务</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img
                                            className="img-fluid"

                                            src={IMG}
                                            style={{ width: '1600px', height: '500px' }}
                                        />
                                        <div className="carousel-caption">
                                            <h4>删除任务</h4>
                                            <p>点击按钮即可删除任务</p>
                                        </div>
                                    </div>
                                </div>

                                <a data-slide="prev" href="#carousel-813470" className="left carousel-control">‹</a>
                                <a data-slide="next" href="#carousel-813470" className="right carousel-control">›</a>
                                </div>

                                <div className="navbar">
                                    <div className="navbar-inner">
                                        <div className="container-fluid">
                                            <a
                                                data-target=".navbar-responsive-collapse"
                                                data-toggle="collapse"
                                                className="btn btn-navbar">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </a>
                                            <a className="brand">敏捷看板 项目</a>
                                            <div className="nav-collapse collapse navbar-responsive-collapse">
                                                <ul className="nav">
                                                    <li className="active">
                                                        <a href="#">主页</a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a
                                                            data-toggle="dropdown"
                                                            className="dropdown-toggle"
                                                            href="#">项目库<strong className="caret"></strong>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">项目1</a></li>
                                                            <li><a href="#">项目2</a></li>
                                                            <li><a href="#">项目3</a></li>
                                                            <li className="divider"></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <ul className="nav pull-right">
                                                    <li><a href="#">HELP</a></li>
                                                    <li className="divider-vertical"></li>
                                                    <li className="dropdown">
                                                        <a
                                                            data-toggle="dropdown"
                                                            className="dropdown-toggle"
                                                            href="#">下拉菜单<strong className="caret"></strong>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">组长</a></li>
                                                            <li><a href="#">组员1</a></li>
                                                            <li><a href="#">组员2</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#">简介</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        <div className="row-fluid">
                            <div className="span4">
                                <blockquote>
                                    <p>
                                        待办事项
                                    </p>
                                </blockquote>
                            </div>
                            <div className="span4">
                                <blockquote>
                                    <p>
                                        进行中
                                    </p>
                                </blockquote>
                            </div>
                            <div className="span4">
                                <blockquote>
                                    <p>
                                        已完成
                                    </p>
                                </blockquote>
                            </div>
                            <div className="row-fluid">
                                <div className="span12">
                                    <div className="row-fluid">
                                        <div className="span4">
                                            <h3 className="text-center">
                                                To Do
                                            </h3>
                                            <button className="btn btn-block" type="button">创建</button>
                                            <button className="btn btn-block" type="button">删除</button>
                                            <button className="btn btn-block" type="button">移动</button>
                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr className="warning">
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <span className="label">文字标签</span>
                                        </div>
                                        <div className="span4">
                                            <h3 className="text-center">
                                                Doing
                                            </h3>
                                            <button className="btn btn-block" type="button">创建</button>
                                            <button className="btn btn-block" type="button">删除</button>
                                            <button className="btn btn-block" type="button">移动</button>
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                <tr>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr className="success">
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr className="error">
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr className="warning">
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr className="info">
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="span4">
                                            <h3 className="text-center">
                                                Done
                                            </h3>
                                            <button className="btn btn-block" type="button">创建</button>
                                            <button className="btn btn-block" type="button">删除</button>
                                            <button className="btn btn-block" type="button">移动</button>
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                    </th>
                                                </tr>
                                                </thead>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>);
}

export default Project;