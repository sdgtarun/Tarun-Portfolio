import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function ChatBubble() {
  return (
    <a
  href="https://wa.me/917093161409?text=Hi%20Tarun,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="fixed bottom-6 right-6 z-50"
>
      <motion.div
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
        <MessageCircle className="relative h-6 w-6" />
      </motion.div>
    </a>
  );
}
