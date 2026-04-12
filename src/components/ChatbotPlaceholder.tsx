"use client";
import { MessageCircle } from "lucide-react";

/**
 * Chatbot placeholder — ready for Medium Chat integration.
 * Replace this component's content with the Medium Chat embed script/widget.
 */
export default function ChatbotPlaceholder() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        className="w-14 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat"
        title="Chat with us — coming soon"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </div>
      {/* Pulse ring */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-white" />
    </div>
  );
}
