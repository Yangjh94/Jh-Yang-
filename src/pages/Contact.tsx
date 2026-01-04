
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpeg";
import { config } from "@/config";

export default function Contact() {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={contactBg} alt="Blueprint Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-center">
              {config.contact.title}
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              {config.contact.subtitle}
            </p>

            <div className="grid gap-6">
              {config.contact.info.map((item, index) => {
                let Icon = Mail;
                if (item.label.includes("电话")) Icon = Phone;
                if (item.label.includes("地址")) Icon = MapPin;

                return (
                  <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 py-4">
                      <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">{item.label}</CardTitle>
                        <div className="text-xl font-mono mt-1 text-gray-700">{item.value}</div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
              * 请通过邮件进行初步联系，我会尽快回复。
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
