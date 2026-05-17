import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/918296748983" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
