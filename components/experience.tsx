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
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Smarter.codes",
    location: "Remote",
    period: "Feb 2025 - Present",
    description:
      "Leading DevOps initiatives for cloud-native applications, implementing CI/CD pipelines, and managing Kubernetes clusters across multiple environments.",
    achievements: [
      "Led full-stack development and DevOps for a salon app, including Dockerization, CI/CD, and payment gateway integration (HyperPay, Amazon Pay).",
      "Architected and deployed a cross-tenant SaaS application on Azure Marketplace using Azure Lighthouse and secure VPN networking.",
      "Built scalable infrastructure with custom portals, managed app provisioning, and SaaS fulfillment automation.",
    ],
    technologies: [
      "Kubernetes",
      "Docker",
      "AWS",
      "Terraform",
      "Jenkins",
      "Prometheus",
    ],
  },
  {
    title: "Devops Engineer",
    company: "Tech Aura PVT. LTD",
    location: "Noida, India",
    period: "Nov 2023 - Feb 2025",
    description:
      "Developed and deployed machine learning models for predictive analytics and computer vision applications, focusing on scalable ML infrastructure.",
    achievements: [
      "Designed and maintained advanced CI/CD pipelines using tools like GitHub Actions, Jenkins, and ArgoCD to automate testing, container builds, security scans, and multi-environment deployments.",
      "Architected and managed production-grade Kubernetes clusters with autoscaling, secrets management, RBAC policies, and Helm-based deployments across staging and production.",
      "Built robust data and ETL pipelines for ingesting structured and unstructured data from APIs, databases, and third-party services; transformed and loaded data into PostgreSQL and cloud-native warehouses.",
      "Led AI pipeline integrations, streamlining model versioning, packaging, and deployment into containerized environments using MLflow and Docker.",
    ],
    technologies: [
      "Python",
      "Linux",
      "PyTorch",
      "MLflow",
      "Docker",
      "AWS SageMaker",
    ],
  },
  {
    title: "Cloud Intern",
    company: "Wipro",
    location: "Remote, India",
    period: "2021 - 2022",
    description:
      "Designed and implemented cloud infrastructure solutions, focusing on scalability, security, and cost optimization across AWS and Azure platforms.",
    achievements: [
      "Architected multi-region cloud infrastructure serving 100K+ usersBuilt and deployed cloud-native applications on AWS (EC2, S3, IAM) and Azure (App Services, Resource Manager), with infrastructure defined via Terraform and ARM templates.",
      "Engineered CI/CD pipelines with Jenkins and GitHub Actions, integrating automated testing, artifact management, and environment-specific deployments — reducing release time by 30%.",
      "Configured Azure DevOps pipelines for multi-stage deployments, incorporating secrets management, deployment gates, and approval workflows.",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Terraform",
      "CloudFormation",
      "Lambda",
      "API Gateway",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles in the tech industry, building
            expertise across multiple domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } ml-8 md:ml-0`}
                >
                  <Card className="glass hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <MapPin className="w-4 h-4 ml-2" />
                        <span>{exp.location}</span>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
