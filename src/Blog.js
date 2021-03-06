import React from "react";
import "./Blog.css";
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import Blog3 from './img/blog-03.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Trending Gists</h1>
        <p className="heading p__color">
          Technology is reshaping the world,
        </p>
        <p className="heading p__color">
        Building the future with tech, gear, and software
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Ecommerce</h5>
                         <h4 className="project__text">Online Shopping Is Reshaping Real-World Cities</h4>
                         <a href="https://www.wired.com/story/dark-stores-ecommerce-cities-urban-planning/" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Business</h5>
                         <h4 className="project__text">WordPress Hosting by Web4Africa</h4>
                         <a href="https://tech.africa/wordpress-hosting-advantages/" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Graphic Designs</h5>
                         <h4 className="project__text">Going from beginner to Pro</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
          
      </div>
    </div>
  );
}

export default Blog;
