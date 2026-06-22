 import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export function VideoShowcaseSection() {
  const videos = [
    {
      id: 1,
      title: "What & Why is MS-Excel? | Essential Skills for Professionals",
      description: "Understand the fundamentals and real-world importance of MS Excel — why it's a must-have skill for professionals across industries in Delhi. Learn from ARC Computer Institute's expert trainers.",
      youtubeId: "e7PBOnozkr4",
      // duration: "PT8M32S", // fixed format
      duration: "PT10M59S",

      uploadDate: "2023-05-15T00:00:00+05:30"

    },
    {
      id: 3,
      title: "Master Salary Sheet in Excel - Complete Tutorial",
      description: "Comprehensive tutorial on creating professional salary sheets in Excel. Essential training for HR, payroll, and admin professionals in Delhi from ARC Computer Institute's practical curriculum.",
      youtubeId: "eEg0IKAhIe4",
      duration: "PT9M15S",
      uploadDate: "2023-07-10T00:00:00+05:30"
    },
    {
      id: 2,
      title: "Journal Voucher In Tally - Practical Tutorial",
      description: "Step-by-step guide on creating Journal Vouchers in Tally, a key accounting skill taught at ARC Computer Institute. Perfect for accounting professionals in Delhi looking to enhance their practical knowledge.",
      youtubeId: "aTJ7Vg20NxE",
      duration: "PT7M51S",
  
      // duration: "PT12M45S",
      uploadDate: "2023-06-22T00:00:00+05:30"
    }
  ];

  const generateVideoSchema = () => {
    return videos.map(video => ({
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
      "uploadDate": video.uploadDate,
      "duration": video.duration,
      "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`,
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": { "@type": "WatchAction" },
        "userInteractionCount": 1000
      },
      "regionsAllowed": "IN",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "ARC Computer Institute",
        "url": "https://www.arcinstitute.in"
      }
    }));
  };

  return (
    <>
      <Helmet>
        <title>Video Tutorials & Demos | ARC Computer Institute, Delhi</title>
        <meta name="description" content="Explore free video tutorials from ARC Computer Institute covering MS Excel, Tally, and more. Practical lessons from Delhi's premier computer training center." />
        <meta property="og:title" content="Free Computer Training Videos | ARC Computer Institute" />
        <meta property="og:description" content="Watch practical tutorials from Delhi's top computer institute. Learn Excel, Tally, and more from our expert instructors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arcinstitute.in/videos" />
        <meta property="og:image" content="https://img.youtube.com/vi/e7PBOnozkr4/maxresdefault.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="canonical" href="https://seffoundation.com/videos" /> */}
        <link rel="canonical" href="https://www.arcinstitute.in/videos" />

        <script type="application/ld+json">

          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": generateVideoSchema(),
            "name": "ARC Computer Institute Video Tutorials",
            "description": "Collection of free computer training videos from Delhi's premier institute"
          })}
        </script>
      </Helmet>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Free Learning Resources</span> from ARC Institute
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our practical computer training videos covering Excel, Tally, and more - taught by Delhi's top instructors at ARC Computer Institute.
            </p>
          </motion.div>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                itemScope
                itemType="https://schema.org/VideoObject"
              >
                <meta itemProp="name" content={video.title} />
                <meta itemProp="description" content={video.description} />
                <meta itemProp="uploadDate" content={video.uploadDate} />
                <meta itemProp="duration" content={video.duration} />
                <meta itemProp="thumbnailUrl" content={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} />
                <meta itemProp="embedUrl" content={`https://www.youtube.com/embed/${video.youtubeId}`} />

                <div className="w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <FaYoutube className="text-red-600" />
                    <span className="text-xs font-medium text-gray-500">YouTube</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h2>
                  <p className="text-gray-600">{video.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Duration: {video.duration.replace("PT", "").replace("M", ":").replace("S", "")}
                    </span>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Watch Full Video →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Want More Free Tutorials?</h2>
              <p className="text-gray-600">Subscribe to our YouTube channel for regular computer training content</p>
            </div>
            <a
              href="https://www.youtube.com/@sefclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <FaYoutube className="mr-2 text-xl" />
              Visit Our YouTube Channel
            </a>
            <div className="mt-6 text-gray-600">
              <p>For personalized training, visit our centers in Mukund Pur or West Kamal Vihar, Delhi</p>
              <p className="mt-2 text-sm">
                Call: <a href="tel:8860448368" className="text-blue-600">8860448368</a> /{" "}
                <a href="tel:8860448399" className="text-blue-600">8860448399</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
