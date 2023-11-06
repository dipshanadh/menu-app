const Title = props => {
  const { text } = props;

  return (
    <div className="title">
      <h2>{text || "Default title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;