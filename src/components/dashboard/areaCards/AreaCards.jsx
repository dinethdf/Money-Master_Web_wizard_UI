import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Total Income",
          value: "$20.4K",
          text: "For this Month",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "red"]}
        percentFillValue={40}
        cardInfo={{
          title: "Total Expenses",
          value: "$14.2K",
          text: "Available to payout",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "gray"]}
        percentFillValue={40}
        cardInfo={{
          title: "This Month Target Saving",
          value: "$2.2K",
          text: "58%",
        }}
      />
    </section>
  );
};

export default AreaCards;
