import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import QuoteCard from "@/components/QuoteCard";
import CategoryCard from "@/components/CategoryCard";
import { categories, getFeaturedQuotes } from "@/data/quotes";

const Index = () => {
  const featuredQuotes = getFeaturedQuotes();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient islamic-pattern overflow-hidden">
        <div className="container mx-auto container-padding py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Daily Inspiration for Your Soul
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Beautiful{" "}
              <span className="text-primary">Islamic Quotes</span>{" "}
              for Daily Inspiration
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover wisdom from the Quran and Hadith. Strengthen your faith with daily 
              reminders and share the light of Islam with the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/category/quran-quotes">
                  Explore Quotes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-islamic-gold/10 rounded-full blur-3xl" />
      </section>

      {/* Featured Quote */}
      <section className="container mx-auto container-padding -mt-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-xl animate-scale-in">
            <p className="font-arabic text-2xl text-primary text-center mb-4">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <p className="text-center text-muted-foreground">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto container-padding py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of Islamic quotes organized by topic to find exactly what speaks to your heart.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Quotes Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Quotes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hand-picked quotes to inspire and guide you on your spiritual journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredQuotes.map((quote, index) => (
              <div
                key={quote.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <QuoteCard
                  quote={quote.quote}
                  source={quote.source}
                  category={quote.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  arabicText={quote.arabicText}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/category/quran-quotes" className="gap-2">
                View All Quotes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto container-padding py-20">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your Day with Islamic Wisdom
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims who find peace and guidance through our daily quotes. 
            Share the beauty of Islam with your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link to="/category/morning-evening-duas">
                Morning Duas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
