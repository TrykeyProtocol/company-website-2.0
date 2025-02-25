// pages/support.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Message {
  id: string;
  text: string;
  sender: "user" | "support";
  timestamp: Date;
  avatarSrc?: string;
}

interface SuggestedQuestion {
  id: string;
  text: string;
}

const SupportChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [chatStarted, setChatStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const suggestedQuestions: SuggestedQuestion[] = [
    { id: "q1", text: "How can I set a Geo-fence?" },
    { id: "q2", text: "How to buy trykey kit?" },
    { id: "q3", text: "How to buy trykey kit?" },
    { id: "q4", text: "How can I set a Geo-fence?" },
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const startChat = () => {
    setChatStarted(true);
    
    // Add initial support message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "Hi there, Let me know you need help and you can ask us any questions.",
      sender: "support",
      timestamp: new Date(),
      avatarSrc: "/support-avatar.png"
    };
    
    setMessages([welcomeMessage]);
    
    // Focus on input field
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate support response after a delay
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponseForMessage(inputText),
        sender: "support",
        timestamp: new Date(),
        avatarSrc: "/support-avatar.png"
      };
      
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
    
    // Simulate typing and sending
    setTimeout(() => {
      handleSendMessage();
    }, 500);
  };

  // Simple response logic (replace with actual support logic)
  const getResponseForMessage = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes("password") || lowerMsg.includes("forgot")) {
      return "Click \"Forgot Password\" on the login page, enter your registered email, and follow the instructions sent to reset your password.";
    } else if (lowerMsg.includes("geo-fence") || lowerMsg.includes("geo fence")) {
      return "To set up a Geo-fence, go to Settings > Location > Geo-fence and tap '+' to add a new boundary.";
    } else if (lowerMsg.includes("trykey") || lowerMsg.includes("kit")) {
      return "You can purchase the trykey kit from our website shop or from authorized retailers listed in the 'Where to Buy' section.";
    } else {
      return "I understand your question. Let me connect you with a specialist who can help you with that. Is there anything specific you'd like them to know?";
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white py-3 px-4 flex items-center shadow-sm">
        <div className="text-gray-500">
          <Link href="/profile">
            <ArrowLeft size={20} />
          </Link>
        </div>
        <div className="flex-1 text-center font-medium">Support</div>

      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {!chatStarted ? (
          <div className="h-full flex flex-col items-center justify-center">
            <Image src={"/images/dashboard/support.svg"} alt={""} width={64} height={64} className=" -mb-6 z-10" />
            <div className="bg-white p-4 rounded-lg shadow-sm max-w-xs text-center mb-8">
              <p className="text-sm">
                Ask us anything, or share your feedback with us
              </p>
            </div>
            <button 
              onClick={startChat}
              className="bg-black text-white py-3 px-6 rounded-lg font-medium"
            >
              Start Chat
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'support' && (
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-400 flex items-center justify-center text-white">
                      <Image 
                        src={message.avatarSrc || "/support-avatar.png"}
                        alt="Support Agent"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className="flex flex-col">
                  <div 
                    className={`max-w-xs sm:max-w-md rounded-lg px-4 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-orange-100 text-orange-800 rounded-br-none' 
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleSuggestedQuestion(question.text)}
                    className="border border-orange-300 rounded-full px-3 py-1 text-xs text-gray-800"
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      {chatStarted && (
        <div className="bg-white p-5 border-t flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a comment"
            className="flex-1 rounded-3xl py-2 px-3 focus:outline-none text-sm bg-gray-100"
          />
          <button 
            onClick={handleSendMessage}
            className={`ml-2 p-2 rounded-full ${inputText.trim() ? 'text-orange-500' : 'text-gray-300'}`}
            disabled={!inputText.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SupportChat;