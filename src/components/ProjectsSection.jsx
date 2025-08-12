import { Badge, Button, Card } from "@radix-ui/themes";
import { FaArrowTrendUp, FaLink, FaClock, FaUser } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const ProjectsSection = ({ projects }) => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-tr from-blue-100 to-slate-100 min-h-screenpy-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 pb-2 text-center gradient-text">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} size="3">
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="lg:flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="mb-2 sm:mb-0">{project.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <FaClock className="icon-blue" />
                      {project.period}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge>{project.role}</Badge>
                  </div>

                  <p className="mb-4 ">{project.summary}</p>

                  <div className="mb-6">
                    <h4 className="mb-2">주요 성과</h4>
                    <ul className="space-y-1">
                      {project.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-sm pl-4 relative">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.metrics && (
                    <div className="mb-6">
                      <h4 className="mb-3">성과 지표</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {project.metrics.users && (
                          <div className="flex items-center gap-2">
                            <FaUser className="icon-blue" />
                            <span className="text-sm">
                              {project.metrics.users.toLocaleString()} users
                            </span>
                          </div>
                        )}
                        {project.metrics.teams && (
                          <div className="flex items-center gap-2">
                            <FaUser className="icon-blue" />
                            <span className="text-sm">
                              {project.metrics.teams} teams
                            </span>
                          </div>
                        )}
                        {project.metrics.monthly_active_users && (
                          <div className="flex items-center gap-2">
                            <FaArrowTrendUp className="icon-blue" />
                            <span className="text-sm">
                              {project.metrics.monthly_active_users} MAU
                            </span>
                          </div>
                        )}
                        {project.metrics.peak_rps && (
                          <div className="flex items-center gap-2">
                            <FaArrowTrendUp className="icon-blue" />
                            <span className="text-sm">
                              {project.metrics.peak_rps} RPS
                            </span>
                          </div>
                        )}
                        {project.metrics.p95_latency_ms && (
                          <div className="flex items-center gap-2">
                            <FaClock className="icon-blue" />
                            <span className="text-sm">
                              p95: {project.metrics.p95_latency_ms}ms
                            </span>
                          </div>
                        )}
                        {project.metrics.availability && (
                          <div className="flex items-center gap-2">
                            <FaArrowTrendUp className="icon-blue" />
                            <span className="text-sm">
                              {project.metrics.availability} uptime
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {Object.entries(project.stack).map(([category, techs]) =>
                      techs.map((tech, techIndex) => (
                        <Badge
                          key={`${category}-${techIndex}`}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.links.repo && (
                      <Button asChild variant="outline" size="3">
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="w-5 h-5" />
                          Repository
                        </a>
                      </Button>
                    )}
                    {project.links.repo_backend && (
                      <Button asChild variant="outline" size="3">
                        <a
                          href={project.links.repo_backend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="w-5 h-5" />
                          Backend
                        </a>
                      </Button>
                    )}
                    {project.links.repo_frontend && (
                      <Button asChild variant="outline" size="3">
                        <a
                          href={project.links.repo_frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="w-5 h-5" />
                          Frontend
                        </a>
                      </Button>
                    )}
                    {project.links.demo_url && (
                      <Button asChild variant="outline" size="3">
                        <a
                          href={project.links.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink className="w-5 h-5" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
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
