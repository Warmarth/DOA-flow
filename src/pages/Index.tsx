import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { 
  Bot, 
  Shield, 
  BarChart3, 
  Users, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Vote,
  TrendingUp,
  Lock
} from "lucide-react";
import heroImage from "@/assets/daoflow-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Bridging Web2 to Web3 Governance
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transform Your Organization with{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    DAOFlow
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Modernize organizational decision-making through blockchain transparency, 
                  AI-powered onboarding, and secure voting mechanisms. From Enugu, Nigeria to the world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Join Telegram
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Organizations Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">50K+</div>
                  <div className="text-sm text-muted-foreground">Votes Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img 
                  src={heroImage} 
                  alt="DAOFlow Governance Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Governance Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DAOFlow combines cutting-edge blockchain technology with intuitive AI to create 
              the most advanced governance platform for traditional organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bot}
              title="AI-Powered Telegram Onboarding"
              description="Seamlessly onboard new participants with intelligent AI assistance through Telegram integration."
              glowColor="primary"
            />
            <FeatureCard
              icon={Shield}
              title="Secure Blockchain Voting"
              description="Cryptographically secure and tamper-proof voting with complete transparency and immutability."
              glowColor="secondary"
            />
            <FeatureCard
              icon={BarChart3}
              title="Real-time Analytics"
              description="Comprehensive insights into voting patterns, engagement metrics, and governance efficiency."
              glowColor="accent"
            />
            <FeatureCard
              icon={Users}
              title="Inclusive Participation"
              description="Break down barriers and enable every stakeholder to have a meaningful voice in decisions."
              glowColor="primary"
            />
            <FeatureCard
              icon={Globe}
              title="Cross-Platform Integration"
              description="Bridge the gap between traditional systems and modern blockchain infrastructure."
              glowColor="secondary"
            />
            <FeatureCard
              icon={Lock}
              title="Enterprise Security"
              description="Bank-grade security with privacy-preserving techniques for sensitive organizational data."
              glowColor="accent"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How DAOFlow Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your organization's decision-making in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold">Setup & Onboarding</h3>
              <p className="text-muted-foreground">
                Our AI assistant guides your team through Telegram, making Web3 accessible to everyone
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-secondary rounded-full flex items-center justify-center text-2xl font-bold text-secondary-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold">Create Proposals</h3>
              <p className="text-muted-foreground">
                Submit governance proposals with smart contracts ensuring transparency and automation
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold">Vote & Execute</h3>
              <p className="text-muted-foreground">
                Secure voting with real-time analytics and automatic execution of approved decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Organizations Choose DAOFlow
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join the governance revolution and transform how your organization makes decisions
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Eliminate opacity in decision-making processes",
                  "Increase stakeholder engagement by 300%",
                  "Reduce governance costs by up to 70%",
                  "Ensure immutable audit trails for compliance",
                  "Enable global participation regardless of location",
                  "Automate execution of approved proposals"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="web3" size="lg" className="group">
                Start Your Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border/50">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">Faster Decision Making</div>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border/50">
                  <Vote className="w-8 h-8 text-secondary mb-3" />
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Transparent Voting</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-card p-6 rounded-xl border border-border/50">
                  <Shield className="w-8 h-8 text-accent mb-3" />
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Security Uptime</div>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border/50">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground">10x</div>
                  <div className="text-sm text-muted-foreground">More Participation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Governance?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the future of organizational decision-making. Built in Nigeria, 
              designed for the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Get Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  DAOFlow
                </span>
              </div>
              <p className="text-muted-foreground">
                Bridging the governance gap between Web2 and Web3, from Enugu, Nigeria to the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Security</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">API</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Blog</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Careers</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Telegram</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Discord</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 DAOFlow. Built with ❤️ in Enugu, Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
