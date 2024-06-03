import NavItem from "./NavItem";
import{selecMenu} from "../context/Actions";

const Nav = ({items, dispatch }) => {
    const onClick =(label)=>{
        const action = selecMenu(label);
        dispatch(action);
    }
    return (
        <div>
            <ul>
                {
                    items.map(item => (
                        <NavItem
                            key={item.key}
                            item={item}
                            onClick={onClick}
                        />
                    ))
                }
            </ul>
            <hr></hr>
        </div>
    )
}
export default Nav;