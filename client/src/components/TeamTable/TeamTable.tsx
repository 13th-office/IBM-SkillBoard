import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import { TeamWithEmployeesManager } from "../../../lib/types";

interface Props {
  teams: TeamWithEmployeesManager[];
}

const TeamTable = ({ teams }: Props) => {
  return (
    <div className="flex flex-col justify-start w-full team-card-employees mt-[35px] mb-[35px]">
      {teams.map((team) => (
        <TeamCard team={team} key={team.team.id} />
      ))}
    </div>
  );
};

export default TeamTable;
