
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wind, Activity, Layers, Settings, ExternalLink, Calculator, Mail } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpeg";
import avatar from "@/assets/avatar.jpeg";
import kbHeader from "@/assets/kb-header.jpeg";
import { config } from "@/config";

export default function Home() {
  const icons = [Wind, Activity, Layers, Settings];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden border-b-2 border-border">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Structural Engineering Background" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl bg-background/95 p-8 md:p-12 border-2 border-primary shadow-[8px_8px_0px_0px_var(--color-primary)] backdrop-blur-sm">
            <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-4 py-1 text-xs uppercase tracking-widest border border-accent">
              {config.hero.badge}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 text-foreground">
              {config.hero.title.line1} <br/>
              <span className="text-primary">{config.hero.title.highlight}</span>.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 max-w-2xl leading-relaxed whitespace-pre-line">
              {config.hero.description}
            </p>
            <div className="flex gap-4">
              <Link href="/app">
                <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md text-lg font-bold px-8 h-14 border-2 border-transparent">
                  <Calculator className="mr-2 h-5 w-5" /> {config.hero.buttons.primary}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-none border-2 border-foreground bg-background text-foreground hover:bg-secondary transition-all text-lg font-bold px-8 h-14">
                  <Mail className="mr-2 h-5 w-5" /> {config.hero.buttons.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-square border-4 border-primary overflow-hidden relative z-10">
                <img src={avatar} alt="Researcher Avatar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute top-4 left-4 w-full h-full border-2 border-dashed border-foreground/30 -z-0"></div>
            </div>
            <div className="md:col-span-7 space-y-8">
              <h2 className="text-4xl font-bold tracking-tighter flex items-center gap-3 text-foreground">
                <span className="w-12 h-2 bg-accent block"></span>
                {config.about.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-mono">
                {config.about.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.about.features.map((item, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <div key={i} className="border border-border p-4 bg-secondary/30 hover:bg-primary hover:text-white transition-colors group">
                      <Icon className="h-8 w-8 mb-3 text-primary group-hover:text-white" />
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-80 font-mono">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section id="knowledge-base" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-4 flex items-center gap-3 text-foreground">
                 <span className="w-12 h-2 bg-foreground block"></span>
                 {config.knowledgeBase.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                {config.knowledgeBase.description}
              </p>
            </div>
            <a href={config.knowledgeBase.viewAllLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background">
                {config.knowledgeBase.viewAll} <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="mb-12 border-2 border-border overflow-hidden h-48 md:h-64 relative group">
            <img src={kbHeader} alt="Finite Element Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.knowledgeBase.articles.map((article) => (
              <Card key={article.id} className="rounded-none border-l-4 border-l-primary border-y border-r border-border shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer bg-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="rounded-none bg-secondary text-secondary-foreground border border-border">
                      {article.category}
                    </Badge>
                    <span className="text-sm font-mono text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="text-xl mt-4 leading-tight group-hover:text-primary transition-colors font-bold">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex items-center text-sm font-bold text-accent mt-2">
                    {config.knowledgeBase.readArticle} <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
