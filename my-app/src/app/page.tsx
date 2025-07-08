import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

export default function Portfolio() {
  const projects = [
    {
      title: 'Terminal Talks',
      description:
        'A platform that delivers AI-generated audio lectures for developers, transforming technical documentation into an on-the-go learning experience. The goal is to build the most optimized, voice-powered documentation library for developers',
      link: 'https://github.com/stefanos/terminal-talks',
      demo: 'https://terminal-talks.vercel.app',
      tech: [
        'Next.js',
        'Prisma',
        'TypeScript',
        'Vercel',
        'Tailwind CSS',
        'PostgreSQL',
        'Elevan Labs API',
        'ChatGPT API',
        'Clerk Auth',
        'Stripe',
      ],
      status: 'Production',
      // impact: '10K+ Users',
    },
    {
      title: 'Trading Algorithm Backtester',
      description:
        ' Back In Early 2025, I developed leveraging AI a CVD delta trend based algorithm for an experience trader. However, backtesting the Algoirthym profit margins were critical so we haveh a full stack app',
      link: 'https://github.com/stefanos/ai-code-assistant',
      demo: 'https://marketplace.visualstudio.com/items?itemName=stefanos.ai-assistant',
      tech: ['TypeScript', 'VS Code API', 'OpenAI', 'Node.js', 'Webpack'],
      status: 'Published',
      impact: '50K+ Downloads',
    },
    {
      title: 'Prime Health',
      description:
        'A web application that is designed to help people with health issues navigate their current situation. Offering insights on holistic health alternatives, recommendations to Doctors & things to research',
      link: 'https://github.com/stefanos/prime-health',
      demo: 'https://prime-health.vercel.app',
      tech: [
        'React',
        'Node.js',
        'MongoDB',
        'Tailwind CSS',
        'Vercel',
        'Clerk Auth',
        'Stripe',
        'ChatGPT API',
      ],
      status: 'WIP',
      impact: 'User Count',
    },

    {
      title: 'AI Lead Generation Chatbot',
      description:
        'An AI Agent build on the voiceflow platform that was live for one of our clients. Provided is a breakdown of how the bot works & and provides insight to some of the ClearStackAI initiatves were. ',
      link: 'https://github.com/stefanos/fintech-dashboard',
      demo: 'https://fintech-dashboard.vercel.app',
      tech: [
        'Vue.js',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Chart.js',
        'WebSockets',
      ],
      status: 'Production',
      impact: '$2M+ Daily',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Scratch Lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Additional scratch texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(150deg, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px, 90px 90px',
          }}
        />

        {/* Subtle dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="mb-8">
            {/* <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 rounded-full px-6 py-2 mb-6 shadow-lg">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-mono text-sm font-semibold">
                Available for hire
              </span>
            </div> */}
          </div>
          <h1 className="text-4xl md:text-4xl font-bold mb-6 tracking-tight text-black-600">
            STEFANOS SOPHOCLEOUS
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-black flex-1"></div>
            <p className="text-2xl md:text-3xl font-mono text-grey-600 px-4 font-semibold">
              Recent Development Work{' '}
            </p>
            <div className="h-px bg-black flex-1"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              {/* <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
                Recent Work
              </h2> */}
              {
                <p className="text-xl text-gray-600 font-mono">
                  {
                    '// I am a motivated technologist with a deep passion for solving problems. Through my pursuit in the Tech Space, I have found my passion in Full Stack Development. I am excited for the opportunity to join a development team and grow with goal driven team members'
                  }
                </p>
              }
              {/* <div className="animate-bounce">
                <p className="font-mono text-gray-500">
                  {' // Check Out Some Of My Published Work! ↓'}
                </p>
              </div> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:border-blue-600"
                >
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <CardTitle className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-mono border ${
                              project.status === 'Production'
                                ? 'bg-green-50 text-green-700 border-green-200'
                                : project.status === 'WIP'
                                ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                            }`}
                          >
                            {project.status}
                          </span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-mono border border-blue-200">
                            {project.impact}
                          </span>
                        </div>
                      </div>
                      <CardDescription className="text-gray-700 leading-relaxed text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-mono rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 font-medium bg-white border-2 border-gray-300 hover:border-black hover:bg-black hover:text-white text-gray-700 rounded-xl py-3 transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>

                        <Button
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Access Site
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          {/* <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            EX-Department Of Defense Software Engineer with over
            <span className="text-blue-600 font-bold"> 5+ years</span> of
            experience in the Tech Industry.
            <span className="text-black font-bold">
              {' '}
              Full-stack engineer seeking a long-term role on a collaborative
              team where I can continuously develop skills and deliver impactful
              solutions.
            </span>
          </p> */}
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Scratch Lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </section>
      {/* Footer */}
      <footer className="py-16 px-4 border-t-2 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-black">
              Code What Excites!
            </h3>
            <p className="text-gray-600 font-mono text-lg">
              {'// Check Out My Contact Info & Links!'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:stefanos.sophocleous@gmail.com"
              className="flex items-center gap-2 bg-white border-2 border-blue-600 rounded-lg px-6 py-3 font-mono hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="text-blue-600">
                Contact: stefanosdev26@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/StefanosTheDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border-2 border-black rounded-lg px-6 py-3 font-mono hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/stefanos-sophocleous-736733194/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border-2 border-blue-600 rounded-lg px-6 py-3 font-mono hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
