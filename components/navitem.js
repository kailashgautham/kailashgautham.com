import utilStyles from '../styles/utils.module.css';

const NavItem = ({ text, href, active, setUrl }) => {
  return (
    <span className={utilStyles.spanItem}
      onClick={() => {
        setUrl(href);
      }}>
      {text}
    </span>
  );
};

export default NavItem;