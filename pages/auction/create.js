import React from "react";
import Header from "../../components/Header";

const create = () => {
  return (
    <div>
      <Header title="CREATE A NEW AUCTION" />
      <form>
        <input type="text" placeholder="Auction Name" name="auction_name" />
        <input type="text" placeholder="VENUE" name="venue" />
      </form>
    </div>
  );
};

export default create;
