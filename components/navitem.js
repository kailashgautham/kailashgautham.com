const NavItem = ({ text, href, setUrl }) => {
  return (
    <a
      style={{cursor: "pointer"}}
      onClick={() => {
        setUrl(href);
      }}>
      {text}
    </a>
  );
};

export default NavItem;