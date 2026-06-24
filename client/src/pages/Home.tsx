import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Code, CheckCircle, Rocket } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Tech-Forward Minimalist Design System
 * - Hero section with dark background and cyan accents
 * - Four-stage process flow visualization
 * - Agent cards with distinctive styling
 * - Smooth animations and micro-interactions
 */

interface Agent {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
}

const agents: Agent[] = [
  {
    id: "concepteur",
    name: "Rédacteur & Concepteur",
    title: "Phase 1: Conception",
    description: "Analyse les besoins utilisateur et génère une architecture logicielle complète avec diagrammes UML.",
    icon: <Zap className="w-6 h-6" />,
    color: "#00d9ff",
    borderColor: "border-cyan-400",
  },
  {
    id: "developpeur",
    name: "Développeur",
    title: "Phase 2: Développement",
    description: "Génère automatiquement le code frontend et backend selon les spécifications de l'agent concepteur.",
    icon: <Code className="w-6 h-6" />,
    color: "#7c3aed",
    borderColor: "border-violet-500",
  },
  {
    id: "testeur",
    name: "Testeur",
    title: "Phase 3: Test",
    description: "Crée des tests unitaires et fonctionnels, détecte les erreurs et propose des corrections.",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "#00d9ff",
    borderColor: "border-cyan-400",
  },
  {
    id: "deployeur",
    name: "Déployeur",
    title: "Phase 4: Déploiement",
    description: "Prépare l'application pour le déploiement avec Docker, CI/CD et vérification d'accessibilité.",
    icon: <Rocket className="w-6 h-6" />,
    color: "#7c3aed",
    borderColor: "border-violet-500",
  },
];

export default function Home() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663359307651/JxFKDWRwkepGgvtqX3XGvC/logo-multi-agents-ZQTyTzQUHY6abQc9WVYrbG.webp"
              alt="Multi-Agents Logo"
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold text-gray-900">MultiAgent Dev</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#agents" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Agents
            </a>
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Fonctionnalités
            </a>
            <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Démarrer
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663359307651/JxFKDWRwkepGgvtqX3XGvC/hero-background-N3V9fuzjgd3LVxNv8PQAuC.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm text-cyan-900 font-medium">Système Multi-Agents IA</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Développement Web{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
                Automatisé
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Orchestrez quatre agents intelligents pour transformer vos idées en applications web fonctionnelles.
              Conception, développement, test et déploiement—automatisés et intelligents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/studio">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2">
                  Lancer le Studio
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-gray-300">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Le Cycle de Développement</h2>
            <p className="text-lg text-gray-600">Quatre phases orchestrées pour un développement complet</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                title: "Conception",
                description: "Analyse et architecture",
                icon: "💡",
                color: "from-cyan-400 to-cyan-500",
              },
              {
                number: "2",
                title: "Développement",
                description: "Génération de code",
                icon: "⚙️",
                color: "from-violet-400 to-violet-500",
              },
              {
                number: "3",
                title: "Test",
                description: "Qualité et validation",
                icon: "✓",
                color: "from-cyan-400 to-cyan-500",
              },
              {
                number: "4",
                title: "Déploiement",
                description: "Mise en production",
                icon: "🚀",
                color: "from-violet-400 to-violet-500",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className={`bg-gradient-to-br ${step.color} rounded-lg p-8 text-white shadow-lg`}>
                  <div className="text-4xl font-bold mb-4 opacity-20">{step.number}</div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Les Quatre Agents</h2>
            <p className="text-lg text-gray-600">Chacun spécialisé dans une phase du développement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, idx) => (
              <div
                key={agent.id}
                className="group"
                onMouseEnter={() => setHoveredAgent(agent.id)}
                onMouseLeave={() => setHoveredAgent(null)}
              >
                <Card
                  className={`p-8 border-t-4 transition-all duration-300 ${agent.borderColor} ${
                    hoveredAgent === agent.id ? "shadow-xl scale-105" : "shadow-md"
                  }`}
                  style={{
                    borderTopColor: agent.color,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: `${agent.color}20`,
                        color: agent.color,
                      }}
                    >
                      {agent.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{agent.title}</p>
                      <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{agent.description}</p>

                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: agent.color }}>
                    En savoir plus
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités Clés</h2>
            <p className="text-lg text-gray-600">Tout ce dont vous avez besoin pour développer intelligemment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Orchestration LangChain",
                description: "Coordination fluide entre les agents via LangChain",
                icon: "🔗",
              },
              {
                title: "SLMs Optimisés",
                description: "Utilisation de modèles légers et efficaces",
                icon: "⚡",
              },
              {
                title: "Architecture Complète",
                description: "Frontend, backend et base de données",
                icon: "🏗️",
              },
              {
                title: "Tests Automatisés",
                description: "Génération de tests unitaires et fonctionnels",
                icon: "🧪",
              },
              {
                title: "Déploiement Simplifié",
                description: "Docker, CI/CD et scripts de déploiement",
                icon: "🚀",
              },
              {
                title: "Documentation Complète",
                description: "Architecture et rapports d'expérimentation",
                icon: "📚",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-500 to-violet-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à transformer vos idées ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Lancez le studio et découvrez comment les agents IA peuvent automatiser votre développement web.
          </p>
          <Link href="/studio">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 gap-2">
              Démarrer Maintenant
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">MultiAgent Dev</h4>
              <p className="text-sm">Système intelligent pour le développement web automatisé.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tarification
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tutoriels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 MultiAgent Dev. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
