import { AccessIcon } from "../components/Icons/AccessIcon";
import { BackupIcon } from "../components/Icons/BackupIcon";
import { BarIcon } from "../components/Icons/BarIcon";
import { CloudIcon } from "../components/Icons/CloudIcon";
import { MobileIcon } from "../components/Icons/MobileIcon";
import { PreparationIcon } from "../components/Icons/PreparationIcon";
import { ReachingIcon } from "../components/Icons/ReachingIcon";
import { SharingIcon } from "../components/Icons/SharingIcon";
import { VerifieldIcon } from "../components/Icons/VerifieldIcon";
import { CheckIcon } from "@/components/Icons/CheckIcon";

import EllipseOne from "../assets/ellipse-1.png";
import EllipseTwo from "../assets/ellipse-2.png";
import EllipseThree from "../assets/ellipse-3.png";

export const resources = [
  {
    id: 1,
    icon: <CloudIcon />,
    title: "Secure Cloud Storage",
    description:
      "Store your data securely in the CloudBoost cloud, with advanced encryption and robust security measures to protect your sensitive information.",
  },
  {
    id: 2,
    icon: <BackupIcon />,
    title: "Automated Backup",
    description:
      "Keep your data safe and secure with regular automated backups, ensuring the availability and integrity of your files in the event of failures or disasters.",
  },
  {
    id: 3,
    icon: <ReachingIcon />,
    title: "Flexible Scalability",
    description:
      "Leverage the ability to scale storage and processing resources as needed, enabling your business to grow seamlessly and adapt to market demands.",
  },
  {
    id: 4,
    icon: <VerifieldIcon />,
    title: "Disaster Recovery",
    description:
      "Be prepared for any eventuality with efficient disaster recovery plans, ensuring business continuity even in emergency situations.",
  },
  {
    id: 5,
    icon: <SharingIcon />,
    title: "Real-Time Collaboration",
    description:
      "Facilitate collaboration between geographically distributed teams with real-time file sharing and collaboration capabilities, enabling everyone to work effectively regardless of location.",
  },
  {
    id: 6,
    icon: <MobileIcon />,
    title: "Integration with Applications",
    description:
      "Easily integrate CloudBoost with your existing applications and systems, ensuring a seamless and integrated user experience for your employees and customers.",
  },
  {
    id: 7,
    icon: <AccessIcon />,
    title: "Simplified Data Management",
    description:
      "Simplify data management with an intuitive, easy-to-use interface, allowing you to organize, classify and access your files easily and efficiently.",
  },
  {
    id: 8,
    icon: <BarIcon />,
    title: "Advanced Data Analysis",
    description:
      "Extract valuable insights from your data with advanced analysis and visualization tools, allowing you to make informed and strategic decisions for your business.",
  },
  {
    id: 9,
    icon: <PreparationIcon />,
    title: "Monitoring and Reporting",
    description:
      "Monitor the performance and usage of your cloud resources with real-time monitoring tools and generate detailed reports to optimize usage and reduce costs.",
  },
];

export const faqs = [
  {
    id: 1,
    title: "What is CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 2,
    title: "What are the main benefits of using CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 3,
    title: "What types of companies can benefit from CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 4,
    title: " What services does CloudBoost offer besides cloud storage?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 5,
    title: "How can I migrate my data to CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 6,
    title: "Does CloudBoost offer technical support?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 7,
    title: "Does CloudBoost guarantee the security of my data",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 8,
    title: "Can I customize CloudBoost plans according to my company's needs?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 9,
    title: "How do I get started with CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    id: 10,
    title: " What payment methods does CloudBoost accept?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
];

export const plans = [
  {
    id: 1,
    title: "Enterprise",
    price: "$20/month",
    infos: [
      {
        id: 1,
        icon: <CheckIcon color="white" />,
        info: "Storage: 1 TB",
      },
      {
        id: 2,
        icon: <CheckIcon color="white" />,
        info: "Data Transfer: 1 TB/month",
      },
      {
        id: 3,
        icon: <CheckIcon color="white" />,
        info: "Technical Support: Email, Chat and Telephone (24/7)",
      },
      {
        id: 4,
        icon: <CheckIcon color="white" />,
        info: "Advanced Features: Automated Backup, Advanced Security",
      },
    ],
    color: true,
  },
  {
    id: 2,
    title: "Starter",
    price: "$5/month",
    infos: [
      {
        id: 1,
        icon: <CheckIcon />,
        info: "Storage: 50 MB",
      },
      {
        id: 2,
        icon: <CheckIcon />,
        info: "Data Transfer: 100 GB/month",
      },
      {
        id: 3,
        icon: <CheckIcon />,
        info: "Technical Support: Email",
      },
    ],
    color: false,
  },
  {
    id: 3,
    title: "Business",
    price: "$10/month",
    infos: [
      {
        id: 1,
        icon: <CheckIcon />,
        info: "Storage: 200 GB",
      },
      {
        id: 2,
        icon: <CheckIcon />,
        info: "Data Transfer: 500 GB/month",
      },
      {
        id: 3,
        icon: <CheckIcon />,
        info: "Technical Support: Email and Chat",
      },
      {
        id: 4,
        icon: <CheckIcon />,
        info: "Advanced Features: Automated Backup",
      },
    ],
    color: false,
  },
  {
    id: 4,
    title: "Custom",
    price: "Price on request",
    infos: [
      {
        id: 1,
        icon: <CheckIcon />,
        info: "On demand",
      },
      {
        id: 2,
        icon: <CheckIcon />,
        info: "Data Transfer: On demand",
      },
      {
        id: 3,
        icon: <CheckIcon />,
        info: "Technical Support: Personalized",
      },
      {
        id: 4,
        icon: <CheckIcon />,
        info: "Advanced Features: Custom",
      },
    ],
    color: false,
  },
];

export const feedbacks = [
  {
    id: 1,
    description:
      "CloudBoost has been an incredible partner for our company. With its flexible scalability and advanced real-time collaboration capabilities, we have been able to significantly improve our operational efficiency and adapt our resources according to customer needs. business. Technical support has also been exceptional. Definitely a smart choice for any company looking for reliable cloud solutions.",
    image: EllipseOne,
    name: "Pedro Oliveira",
    office: "IT Director at GlobalTech",
  },
  {
    id: 2,
    description:
      "We are extremely pleased with CloudBoost. The platform offers a complete solution for cloud storage, automated backup and disaster recovery. Since migrating to CloudBoost, our team has enjoyed greater security and peace of mind in regarding our data. I recommend it without hesitation!",
    image: EllipseTwo,
    name: "Luciana Costa",
    office: "CEO of TechSolutions",
  },
  {
    id: 3,
    description:
      "As a fast-growing startup, we needed a cloud storage solution that was reliable, secure and affordable. We found all this and more at CloudBoost. Its intuitive interface and efficient technical support helped us streamline our operations and focus on growing our business. We are extremely pleased with our choice.",
    image: EllipseThree,
    name: "Ana Santos",
    office: "Project Manager at StartUpX",
  },
];
