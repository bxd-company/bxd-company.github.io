import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ArrowRight, Database, Brain, BarChart3, Zap, CheckCircle2, Target, Users, TrendingUp, FileText, Sparkles } from 'lucide-react';
import BXDLogo from './components/BXDLogo';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#020618]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[rgba(2,6,24,0.95)] backdrop-blur-lg border-b border-[#1d293d]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-12">
            <div className="flex items-center gap-2">
              <BXDLogo className="w-8 h-8" />
              <span className="text-white text-xl font-semibold">BXD</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-[#cad5e2] hover:text-white transition-colors">Services</a>
              <a href="#approach" className="text-[#cad5e2] hover:text-white transition-colors">Approach</a>
              <a href="#solutions" className="text-[#cad5e2] hover:text-white transition-colors">Solutions</a>
              <a href="#products" className="text-[#cad5e2] hover:text-white transition-colors">Products</a>
              {/* <a href="#benefits" className="text-[#cad5e2] hover:text-white transition-colors">Why Us?</a> */}
              {/* <a href="#technology" className="text-[#cad5e2] hover:text-white transition-colors">Stack</a> */}
              {/* <a href="#partners" className="text-[#cad5e2] hover:text-white transition-colors">Partners</a> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#00b8db]/10 text-[#00b8db] border-[#00b8db]/20">
                Building Extraordinary Discoveries
              </Badge>
              <h1 className="text-5xl lg:text-6xl text-white">
                Transform Data into Strategic Decisions with AI
              </h1>
              <p className="text-xl text-[#90a1b9]">
                We help businesses unlock the full potential of their data through cutting-edge analytics, AI solutions, and modern data infrastructure.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-[#00b8db] hover:bg-[#00a5c7] text-white" size="lg">
                  <a href="#contact">Contact Us<ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00b8db]/20 to-[#ad46ff]/20 rounded-2xl blur-3xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIzMDE3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Analytics"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#0f172b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ad46ff]/10 text-[#ad46ff] border-[#ad46ff]/20 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl text-white mb-4">End-to-End Data Solutions</h2>
            <p className="text-xl text-[#90a1b9] max-w-2xl mx-auto">
              From strategy to implementation, we deliver comprehensive data and AI solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[rgba(29,41,61,0.5)] border-[#00b8db]/30 hover:border-[#00b8db] transition-all" id="service-diagnostics">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00b8db] to-[#00d3f2] flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Technical & Business Diagnostics</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  Comprehensive assessment of your data landscape and business requirements to identify opportunities and define clear objectives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Data Maturity Assessment
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Business Process Analysis
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Infrastructure Evaluation
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Gap Analysis & Roadmap
                  </li>
                </ul>
                {false && <Button variant="outline" className="border-2 border-[#00b8db] text-[#00b8db] hover:bg-[#00b8db] hover:text-white w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>}
              </CardContent>
            </Card>

            <Card className="bg-[rgba(29,41,61,0.5)] border-[#ad46ff]/30 hover:border-[#ad46ff] transition-all" id="service-ingestion">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ad46ff] to-[#c27aff] flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Data Ingestion</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  Build robust pipelines to collect, validate, and integrate data from multiple sources into your analytics ecosystem.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Multi-Source Connectors
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Real-time Streaming
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Batch Processing
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Data Quality Validation
                  </li>
                </ul>
                {false && <Button variant="outline" className="border-2 border-[#ad46ff] text-[#ad46ff] hover:bg-[#ad46ff] hover:text-white w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>}
              </CardContent>
            </Card>

            <Card className="bg-[rgba(29,41,61,0.5)] border-[#00b8db]/30 hover:border-[#00b8db] transition-all" id="service-transformation">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00b8db] to-[#00d3f2] flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">AI & Data Transformation</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  Transform raw data into valuable insights using advanced AI models and intelligent automation techniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Machine Learning Models
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Data Enrichment
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Automated Workflows
                  </li>
                </ul>
                {false && <Button variant="outline" className="border-2 border-[#00b8db] text-[#00b8db] hover:bg-[#00b8db] hover:text-white w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>}
              </CardContent>
            </Card>

            <Card className="bg-[rgba(29,41,61,0.5)] border-[#ad46ff]/30 hover:border-[#ad46ff] transition-all" id="service-visualization">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ad46ff] to-[#c27aff] flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Data Visualization</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  Create intuitive dashboards and reports that make complex data accessible and actionable for decision-makers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Interactive Dashboards
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Custom Reporting
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Real-time Monitoring
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Data Storytelling
                  </li>
                </ul>
                {false && <Button variant="outline" className="border-2 border-[#ad46ff] text-[#ad46ff] hover:bg-[#ad46ff] hover:text-white w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#00b8db]/10 text-[#00b8db] border-[#00b8db]/20 mb-4">
              Our Approach
            </Badge>
            <h2 className="text-4xl text-white mb-4">How We Work</h2>
            <p className="text-xl text-[#90a1b9] max-w-2xl mx-auto">
              A proven methodology that delivers results from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-[#0f172b] border border-[#1d293d] rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00b8db] to-[#00d3f2] flex items-center justify-center text-white">
                  01
                </div>
                <h3 className="text-xl text-white">Discover</h3>
                <p className="text-[#90a1b9]">
                  We analyze your current data landscape, identify opportunities, and define clear objectives.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-[#00b8db] to-transparent transform translate-x-1/2" />
            </div>

            <div className="relative">
              <div className="bg-[#0f172b] border border-[#1d293d] rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00b8db] to-[#ad46ff] flex items-center justify-center text-white">
                  02
                </div>
                <h3 className="text-xl text-white">Design</h3>
                <p className="text-[#90a1b9]">
                  Our experts architect scalable solutions tailored to your specific business requirements.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-[#ad46ff] to-transparent transform translate-x-1/2" />
            </div>

            <div className="relative">
              <div className="bg-[#0f172b] border border-[#1d293d] rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ad46ff] to-[#c27aff] flex items-center justify-center text-white">
                  03
                </div>
                <h3 className="text-xl text-white">Develop</h3>
                <p className="text-[#90a1b9]">
                  We build and implement robust data solutions using industry best practices and modern tools.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-[#ad46ff] to-transparent transform translate-x-1/2" />
            </div>

            <div>
              <div className="bg-[#0f172b] border border-[#1d293d] rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ad46ff] to-[#00b8db] flex items-center justify-center text-white">
                  04
                </div>
                <h3 className="text-xl text-white">Deliver</h3>
                <p className="text-[#90a1b9]">
                  Continuous optimization and support ensure your data solutions evolve with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-[#0f172b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ad46ff]/10 text-[#ad46ff] border-[#ad46ff]/20 mb-4">
              Industry Solutions
            </Badge>
            <h2 className="text-4xl text-white mb-4">Tailored for Your Industry</h2>
            <p className="text-xl text-[#90a1b9] max-w-2xl mx-auto">
              We deliver specialized data and AI solutions across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[rgba(29,41,61,0.5)] border-[#1d293d]">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Clinical Intelligence</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  Clinical analytics, patient outcomes prediction, and operational efficiency solutions for healthcare providers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMzQ0MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Healthcare"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Patient risk stratification models
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Healthcare operations optimization
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Clinical trial data analytics
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Medical imaging AI analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[rgba(29,41,61,0.5)] border-[#1d293d]">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Smart Learning Solutions</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  AI-powered learning solutions including automated essay assessment and personalized feedback systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjIyNjY3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Education"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#ad46ff]" />
                    Automated essay assessment
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#ad46ff]" />
                    Intelligent automatic feedback
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#ad46ff]" />
                    Student performance analytics
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#ad46ff]" />
                    Personalized learning pathways
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[rgba(29,41,61,0.5)] border-[#1d293d]">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Legal Intelligence</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  Document intelligence, contract analysis, and legal research automation for law firms and legal departments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1659869764315-dc3d188141fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGxhdyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjIzNzA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Legal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Contract analysis & review
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Legal document automation
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Case law research AI
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <ArrowRight className="h-4 w-4 text-[#00b8db]" />
                    Compliance monitoring systems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#00b8db]/10 text-[#00b8db] border-[#00b8db]/20 mb-4">
              Our Products
            </Badge>
            <h2 className="text-4xl text-white mb-4">AI-Powered Educational Tools</h2>
            <p className="text-xl text-[#90a1b9] max-w-2xl mx-auto">
              Advanced linguistic analysis and assessment solutions designed for researchers and educators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[rgba(29,41,61,0.5)] border-[#00b8db]/30 hover:border-[#00b8db] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00b8db] to-[#00d3f2] flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Linguistic Feature Extraction</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  Comprehensive text analysis tool that provides deep insights into linguistic complexity, similar to Coh-Metrix, enabling researchers to extract over 100+ linguistic features from texts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762330467572-5199bc772a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMHByb2Nlc3NpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjM3ODQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Linguistic Analysis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Syntactic complexity metrics
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Lexical diversity analysis
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Cohesion and coherence measures
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Readability indices
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b8db]" />
                    Batch processing capabilities
                  </li>
                </ul>
                {false && <Button className="bg-[#00b8db] hover:bg-[#00a5c7] text-white w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>}
              </CardContent>
            </Card>

            <Card className="bg-[rgba(29,41,61,0.5)] border-[#ad46ff]/30 hover:border-[#ad46ff] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ad46ff] to-[#c27aff] flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Essay Assessment</CardTitle>
                <CardDescription className="text-[#90a1b9]">
                  AI-powered automated essay scoring and feedback system that provides instant, comprehensive evaluations and actionable suggestions to improve student writing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1664261836168-c33c7fe94b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NheSUyMHdyaXRpbmclMjBhc3Nlc3NtZW50fGVufDF8fHx8MTc2MjM3ODQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Essay Assessment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Automated scoring and grading
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Detailed feedback generation
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Multi-criteria evaluation
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Progress tracking analytics
                  </li>
                  <li className="flex items-center gap-2 text-[#cad5e2] text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#ad46ff]" />
                    Customizable rubrics
                  </li>
                </ul>
                {false && <Button className="bg-[#ad46ff] hover:bg-[#9333ea] text-white w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why BXD Section - Temporarily Hidden */}
      {false && <section id="benefits" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#00b8db]/10 text-[#00b8db] border-[#00b8db]/20 mb-4">
                  Why Choose BXD
                </Badge>
                <h2 className="text-4xl text-white mb-4">
                  Your Partner in Data-Driven Transformation
                </h2>
                <p className="text-xl text-[#90a1b9]">
                  We combine deep technical expertise with business acumen to deliver solutions that drive real value.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00b8db] to-[#00d3f2] flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Proven Track Record</h3>
                    <p className="text-[#90a1b9]">
                      Over 500 successful projects across industries with measurable business impact and ROI.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ad46ff] to-[#c27aff] flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Expert Team</h3>
                    <p className="text-[#90a1b9]">
                      Our data scientists, engineers, and consultants bring decades of combined experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00b8db] to-[#ad46ff] flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-[#90a1b9]">
                      We leverage the latest tools and platforms to ensure your solutions are future-proof.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ad46ff] to-[#00b8db] flex items-center justify-center shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Business-Focused Approach</h3>
                    <p className="text-[#90a1b9]">
                      Every solution is designed to solve real business problems and deliver tangible value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-[rgba(29,41,61,0.5)] border-[#00b8db]/30">
                <CardContent className="pt-6">
                  <div className="text-4xl font-semibold text-white mb-2">95%</div>
                  <p className="text-[#90a1b9]">Projects delivered on time and within budget</p>
                </CardContent>
              </Card>
              <Card className="bg-[rgba(29,41,61,0.5)] border-[#ad46ff]/30">
                <CardContent className="pt-6">
                  <div className="text-4xl font-semibold text-white mb-2">3.5x</div>
                  <p className="text-[#90a1b9]">Average ROI for our clients within first year</p>
                </CardContent>
              </Card>
              <Card className="bg-[rgba(29,41,61,0.5)] border-[#ad46ff]/30">
                <CardContent className="pt-6">
                  <div className="text-4xl font-semibold text-white mb-2">24/7</div>
                  <p className="text-[#90a1b9]">Enterprise support and monitoring</p>
                </CardContent>
              </Card>
              <Card className="bg-[rgba(29,41,61,0.5)] border-[#00b8db]/30">
                <CardContent className="pt-6">
                  <div className="text-4xl font-semibold text-white mb-2">100+</div>
                  <p className="text-[#90a1b9]">Certified data professionals on our team</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>}

      {/* Technology Stack Section - Temporarily Hidden */}
      {false && <section id="technology" className="py-20 px-6 bg-[#0f172b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#00b8db]/10 text-[#00b8db] border-[#00b8db]/20 mb-4">
              Technology Stack
            </Badge>
            <h2 className="text-4xl text-white mb-4">Built on Modern Technology</h2>
            <p className="text-xl text-[#90a1b9] max-w-2xl mx-auto">
              We work with industry-leading platforms and tools to deliver best-in-class solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl text-white">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">AWS</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Azure</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Google Cloud</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Snowflake</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">Data Engineering</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">dbt</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Airflow</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Spark</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Databricks</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">AI & ML</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">TensorFlow</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">PyTorch</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Scikit-learn</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">MLflow</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">Analytics & BI</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Tableau</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Power BI</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Looker</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Metabase</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">PostgreSQL</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">MongoDB</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Redis</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">BigQuery</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">DevOps & MLOps</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Docker</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Kubernetes</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">Terraform</Badge>
                <Badge variant="outline" className="border-[#1d293d] text-[#cad5e2]">GitHub Actions</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* Partners Section - Temporarily Hidden */}
      {false && <section id="partners" className="py-20 px-6 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ad46ff]/10 text-[#ad46ff] border-[#ad46ff]/20 mb-4">
              Institutional Partners
            </Badge>
            <h2 className="text-4xl text-white mb-4">Trusted by Leading Institutions</h2>
            <p className="text-xl text-[#90a1b9] max-w-2xl mx-auto">
              We collaborate with premier organizations to transform data into actionable insights
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="flex items-center justify-center w-full h-24 bg-[rgba(29,41,61,0.3)] border border-[#1d293d] rounded-lg hover:border-[#00b8db]/50 transition-all p-6">
              <span className="text-xl text-[#cad5e2] text-center">CESAR</span>
            </div>
            <div className="flex items-center justify-center w-full h-24 bg-[rgba(29,41,61,0.3)] border border-[#1d293d] rounded-lg hover:border-[#ad46ff]/50 transition-all p-6">
              <span className="text-xl text-[#cad5e2] text-center">Cogna</span>
            </div>
            <div className="flex items-center justify-center w-full h-24 bg-[rgba(29,41,61,0.3)] border border-[#1d293d] rounded-lg hover:border-[#00b8db]/50 transition-all p-6">
              <span className="text-xl text-[#cad5e2] text-center">NESS</span>
            </div>
            <div className="flex items-center justify-center w-full h-24 bg-[rgba(29,41,61,0.3)] border border-[#1d293d] rounded-lg hover:border-[#ad46ff]/50 transition-all p-6">
              <span className="text-xl text-[#cad5e2] text-center">Ionic Health</span>
            </div>
            <div className="flex items-center justify-center w-full h-24 bg-[rgba(29,41,61,0.3)] border border-[#1d293d] rounded-lg hover:border-[#00b8db]/50 transition-all p-6">
              <span className="text-xl text-[#cad5e2] text-center">Monash University</span>
            </div>
          </div>
        </div>
      </section>}

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-[#00b8db]/10 to-[#ad46ff]/10 border-[#00b8db]/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-[#90a1b9] mb-8 max-w-2xl mx-auto">
                Let's discuss how BXD can help you unlock the full potential of your data and drive business growth.
              </p>
              <div className="text-center" id="contact">
                <h3 className="text-2xl text-white font-semibold mb-4">Contact Us</h3>
                <p className="text-lg text-[#cad5e2]">
                  Reach out to us at{' '}
                  <a href="mailto:hyan.batista@ufrpe.br" className="text-[#00b8db] hover:text-[#00d3f2] underline transition-colors">
                    hyan.batista@ufrpe.br
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#020618] border-t border-[#1d293d]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#90a1b9] text-sm">© 2025 BXD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
