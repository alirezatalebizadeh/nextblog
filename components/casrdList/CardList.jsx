import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

export default function CardList() {
  return (
    <div className="col-span-5">
      <h3 class="mb-[30px] md:mb-[50px] font-bold ">Recent Posts </h3>
      <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}
