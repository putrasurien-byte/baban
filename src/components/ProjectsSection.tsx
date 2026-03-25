import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'E-commerce adalah semua aktivitas jual beli yang dilakukan secara online melalui internet, mencakup transaksi produk fisik dan digital..',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Learning Management System (LMS) adalah perangkat lunak yang dirancang untuk mengelola, mendistribusikan, dan melacak materi serta aktivitas pembelajaran secara online..',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: '📚',
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Sosial media adalah platform digital yang memungkinkan pengguna untuk berinteraksi, berbagi konten, dan berkomunikasi secara online tanpa batasan ruang dan waktu..',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    image: '📊',
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Content creator adalah individu yang menciptakan dan membagikan konten digital, baik untuk tujuan edukasi maupun hiburan, melalui berbagai platform seperti media sosial, blog, dan video..',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: '🤖',
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'alat dan teknologi yang memanfaatkan kecerdasan buatan untuk menghasilkan berbagai jenis konten.',
    tags: ['Premiere Pro', 'After Effects', 'YouTube'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Coding adalah proses menulis instruksi dalam bentuk baris kode yang dapat dimengerti oleh komputer untuk menjalankan suatu tugas tertentu..',
    tags: ['Instagram', 'TikTok', 'YouTube Shorts'],
    image: '💡',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects &amp; Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-6xl">{project.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        Content
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.youtube && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.youtube}>
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
