export interface Project {
    id: string;
    title: string;
    category: 'professional' | 'personal';
    role: string;
    overview: string;
    image?: string;
    liveUrl?: string;
    contributions: {
      area: string;
      percentage: number;
      description: string[];
      techStack: string[];
    }[];
  }
  
  export const projects: Project[] = [
    {
      id: 'ocr-platform',
      title: 'Internal Business Platform using OCR',
      category: 'professional',
      role: 'Project Manager / Full-stack Developer',
      overview: 'Internal project aimed at automating manual data entry by using OCR to improve operational efficiency',
      contributions: [
        {
          area: 'Backend',
          percentage: 80,
          description: [
            'Developed a RESTful API to communicate between the web frontend and OCR server',
            'Built a Python server integrating Naver OCR AI model, enabling automated Korean text extraction'
          ],
          techStack: ['Spring Boot', 'Django', 'MySQL']
        },
        {
          area: 'Frontend',
          percentage: 50,
          description: [
            'Reduced build times by adopting Vite',
            'Component-based development with Tailwind CSS, enhancing reusability'
          ],
          techStack: ['React', 'Vite', 'Tailwind CSS']
        },
        {
          area: 'DevOps',
          percentage: 100,
          description: [
            'Automated deployment on AWS EC2 and RDS using an IaaS model and a Docker-based GitLab CI/CD pipeline, improving deployment efficiency'
          ],
          techStack: ['AWS EC2', 'RDS', 'Docker', 'Gitlab CI/CD']
        }
      ]
    },
    {
      id: 'esg-platform',
      title: 'ESG Assessment Platform',
      category: 'professional',
      role: 'Project Manager / Full-stack Developer',
      overview: 'B2B Project delivering an ESG assessment platform designed for small and mid-sized companies',
      contributions: [
        {
          area: 'Data Management',
          percentage: 100,
          description: [
            'Modeled current ESG assessment indicators into DB (ESG → CT → KPI → DP) using MySQL',
            'Standardized and organized past 10 years of assessment data from Excel based on current ESG indicators',
            'Developed scoring formulas for each data point and stored them in the database for automated score calculation'
          ],
          techStack: ['MySQL']
        },
        {
          area: 'Backend',
          percentage: 70,
          description: [
            'Developed a RESTful API for calculating scores based on input data and generating result reports and statistical analysis',
            'Implemented JWT-based authentication with Redis'
          ],
          techStack: ['Spring Boot', 'MySQL', 'Redis']
        },
        {
          area: 'Frontend',
          percentage: 40,
          description: [
            'Developed a web platform for entering data for score calculation, generating result reports, and viewing statistical analysis'
          ],
          techStack: ['React', 'shadcn/ui']
        },
        {
          area: 'DevOps',
          percentage: 100,
          description: [
            'Managed AWS EC2 and RDS IaaS model deployment with CloudFlare for DNS management'
          ],
          techStack: ['AWS EC2', 'RDS', 'CloudFlare']
        }
      ]
    },
    {
      id: 'human-bigdata-platform',
      title: 'Human BigData Platform',
      category: 'professional',
      image: '/images/human-bigdata-platform.png',
      liveUrl: 'https://sizekorea.kr',
      role: 'Full-stack Developer',
      overview: 'R&D project launched by the Korean government to provide information on the average body sizes of Koreans',
      contributions: [
        {
          area: 'Data Standardization',
          percentage: 80,
          description: [
            'Processed and standardized body-measurement data collected since the 1980s, converting legacy datasets into structured raw data',
            'Adopted MongoDB for scalable processing and statistical optimization of large datasets with year-to-year variations in measurement criteria'
          ],
          techStack: ['MongoDB']
        },
        {
          area: 'Backend',
          percentage: 80,
          description: [
            'Developed a RESTful API server to provide body-measurement data through an OpenAPI interface'
          ],
          techStack: ['Spring Boot', 'MySQL', 'MongoDB']
        },
        {
          area: 'Frontend',
          percentage: 100,
          description: [
            'Developed a web platform for public access to body measurement data',
            'Implemented statistical analysis features and 3D body-shape rendering using Three.js'
          ],
          techStack: ['Spring + JSP', 'MySQL', 'MongoDB', 'Three.js']
        },
        {
          area: 'Deployment',
          percentage: 50,
          description: [
            'Deployed in an on-premise server environment'
          ],
          techStack: []
        }
      ]
    },
    {
      id: 'green-church-app',
      title: 'Green Church Bulletin Board App (iOS)',
      category: 'personal',
      image: '/images/green-church-app.png',
      role: 'Project Manager / Full-stack Developer',
      overview: 'An iOS bulletin board app for sharing daily prayers and devotional posts within a church community',
      contributions: [
        {
          area: 'Backend',
          percentage: 100,
          description: [
            'Designed and developed a serverless API using AWS API Gateway and AWS Lambda',
            'Stored and managed data in DynamoDB'
          ],
          techStack: ['AWS API Gateway', 'AWS Lambda', 'DynamoDB']
        },
        {
          area: 'Frontend',
          percentage: 100,
          description: [
            'Built the iOS application using Flutter, focusing on a clean and intuitive user interface',
            'Developed a simple content management page using React for managing bulletin posts'
          ],
          techStack: ['Flutter', 'XCode', 'React.js']
        },
        {
          area: 'DevOps',
          percentage: 100,
          description: [
            'Published and maintained the application on the Apple App Store (Korea region)',
            'Managed deployment, versioning, and production updates independently',
            'Deployed a static React admin web page using Amazon S3 static website hosting'
          ],
          techStack: ['AWS S3']
        }
      ]
    },
    {
      id: 'ckad-study',
      title: 'CKAD Certification Study',
      category: 'personal',
      liveUrl: 'https://github.com/tldms1119/Kubernetes-Study-Notes',
      role: 'Consistent Learner',
      overview: 'Learning Kubernetes, a critical orchestration platform for modern deployments, while preparing for the CKAD certification.',
      contributions: [
        {
          area: 'DevOps',
          percentage: 100,
          description: [
            'Learning Kubernetes, a critical orchestration platform for modern deployments, while preparing for the CKAD certification.'
          ],
          techStack: ['Kubernetes']
        }
      ]
    }
  ];
  