import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Play, Download, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Tech-Forward Minimalist Design System
 * Studio page for multi-agent orchestration
 * - Input form for application specifications
 * - Real-time agent status visualization
 * - Results display with code, tests, and deployment files
 * - Smooth animations and progressive revelation
 */

interface AgentStatus {
  id: string;
  name: string;
  status: "pending" | "running" | "completed" | "error";
  progress: number;
  output?: string;
}

interface GenerationResult {
  appName: string;
  description: string;
  agents: AgentStatus[];
  generatedFiles: {
    frontend: string;
    backend: string;
    tests: string;
    deployment: string;
  };
}

export default function Studio() {
  const [appName, setAppName] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!appName.trim() || !description.trim()) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setIsGenerating(true);
    setResult(null);

    // Simulation du processus multi-agents
    const agents: AgentStatus[] = [
      { id: "concepteur", name: "Rédacteur & Concepteur", status: "running", progress: 0 },
      { id: "developpeur", name: "Développeur", status: "pending", progress: 0 },
      { id: "testeur", name: "Testeur", status: "pending", progress: 0 },
      { id: "deployeur", name: "Déployeur", status: "pending", progress: 0 },
    ];

    // Simulation de progression
    for (let i = 0; i < agents.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      agents[i].status = "running";
      agents[i].progress = 50;

      setResult({
        appName,
        description,
        agents: [...agents],
        generatedFiles: {
          frontend: "",
          backend: "",
          tests: "",
          deployment: "",
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      agents[i].status = "completed";
      agents[i].progress = 100;

      // Générer du contenu exemple
      if (i === 0) {
        agents[i].output = `Architecture proposée:
- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- Base de données: PostgreSQL
- Authentification: JWT`;
      } else if (i === 1) {
        agents[i].output = `Code généré:
- 12 composants React
- 8 routes API
- 5 modèles de données
- Configuration Webpack`;
      } else if (i === 2) {
        agents[i].output = `Tests créés:
- 45 tests unitaires
- 12 tests d'intégration
- Couverture: 87%
- Tous les tests passent ✓`;
      } else {
        agents[i].output = `Déploiement prêt:
- Dockerfile généré
- Scripts CI/CD (GitHub Actions)
- Configuration production
- Prêt pour déploiement`;
      }

      setResult({
        appName,
        description,
        agents: [...agents],
        generatedFiles: {
          frontend: "// Code frontend généré...",
          backend: "// Code backend généré...",
          tests: "// Tests générés...",
          deployment: "# Configuration de déploiement...",
        },
      });
    }

    setIsGenerating(false);
  };

  const copyToClipboard = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663359307651/JxFKDWRwkepGgvtqX3XGvC/logo-multi-agents-ZQTyTzQUHY6abQc9WVYrbG.webp"
                alt="Multi-Agents Logo"
                className="w-10 h-10"
              />
              <h1 className="text-xl font-bold text-gray-900">MultiAgent Studio</h1>
            </div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Input Section */}
          {!result && (
            <div className="mb-12">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Créez votre Application</h1>
                <p className="text-lg text-gray-600">
                  Décrivez votre application web et laissez les agents la générer automatiquement
                </p>
              </div>

              <Card className="p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Nom de l'application</label>
                    <Input
                      placeholder="Ex: Blog Personnel, E-commerce, Dashboard Analytics"
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                      disabled={isGenerating}
                      className="text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Description détaillée</label>
                    <Textarea
                      placeholder="Décrivez les fonctionnalités principales, le design souhaité, les technologies préférées, etc."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      disabled={isGenerating}
                      rows={8}
                      className="text-base"
                    />
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !appName.trim() || !description.trim()}
                    size="lg"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Lancer la Génération
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Results Section */}
          {result && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{result.appName}</h2>
                <p className="text-gray-600">{result.description}</p>
              </div>

              {/* Agent Status Timeline */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Progression des Agents</h3>
                {result.agents.map((agent, idx) => (
                  <div key={agent.id} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <Card className="p-6 border-l-4 border-l-cyan-500">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                          <p className="text-sm text-gray-500 capitalize">{agent.status}</p>
                        </div>
                        <div className="text-right">
                          {agent.status === "completed" && (
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          {agent.status === "running" && (
                            <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                          )}
                        </div>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-violet-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${agent.progress}%` }}
                        />
                      </div>

                      {agent.output && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <pre className="text-xs text-gray-700 whitespace-pre-wrap break-words font-mono">
                            {agent.output}
                          </pre>
                        </div>
                      )}
                    </Card>
                  </div>
                ))}
              </div>

              {/* Generated Files */}
              {result.agents.every((a) => a.status === "completed") && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Fichiers Générés</h3>

                  <Tabs defaultValue="frontend" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="frontend">Frontend</TabsTrigger>
                      <TabsTrigger value="backend">Backend</TabsTrigger>
                      <TabsTrigger value="tests">Tests</TabsTrigger>
                      <TabsTrigger value="deployment">Déploiement</TabsTrigger>
                    </TabsList>

                    <TabsContent value="frontend" className="space-y-4">
                      <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Code Frontend (React)</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(result.generatedFiles.frontend, "frontend")}
                            className="gap-2"
                          >
                            {copiedCode === "frontend" ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copié
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copier
                              </>
                            )}
                          </Button>
                        </div>
                        <pre className="bg-gray-900 text-cyan-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                          {result.generatedFiles.frontend}
                        </pre>
                      </Card>
                    </TabsContent>

                    <TabsContent value="backend" className="space-y-4">
                      <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Code Backend (Node.js)</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(result.generatedFiles.backend, "backend")}
                            className="gap-2"
                          >
                            {copiedCode === "backend" ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copié
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copier
                              </>
                            )}
                          </Button>
                        </div>
                        <pre className="bg-gray-900 text-cyan-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                          {result.generatedFiles.backend}
                        </pre>
                      </Card>
                    </TabsContent>

                    <TabsContent value="tests" className="space-y-4">
                      <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Tests Générés</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(result.generatedFiles.tests, "tests")}
                            className="gap-2"
                          >
                            {copiedCode === "tests" ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copié
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copier
                              </>
                            )}
                          </Button>
                        </div>
                        <pre className="bg-gray-900 text-cyan-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                          {result.generatedFiles.tests}
                        </pre>
                      </Card>
                    </TabsContent>

                    <TabsContent value="deployment" className="space-y-4">
                      <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Configuration de Déploiement</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(result.generatedFiles.deployment, "deployment")}
                            className="gap-2"
                          >
                            {copiedCode === "deployment" ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copié
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copier
                              </>
                            )}
                          </Button>
                        </div>
                        <pre className="bg-gray-900 text-cyan-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                          {result.generatedFiles.deployment}
                        </pre>
                      </Card>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white gap-2">
                      <Download className="w-4 h-4" />
                      Télécharger les Fichiers
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => {
                        setResult(null);
                        setAppName("");
                        setDescription("");
                      }}
                    >
                      Créer une Nouvelle App
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
