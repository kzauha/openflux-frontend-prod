import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, MessageSquare, Send, ChevronRight, History, Trash2, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  type: "user" | "system";
  content: string;
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  isFavorite?: boolean;
  messages: Message[];
}

const StrategyMinerTerminal = () => {
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    const saved = localStorage.getItem("flux-terminal-sessions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((s: any) => ({
          ...s,
          timestamp: new Date(s.timestamp),
          messages: s.messages.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          }))
        }));
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeSessionId, setActiveSessionId] = useState<string | null>(() => {
    return localStorage.getItem("flux-terminal-active-id");
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Persistence effect
  useEffect(() => {
    localStorage.setItem("flux-terminal-sessions", JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    if (activeSessionId) {
      localStorage.setItem("flux-terminal-active-id", activeSessionId);
    } else {
      localStorage.removeItem("flux-terminal-active-id");
    }
    // Autofocus when switching
    textareaRef.current?.focus();
  }, [activeSessionId]);

  // Global focus listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in another input/textarea
      if (
        document.activeElement?.tagName === "INPUT" || 
        document.activeElement?.tagName === "TEXTAREA"
      ) return;

      // Don't intercept modifier keys alone
      if (["Shift", "Control", "Alt", "Meta"].includes(e.key)) return;

      // Focus and let the key be captured if it's a character or common typing key
      if (e.key.length === 1 || ["Enter", "Backspace", "Delete"].includes(e.key)) {
        textareaRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // Auto-expand textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  // Get active session messages
  const activeSession = sessions.find(s => s.id === activeSessionId);
  const currentMessages = activeSession ? activeSession.messages : [
    {
      id: "initial",
      type: "system" as const,
      content: "OpenFlux Research Engine online. You are currently in the CLOUD path, querying pre-mined strategies from our standard configurations. Describe your asset and risk tolerance to explore matching rules.",
      timestamp: new Date(),
    }
  ];

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [currentMessages, isTyping]);

  const handleNewChat = () => {
    setActiveSessionId(null);
    setInput("");
    textareaRef.current?.focus();
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    const messageId = Math.random().toString(36).substring(7);
    const newMessage: Message = {
      id: messageId,
      type: "user",
      content: userMessage,
      timestamp: new Date()
    };
    
    let currentSessionId = activeSessionId;
    
    // Create new session if none active
    if (!currentSessionId) {
      currentSessionId = Math.random().toString(36).substring(7);
      const newSession: ChatSession = {
        id: currentSessionId,
        title: userMessage,
        lastMessage: userMessage,
        timestamp: new Date(),
        isFavorite: false,
        messages: [newMessage]
      };
      setSessions(prev => [newSession, ...prev]);
      setActiveSessionId(currentSessionId);
    } else {
      // Add message to existing session
      setSessions(prev => prev.map(s => 
        s.id === currentSessionId 
          ? { 
              ...s, 
              lastMessage: userMessage, 
              timestamp: new Date(),
              messages: [...s.messages, newMessage] 
            } 
          : s
      ));
    }
    
    setInput("");
    setIsTyping(true);
    
    const sid = currentSessionId;
    // Simple mock response
    setTimeout(() => {
      setIsTyping(false);
      const systemMessage: Message = {
        id: Math.random().toString(36).substring(7),
        type: "system",
        content: `Acknowledged. I'm analyzing your request for: "${userMessage}". Data retrieval in progress.`,
        timestamp: new Date()
      };
      
      setSessions(prev => prev.map(s => 
        s.id === sid 
          ? { ...s, messages: [...s.messages, systemMessage] } 
          : s
      ));
      
      // Focus after response
      textareaRef.current?.focus();
    }, 1000);
  };

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const deleteSession = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSessions(prev => prev.filter(s => s.id !== id));
    if (activeSessionId === id || sessions.length === 1) {
      handleNewChat();
    }
  };

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSessions(prev => prev.map(s => 
      s.id === id ? { ...s, isFavorite: !s.isFavorite } : s
    ));
  };

  const filteredSessions = sessions.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full w-full bg-background border-t border-border overflow-hidden">
      {/* Sidebar: New Chat & History */}
      <aside className="w-72 border-r border-border flex flex-col bg-card/40 shrink-0 hidden md:flex">
        <div className="p-4 space-y-4">
          <Button 
            onClick={handleNewChat}
            className="w-full justify-start gap-3 bg-accent text-background hover:bg-accent/90 border-none font-bold rounded-xl h-11 shadow-md transition-transform active:scale-95"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </Button>

          <div className="relative group/search">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within/search:text-accent transition-colors" />
            <input 
              type="text"
              placeholder="Search history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/80 border border-border rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-bold"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1.5">
          {filteredSessions.length === 0 && (
            <div className="py-20 text-center px-4">
              <p className="text-[10px] text-white/10 font-black uppercase tracking-[0.2em] leading-relaxed">
                {searchQuery ? "No results found" : "Your research sessions will be saved here"}
              </p>
            </div>
          )}
          
          <AnimatePresence initial={false}>
            {filteredSessions.map(session => (
              <motion.div 
                key={session.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setActiveSessionId(session.id)}
                className={`w-full group relative p-3.5 rounded-xl transition-all cursor-pointer border ${activeSessionId === session.id ? 'bg-secondary border-border shadow-lg' : 'hover:bg-secondary/30 border-transparent'}`}
              >
                <div className="flex items-start gap-3 pr-8">
                  <MessageSquare className={`w-4 h-4 mt-0.5 shrink-0 ${activeSessionId === session.id ? 'text-accent' : 'text-white/20'}`} />
                  <div className="min-w-0">
                    <p className={`text-xs font-black truncate transition-colors ${activeSessionId === session.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                      {session.title}
                    </p>
                    <p className="text-[10px] text-white/20 mt-1 font-bold">
                      {session.timestamp.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 transition-opacity ${session.isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <button 
                    onClick={(e) => toggleFavorite(e, session.id)}
                    className={`p-1.5 rounded-lg hover:bg-white/10 transition-colors ${session.isFavorite ? 'text-accent shadow-glow' : 'text-white/20'}`}
                  >
                    <Star className={`w-3.5 h-3.5 ${session.isFavorite ? 'fill-accent' : ''}`} />
                  </button>
                  <button 
                    onClick={(e) => deleteSession(e, session.id)}
                    className={`p-1.5 rounded-lg hover:bg-destructive/10 text-white/20 hover:text-destructive transition-colors ${session.isFavorite ? 'opacity-0 group-hover:opacity-100' : ''}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </aside>

      {/* Main Chat Area */}
      <section className="flex-1 flex flex-col min-w-0 bg-background relative">
        {/* Chat Feed */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-12 lg:px-24 py-12 space-y-12"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {currentMessages.map((msg, idx) => {
              const prevMsg = currentMessages[idx - 1];
              const isGrouped = prevMsg && prevMsg.type === msg.type;
              
              return (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.type === "user" ? "items-end" : "items-start"} ${isGrouped ? '-mt-8' : ''}`}
                >
                  <div className={`max-w-[85%] md:max-w-[75%] lg:max-w-[65%] flex flex-col ${msg.type === "user" ? "items-end" : "items-start"}`}>
                    <div className={`px-6 py-4 rounded-2xl shadow-xl border ${
                      msg.type === "user" 
                        ? "bg-accent/10 border-accent/20 rounded-tr-none text-white font-black" 
                        : "bg-card border-border rounded-tl-none text-white/90 font-medium"
                    } ${isGrouped ? (msg.type === 'user' ? 'rounded-br-none' : 'rounded-bl-none') : ''}`}>
                      <p className="text-[16px] leading-[1.6] whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    {!isGrouped && (
                      <span className="mt-3 text-[10px] text-white/30 font-black tracking-[0.2em] uppercase">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {isTyping && (
            <div className="flex items-center gap-3 text-accent bg-accent/5 border border-accent/10 px-5 py-3 rounded-2xl rounded-tl-none w-fit shadow-lg shadow-accent/5">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-accent rounded-full animate-bounce" />
              </div>
            </div>
          )}
        </div>

        {/* Balanced "Medium" Input Area */}
        <div className="p-7 md:px-11 lg:px-22 bg-background border-t border-border">
          <form onSubmit={handleSubmit} className="relative max-w-5xl mx-auto flex items-center group/input">
            <textarea
              ref={textareaRef}
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeydown}
              disabled={isTyping}
              placeholder="Mine strategy for..."
              rows={1}
              className="w-full bg-secondary/30 border border-border/80 rounded-xl py-5 pl-7 pr-20 text-[17px] text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all disabled:opacity-50 shadow-xl font-bold resize-none overflow-hidden min-h-[68px]"
            />
            <div className="absolute right-3.5 bottom-3.5">
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="p-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-all disabled:opacity-20 shadow-lg active:scale-95 flex items-center gap-2 group-hover/input:shadow-accent/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Subtle Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}} />
    </div>
  );
};

export default StrategyMinerTerminal;
