import { useState, useRef, useEffect } from "react";

// ─── SYSTEM PROMPT ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are a friendly, professional AI assistant for Camluk Technologies.
Answer questions accurately using the company information below.

FORMATTING RULES — always follow these:
- Use **bold** for service names, headings, and key terms (e.g. **IT Support**)
- Use bullet points (starting with "• ") for lists of services, features, or steps
- Use numbered lists (1. 2. 3.) for processes or sequences
- Add a blank line between sections for breathing room
- Keep each bullet point to 1 short sentence
- For simple one-topic questions, answer in 2-3 plain sentences — no bullets needed
- Always end with a friendly follow-up question or call to action
- Never write walls of text — break things up

---

COMPANY OVERVIEW
Name: Camluk Technologies (Pty) Ltd
Tagline: Empowering businesses with cutting-edge IT solutions, innovative software development, and reliable digital services for a smarter future.
Address: 11th Street, Kensington, Cape Town, South Africa, 7405
Phone: +27 62 107 1140
Email: support@camluk.co.za
Website: www.camluk.co.za

MISSION
To drive digital transformation by providing businesses with tailored IT solutions that foster growth, innovation, and efficiency. We bridge the gap between technology and business with scalable services that evolve with our clients.

VISION
To become a key player in the digital landscape — within South Africa, across Africa, and ultimately globally. Starting from Cape Town and expanding into key cities and regions across Southern Africa.

---

OUR SERVICES

1. IT Support (On-Site & Remote)
   - On-site and remote technical support
   - Quick diagnosis and resolution of technical issues
   - Minimise downtime and maximise business efficiency
   - Ongoing system monitoring and updates
   - Proactive cybersecurity support

2. IT Installations
   - Hardware and infrastructure installations
   - Network setup and configuration
   - On-site installation services for businesses of all sizes

3. Web Development
   - Dynamic, responsive, SEO-optimised websites
   - Help businesses establish and grow their online presence
   - Custom-built to attract customers and stay competitive

4. Software Development
   - Custom software solutions built to client specifications
   - Streamline and automate business operations
   - Enhance productivity, scalability, and performance

5. Computer Academy
   - Practical, industry-relevant IT courses
   - Equipping students with skills to excel in tech
   - Bridging the digital skills gap across sectors

6. Quick Office & Design
   - Walk-in printing, copying, scanning, emailing
   - Graphic design and branding support
   - Fast and reliable turnaround

---

HOW WE WORK
1. Consultation — assess systems, requirements, and craft a strategic plan
2. Implementation — develop software, build websites, set up IT infrastructure
3. Support — ongoing monitoring, updates, remote and on-site assistance

---

WHO WE SERVE
Individuals, startups, SMEs, and large enterprises across retail, healthcare, education, finance, manufacturing, and logistics.

---

OUR TEAM
- IT Support Technicians — Qualified IT Technicians
- Software Engineer — Custom software and web development

---

OUR VALUES
- Innovation & Excellence - We deliver cutting-edge solutions
- Customer-Centric Approach - Your success is our priority
- Integrity & Reliability - We operate with transparency and professionalism
- Collaboration & Growth - We believe in teamwork and continuous learning

---

WHY CHOOSE US
The Camluk Advantage
- Customer-Centric Approach
- Scalable & Reliable Solutions
- Experienced IT Professionals
- Innovative Technology
- End-to-End Digital Services

---

