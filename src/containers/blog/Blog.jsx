import React from 'react'
import './Blog.css'
import {
    blog01,
    blog02,
    blog03,
    blog04,
    blog05
} from '../../asset/export';
;

function Blog() {
    return (
        <div className="Blog">
            <p className="Blog__gradient-text gradient__text">A lot is happening,
                We are blogging about it.</p>
            <div className="Blog__group-img">
                <div className="Blog__group-img--left">
                    <div>
                        <img src={blog01} alt="" />
                    </div>
                    <div>
                        <p>Sep 26, 2021</p>
                        <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                        <p>Read Full Article</p>
                    </div>
                </div>
                <div className="Blog__group-img--right">
                    <div className="Blog__group-img--right_item">
                        <div>
                            <img src={blog02} alt="" />
                        </div>
                        <div>
                            <p>Sep 26, 2021</p>
                            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                    <div className="Blog__group-img--right_item">
                        <div>
                            <img src={blog03} alt="" />
                        </div>
                        <div>
                            <p>Sep 26, 2021</p>
                            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                    <div className="Blog__group-img--right_item">
                        <div>
                            <img src={blog04} alt="" />
                        </div>
                        <div>
                            <p>Sep 26, 2021</p>
                            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                    <div className="Blog__group-img--right_item">
                        <div>
                            <img src={blog05} alt="" />
                        </div>
                        <div>
                            <p>Sep 26, 2021</p>
                            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
