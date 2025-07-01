import React, { useEffect, useState } from 'react';
import Card from '../Component/Card/Card';
import projectsData from '../data/projects.json';

const ITEMS_PER_PAGE = 6;

const Projecten = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Alle unieke jaren uit de data halen
  const uniqueYears = [
    "All",
    ...new Set(projectsData.projects.map(project => project.year))
  ];

  // Filter toepassen wanneer jaar of data verandert
  useEffect(() => {
    const filtered =
      selectedYear === "All"
        ? projectsData.projects
        : projectsData.projects.filter(project => project.year === selectedYear);
    setFilteredProjects(filtered);
    setCurrentPage(1); // Reset naar eerste pagina bij filtering
  }, [selectedYear]);

  // Bereken slicing voor paginatie
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  return (
    <div className="main">
      <h1 className="contact--title">Projecten</h1>

      {/* Filter dropdown */}
      <div className="filter-container">
        <label htmlFor="year-filter">Filter op jaar: </label>
        <select
          id="year-filter"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          {uniqueYears.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Kaarten tonen */}
      <div className="Cards">
        {paginatedProjects.map(project => (
          <Card key={project.id} data={project} />
        ))}
      </div>

      {/* Paginatie */}
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { Projecten };
