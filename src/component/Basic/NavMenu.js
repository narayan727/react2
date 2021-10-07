import React from 'react'

const NavMenu = (props) => {
    // const filterItem=()=>{
        
    // }
    return (
        <>
          <nav className="navbar">
                <div className="btn-group">
                    {props.menuData.map((curElement)=>{
                        //console.log(curElement)
                        return(
                            <>
                                <button className="btn-group__item" onClick={()=>props.onClick(curElement)}>{curElement}</button>
                            </>); })}
                    {/* <button className="btn-group__item" onClick={()=>''}>All</button> */}

                </div>
            </nav>  
        </>
    )
}

export default NavMenu
