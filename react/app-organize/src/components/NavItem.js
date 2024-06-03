const NavItem = ({item, onClick}) => {
    const{key,label} = item;
    return (   
        <li >
            <button onClick={()=>onClick(key)}>
                {label}
            </button>
        </li>
    )
};
export default NavItem;