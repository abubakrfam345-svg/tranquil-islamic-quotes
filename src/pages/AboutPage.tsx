import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-12 md:py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Spreading the light of Islam through beautiful quotes and reminders.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto container-padding py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to Daily Islamic Quotes, your source for daily inspiration and 
              spiritual guidance from the Quran and authentic Hadith. Our mission is 
              to bring the wisdom of Islam closer to Muslims around the world, one 
              quote at a time.
            </p>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Authentic Sources</h3>
                <p className="text-muted-foreground text-sm">
                  All our quotes are sourced from the Holy Quran and authentic Hadith 
                  collections including Sahih Bukhari and Sahih Muslim.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Daily Inspiration</h3>
                <p className="text-muted-foreground text-sm">
                  We curate quotes that touch the heart and soul, helping you stay 
                  connected with your faith throughout the day.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community Focused</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in the power of community and encourage you to share 
                  these quotes with friends and family.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">
                  Our platform serves Muslims from all corners of the world, united 
                  by our shared love for Islam.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              We envision a world where every Muslim has easy access to the beautiful 
              teachings of Islam. Through technology and dedication, we strive to make 
              Islamic knowledge accessible, shareable, and impactful.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking for daily reminders, searching for the perfect 
              quote to share, or seeking comfort in the words of Allah and His 
              Messenger (PBUH), we're here to serve you.
            </p>

            <div className="flex gap-4">
              <Button asChild>
                <Link to="/">Explore Quotes</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
