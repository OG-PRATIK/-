import React, { useState } from "react";

export default function Portfolio() {
    const [dark, setDark] = useState(false);
    const [filter, setFilter] = useState("all");

    const projects = [
        { title: "Space Shooter", tag: "web", desc: "A JavaScript browser shooting game" },
        { title: "Puzzle Adventure", tag: "web", desc: "A logic‑based puzzle game" },
        { title: "Weather App", tag: "app", desc: "A mobile weather forecasting app" },
        { title: "Notes Manager", tag: "app", desc: "A productivity mobile notes app" },
        { title: "Portfolio Website", tag: "web", desc: "A responsive personal website project" },
        {
            title: "Game Developer", tag: "web", desc: "A cool gaming project", code: `import tkinter as tk
from tkinter import messagebox

# Initialize main window
root = tk.Tk()
root.title("Tic Tac Toe - Themed")
root.configure(bg="#222831")  # Dark background

# Global variables
turn = "X"
buttons = []

# Turn label
turn_label = tk.Label(root, text="X's Turn", font=('Arial', 20, 'bold'), fg="#00FFF5", bg="#222831")
turn_label.grid(row=0, column=0, columnspan=3, pady=10)

# Check winner function
def check_winner():
    for i in range(3):
        if all(buttons[i][j]['text'] == buttons[i][0]['text'] != "" for j in range(3)):
            winner(buttons[i][0]['text'])
        if all(buttons[j][i]['text'] == buttons[0][i]['text'] != "" for j in range(3)):
            winner(buttons[0][i]['text'])

    if buttons[0][0]['text'] == buttons[1][1]['text'] == buttons[2][2]['text'] != "":
        winner(buttons[0][0]['text'])
    if buttons[0][2]['text'] == buttons[1][1]['text'] == buttons[2][0]['text'] != "":
        winner(buttons[0][2]['text'])

def winner(player):
    messagebox.showinfo("Game Over", f"{player} wins!")
    root.quit()

# On click event
def on_click(r, c):
    global turn
    if buttons[r][c]['text'] == "":
        buttons[r][c]['text'] = turn
        buttons[r][c].config(fg="#00FFF5" if turn == "X" else "#FF0080")
        turn = "O" if turn == "X" else "X"
        turn_label.config(text=f"{turn}'s Turn", fg="#00FFF5" if turn == "X" else "#FF0080")
        check_winner()

# Create 3x3 grid of buttons
for r in range(3):
    row = []
    for c in range(3):
        btn = tk.Button(root, text="", font=('Arial', 32, 'bold'), width=5, height=2,
                        bg="#393E46", activebackground="#00ADB5",
                        command=lambda r=r, c=c: on_click(r, c))
        btn.grid(row=r+1, column=c, padx=5, pady=5)
        row.append(btn)
    buttons.append(row)

root.mainloop()` },
        { title: "Game Developer", tag: "web", desc: "A cool gaming project" },


    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState("");

    const filtered = filter === "all" ? projects : projects.filter(p => p.tag === filter);

    return (
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
                {/* Header */}
                <header className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-black text-white">
                    {/* Star Background */}
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/0e/Starsinthesky.jpg')] bg-cover bg-center opacity-40 animate-stars"></div>

                    {/* Floating Particles */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        {[...Array(25)].map((_, i) => (
                            <div key={i} className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDuration: `${4 + Math.random() * 6}s`
                            }}></div>
                        ))}
                    </div>

                    {/* Glow Rings */}
                    <div className="absolute w-[160%] h-[160%] bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 animate-spin-slow rounded-full blur-3xl"></div>

                    {/* Typing Text Animation */}
                    <h1 className="relative text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-neon animate-typing border-r-4 border-cyan-400 whitespace-nowrap overflow-hidden">
                        OG-PRATIK
                    </h1>

                    <p className="relative mt-4 text-2xl opacity-90 animate-fadeInUp animation-delay-300 drop-shadow-neon">
                        Showcasing My Work and Skills
                    </p>

                    {/* Buttons with 3D Tilt */}
                    <div className="relative mt-10 flex gap-6 animate-fadeInUp animation-delay-500">
                        <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-xl text-white font-semibold shadow-xl hover:scale-110 transition-transform transform-gpu hover:rotate-3 hover:-translate-y-1">
                            View Projects
                        </a>
                        <a href="#about" className="px-6 py-3 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-black transition transform-gpu hover:-rotate-3 hover:-translate-y-1">
                            About Me
                        </a>
                    </div>
                </header>

                {/* Extra Animations */}
                <style>{`
  @keyframes stars {
    from { background-position: 0 0; }
    to { background-position: 1000px 1000px; }
  }
  .animate-stars {
    animation: stars 60s linear infinite;
  }
  @keyframes float {
    0% { transform: translateY(0); opacity: 0.6; }
    50% { transform: translateY(-20px); opacity: 1; }
    100% { transform: translateY(0); opacity: 0.6; }
  }
  .animate-float {
    animation: float ease-in-out infinite;
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 25s linear infinite;
  }
  @keyframes typing {
    0% { width: 0; border-right-color: #22d3ee; }
    90% { width: 100%; border-right-color: #22d3ee; }
    100% { width: 100%; border-right-color: transparent; }
  }
    to { width: 100%; }
  }
  .animate-typing {
    width: 0;
    animation: typing 4s steps(20) forwards;
  }
  .drop-shadow-neon {
    filter: drop-shadow(0 0 10px #0ff) drop-shadow(0 0 20px #f0f);
  }
`}</style>

                {/* Nav */}
                <nav className="flex justify-center gap-6 py-4 bg-gray-800 dark:bg-black text-white sticky top-0 z-50">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#projects" className="hover:underline">Projects</a>


                </nav>

                {/* About */}
                <section id="about" className="max-w-4xl mx-auto p-8 animate-fadeIn">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="opacity-80 leading-relaxed mt-2 font-bold text-lg">Developer: PRATIK</p>
                    <p className="opacity-80 leading-relaxed mt-1">Email: pandulepratik512@gmail.com</p>

                    <p className="opacity-80 leading-relaxed mt-4">
                        Every coder starts with curiosity — a spark that grows into passion. I believe in building, breaking, and rebuilding until ideas come alive on the screen.
                    </p>
                    <p className="opacity-80 leading-relaxed mt-2">
                        Coding isn't just a skill; it's a journey of patience, creativity, and continuous learning. Each bug teaches you something new, and each project makes you better than yesterday.
                    </p>
                    <p className="opacity-80 leading-relaxed mt-2">
                        My inspiration comes from solving problems that matter and creating things that make life easier, smarter, and more beautiful.
                    </p>
                </section>

                {/* Projects */}
                <section id="projects" className="max-w-5xl mx-auto p-8 animate-slideUp">
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>

                    {/* Filters */}
                    <div className="flex gap-4 mb-6">
                        {["all", "web", "app", "ml"].map(f => (
                            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-1 rounded-full border ${filter === f ? "bg-gray-800 text-white" : "bg-transparent"}`}>{f.toUpperCase()}</button>
                        ))}
                    </div>

                    {/* Modal */}
                    {modalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-2xl w-full shadow-xl">
                                <h2 className="text-2xl font-bold mb-4">Game Code</h2>
                                <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg text-sm whitespace-pre-wrap max-h-80 overflow-y-auto">{selectedCode}</pre>
                                <button
                                    onClick={() => {
                                        const blob = new Blob([selectedCode], { type: 'text/plain' });
                                        const url = URL.createObjectURL(blob);
                                        const a = document.createElement('a');
                                        a.href = url;
                                        a.download = 'game.py';
                                        a.click();
                                    }}
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                                >
                                    Download & Run
                                </button>
                                <button onClick={() => setModalOpen(false)} className="mt-4 ml-2 px-4 py-2 bg-red-600 text-white rounded-lg">Close</button>
                            </div>
                        </div>
                    )}

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((p, i) => (
                            <div key={i} onClick={() => { if (p.code) { setSelectedCode(p.code); setModalOpen(true); } }} className="p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800 hover:scale-[1.03] transition transform duration-300">
                                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                                <p className="opacity-80">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Blog */}


                {/* Contact */}


                {/* Footer */}
                <footer className="text-center py-6 bg-gray-800 dark:bg-black text-white mt-12">
                    © 2025 Your Name. All rights reserved.
                </footer>
            </div>
        </div>
    );
}

/* Tailwind Animations */
/* Add to globals.css if needed */
/*
.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}
.animate-slideUp {
  animation: slideUp 0.8s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
*/
