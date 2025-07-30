"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    title:
      "Architecting and Deploying a Scalable AI SaaS Solution with Azure Multi-Tenant Infrastructure",
    description:
      "Designed and deployed a multi-tenant AI-based medical document generator as a SaaS solution on Azure Marketplace. Engineered full architecture, ARM templates, cross-tenant managed app deployment, secure networking (VNet peering, VPN), and automated RBAC configuration via Microsoft Graph and Azure APIs.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Azure",
      "Arm Template",
      "Azure SaaS",
      "Azure Lighthouse",
      "DNS Zones",
    ],
    github: "https://github.com/ParasRajput810",
    demo: "#",
    featured: true,
  },
  {
    title:
      "End-to-End DevOps Pipeline: GitHub Actions to EKS with Helm, Docker & Security Automation",
    description:
      "Built a CI/CD pipeline using GitHub Actions, Docker, and Helm to deploy a containerized web app on AWS EKS with auto-scaling, integrated security scans, and zero-downtime rollouts.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Kubernetes", "Docker", "Helm", "AWS EKS"],
    github: "https://github.com/ParasRajput810",
    demo: "#",
    featured: true,
  },
  {
    title: "Multi-Cloud Infrastructure",
    description:
      "Cross-cloud infrastructure deployment tool supporting AWS, Azure, and GCP with unified monitoring and cost optimization.",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Terraform", "AWS", "Azure", "GCP", "Python", "Go"],
    github: "https://github.com/ParasRajput810",
    demo: "#",
    featured: false,
  },
  {
    title: "Microservices Monitoring Dashboard",
    description:
      "Comprehensive monitoring solution for microservices architecture with custom metrics, alerting, and performance analytics.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "Prometheus", "Grafana", "Docker"],
    github: "https://github.com/ParasRajput810",
    demo: "#",
    featured: false,
  },
  {
    title: "Serverless Data Pipeline",
    description:
      "Event-driven data processing pipeline using AWS Lambda, SQS, and DynamoDB for real-time analytics and reporting.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["AWS Lambda", "SQS", "DynamoDB", "Python", "CloudWatch"],
    github: "https://github.com/ParasRajput810",
    demo: "#",
    featured: false,
  },
  {
    title: "Container Security Scanner",
    description:
      "Automated security scanning tool for Docker containers with vulnerability assessment and compliance reporting.",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Go", "Docker", "Kubernetes", "Security", "CI/CD"],
    github: "https://github.com/ParasRajput810",
    demo: "#",
    featured: false,
  },
];

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in DevOps, AI, Cloud Computing, and
            Backend Development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 glass">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Notable Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 glass">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
