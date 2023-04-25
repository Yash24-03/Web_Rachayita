import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Resources() {
  const resources = [
    {
      title: "10 Tips for Better Time Management",
      description:
        "Learn how to better manage your time with these helpful tips.",
      link: "https://example.com/article1",
    },
    {
      title: "The Science of Productivity",
      description:
        "This video explains the science behind productivity and how to apply it in your daily life.",
      link: "https://example.com/video1",
    },
    {
      title: "The Tim Ferriss Show",
      description:
        "Listen to interviews with top performers and learn their strategies for success.",
      link: "https://example.com/podcast1",
    },
    {
      title: "Trello",
      description:
        "This tool helps you organize your tasks and stay on top of your to-do list.",
      link: "https://trello.com/",
    },
  ];

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
                <p className="text-gray-700 mb-4">{resource.description}</p>
              </div>
              <div>
                <a
                  href={resource.link}
                  className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                  <span>Read More</span>
                  <FaExternalLinkAlt className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Additional Tips</h2>
          <ul className="list-disc list-inside">
            <li>
              Tip 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>
              Tip 2: Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem.
            </li>
            <li>
              Tip 3: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default Resources;
