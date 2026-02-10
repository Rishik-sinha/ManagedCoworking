/**
 * Core amenities & services offered across all CoWorkHub locations.
 */
import {
  Wifi,
  Coffee,
  Shield,
  Zap,
  Users,
  Printer,
  Car,
  MonitorSmartphone,
  Dumbbell,
  CalendarCheck,
  Headphones,
  Lock,
} from "lucide-react";

const amenities = [
  {
    id: 1,
    title: "High-Speed WiFi",
    description: "Enterprise-grade 1 Gbps fibre with redundant backup lines ensuring zero downtime.",
    icon: Wifi,
  },
  {
    id: 2,
    title: "Unlimited Coffee & Tea",
    description: "Freshly brewed artisan coffee, premium teas, and healthy snacks available all day.",
    icon: Coffee,
  },
  {
    id: 3,
    title: "24/7 Security",
    description: "Biometric access, CCTV surveillance, and on-site security personnel round the clock.",
    icon: Shield,
  },
  {
    id: 4,
    title: "Power Backup",
    description: "Uninterrupted power supply with instant-switch generators so work never stops.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Meeting Rooms",
    description: "Soundproof, AV-equipped conference rooms bookable by the hour for client calls and pitches.",
    icon: Users,
  },
  {
    id: 6,
    title: "Print & Scan",
    description: "High-speed multifunction printers and scanners included in every membership plan.",
    icon: Printer,
  },
  {
    id: 7,
    title: "Dedicated Parking",
    description: "Covered two-wheeler and four-wheeler parking at all locations, free for members.",
    icon: Car,
  },
  {
    id: 8,
    title: "Smart Desks",
    description: "Ergonomic sit-stand desks with integrated charging ports and cable management.",
    icon: MonitorSmartphone,
  },
  {
    id: 9,
    title: "Wellness Zone",
    description: "On-site gym, nap pods, and meditation corners to recharge between work sessions.",
    icon: Dumbbell,
  },
  {
    id: 10,
    title: "Event Space",
    description: "Host workshops, meetups, and launch parties in our fully equipped event halls.",
    icon: CalendarCheck,
  },
  {
    id: 11,
    title: "Phone Booths",
    description: "Soundproof individual pods for private calls, virtual meetings, and focused deep work.",
    icon: Headphones,
  },
  {
    id: 12,
    title: "Personal Lockers",
    description: "Secure personal lockers for members to store laptops, documents, and belongings safely.",
    icon: Lock,
  },
];

export default amenities;
