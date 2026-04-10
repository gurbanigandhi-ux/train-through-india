import { useState, useEffect, useRef } from "react";

const STATIONS = [
  {
    id: 0,
    name: "Delhi Junction",
    hindiName: "दिल्ली जंक्शन",
    subtitle: "The Capital Gateway",
    color: "#C0392B",
    accentColor: "#E74C3C",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=90",
    highlights: [
      { img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80", label: "Red Fort", fact: "Built by Emperor Shah Jahan in 1639 out of red sandstone." },
      { img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80", label: "Qutub Minar", fact: "A UNESCO World Heritage Site and the tallest brick minaret." },
      { img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80", label: "India Gate", fact: "A 42m high war memorial built in the style of the Arc de Triomphe." },
      { img: "https://images.unsplash.com/photo-1512349025066-1cbaa26bfab2?w=400&q=80", label: "Lotus Temple", fact: "A Bahá'í House of Worship famous for its flower-like shape." },
      { img: "https://images.unsplash.com/photo-1555301887-bbfd15655ac5?w=400&q=80", label: "Chandni Chowk", fact: "One of the oldest and busiest markets in Old Delhi." },
    ],
    tags: ["Mughal Heritage", "Street Food", "Old Delhi"],
    description: "Delhi, India's capital, is a vibrant tapestry of ancient history and modern ambition. From the towering Red Fort to the bustling lanes of Chandni Chowk, every street tells a story spanning millennia.",
    quiz: {
      question: "Which monument was built by Shah Jahan in 1639 and served as the Mughal seat of power?",
      options: ["Qutub Minar", "Red Fort", "Humayun's Tomb", "Lotus Temple"],
      correct: 1,
      explanation: "The Red Fort was built by Emperor Shah Jahan in 1639 and remained the Mughal ceremonial and political centre for nearly 200 years."
    }
  },
  {
    id: 1,
    name: "Chandigarh Terminal",
    hindiName: "चंडीगढ़ टर्मिनस",
    subtitle: "The City Beautiful",
    color: "#1A6B3C",
    accentColor: "#27AE60",
    image: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?w=1600&q=90",
    highlights: [
      { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", label: "Rock Garden", fact: "A massive sculpture garden built entirely from industrial and home waste." },
      { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", label: "Sukhna Lake", fact: "A tranquil reservoir created in 1958 at the foothills of the Himalayas." },
      { img: "https://images.unsplash.com/photo-1628102434444-245edff8a9ac?w=400&q=80", label: "Zakir Hussain Rose Garden", fact: "Asia's largest rose garden, containing 1,600 different species." },
      { img: "https://images.unsplash.com/photo-1582286343588-75d5a8df2f44?w=400&q=80", label: "Capitol Complex", fact: "A UNESCO World Heritage architecturally brilliant site by Le Corbusier." },
      { img: "https://images.unsplash.com/photo-1601614749298-63be91d31a54?w=400&q=80", label: "Open Hand Monument", fact: "Symbolizes peace, 'open to give and open to receive'." },
    ],
    tags: ["Le Corbusier", "Planned City", "Punjab Culture"],
    description: "Designed by Le Corbusier, Chandigarh stands as India's first planned city. Its wide tree-lined boulevards, geometric sectors, and the surreal Rock Garden make it a living masterpiece of urban design.",
    quiz: {
      question: "Who was the chief architect commissioned to design Chandigarh after Indian independence?",
      options: ["Edwin Lutyens", "Le Corbusier", "Frank Lloyd Wright", "Laurie Baker"],
      correct: 1,
      explanation: "Le Corbusier, the Swiss-French architect, designed Chandigarh in 1950 after the original architect Matthew Nowicki passed away."
    }
  },
  {
    id: 2,
    name: "Shimla Hills",
    hindiName: "शिमला हिल्स",
    subtitle: "Queen of the Hills",
    color: "#1A3A6B",
    accentColor: "#2980B9",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=90",
    highlights: [
      { img: "https://images.unsplash.com/photo-1582610116397-edb72c8bc0ac?w=400&q=80", label: "Toy Train", fact: "The Kalka-Shimla railway is a UNESCO World Heritage mountain railway." },
      { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80", label: "Mall Road", fact: "The bustling core of Shimla, lined with beautiful colonial buildings." },
      { img: "https://images.unsplash.com/photo-1605646193910-6c0b3c6628c6?w=400&q=80", label: "The Ridge", fact: "A large open space surrounded by pine, fir, and oak trees." },
      { img: "https://images.unsplash.com/photo-1618602951717-38e515d9a04a?w=400&q=80", label: "Jakhu Temple", fact: "Famous for its 108-foot tall statue of Lord Hanuman." },
      { img: "https://images.unsplash.com/photo-1596766528766-07612f026c48?w=400&q=80", label: "Christ Church", fact: "Built in 1857 in the neo-Gothic style, a major landmark on the Ridge." },
    ],
    tags: ["British Legacy", "Snow Mountains", "Toy Train"],
    description: "Perched at 2,206 metres in the Himalayas, Shimla was the summer capital of British India. Its colonial-era architecture, winding mountain roads, and the iconic narrow-gauge Toy Train create timeless charm.",
    quiz: {
      question: "At what elevation does Shimla sit, earning it the title Queen of the Hills?",
      options: ["1,200 metres", "2,206 metres", "3,500 metres", "1,800 metres"],
      correct: 1,
      explanation: "Shimla is situated at 2,206 metres above sea level in the Shivalik ranges of the Himalayas, making it one of India's most famous hill stations."
    }
  },
  {
    id: 3,
    name: "Manali Valley",
    hindiName: "मनाली वैली",
    subtitle: "Adventure in the Himalayas",
    color: "#2C1654",
    accentColor: "#8E44AD",
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1600&q=90",
    highlights: [
      { img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80", label: "Rohtang Pass", fact: "A high mountain pass connecting the Kullu Valley with Spiti." },
      { img: "https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=400&q=80", label: "Solang Valley", fact: "The adventure sports capital of Himachal, famed for paragliding." },
      { img: "https://images.unsplash.com/photo-1605389643444-469b61834241?w=400&q=80", label: "Hidimba Temple", fact: "A beautiful 1553 temple crafted entirely out of cedar wood." },
      { img: "https://images.unsplash.com/photo-1622359409867-02450d0879ee?w=400&q=80", label: "Old Manali", fact: "Known for charming traditional cafes, apple orchards, and a laid-back vibe." },
      { img: "https://images.unsplash.com/photo-1626296715077-80da92c906a2?w=400&q=80", label: "Beas River", fact: "A holy river originating in the Himalayas, perfect for river rafting." },
    ],
    tags: ["Snow Adventures", "Pine Forests", "High Altitude"],
    description: "At the head of the Kullu Valley, Manali stands surrounded by snow-draped Himalayan peaks. A haven for adventurers, it offers high-altitude skiing, ancient pine forests, and sacred mountain temples.",
    quiz: {
      question: "Manali sits at the head of which valley in Himachal Pradesh?",
      options: ["Kangra Valley", "Spiti Valley", "Kullu Valley", "Parvati Valley"],
      correct: 2,
      explanation: "Manali is located at the northern end of the Kullu Valley, surrounded by the Pir Panjal and Dhauladhar ranges of the Himalayas."
    }
  },
  {
    id: 4,
    name: "Dharamshala Heights",
    hindiName: "धर्मशाला हाइट्स",
    subtitle: "Little Lhasa of India",
    color: "#7B2D00",
    accentColor: "#E67E22",
    image: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=1600&q=90",
    highlights: [
      { img: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=400&q=80", label: "Namgyal Monastery", fact: "The personal monastery of the 14th Dalai Lama, rich in Tibetan culture." },
      { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80", label: "Triund Trek", fact: "A highly scenic trek offering panoramic views of the Dhauladhar Range." },
      { img: "https://images.unsplash.com/photo-1600371660142-ff7b4b1a134d?w=400&q=80", label: "Bhagsunag Waterfall", fact: "A serene 20m high waterfall beside an ancient Shiva temple." },
      { img: "https://images.unsplash.com/photo-1596706979243-70588ea2dd8f?w=400&q=80", label: "HPCA Stadium", fact: "One of the world's most picturesque cricket stadiums, at 1,457 meters." },
      { img: "https://images.unsplash.com/photo-1626922579624-9dfa8656cbdf?w=400&q=80", label: "McLeod Ganj", fact: "Often called 'Little Lhasa' due to its large population of Tibetan refugees." },
    ],
    tags: ["Tibetan Culture", "Dalai Lama", "Mountain Treks"],
    description: "Home to the Dalai Lama and the Tibetan government-in-exile, Dharamshala is where Himalayan drama meets Tibetan spirituality. Prayer flags colour the mountain air as monks walk the same lanes as pilgrims.",
    quiz: {
      question: "Which spiritual leader has made Dharamshala his home since 1960?",
      options: ["Shankaracharya", "Dalai Lama", "Sri Sri Ravi Shankar", "Sadhguru"],
      correct: 1,
      explanation: "The 14th Dalai Lama, Tenzin Gyatso, fled Tibet in 1959 and established his residence in Dharamshala, making it the seat of the Tibetan government-in-exile."
    }
  },
];

const MS = { IDLE: "idle", FAST: "fast", SLOWING: "slowing", STOPPED: "stopped" };

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600;700&family=Yatra+One&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { width: 100%; height: 100%; overflow: hidden; background: #000; font-family: 'Inter', sans-serif; color: #fff; }

  @keyframes train-shake {
    0%, 100% { transform: scale(1.04) translateY(0); filter: blur(0px); }
    50% { transform: scale(1.04) translateY(-1px); filter: blur(0px); }
  }
  @keyframes train-motion-fast {
    0% { transform: scale(1.06) translateX(0); filter: blur(0px); }
    10% { transform: scale(1.1) translateX(-2%); filter: blur(8px); }
    100% { transform: scale(1.15) translateX(-8%); filter: blur(25px); }
  }
  @keyframes train-motion-slow {
    0% { transform: scale(1.15) translateX(8%); filter: blur(20px); }
    100% { transform: scale(1.04) translateX(0); filter: blur(0px); }
  }
  @keyframes train-slide {
    from { background-position: 0% 50%; }
    to { background-position: 100% 50%; }
  }
  @keyframes img-reveal { from { opacity: 0; transform: scale(1.06); } to { opacity: 1; transform: scale(1.04); } }
  @keyframes fade-up    { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fade-in    { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slide-down { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes panel-in   { from { opacity: 0; transform: translateX(28px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes arrival-pop { 0% { opacity: 0; transform: translateX(-50%) scale(0.93) translateY(14px); } 100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); } }
  @keyframes dot-pulse  { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.55; transform:scale(0.88); } }
  @keyframes speed-lines { from { background-position-x: 0; } to { background-position-x: -240px; } }

  .window-wrapper { position: absolute; inset: 0; width: 100%; height: 100%; will-change: transform; transform: scale(1.04); }
  .window-wrapper.s-idle     { animation: train-shake 4s infinite ease-in-out; }
  .window-wrapper.s-fast     { animation: train-motion-fast 0.8s forwards ease-in; }
  .window-wrapper.s-slowing  { animation: train-motion-slow 1.6s forwards ease-out; }
  .window-wrapper.s-stopped  { filter: blur(8px) brightness(0.6); transform: scale(1.06); }
  .window-wrapper.s-reveal   { animation: img-reveal 1.1s ease forwards; }

  .train-border {
    position: absolute; inset: 0; z-index: 5; pointer-events: none;
    border: 24px solid #1c2331; border-radius: 40px;
    box-shadow: inset 0 0 40px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.1), 0 0 0 100px #0a0e17;
  }
  .train-border::after {
    content: ''; position: absolute; inset: 0;
    border-top: 4px solid rgba(255,255,255,0.08); border-bottom: 4px solid rgba(0,0,0,0.5);
    border-radius: 12px; pointer-events: none;
  }

  .speed-overlay { position: absolute; inset: 0; background: repeating-linear-gradient(90deg, transparent 0, transparent 80px, rgba(255,255,255,0.08) 81px, rgba(255,255,255,0.08) 84px); animation: speed-lines 0.12s linear infinite; pointer-events: none; mix-blend-mode: overlay; z-index: 2; }
  .vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%); pointer-events: none; z-index: 3; }
  .top-grad  { position: absolute; top: 0; left: 0; right: 0; height: 200px; background: linear-gradient(180deg, rgba(0,0,0,0.78) 0%, transparent 100%); pointer-events: none; z-index: 3; }
  .bot-grad  { position: absolute; bottom: 0; left: 0; right: 0; height: 280px; background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%); pointer-events: none; z-index: 3; }

  .stn-node { display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer; }
  .stn-node.locked { cursor: not-allowed; opacity: 0.4; pointer-events: none; }
  .stn-ring { border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; border: 2px solid rgba(255,255,255,0.2); }
  .stn-node:not(.locked):hover .stn-ring { transform: scale(1.12); border-color: rgba(255,255,255,0.55); }

  .quiz-opt { width:100%; padding:14px 18px; border-radius:4px; border: 1px solid rgba(240,192,64,0.4); background: linear-gradient(135deg, rgba(80,0,20,0.6), rgba(40,0,10,0.8)); color: #F0C040; font-size:14px; font-weight:600; font-family:'Inter',sans-serif; text-align:left; cursor:pointer; display:flex; align-items:center; gap:14px; transition:all 0.2s ease; box-shadow: inset 0 2px 4px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.4); }
  .quiz-opt:hover:not(:disabled) { background: linear-gradient(135deg, rgba(100,0,25,0.8), rgba(60,0,15,1)); border-color: #F0C040; transform: translateY(-2px); box-shadow: inset 0 2px 4px rgba(255,255,255,0.1), 0 6px 16px rgba(0,0,0,0.6); }
  .quiz-opt.correct  { background: linear-gradient(135deg, #1e5a2e, #0f3b1b); border-color:#2ecc71; color:#fff; }
  .quiz-opt.wrong    { background: linear-gradient(135deg, #6e0000, #380000); border-color:#e74c3c; color:#fff; }
  .opt-badge { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(180deg, #F0C040, #B8860B); color: #3E000F; border: 1px solid #FFE4B5; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; font-family: 'Yatra One', serif; box-shadow: 0 2px 8px rgba(0,0,0,0.6); flex-shrink: 0; }

  .btn { border:none; border-radius:8px; font-size:13px; font-family:'Yatra One', 'Inter',sans-serif; cursor:pointer; letter-spacing:1px; transition:all 0.2s ease; text-transform: uppercase; border: 1px solid rgba(255, 215, 0, 0.3); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
  .btn:hover { filter:brightness(1.15); transform:translateY(-2px); border-color: rgba(255, 215, 0, 0.6); }
  .btn:active { transform:scale(0.97); }

  .btn-ethnic { position: relative; overflow: hidden; border: none; border-radius: 4px; font-size: 14px; font-family: 'Yatra One', 'Inter', sans-serif; cursor: pointer; letter-spacing: 1px; transition: all 0.2s ease; text-transform: uppercase; border: 2px solid #F0C040; background: linear-gradient(135deg, #A4102A, #5A0818); color: #F0C040; box-shadow: inset 0 0 10px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.4); text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
  .btn-ethnic::after { content: ''; position: absolute; inset: 3px; border: 1px dashed rgba(240,192,64,0.4); border-radius: 2px; pointer-events: none; }
  .btn-ethnic:hover { filter: brightness(1.2); transform: translateY(-2px) scale(1.02); border-color: #FFD700; color: #FFF; box-shadow: inset 0 0 10px rgba(0,0,0,0.4), 0 12px 24px rgba(0,0,0,0.6); }
  .btn-ethnic:active { transform: scale(0.96); }

  .tab-btn { flex:1; padding:10px 0; border:none; border-radius:6px; font-size:13px; font-family:'Yatra One', 'Inter',sans-serif; text-transform: uppercase; letter-spacing: 1px; cursor:pointer; transition:all 0.2s ease; }
  .tag { padding:4px 12px; border-radius:4px; font-size:10px; font-weight:600; font-family: 'Inter', sans-serif; background:rgba(255, 215, 0, 0.08); border:1px solid rgba(255, 215, 0, 0.3); color:#F0C040; white-space:nowrap; text-transform: uppercase; }
  ::-webkit-scrollbar { width: 0; }
`;

export default function TrainThroughIndia() {
  const [curId, setCurId] = useState(0);
  const [visited, setVisited] = useState([0]);
  const [ms, setMs] = useState(MS.IDLE);
  const [score, setScore] = useState(0);
  const [imgKey, setImgKey] = useState(0);
  const [imgClass, setImgClass] = useState("s-idle");
  const [showPanel, setShowPanel] = useState(false);
  const [showArrival, setShowArrival] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [pending, setPending] = useState(null);
  const [phase, setPhase] = useState("explore");
  const [quizSel, setQuizSel] = useState(null);
  const [quizDone, setQuizDone] = useState(false);
  const timer = useRef(null);

  const station = STATIONS[curId];

  const travelTo = (id) => {
    if (id === curId || ms !== MS.IDLE) return;
    clearTimeout(timer.current);
    setShowPanel(false); setShowArrival(false);
    setPending(STATIONS[id]);
    setMs(MS.FAST); setImgClass("s-fast");

    // Wait exactly 800ms for s-fast to hit maximum blur
    timer.current = setTimeout(() => {
      // Swap active station to trigger cross-fade under the heavy blur
      setCurId(id);
      setVisited(p => p.includes(id) ? p : [...p, id]);

      // Start deceleration which clears the blur over 1.6s
      setMs(MS.SLOWING); setImgClass("s-slowing");

      timer.current = setTimeout(() => {
        // Transition completely finished
        setMs(MS.IDLE); setImgClass("s-idle");
        setShowArrival(true); setPending(null);
        setPhase("quiz"); setQuizSel(null); setQuizDone(false);
      }, 1600);
    }, 800);
  };

  const openPanel = () => { setShowArrival(false); setShowPanel(true); };

  const closePanel = () => {
    setShowPanel(false);
    if (curId === STATIONS.length - 1) { setShowComplete(true); return; }
    const nextId = curId + 1;
    setVisited(p => p.includes(nextId) ? p : [...p, nextId]);
    setTimeout(() => travelTo(nextId), 300);
  };

  const pickQuiz = (i) => {
    if (quizDone) return;
    setQuizSel(i);
    setQuizDone(true);
    if (i === station.quiz.correct) setScore(s => s + 100);
  };

  const restart = () => {
    setCurId(0); setVisited([0]); setScore(0);
    setMs(MS.IDLE); setImgClass("s-idle");
    setShowPanel(false); setShowArrival(false); setShowComplete(false);
    setPending(null); setPhase("explore"); setQuizSel(null); setQuizDone(false);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  const displayStation = pending || station;
  const transitActive = ms === MS.FAST || ms === MS.SLOWING;

  const StationBoard = ({ stn, scale = 1 }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 * scale, alignItems: "flex-start", marginBottom: 16 * scale, animation: "fade-up 0.5s ease" }}>
      <div style={{
        position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center",
        minWidth: 200 * scale
      }}>
        {/* Red Circle */}
        <div style={{
          position: "absolute", width: 72 * scale, height: 72 * scale, borderRadius: "50%",
          border: `${9 * scale}px solid #E32636`, background: "rgba(255,255,255,0.95)", zIndex: 1,
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.4)"
        }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 44 * scale, height: 44 * scale, border: `${1 * scale}px solid #ccc`, borderRadius: "50%", opacity: 0.5 }}></div>
        </div>
        {/* Blue Square/Bar */}
        <div style={{
          position: "relative", background: "linear-gradient(135deg, #0019A8, #000B4D)", padding: `${8 * scale}px ${28 * scale}px`,
          zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.6)", borderRadius: 4 * scale, border: `${2 * scale}px solid #F0C040`
        }}>
          <div style={{ fontSize: 15 * scale, color: "#fff", fontWeight: 600, fontFamily: "'Yatra One', 'Inter', sans-serif", letterSpacing: 1, marginBottom: 4, textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>{stn.hindiName}</div>
          <div style={{ fontSize: 17 * scale, color: "#F0C040", fontWeight: 400, textTransform: "uppercase", letterSpacing: 2, fontFamily: "'Yatra One', cursive", textShadow: "1px 1px 4px rgba(0,0,0,0.9)" }}>{stn.name}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{css}</style>
      <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>

        {/* ALL STATION BACKGROUND IMAGES */}
        <div className={`window-wrapper ${imgClass}`}>
          {STATIONS.map((s) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.name}
              style={{
                opacity: s.id === station.id ? 1 : 0,
                transition: "opacity 0.6s ease-in-out",
                position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              }}
            />
          ))}
        </div>
        {transitActive && <div className="speed-overlay" />}
        <div className="vignette" />
        <div className="top-grad" />
        <div className="bot-grad" />
        <div className="train-border" />

        {/* ── JOURNEY BAR ── */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
          padding: "22px 36px 0",
          animation: "slide-down 0.5s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
            <div>
              <div style={{
                fontFamily: "'Yatra One', serif",
                fontSize: 28, fontWeight: 400, color: "#FFD700",
                textShadow: "2px 2px 0px #8B0000, 0 4px 12px rgba(0,0,0,0.9)",
                letterSpacing: 2,
              }}>Train Through India</div>
              <div style={{ fontSize: 9, letterSpacing: 4, color: "#F0C040", marginTop: 4, fontWeight: 600, fontFamily: "'Inter', sans-serif", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>VIRTUAL RAIL JOURNEY</div>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "rgba(0,0,0,0.38)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 20, padding: "7px 18px",
            }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 0.5 }}>{visited.length}/{STATIONS.length} stations</span>
              <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.12)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#F0C040" }}>{score} pts</span>
            </div>
          </div>

          {/* Track */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{
              position: "absolute", top: "calc(50% - 13px)", left: "4%", right: "4%",
              height: 2, background: "rgba(255,255,255,0.15)", borderRadius: 1
            }}>
              <div style={{
                position: "absolute", top: -6, left: 0, height: 14,
                width: `${(curId / (STATIONS.length - 1)) * 100}%`,
                backgroundSize: "32px 6px, 32px 100%, 32px 4px",
                backgroundImage: `
                  linear-gradient(90deg, transparent 0px, transparent 4px, #ADD8E6 4px, #ADD8E6 10px, transparent 10px, transparent 16px, #ADD8E6 16px, #ADD8E6 22px, transparent 22px, transparent 32px),
                  linear-gradient(90deg, #E67E22 0px, #E67E22 28px, transparent 28px, transparent 32px),
                  linear-gradient(90deg, transparent 0px, transparent 28px, #333 28px, #333 32px)
                `,
                backgroundPosition: "0px 3px, 0px 0px, 0px 5px",
                backgroundRepeat: "repeat-x",
                boxShadow: "0 2px 8px rgba(0,0,0,0.6)",
                borderTopLeftRadius: 4, borderBottomLeftRadius: 4,
                transition: "width 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}>
                {/* Train Engine Head */}
                <div style={{
                  position: "absolute", right: -30, top: -3, width: 32, height: 20,
                  background: "#D35400", borderRadius: "4px 12px 2px 4px",
                  borderTop: "3px solid #222", borderRight: "4px solid #222",
                  boxShadow: "3px 3px 6px rgba(0,0,0,0.5)"
                }}>
                  {/* Driver Window */}
                  <div style={{ position: "absolute", top: 4, right: 6, width: 9, height: 8, background: "#87CEFA", borderRadius: 2 }} />
                  {/* Engine Wheels */}
                  <div style={{ position: "absolute", bottom: -3, left: 4, width: 7, height: 7, background: "#111", borderRadius: "50%", border: "1px solid #444", boxSizing: "border-box" }} />
                  <div style={{ position: "absolute", bottom: -3, right: 8, width: 7, height: 7, background: "#111", borderRadius: "50%", border: "1px solid #444", boxSizing: "border-box" }} />
                </div>
              </div>
            </div>

            {STATIONS.map(s => {
              const isV = visited.includes(s.id);
              const isC = curId === s.id;
              const isU = s.id === 0 || visited.includes(s.id - 1) || isV;
              return (
                <div key={s.id} className={`stn-node ${!isU ? "locked" : ""}`} style={{ width: `${100 / STATIONS.length}%` }} onClick={() => isU && ms === MS.IDLE && travelTo(s.id)}>
                  <div style={{
                    position: "relative",
                    width: isC ? 32 : 24, height: isC ? 32 : 24,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: isU ? 1 : 0.35,
                    filter: isU && !isV && !isC ? "grayscale(100%)" : isC ? "drop-shadow(0 0 8px rgba(231, 38, 54, 0.6))" : "none",
                    transition: "all 0.3s ease",
                  }}>
                    {/* Red Circle */}
                    <div style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", border: `${isC ? 4 : 3}px solid #E32636`, background: "rgba(255,255,255,0.95)", boxSizing: "border-box" }} />
                    {/* Blue Bar */}
                    <div style={{ position: "absolute", width: "135%", height: "32%", background: "#0019A8", borderRadius: 1 }} />
                  </div>
                  <div style={{
                    fontSize: 9, fontWeight: isC ? 600 : 400,
                    color: isC ? "#fff" : "rgba(255,255,255,0.4)",
                    textAlign: "center", lineHeight: 1.3, maxWidth: 64,
                    textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                  }}>{s.name.split(" ")[0]}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── TRANSIT LABEL ── */}
        {transitActive && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 15,
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none", animation: "fade-in 0.4s ease",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, letterSpacing: 4, color: "rgba(255,255,255,0.42)", marginBottom: 10, fontWeight: 500 }}>
                {ms === MS.FAST ? "IN TRANSIT" : "ARRIVING"}
              </div>
              {displayStation && <StationBoard stn={displayStation} scale={1.2} />}
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 10, letterSpacing: 2 }}>
                {ms === MS.FAST ? "Moving at full speed" : "Slowing down..."}
              </div>
            </div>
          </div>
        )}

        {/* ── HIGHLIGHTS ON MAIN PAGE ── */}
        {ms === MS.IDLE && !showPanel && (
          <div style={{ position: "absolute", top: 120, left: 60, bottom: 120, right: 60, zIndex: 18, pointerEvents: "none" }}>
            {station.highlights.map((h, i) => {
              const trX = [-200, 200, -350, 350, 0][i];
              const trY = [-100, 120, 100, -150, 180][i];
              const rot = [-6, 8, 4, -5, -2][i];
              return (
                <div key={i} style={{
                  position: "absolute", left: "50%", top: "50%", pointerEvents: "auto",
                  width: 200, background: "rgba(255,255,255,0.95)", padding: 12, borderRadius: 4,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
                  display: "flex", flexDirection: "column",
                  "--trX": `${trX}px`, "--trY": `${trY}px`, "--rot": `${rot}deg`,
                  animation: `pop-scatter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + i * 0.14}s forwards`,
                  transform: "translate(-50%, -50%) scale(0)",
                  opacity: 0
                }}>
                  <img src={h.img} alt={h.label} style={{ width: "100%", height: 130, objectFit: "cover", marginBottom: 10, borderRadius: 2 }} />
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#222", fontFamily: "'Yatra One', serif", marginBottom: 6, textAlign: "center", textTransform: "uppercase" }}>{h.label}</div>
                  <div style={{ fontSize: 11, color: "#444", lineHeight: 1.4, textAlign: "center", fontStyle: "italic" }}>{h.fact}</div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── IDLE BOTTOM INFO ── */}
        {ms === MS.IDLE && !showArrival && !showPanel && (
          <div style={{
            position: "absolute", bottom: 40, left: 40, zIndex: 20,
            animation: "fade-up 0.5s ease",
          }}>
            <div style={{ fontSize: 8, letterSpacing: 3, color: "rgba(255,255,255,0.38)", marginBottom: 7 }}>CURRENT STATION</div>
            <StationBoard stn={station} scale={1.1} />
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.48)", marginBottom: 22, letterSpacing: 0.4 }}>
              {station.subtitle}
            </div>
            <button
              className="btn-ethnic"
              onClick={() => { setPhase("quiz"); openPanel(); }}
              style={{
                padding: "12px 24px", fontSize: 13,
              }}>
              Take Trivia Quiz
            </button>
          </div>
        )}

        {/* ── ARRIVAL CARD ── */}
        {showArrival && ms === MS.IDLE && (
          <div style={{
            position: "absolute", bottom: 44, left: "50%",
            zIndex: 25, width: "min(460px, 88vw)",
            animation: "arrival-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
          }}>
            <div style={{
              background: "rgba(0,0,0,0.7)", backdropFilter: "blur(24px)",
              borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
            }}>
              <div style={{ height: 3, background: `linear-gradient(90deg,${station.color},${station.accentColor})` }} />
              <div style={{ padding: "22px 24px" }}>
                <div style={{ fontSize: 8, letterSpacing: 3, color: "rgba(255,255,255,0.38)", marginBottom: 7 }}>ARRIVED AT</div>
                <StationBoard stn={station} scale={0.8} />
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.42)", letterSpacing: 0.8, marginBottom: 20 }}>
                  {station.subtitle}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button className="btn-ethnic" onClick={() => { setPhase("quiz"); openPanel(); }} style={{ flex: 1, padding: "12px 0" }}>
                    Take Trivia Quiz
                  </button>
                  {curId < STATIONS.length - 1 && (
                    <button className="btn-ethnic" onClick={() => { setShowArrival(false); const n = curId + 1; setVisited(p => p.includes(n) ? p : [...p, n]); setTimeout(() => travelTo(n), 200); }}
                      style={{ flex: 1, padding: "12px 0" }}>
                      Skip to Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── SIDE PANEL ── */}
        {showPanel && (
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: 360,
            backgroundImage: "radial-gradient(circle at top right, #3A0008, #1A0002), repeating-linear-gradient(45deg, rgba(255,215,0,0.03) 0, rgba(255,215,0,0.03) 1px, transparent 1px, transparent 12px)",
            borderLeft: "2px solid #D4AF37",
            boxShadow: "-12px 0 40px rgba(0,0,0,0.8)",
            zIndex: 30, display: "flex", flexDirection: "column",
            animation: "panel-in 0.38s ease",
            overflow: "hidden"
          }}>
            {/* Hero */}
            <div style={{ position: "relative", height: 190, flexShrink: 0, overflow: "hidden" }}>
              <img src={station.image} alt={station.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", animation: "img-reveal 0.7s ease" }}
                onError={e => e.target.style.display = "none"} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 30%, rgba(0,0,0,0.82) 100%)" }} />
              <button onClick={closePanel} style={{
                position: "absolute", top: 14, right: 14,
                width: 30, height: 30, borderRadius: "50%",
                background: "rgba(0,0,0,0.48)", border: "1px solid rgba(255,255,255,0.18)",
                color: "#fff", fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(8px)",
              }}>×</button>
              <div style={{ position: "absolute", bottom: 14, left: 18 }}>
                <StationBoard stn={station} scale={0.65} />
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.48)", letterSpacing: 1.5, marginTop: -6 }}>{station.subtitle.toUpperCase()}</div>
              </div>
            </div>

            {/* Scrollable content */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px" }}>
              <div style={{ animation: "fade-up 0.35s ease" }}>
                <div style={{ fontSize: 13, letterSpacing: 2, color: "#F0C040", marginBottom: 12, fontFamily: "'Yatra One', cursive", textAlign: "center", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>TRIVIA CHALLENGE</div>
                <div style={{
                  background: "rgba(255,215,0,0.04)", padding: "20px 22px", marginBottom: 24,
                  border: "2px solid #D4AF37", borderRadius: 4, position: "relative",
                  boxShadow: "inset 0 0 20px rgba(212,175,55,0.1), 0 8px 24px rgba(0,0,0,0.5)"
                }}>
                  <div style={{ position: "absolute", inset: 4, border: "1px dashed rgba(212,175,55,0.4)", borderRadius: 2, pointerEvents: "none" }} />
                  <p style={{ position: "relative", fontSize: 16, fontWeight: 600, color: "#FFF8DC", lineHeight: 1.6, fontFamily: "'Cormorant Garamond', serif", textAlign: "center", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                    {station.quiz.question}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  {station.quiz.options.map((opt, i) => (
                    <button key={i}
                      className={`quiz-opt ${quizDone && i === station.quiz.correct ? "correct" : quizDone && i === quizSel && i !== station.quiz.correct ? "wrong" : ""}`}
                      onClick={() => pickQuiz(i)} disabled={quizDone}>
                      <span className="opt-badge">{"ABCD"[i]}</span>
                      <span style={{ flex: 1 }}>{opt}</span>
                    </button>
                  ))}
                </div>
                {quizDone && (
                  <div style={{ animation: "fade-up 0.3s ease" }}>
                    <div style={{
                      padding: "12px 14px", borderRadius: 10, fontSize: 12,
                      color: "rgba(255,255,255,0.68)", lineHeight: 1.65, marginBottom: 14,
                      background: quizSel === station.quiz.correct ? "rgba(39,174,96,0.12)" : "rgba(192,57,43,0.12)",
                      border: `1px solid ${quizSel === station.quiz.correct ? "rgba(39,174,96,0.3)" : "rgba(192,57,43,0.3)"}`,
                    }}>{station.quiz.explanation}</div>
                    <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: quizSel === station.quiz.correct ? "#27AE60" : "rgba(255,255,255,0.32)", marginBottom: 14 }}>
                      {quizSel === station.quiz.correct ? "+ 100 points earned" : "Better luck next time"}
                    </div>
                    <button className="btn-ethnic" onClick={closePanel} style={{ width: "100%", padding: "14px 0", fontSize: 15 }}>
                      {curId < STATIONS.length - 1 ? "Board Next Train" : "Complete Journey"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── COMPLETE SCREEN ── */}
        {showComplete && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 40,
            display: "flex", alignItems: "center", justifyContent: "center",
            backgroundImage: "radial-gradient(circle at center, #3A0008 0%, #0a0002 100%)",
            animation: "fade-in 0.6s ease",
          }}>
            <div style={{
              textAlign: "center", maxWidth: 460, padding: "40px", animation: "fade-up 0.55s ease",
              background: "rgba(0,0,0,0.4)", border: "2px solid #D4AF37", borderRadius: 8,
              boxShadow: "0 0 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(212,175,55,0.15)",
              position: "relative"
            }}>
              <div style={{ position: "absolute", inset: 6, border: "1px dashed rgba(212,175,55,0.4)", borderRadius: 4, pointerEvents: "none" }} />
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "linear-gradient(135deg, #F0C040, #B8860B)", border: "2px solid #FFE4B5",
                margin: "0 auto 24px", color: "#3A0008",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
              }}>
                <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
                  <path d="M4 13L10 19L22 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ fontFamily: "'Yatra One', serif", fontSize: 36, color: "#F0C040", marginBottom: 8, letterSpacing: 2, textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                Journey Complete
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: 10 }}>
                You have traveled from Delhi to Dharamshala across five incredible destinations.
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 32, fontFamily: "'Inter', sans-serif" }}>{score} points earned</div>
              <button className="btn-ethnic" onClick={restart} style={{ padding: "14px 40px" }}>
                Journey Again
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}