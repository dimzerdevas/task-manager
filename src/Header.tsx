import { NavLink } from "react-router";

export const Header = (): JSX.Element => {
    return (
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/task-manager" end>
                Task Manager
            </NavLink>
        </nav>
    );
}