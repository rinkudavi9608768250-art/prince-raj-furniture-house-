import React, { useMemo, useState } from "react";
import PackageCard from "../components/PackageCard";
import SearchFilterBar from "../components/SearchFilterBar";
import { packages } from "../data/sampleData";

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("All");

  const filters = ["All", "Adventure", "Luxury", "Nature"];

  const filteredPackages = useMemo(() => {
    return packages.filter((travelPackage) => {
      const matchesSearch = travelPackage.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = filterValue === "All" || travelPackage.category === filterValue;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterValue]);

  return (
    <div className="page">
      <section className="page-header">
        <h1>Packages</h1>
        <p>Flexible packages built for families, solo travelers, and luxury seekers.</p>
      </section>
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        filterOptions={filters}
      />
      <div className="grid">
        {filteredPackages.map((travelPackage) => (
          <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
