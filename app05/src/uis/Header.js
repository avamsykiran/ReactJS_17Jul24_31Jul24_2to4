
const Header = ({ appName }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"> {appName ?? "UnTitled"} </a>
        </div>
    </nav>
);

export default Header;