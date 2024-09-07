import {
  DocumentIcon,
  ChatBubbleLeftIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/16/solid";
import { BarcodeIcon } from "lucide-react";

export const MENU_ITEMS = [
  {
    icon: BarcodeIcon,
    title: "Scan Produk",
    url: "/produk",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Monitor Asupan Gula",
    url: "/monitor",
  },
  {
    icon: ChatBubbleLeftIcon,
    title: "Konsultasi Dokter",
    url: "/konsultasi",
  },
  {
    icon: DocumentIcon,
    title: "Artikel Kesehatan",
    url: "/artikel",
  },
];
