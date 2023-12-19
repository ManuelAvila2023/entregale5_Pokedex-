import BarProgresStat from "./BarProgresStat";

const StatBarList = ({ stats }) => {
  return (
    <section>
      <div className="flex items-center">
  <span className="px-2">Stats</span>
  <hr className="flex-grow border-t-2" />
</div>
      <section>
        {stats?.map((stat) => (
          <BarProgresStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};

export default StatBarList;
