

const Filters = ({ setValue }: any) => {
  return (
    <div className="p-5">
      <div>
        <p>Most Popular</p>
        <input type="checkbox" value="MostPopular" onChange={(e) => setValue(e.target.value)} />
        <p>All</p>
        <input type="checkbox" value="all" onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
};

export default Filters;
