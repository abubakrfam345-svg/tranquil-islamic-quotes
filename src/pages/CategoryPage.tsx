import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import QuoteCard from "@/components/QuoteCard";
import { getCategoryBySlug, getQuotesByCategory, categories } from "@/data/quotes";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const quotes = getQuotesByCategory(slug || "");

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto container-padding py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const otherCategories = categories.filter((cat) => cat.slug !== slug).slice(0, 4);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-12 md:py-20">
        <div className="container mx-auto container-padding">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground">{category.description}</p>
            <p className="mt-4 text-sm text-primary font-medium">
              {quotes.length} quotes in this category
            </p>
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="container mx-auto container-padding py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <div
              key={quote.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <QuoteCard
                quote={quote.quote}
                source={quote.source}
                arabicText={quote.arabicText}
              />
            </div>
          ))}
        </div>

        {quotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No quotes found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* Other Categories */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="bg-card rounded-xl border border-border p-4 text-center hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <h3 className="font-medium text-sm">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {cat.quoteCount} quotes
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
