import { CardResource } from "./components/CardResource";
import { AccessIcon } from "../Icons/AccessIcon";
import { BackupIcon } from "../Icons/BackupIcon";
import { BarIcon } from "../Icons/BarIcon";
import { CloudIcon } from "../Icons/CloudIcon";
import { MobileIcon } from "../Icons/MobileIcon";
import { PreparationIcon } from "../Icons/PreparationIcon";
import { ReachingIcon } from "../Icons/ReachingIcon";
import { SharingIcon } from "../Icons/SharingIcon";
import { VerifieldIcon } from "../Icons/VerifieldIcon";

const resources = [
  {
    icon: <CloudIcon />,
    title: "Secure Cloud Storage",
    description:
      "Store your data securely in the CloudBoost cloud, with advanced encryption and robust security measures to protect your sensitive information.",
  },
  {
    icon: <BackupIcon />,
    title: "Automated Backup",
    description:
      "Keep your data safe and secure with regular automated backups, ensuring the availability and integrity of your files in the event of failures or disasters.",
  },
  {
    icon: <ReachingIcon />,
    title: "Flexible Scalability",
    description:
      "Leverage the ability to scale storage and processing resources as needed, enabling your business to grow seamlessly and adapt to market demands.",
  },
  {
    icon: <VerifieldIcon />,
    title: "Disaster Recovery",
    description:
      "Be prepared for any eventuality with efficient disaster recovery plans, ensuring business continuity even in emergency situations.",
  },
  {
    icon: <SharingIcon />,
    title: "Real-Time Collaboration",
    description:
      "Facilitate collaboration between geographically distributed teams with real-time file sharing and collaboration capabilities, enabling everyone to work effectively regardless of location.",
  },
  {
    icon: <MobileIcon />,
    title: "Integration with Applications",
    description:
      "Easily integrate CloudBoost with your existing applications and systems, ensuring a seamless and integrated user experience for your employees and customers.",
  },
  {
    icon: <AccessIcon />,
    title: "Simplified Data Management",
    description:
      "Simplify data management with an intuitive, easy-to-use interface, allowing you to organize, classify and access your files easily and efficiently.",
  },
  {
    icon: <BarIcon />,
    title: "Advanced Data Analysis",
    description:
      "Extract valuable insights from your data with advanced analysis and visualization tools, allowing you to make informed and strategic decisions for your business.",
  },
  {
    icon: <PreparationIcon />,
    title: "Monitoring and Reporting",
    description:
      "Monitor the performance and usage of your cloud resources with real-time monitoring tools and generate detailed reports to optimize usage and reduce costs.",
  },
];

export function Resources() {
  return (
    <section className="bg-white px-6 py-10">
      <h1 className="text-lg leading-6 font-medium text-neutral-950 text-center">
        Explore Our Cutting-Edge Resources
      </h1>

      <p className="text-sm font-medium text-neutral-600 text-center mt-2">
        Discover How CloudBoost Can Transform Your Cloud Experience
      </p>

      <div className="flex flex-col gap-4 mt-6">
        {resources.map((resource) => {
          return (
            <CardResource
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
            />
          );
        })}
      </div>
    </section>
  );
}
