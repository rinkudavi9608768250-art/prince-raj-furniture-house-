import React, { useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import SearchFilterBar from "../components/SearchFilterBar";
import { destinations } from "../data/sampleData";

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("All");

  const filters = ["All", "Beach", "City", "Island", "Cultural"];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch = destination.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = filterValue === "All" || destination.type === filterValue;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterValue]);

  return (
    <div className="page">
      <section className="page-header">
        <h1>Destinations</h1>
        <p>Discover handpicked destinations for every style of traveler.</p>
      </section>
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        filterOptions={filters}
      />
      <div className="grid">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
