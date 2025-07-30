'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Docker and Kubernetes',
    description: 'A comprehensive guide to containerizing applications and orchestrating them with Kubernetes for production environments.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'Microservices'],
    slug: 'scalable-microservices-docker-kubernetes'
  },
  {
    id: 2,
    title: 'Implementing CI/CD Pipelines with GitHub Actions',
    description: 'Learn how to automate your deployment process using GitHub Actions for continuous integration and deployment.',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
    slug: 'cicd-github-actions'
  },
  {
    id: 3,
    title: 'Machine Learning Model Deployment on AWS',
    description: 'Step-by-step guide to deploying ML models using AWS SageMaker and creating scalable inference endpoints.',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['AI/ML', 'AWS', 'SageMaker', 'Cloud'],
    slug: 'ml-deployment-aws'
  },
  {
    id: 4,
    title: 'Infrastructure as Code with Terraform',
    description: 'Master infrastructure automation using Terraform to manage cloud resources efficiently and consistently.',
    date: '2023-12-28',
    readTime: '7 min read',
    tags: ['IaC', 'Terraform', 'Cloud', 'DevOps'],
    slug: 'infrastructure-as-code-terraform'
  },
  {
    id: 5,
    title: 'Monitoring and Observability in Distributed Systems',
    description: 'Implementing comprehensive monitoring solutions using Prometheus, Grafana, and distributed tracing.',
    date: '2023-12-20',
    readTime: '9 min read',
    tags: ['Monitoring', 'Observability', 'Prometheus', 'Grafana'],
    slug: 'monitoring-distributed-systems'
  },
  {
    id: 6,
    title: 'Serverless Architecture with AWS Lambda',
    description: 'Building cost-effective and scalable applications using serverless computing principles and AWS Lambda.',
    date: '2023-12-15',
    readTime: '5 min read',
    tags: ['Serverless', 'AWS Lambda', 'Cloud', 'Architecture'],
    slug: 'serverless-aws-lambda'
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Tech Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on DevOps, AI, Cloud Computing, and Backend Development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer glass">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}