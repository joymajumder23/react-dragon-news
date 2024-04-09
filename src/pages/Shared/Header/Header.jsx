import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img src="../../../assets/logo.png" alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;