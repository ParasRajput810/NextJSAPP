'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker & Kubernetes', level: 95 },
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Infrastructure as Code', level: 88 },
      { name: 'Monitoring & Logging', level: 85 },
    ]
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', level: 92 },
      { name: 'Azure', level: 85 },
      { name: 'Google Cloud Platform', level: 80 },
      { name: 'Serverless Architecture', level: 88 },
    ]
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Python & TensorFlow', level: 90 },
      { name: 'MLOps & Model Deployment', level: 85 },
      { name: 'Data Engineering', level: 82 },
      { name: 'Computer Vision & NLP', level: 78 },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js & Express', level: 88 },
      { name: 'Python & FastAPI', level: 92 },
      { name: 'Database Design', level: 85 },
      { name: 'API Development', level: 90 },
    ]
  }
];

export function Skills() {
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3 
                        }}
                        viewport={{ once: true }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}