BEHAVIOURS
- PRICING: Never give specific prices. Encourage a free consultation.
- LEAD CAPTURE: If they show buying intent, ask for name/email to connect with the team.
- CONTACT: Remind users they can reach Camluk at support@camluk.co.za or +27 62 107 1140.`;

const QUICK_REPLIES = [
  "What services do you offer?",
  "I need a website",
  "IT support for my business",
  "Computer Academy courses",
  "Get a quote",
];

// ─── MARKDOWN RENDERER ────────────────────────────────────────────────────────
function renderMessage(text) {
  const lines = text.split("\n");
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "") {
      elements.push(<div key={key++} style={{ height: 6 }} />);
      continue;
    }
    if (line.trim().startsWith("• ") || line.trim().startsWith("- ")) {
      const content = line.trim().replace(/^[•\-]\s/, "");
      elements.push(
        <div key={key++} style={msgStyles.bullet}>
          <span style={msgStyles.bulletDot}>•</span>
          <span>{renderInline(content)}</span>
        </div>
      );
      continue;
    }
    const numberedMatch = line.trim().match(/^(\d+)\.\s(.+)/);
    if (numberedMatch) {
      elements.push(
        <div key={key++} style={msgStyles.bullet}>
          <span style={msgStyles.bulletNum}>{numberedMatch[1]}.</span>
          <span>{renderInline(numberedMatch[2])}</span>
        </div>
      );
      continue;
    }
    elements.push(<div key={key++} style={msgStyles.line}>{renderInline(line)}</div>);
  }
  return elements;
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} style={msgStyles.bold}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

const msgStyles = {
  bullet: { display: "flex", gap: "0.4rem", alignItems: "flex-start", marginBottom: 3 },
  bulletDot: { color: "#f5a623", fontWeight: 700, flexShrink: 0, marginTop: 1, fontSize: 13 },
  bulletNum: { color: "#f5a623", fontWeight: 700, flexShrink: 0, marginTop: 1, fontSize: 12, minWidth: 16 },
  line: { marginBottom: 2, lineHeight: 1.55 },
  bold: { fontWeight: 600, color: "#ffffff" },
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div style={styles.msgRow}>
      <div style={styles.botAvatar}>CL</div>
      <div style={styles.typingBubble}>
        <span style={{ ...styles.dot, animation: "camluk-bounce 1.4s infinite", animationDelay: "0s" }} />
        <span style={{ ...styles.dot, animation: "camluk-bounce 1.4s infinite", animationDelay: "0.15s" }} />
        <span style={{ ...styles.dot, animation: "camluk-bounce 1.4s infinite", animationDelay: "0.3s" }} />
      </div>
    </div>
  );
}

function LeadForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div style={styles.leadForm}>
      <p style={styles.leadFormText}>Drop your details and our team will get back to you within 24 hours.</p>
      <input style={styles.leadInput} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
      <input style={styles.leadInput} placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button style={styles.leadSubmit} onClick={() => { if (name.trim() && email.trim()) onSubmit(name.trim(), email.trim()); }}>
        Send my details →
      </button>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [apiHistory, setApiHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const initialised = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, showLeadForm]);

  useEffect(() => {
    if (isOpen && !initialised.current) {
      initialised.current = true;
      setMessages([{
        role: "bot",
        text: "Hey there! 👋 I'm the **Camluk Technologies** AI assistant.\n\nI can help you with:\n• Questions about our services\n• IT support and installations\n• Web & software development\n• Our Computer Academy\n• Getting a quote\n\nHow can I help you today?",
      }]);
      setShowQuickReplies(true);
    }
  }, [isOpen]);

  const callClaude = async (userMessage, history) => {
    // UPDATED: Now calls your Afrihost PHP proxy to bypass CORS and hide API key
    const currentHistory = [...history, { role: "user", content: userMessage }];
    
    const res = await fetch("/chat-proxy.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        history: currentHistory,
        systemPrompt: SYSTEM_PROMPT,
      }),
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    const reply = data.content?.[0]?.text ?? "I'm having trouble connecting right now.";

    return { 
      reply, 
      newHistory: [...currentHistory, { role: "assistant", content: reply }] 
    };
  };

  const handleUserInput = async (text) => {
    if (!text.trim() || isTyping) return;
    setShowQuickReplies(false);
    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsTyping(true);

    try {
      const { reply, newHistory } = await callClaude(text, apiHistory);
      setApiHistory(newHistory);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);

      const lower = (text + reply).toLowerCase();
      if (!leadCaptured && (lower.includes("quote") || lower.includes("pricing") || lower.includes("cost"))) {
        setShowLeadForm(true);
      }
    } catch {
      setMessages((prev) => [...prev, {
        role: "bot",
        text: "Hmm, I'm having a moment. Please try again or reach us at:\n\n• **Email:** support@camluk.co.za\n• **Phone:** +27 62 107 1140",
      }]);
    }
    setIsTyping(false);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    handleUserInput(text);
  };

  const handleLeadSubmit = (name, email) => {
    setShowLeadForm(false);
    setLeadCaptured(true);
    setMessages((prev) => [...prev, {
      role: "bot",
      text: `Thanks **${name}**! ✅\n\nWe've got your details and someone from the team will reach out to **${email}** shortly.`,
    }]);
  };

  return (
    <>
      <style>{`
        @keyframes camluk-bounce { 0%,60%,100%{transform:translateY(0);background:#333} 30%{transform:translateY(-5px);background:#f5a623} }
        @keyframes camluk-msg-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes camluk-pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.35);opacity:.7} }
        .camluk-msg { animation: camluk-msg-in 0.28s cubic-bezier(0.34,1.3,0.64,1); }
        .camluk-fab:hover { transform:scale(1.09) !important; }
        .camluk-qr:hover { border-color:#f5a623 !important; color:#f5a623 !important; }
      `}</style>

      <button className="camluk-fab" onClick={() => setIsOpen(o => !o)} style={styles.fab}>
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div style={styles.window}>
          <div style={styles.header}>
            <div style={styles.avatar}>CL</div>
            <div style={{ flex: 1 }}>
              <div style={styles.headerName}>Camluk Technologies</div>
              <div style={styles.headerStatus}>Online</div>
            </div>
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div style={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className="camluk-msg" style={msg.role === "user" ? styles.userRow : styles.msgRow}>
                {msg.role === "bot" && <div style={styles.botAvatar}>CL</div>}
                <div style={msg.role === "user" ? styles.userBubble : styles.botBubble}>
                  {msg.role === "bot" ? renderMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {showQuickReplies && (
              <div style={styles.quickReplies}>
                {QUICK_REPLIES.map(qr => (
                  <button key={qr} className="camluk-qr" style={styles.qrBtn} onClick={() => handleUserInput(qr)}>{qr}</button>
                ))}
              </div>
            )}
            {isTyping && <TypingIndicator />}
            {showLeadForm && <LeadForm onSubmit={handleLeadSubmit} />}
            <div ref={messagesEndRef} />
          </div>

          <div style={styles.inputArea}>
            <div style={styles.inputRow}>
              <textarea
                style={styles.textarea}
                rows={1}
                placeholder="Type your question…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              />
              <button style={styles.sendBtn} onClick={handleSend} disabled={isTyping}>➤</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  fab: { position: "fixed", bottom: "1.25rem", right: "1.90rem", width: 56, height: 56, borderRadius: "50%", background: "#f5a623", border: "none", cursor: "pointer", fontSize: "24px", color: "white", zIndex: 9999, transition: "0.3s" },
  window: { position: "fixed", bottom: "5.25rem", right: "1.75rem", width: 350, height: 500, background: "#111", border: "1px solid #222", borderRadius: 18, display: "flex", flexDirection: "column", overflow: "hidden", zIndex: 9998 },
  header: { padding: "1rem", background: "#1a1a1a", borderBottom: "1px solid #222", display: "flex", alignItems: "center", gap: "0.75rem" },
  avatar: { width: 32, height: 32, borderRadius: "50%", background: "#f5a623", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px", color: "white" },
  headerName: { fontSize: "14px", fontWeight: "600", color: "#eee" },
  headerStatus: { fontSize: "11px", color: "#4caf50" },
  closeBtn: { background: "none", border: "none", color: "#555", cursor: "pointer" },
  messages: { flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" },
  msgRow: { display: "flex", gap: "0.5rem", alignItems: "flex-end" },
  userRow: { display: "flex", gap: "0.5rem", alignItems: "flex-end", flexDirection: "row-reverse" },
  botAvatar: { width: 24, height: 24, borderRadius: "50%", background: "#f5a623", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "white" },
  botBubble: { maxWidth: "80%", padding: "0.75rem", background: "#222", color: "#ccc", borderRadius: "12px", borderBottomLeftRadius: "2px", fontSize: "13.5px" },
  userBubble: { maxWidth: "80%", padding: "0.75rem", background: "#f5a623", color: "#000", borderRadius: "12px", borderBottomRightRadius: "2px", fontSize: "13.5px" },
  typingBubble: { padding: "0.75rem", background: "#222", borderRadius: "12px", display: "flex", gap: "4px" },
  dot: { width: 6, height: 6, borderRadius: "50%", background: "#555" },
  quickReplies: { display: "flex", flexWrap: "wrap", gap: "6px" },
  qrBtn: { background: "none", border: "1px solid #333", color: "#888", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", cursor: "pointer" },
  leadForm: { background: "#1a1a1a", padding: "1rem", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" },
  leadFormText: { fontSize: "12px", color: "#888" },
  leadInput: { background: "#222", border: "1px solid #333", borderRadius: "6px", padding: "8px", color: "white", fontSize: "13px" },
  leadSubmit: { background: "#f5a623", border: "none", borderRadius: "6px", padding: "10px", fontWeight: "bold", cursor: "pointer" },
  inputArea: { padding: "1rem", borderTop: "1px solid #222" },
  inputRow: { display: "flex", background: "#222", borderRadius: "10px", padding: "8px" },
  textarea: { flex: 1, background: "none", border: "none", color: "white", resize: "none", outline: "none", fontSize: "14px" },
  sendBtn: { background: "none", border: "none", color: "#f5a623", fontSize: "18px", cursor: "pointer" }
};