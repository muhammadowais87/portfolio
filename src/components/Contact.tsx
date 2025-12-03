import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { ContactFormData } from '../types/contact';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    createdAt: new Date().toISOString()
  });
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mo733025@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 3264917496',
      link: 'tel:+923264917496'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: null
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Test Supabase connection
    const { data: testData, error: testError } = await supabase.from('contacts').select('*').limit(1);
    console.log('Test connection:', { testData, testError });

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        createdAt: new Date().toISOString()
      });
    } catch (error: any) {
      console.error('Supabase Error:', error.message, error);
      toast({
        title: "Error sending message",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-hero-accent">Get In Touch</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting mobile app projects. 
                Whether you need a cross-platform app, want to discuss a project idea, or 
                are looking for collaboration, I'd love to hear from you.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Let's connect and create something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-hero-accent/10">
                    <info.icon className="text-hero-accent" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-foreground hover:text-hero-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card-bg border-hero-accent/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-section-bg border border-hero-accent/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-hero-accent transition-colors"
                      placeholder="Muhammad"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-section-bg border border-hero-accent/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-hero-accent transition-colors"
                      placeholder="Owais"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-section-bg border border-hero-accent/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-hero-accent transition-colors"
                    placeholder="owais@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-section-bg border border-hero-accent/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-hero-accent transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-section-bg border border-hero-accent/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-hero-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-hero-accent hover:bg-hero-accent/80" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
