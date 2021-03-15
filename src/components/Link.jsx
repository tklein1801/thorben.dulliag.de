const Link = (props) => {
  const { text, target } = props;
  return (
    <a href={target} className="redirect-btn">
      {text}
    </a>
  );
};

export default Link;
