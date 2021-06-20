import React from 'react'
import { Link } from 'gatsby'

import "./header.scss"
import { useRecoilValue } from 'recoil'
import { blogPostTitleState, blogPostSubTitleState } from '../states'

const Header = () => {
    const blogPostTitle = useRecoilValue (blogPostTitleState) 
    const blogPostSubTitle = useRecoilValue (blogPostSubTitleState) 
    return (
        <div className="header-container">
        <div className = "header">
            <Link to ="/" className = {"header-link-home"}>{blogPostTitle}
                </Link>
                <span className="subtitle">{blogPostSubTitle}</span>
        </div>
        
        </div> 
    )
}

export default Header