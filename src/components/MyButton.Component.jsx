const MyButton = () => {
  const user = {
    name: "Hedy Lamarr",
  };
  return (
    <>
      <h2>
        {user.name}
      </h2>
      <p className="myClass">I'm a button!</p>
    </>
  );
};

export default MyButton;
