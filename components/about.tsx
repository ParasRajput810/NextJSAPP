'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Brain, Server, Database, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'DevOps Engineering',
    description: 'Expertise in CI/CD pipelines, infrastructure automation, and deployment strategies'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Building and deploying ML models with focus on scalability and performance'
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Designing resilient, scalable cloud solutions across AWS, Azure, and GCP'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust APIs and microservices with modern technologies'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Building data pipelines and managing large-scale data infrastructure'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Implementing security best practices and ensuring regulatory compliance'
  }
];

const technologies = [
  'Python', 'Node.js', 'Go', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
  'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana',
  'TensorFlow', 'PyTorch', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch'
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I'm a passionate engineer with expertise spanning DevOps, AI, Cloud Computing, and Backend Development. 
            With a strong foundation in modern technologies and best practices, I help organizations build scalable, 
            efficient, and innovative solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 glass">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-4 hover:bg-primary/20 transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}