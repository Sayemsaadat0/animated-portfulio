import "./Sidebar.scss"
import Links from "./Togglebutton/Links";
import Toggle from "./Togglebutton/Toggle";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="bg">
                Links
            </div>
            <Toggle></Toggle>
            <Links></Links>
        </div>
    );
};

export default Sidebar;