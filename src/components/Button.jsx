import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transition-colors ${onClick} ${href} ${px} ${className}`;
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return renderButton();
};

export default Button;
