import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/projects.json";
import CardDetail from "../Component/Card/CardDetail";
import Card from "../Component/Card/Card"; // Zorg dat je deze hebt geïmporteerd

const Detailproject = () => {
  const { id } = useParams();
  const project = data.projects.find((item) => String(item.id) === id);

  if (!project) {
    return (
      <main className="main notfondmain">
        <p className="error-message">❌ Project niet gevonden.</p>
      </main>
    );
  }

  // Vind maximaal 3 andere projecten met hetzelfde jaar, zonder het huidige project
  const relatedProjects = data.projects
    .filter((item) => item.year === project.year && String(item.id) !== id)
    .slice(0, 3);

  return (
    <main className="main">
      <CardDetail data={project} />

      {relatedProjects.length > 0 && (
        <section className="related-projects">
          <h2>Andere projecten uit {project.year}</h2>
          <div className="Cards">
            {relatedProjects.map((proj) => (
              <Card key={proj.id} data={proj} hiddenButton={false} />
            ))}
          </div>
        </section>
      )}

    </main>
  );
};

export { Detailproject };