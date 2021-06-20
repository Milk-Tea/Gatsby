import * as React from 'react'
import {Link} from 'gatsby'
import './pager.scss'

const Pager = ({countPages, currentPage, root}) => {

    const bothWays = 2
    const leftRange = range(bothWays, currentPage - bothWays).filter(val => val > 0)
    const rightRange = range(bothWays, currentPage + 1).filter(val => val < countPages - 1)
    const leftDots = currentPage - bothWays > 1
    const rightDots = currentPage +  bothWays < countPages - 2
    const rootPath = `/${root}/`

    function range(size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }
    
    if(countPages === 1) {
        return null
    }

    return  (
        <div className="pager-container">
            {currentPage !== 0 && <Link to={rootPath}><div className="box">1</div></Link>}
            {leftDots && <span className="dots">...</span>}
            {leftRange.map(page => <Link to={`${rootPath}${page}`}><div className="box">{page + 1}</div></Link>)}
            <Link to={`${rootPath}${currentPage}`}><div className="box current">{currentPage + 1}</div></Link>
            {rightRange.map(page => <Link to={`${rootPath}${page}`}><div className="box">{page + 1}</div></Link>)}
            {rightDots && <span className="dots">...</span>}
            {currentPage !== countPages - 1 && <Link to={`${rootPath}${countPages - 1}`}><div className="box">{countPages}</div></Link>}
            </div>
    )
}

export default Pager