import { Button, Card } from "@radix-ui/themes";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const ContactSection = ({ contact }) => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-100 to-slate-100 min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Contact
        </h2>

        <Card size="3">
          <p className="text-lg mb-8 text-center">{contact.cta}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="3">
              <a href={`mailto:${contact.email}`}>
                <SiGmail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>

            <Button asChild variant="outline" size="3">
              <a href={contact.kakao_openchat_url}>
                <RiKakaoTalkFill className="w-5 h-5 mr-2 text-blue-500" />
                Kakao
              </a>
            </Button>
          </div>
          <div className="mt-6 text-sm text-center">{contact.email}</div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
