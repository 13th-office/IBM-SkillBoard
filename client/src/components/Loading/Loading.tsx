import "./Loading.css";

interface Props {
  type: boolean;
  mainColor: boolean;
}

const Loading = ({ type, mainColor }: Props) => {
  if (type) {
    return (
      <div className="lds-facebook">
        <div className={mainColor ? "bg-white" : "bg-[#001D6C]"}></div>
        <div className={mainColor ? "bg-white" : "bg-[#001D6C]"}></div>
        <div className={mainColor ? "bg-white" : "bg-[#001D6C]"}></div>
      </div>
    );
  } else {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
};

export default Loading;
