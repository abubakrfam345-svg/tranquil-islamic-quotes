import Layout from "@/components/Layout";

const PrivacyPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-12 md:py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
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
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Daily Islamic Quotes. We respect your privacy and are committed 
                to protecting your personal data. This privacy policy will inform you about 
                how we look after your personal data when you visit our website and tell you 
                about your privacy rights and how the law protects you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect, use, store and transfer different kinds of personal data 
                about you which we have grouped together as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Identity Data: includes first name, last name, username</li>
                <li>Contact Data: includes email address</li>
                <li>Technical Data: includes IP address, browser type and version, time zone setting</li>
                <li>Usage Data: includes information about how you use our website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We will only use your personal data when the law allows us to. Most commonly, 
                we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our 
                website and store certain information. Cookies are files with a small amount 
                of data which may include an anonymous unique identifier. You can instruct 
                your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may employ third-party companies and individuals to facilitate our service, 
                provide the service on our behalf, perform service-related services, or assist 
                us in analyzing how our service is used. These third parties have access to 
                your personal data only to perform these tasks on our behalf.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us. We strive to use commercially 
                acceptable means to protect your personal data, but remember that no method 
                of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under certain circumstances, you have rights under data protection laws 
                in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us 
                at contact@dailyislamicquotes.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
