interface Props {
  color: boolean;
}

const Logo = ({ color }: Props) => {
  // true = white
  // false = black

  if (color) {
    return <img src="../../assets/IBMSkillBoard_Logo.svg"></img>;
  } else {
    return <img src="../../assets/IBMSkillBoard_Logo_black.svg"></img>;
  }
};

export default Logo;
