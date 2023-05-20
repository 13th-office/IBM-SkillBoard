import "./Loading.css";

interface Props {
  mainColor: boolean;
}

const Loading = ({ mainColor }: Props) => {
  return (
    <div className="lds-facebook">
      <div className={mainColor ? "bg-white" : "bg-[#001D6C]"}></div>
      <div className={mainColor ? "bg-white" : "bg-[#001D6C]"}></div>
      <div className={mainColor ? "bg-white" : "bg-[#001D6C]"}></div>
    </div>
  );
};

export default Loading;
