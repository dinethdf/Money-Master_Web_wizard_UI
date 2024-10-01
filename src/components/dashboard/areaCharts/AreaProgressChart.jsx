const data = [
  {
    id: 1,
    name: "Housing ",
    percentValues: 40,
  },
  {
    id: 2,
    name: "Transportation ",
    percentValues: 10,
  },
  {
    id: 3,
    name: "Food & Groceries",
    percentValues: 25,
  },
  {
    id: 4,
    name: "Clothing & Personal Care",
    percentValues: 15,
  },
  {
    id: 5,
    name: "Education ",
    percentValues: 10,
  },
];

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Pay Categories</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
