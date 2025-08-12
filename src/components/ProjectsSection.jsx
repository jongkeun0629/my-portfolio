import { Badge, Card } from "@radix-ui/themes";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 pb-2 text-center gradient-text">
          projects
        </h2>

        <div>
          {projects.map((project) => (
            <Card key={project.id}>
              <div>
                <div>
                  <h3>{project.name}</h3>
                  <div>{project.period}</div>
                </div>

                <div>
                  <Badge>{project.role}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
