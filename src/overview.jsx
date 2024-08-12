// import IMG from "./photo.jpg";
// import React from "react";
// import './bootstrap-combined.min.css';
// import {Link} from "react-router-dom";
// import IMG_1 from "./1.png";
// import IMG_2 from "./2.png";
// import IMG_3 from "./3.png";
// import IMG_4 from "./4.png";
// import IMG_5 from "./5.png";
// import IMG_6 from "./6.png";
// import IMG_7 from "./7.png";
//
//
// function Overview(){
//     return (
//         <>
//         <button className="return-home">
//             <Link to='/'><b>返回首页</b></Link>
//         </button>
//         <div className="carousel slide" id="carousel-813470">
//             <ol className="carousel-indicators">
//                 <li data-slide-to="0" data-target="#carousel-813470" className="active"></li>
//                 <li data-slide-to="1" data-target="#carousel-813470"></li>
//                 <li data-slide-to="2" data-target="#carousel-813470"></li>
//                 <li data-slide-to="3" data-target="#carousel-813470"></li>
//             </ol>
//             <div className="carousel-inner">
//                 <div className="item active">
//                     <img
//                         className="img-fluid"
//                         src={IMG_1}
//                         style={{width: '1600px', height: '500px'}}
//                     />
//                     <div className="carousel-caption">
//                         <h4>创建任务</h4>
//                         <p>点击按钮即可创建任务</p>
//                     </div>
//                 </div>
//                 <div className="item">
//                     <img
//                         className="img-fluid"
//                         src={IMG_2}
//                         style={{width: '1600px', height: '500px'}}
//                     />
//                     <div className="carousel-caption">
//                         <h4>编辑任务</h4>
//                         <p>点击按钮即可编辑任务</p>
//                     </div>
//                 </div>
//                 <div className="item">
//                     <img
//                         className="img-fluid"
//                         src={IMG_3}
//                         style={{width: '1600px', height: '500px'}}
//                     />
//                     <div className="carousel-caption">
//                         <h4>删除任务</h4>
//                         <p>点击按钮即可删除任务</p>
//                     </div>
//                 </div>
//                 <div className="item">
//                     <img
//                         className="img-fluid"
//                         src={IMG_4}
//                         style={{width: '1600px', height: '500px'}}
//                     />
//                     <div className="carousel-caption">
//                         <h4>创建任务</h4>
//                         <p>点击按钮即可创建任务</p>
//                     </div>
//                 </div>
//             </div>
//             <a data-slide="prev" href="#carousel-813470" className="left carousel-control">‹</a>
//             <a data-slide="next" href="#carousel-813470" className="right carousel-control">›</a>
//         </div>
//         </>
//     )
// }
//
// export default Overview;

import IMG from "./photo.jpg";
import React from "react";
import './bootstrap-combined.min.css';
import { Link } from "react-router-dom";
import IMG_1 from "./1.png";
import IMG_2 from "./2.png";
import IMG_3 from "./3.png";
import IMG_4 from "./4.png";
import IMG_5 from "./5.png";
import IMG_6 from "./6.png";
import IMG_7 from "./7.png";

const carouselItems = [
    { img: IMG_1, title: "帮助页面", description: "可查看该应用的基本功能" },
    { img: IMG_2, title: "注册页面", description: "输入个人信息，请确保用户名输入与后续操作一致" },
    { img: IMG_3, title: "登陆页面", description: "与注册页面信息保持一致" },
    { img: IMG_4, title: "创建项目", description: "请输入用户名作为项目名称" },
    { img: IMG_5, title: "项目页面", description: "可通过输入不同用户名查看他人项目"},
    { img: IMG_6, title: "创建任务", description: "请输入用户名和项目名称作为任务名称"},
    { img: IMG_7, title: "添加任务项", description: "在文本框输入任务内容"},


];

function Overview() {
    return (
        <>
            <button className="return-home">
                <Link to='/'><b>返回首页</b></Link>
            </button>
            <div className="carousel slide" id="carousel-813470">
                <ol className="carousel-indicators">
                    {carouselItems.map((_, index) => (
                        <li key={index} data-slide-to={index} data-target="#carousel-813470" className={index === 0 ? "active" : ""}></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {carouselItems.map((item, index) => (
                        <div key={index} className={`item ${index === 0 ? "active" : ""}`}>
                            <img
                                className="img-fluid"
                                src={item.img}
                                style={{ width: '1600px', height: '500px' }}
                            />
                            <div className="carousel-caption">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a data-slide="prev" href="#carousel-813470" className="left carousel-control">‹</a>
                <a data-slide="next" href="#carousel-813470" className="right carousel-control">›</a>
            </div>
        </>
    );
}

export default Overview;