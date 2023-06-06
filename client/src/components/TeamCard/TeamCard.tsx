import { TeamWithEmployeesManager } from "../../../lib/types";
import TeamRow from "../TeamRow/TeamRow";
import "./TeamCard.css";

interface Props {
  team: TeamWithEmployeesManager;
}

const TeamCard = ({ team }: Props) => {
  return (
    <div className="team-card-general drop-shadow-md">
      <div className="flex flex-row justify-start w-full">
        <h2 className="font-bold text-[1.2rem]">{team.team.name}</h2>
      </div>
      <div className="flex flex-col justify-start w-full overflow-y-scroll team-card-employees">
        <TeamRow user={team.manager} />
        {team.employees.map((user, index) => (
          <TeamRow user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
