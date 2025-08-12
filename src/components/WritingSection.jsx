import { Button, Card } from "@radix-ui/themes";
import { FaCalendarDays, FaLink } from "react-icons/fa6";

const WritingSection = ({ writing, talks, openSource }) => {
  return (
    <section
      id="writing"
      className="bg-gradient-to-tr from-blue-100 to-slate-100 min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 pb-2 text-center gradient-text">
          Writing & Contributions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-6">Velog</h3>
            <div className="space-y-4">
              {writing.map((post, postIndex) => (
                <Card key={postIndex} size="2">
                  <h4 className="mb-2">{post.title}</h4>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <FaCalendarDays className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("ko-KR")}
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="w-4 h-4 mr-2" />
                      Read Article
                    </a>
                  </Button>
                </Card>
              ))}
            </div>

            {talks.length > 0 && (
              <>
                <h3 className="mb-6 mt-8">Talks</h3>

                <div className="space-y-4">
                  {talks.map((talk, talkIndex) => (
                    <Card key={talkIndex} size="2">
                      <h4 className="mb-2">{talk.title}</h4>
                      <p className="text-sm mb-2">{talk.event}</p>
                      <div className="flex items-center gap-2 text-sm mb-3">
                        <FaCalendarDays className="w-4 h-4" />
                        {new Date(talk.date).toLocaleDateString("ko-KR")}
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={talk.slides_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink className="w-4 h-4 mr-2" />
                          Read Article
                        </a>
                      </Button>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
