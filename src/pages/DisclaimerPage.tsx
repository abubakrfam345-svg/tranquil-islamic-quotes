import Layout from "@/components/Layout";

const DisclaimerPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-12 md:py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto container-padding py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="bg-card rounded-xl border border-border p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">General Disclaimer</h2>
              <p className="text-muted-foreground">
                The information provided on Daily Islamic Quotes is for general informational 
                and educational purposes only. All information on the website is provided in 
                good faith. However, we make no representation or warranty of any kind, express 
                or implied, regarding the accuracy, adequacy, validity, reliability, availability, 
                or completeness of any information on the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Religious Content Disclaimer</h2>
              <p className="text-muted-foreground">
                The Islamic quotes, Quranic verses, Hadith, and other religious content shared 
                on this website are intended for inspiration and general guidance. We strive to 
                ensure accuracy by citing authentic sources. However, for matters of religious 
                ruling (fiqh), personal guidance, or scholarly interpretation, we strongly 
                recommend consulting qualified Islamic scholars (ulama) in your community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Translation Disclaimer</h2>
              <p className="text-muted-foreground">
                Translations of Quranic verses and Hadith are interpretive in nature. The 
                original Arabic text remains the authoritative source. Different scholars 
                and translators may offer varying interpretations. We encourage readers 
                to study the original Arabic texts and consult with knowledgeable scholars 
                for deeper understanding.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground">
                Our website may contain links to other websites that are not operated by us. 
                We have no control over, and assume no responsibility for, the content, privacy 
                policies, or practices of any third-party sites or services. We strongly advise 
                you to review the privacy policy and terms of service of any site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Professional Advice Disclaimer</h2>
              <p className="text-muted-foreground">
                The content on this website is not intended to be a substitute for professional 
                advice. Always seek the advice of qualified professionals regarding any questions 
                you may have. Never disregard professional advice or delay in seeking it because 
                of something you have read on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Errors and Omissions</h2>
              <p className="text-muted-foreground">
                While we make every effort to ensure that the content of this website is 
                accurate, the website may contain typographical errors, inaccuracies, or 
                omissions. We reserve the right to correct any errors, inaccuracies, or 
                omissions and to change or update information at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">User Responsibility</h2>
              <p className="text-muted-foreground">
                Your use of any information or materials on this website is entirely at your 
                own risk, for which we shall not be liable. It shall be your own responsibility 
                to ensure that any products, services, or information available through this 
                website meet your specific requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Disclaimer, please contact us at 
                contact@dailyislamicquotes.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DisclaimerPage;
