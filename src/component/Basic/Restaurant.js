import React,{useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import NavMenu from './NavMenu'

const uniqueList=[...new Set(Menu.map((curele)=>{
    return curele.category;
})),"All"];
// console.log(uniqueList);
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)
    //console.log(menuData);
    const filterItem=(category)=>{
        if(category === 'All'){
            setMenuData(Menu);
            return;
        }
        const updateItem=Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updateItem);
    }
    return (
        <>
            <NavMenu  menuData={uniqueList} onClick={(category)=>{ filterItem(category) }}/>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant
