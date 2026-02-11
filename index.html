<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GEG Asahikawa - Google Calendar DX (RE Style)</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'bio-black': '#050505',
                        'bio-dark': '#0f1115',
                        'bio-glass': 'rgba(20, 25, 35, 0.7)',
                        'bio-blue': '#3b82f6',
                        'bio-accent': '#00d4ff',
                    },
                    fontFamily: {
                        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
                        mono: ['Courier New', 'monospace'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        /* ベース設定 */
        body {
            background-color: #050505;
            color: #e2e8f0;
            background-image: 
                radial-gradient(circle at 50% 0%, #1e293b 0%, transparent 70%),
                radial-gradient(circle at 0% 50%, #0f172a 0%, transparent 50%);
            font-family: 'Helvetica Neue', Arial, sans-serif;
            overflow-x: hidden;
        }

        /* 走査線エフェクト */
        .scanlines {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                rgba(255,255,255,0),
                rgba(255,255,255,0) 50%,
                rgba(0,0,0,0.1) 50%,
                rgba(0,0,0,0.1)
            );
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.3;
        }

        /* カスタムスクロールバー */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0f1115; 
        }
        ::-webkit-scrollbar-thumb {
            background: #334155; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #475569; 
        }

        /* ぬるぬるアニメーション */
        .smooth-transition {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* グラスモーフィズムカード */
        .glass-panel {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        
        /* 3Dホバーエフェクト */
        .card-3d {
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.27), box-shadow 0.4s ease;
            transform-style: preserve-3d;
        }
        .card-3d:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.4);
        }

        /* テキストグロー */
        .text-glow {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        .text-glow-purple {
            text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
        .text-glow-green {
            text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }

        /* フェードインアニメーション */
        .fade-in { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
    </style>
</head>
<body class="antialiased selection:bg-blue-500 selection:text-white">

    <!-- 背景の装飾（ノイズ・パーティクル的なもの） -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[100px] animate-pulse-slow"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[100px] animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>
    
    <!-- 走査線 -->
    <div class="scanlines"></div>

    <!-- Header -->
    <header class="fixed w-full top-0 z-50 glass-panel border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <div onclick="navigate('home')" class="flex items-center gap-3 cursor-pointer group">
                <div class="relative">
                    <div class="absolute inset-0 bg-blue-500 blur opacity-20 group-hover:opacity-50 transition-opacity"></div>
                    <i data-lucide="calendar" class="w-8 h-8 text-blue-400 relative z-10"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-lg tracking-widest text-white group-hover:text-blue-300 transition-colors">GEG Asahikawa</span>
                    <span class="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-mono">System: Online</span>
                </div>
            </div>
            
            <!-- Desktop Nav -->
            <nav class="hidden md:flex gap-4">
                <!-- HOMEボタン削除 -->
                <button onclick="navigate('beginner')" id="nav-beginner" class="nav-btn group relative px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:text-white overflow-hidden">
                    <span class="relative z-10 flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4"></i> PERSONAL</span>
                    <div class="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
                <button onclick="navigate('intermediate')" id="nav-intermediate" class="nav-btn group relative px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:text-white overflow-hidden">
                    <span class="relative z-10 flex items-center gap-2"><i data-lucide="users" class="w-4 h-4"></i> TEAM</span>
                    <div class="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
                <button onclick="navigate('advanced')" id="nav-advanced" class="nav-btn group relative px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:text-white overflow-hidden">
                    <span class="relative z-10 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4"></i> SCHOOL</span>
                    <div class="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
                <!-- アンケートリンク -->
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe70j_LWw7x2m01LBE_TMwM2L28DNflq7RwZ3dq9SXEnJlQ4Q/viewform?usp=dialog" target="_blank" class="nav-btn group relative px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:text-white overflow-hidden flex items-center">
                    <span class="relative z-10 flex items-center gap-2"><i data-lucide="clipboard-check" class="w-4 h-4"></i> アンケート</span>
                    <div class="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </a>
            </nav>

            <!-- Mobile Menu Toggle -->
            <div class="md:hidden">
                <button onclick="toggleMenu()" class="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Nav Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-white/10 glass-panel absolute w-full shadow-2xl backdrop-blur-xl">
            <div class="flex flex-col p-4 gap-2">
                <!-- HOME削除 -->
                <button onclick="navigate('beginner')" class="flex items-center gap-3 px-4 py-4 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                    <i data-lucide="clock" class="w-5 h-5 text-green-400"></i> PERSONAL MODE
                </button>
                <button onclick="navigate('intermediate')" class="flex items-center gap-3 px-4 py-4 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                    <i data-lucide="users" class="w-5 h-5 text-blue-400"></i> TEAM MODE
                </button>
                <button onclick="navigate('advanced')" class="flex items-center gap-3 px-4 py-4 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                    <i data-lucide="zap" class="w-5 h-5 text-purple-400"></i> SCHOOL MODE
                </button>
                <!-- モバイル用アンケートリンク -->
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe70j_LWw7x2m01LBE_TMwM2L28DNflq7RwZ3dq9SXEnJlQ4Q/viewform?usp=dialog" target="_blank" class="flex items-center gap-3 px-4 py-4 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                    <i data-lucide="clipboard-check" class="w-5 h-5 text-orange-400"></i> アンケート
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto p-4 md:p-10 pt-28 md:pt-32 relative z-10">
        
        <!-- HOME VIEW -->
        <section id="view-home" class="fade-in space-y-16">
            <div class="text-center space-y-8 py-10 md:py-20 relative">
                <!-- Decorative background text -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-white/[0.02] pointer-events-none select-none tracking-tighter">
                    CALENDAR
                </div>

                <div class="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold tracking-[0.2em] mb-4 backdrop-blur-md">
                    <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    20260212 OPERATION: DX
                </div>
                
                <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
                    <span class="block text-2xl md:text-3xl font-light text-slate-400 mb-2 tracking-[0.3em] uppercase">Time-Space Control</span>
                    Google Calendar <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-glow">PROTOCOL</span>
                </h1>
                
                <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                    ただの予定表ではない。<br class="hidden md:block">
                    個人から、組織の自動化まで。<br>
                    <span class="text-xs font-mono text-slate-600 mt-4 block">/// SYSTEM OPTIMIZATION SEQUENCE INITIATED ///</span>
                </p>
            </div>

            <!-- Level Cards -->
            <div class="grid md:grid-cols-3 gap-8 perspective-1000">
                <!-- Beginner Card -->
                <div onclick="navigate('beginner')" class="glass-panel p-8 rounded-2xl cursor-pointer group card-3d flex flex-col h-full relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-20">
                        <i data-lucide="crosshair" class="w-24 h-24 text-green-500"></i>
                    </div>
                    <div class="flex justify-between items-start mb-6">
                        <div class="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 group-hover:bg-green-500/20 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
                            <i data-lucide="clock" class="w-8 h-8"></i>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border border-slate-700 px-2 py-1 rounded">Level 1</span>
                    </div>
                    <h3 class="font-bold text-2xl text-white mb-2 group-hover:text-green-400 transition-colors tracking-wide">PERSONAL</h3>
                    <h4 class="font-bold text-sm text-slate-400 mb-4 font-mono">INDIVIDUAL OPTIMIZATION</h4>
                    <p class="text-slate-300 text-sm leading-relaxed flex-grow border-t border-white/5 pt-4">
                        脱・手帳。情報の「可視化」と「一元化」。<br>
                        精神的余裕を生み出す基本装備。
                    </p>
                    <div class="mt-8 pt-4 flex justify-end">
                        <div class="flex items-center gap-2 text-xs font-bold transition-all text-green-400 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 tracking-widest">
                            ACCESS GRANTED <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </div>
                    </div>
                </div>

                <!-- Intermediate Card -->
                <div onclick="navigate('intermediate')" class="glass-panel p-8 rounded-2xl cursor-pointer group card-3d flex flex-col h-full relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-20">
                        <i data-lucide="network" class="w-24 h-24 text-blue-500"></i>
                    </div>
                    <div class="flex justify-between items-start mb-6">
                        <div class="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                            <i data-lucide="users" class="w-8 h-8"></i>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border border-slate-700 px-2 py-1 rounded">Level 2</span>
                    </div>
                    <h3 class="font-bold text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors tracking-wide">TEAM</h3>
                    <h4 class="font-bold text-sm text-slate-400 mb-4 font-mono">TACTICAL COOPERATION</h4>
                    <p class="text-slate-300 text-sm leading-relaxed flex-grow border-t border-white/5 pt-4">
                        連携・協働。「言った言わない」を排除。<br>
                        チーム全体の時間を最適化する。
                    </p>
                    <div class="mt-8 pt-4 flex justify-end">
                        <div class="flex items-center gap-2 text-xs font-bold transition-all text-blue-400 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 tracking-widest">
                            ACCESS GRANTED <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </div>
                    </div>
                </div>

                <!-- Advanced Card -->
                <div onclick="navigate('advanced')" class="glass-panel p-8 rounded-2xl cursor-pointer group card-3d flex flex-col h-full relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-20">
                        <i data-lucide="cpu" class="w-24 h-24 text-purple-500"></i>
                    </div>
                    <div class="flex justify-between items-start mb-6">
                        <div class="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                            <i data-lucide="zap" class="w-8 h-8"></i>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border border-slate-700 px-2 py-1 rounded">Level 3</span>
                    </div>
                    <h3 class="font-bold text-2xl text-white mb-2 group-hover:text-purple-400 transition-colors tracking-wide">SCHOOL</h3>
                    <h4 class="font-bold text-sm text-slate-400 mb-4 font-mono">SYSTEM OVERRIDE</h4>
                    <p class="text-slate-300 text-sm leading-relaxed flex-grow border-t border-white/5 pt-4">
                        自動化・仕組み化。アナログ業務の完全撤廃。<br>
                        管理職・DX担当が見るべき新世界。
                    </p>
                    <div class="mt-8 pt-4 flex justify-end">
                        <div class="flex items-center gap-2 text-xs font-bold transition-all text-purple-400 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 tracking-widest">
                            ACCESS GRANTED <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Guide Image Section -->
            <div class="mt-20 pt-10 border-t border-white/10">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3 tracking-widest uppercase">
                    <span class="w-1 h-6 bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
                    Interface Guide
                </h3>
                <div class="w-full glass-panel rounded-lg overflow-hidden border border-white/10 relative group">
                    <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
                    <!-- 画像ファイルのパスを設定 -->
                    <img src="image_032074.png" alt="Google カレンダー画面ガイド" class="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'p-20 text-center text-slate-500 font-mono text-sm tracking-widest\'>[ IMAGE SIGNAL LOST ]<br>image_032074.png</div>'">
                </div>
            </div>

            <!-- Embedded Calendar Section -->
            <div class="mt-12 pt-10 border-t border-white/10">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3 tracking-widest uppercase">
                    <span class="w-1 h-6 bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
                    Event Log
                </h3>
                <div class="w-full glass-panel rounded-lg p-1 border border-white/10 shadow-2xl">
                    <div class="opacity-80 hover:opacity-100 transition-opacity duration-500">
                        <iframe src="https://calendar.google.com/calendar/embed?src=809970adf4635861e2452f6d722ecec683d277aa35cc12076f07d417e02beb40%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no" class="rounded bg-white/5 invert-[.9] grayscale-[.5] contrast-125"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- BEGINNER VIEW -->
        <section id="view-beginner" class="hidden fade-in space-y-10">
            <div class="border-b border-white/10 pb-6 mb-4 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-10 opacity-10">
                    <i data-lucide="clock" class="w-64 h-64 text-green-500"></i>
                </div>
                <div class="flex items-center gap-4 text-green-400 mb-2">
                    <div class="p-3 rounded-lg bg-green-500/10 border border-green-500/30"><i data-lucide="clock" class="w-8 h-8"></i></div>
                    <h2 class="text-4xl font-extrabold tracking-tight text-white text-glow-green">PERSONAL</h2>
                </div>
                <p class="text-xl text-slate-300 pl-0 md:pl-20 mb-2 font-light">個人の時間を整える</p>
                <div class="pl-0 md:pl-20">
                    <span class="text-xs font-mono text-green-400 border border-green-500/30 bg-green-500/5 px-2 py-1">STATUS: OPTIMIZING</span>
                </div>
            </div>

            <div class="glass-panel p-6 rounded-lg border-l-4 border-green-500 text-slate-300 mb-8 text-center font-medium text-lg tracking-wide relative">
                <div class="absolute top-0 left-0 w-full h-full bg-green-500/5 pointer-events-none"></div>
                知っているか、知らないか。<br class="hidden md:inline">
                その差が、精神的余裕を劇的に変える。
            </div>

            <!-- Grid Layout for Items -->
            <div class="grid md:grid-cols-2 gap-6">
                <!-- 1. ドラッグ＆ドロップ -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="mouse-pointer-2" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">ドラッグ＆ドロップで予定変更</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">手書きの修正テープ生活からの脱却。予定変更もマウス操作一つで完了します。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: カレンダー画面上の予定を長押し
                        </div>
                    </div>
                </div>

                <!-- 2. 予定の色分け -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="palette" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">予定の色分け</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">授業＝青、会議＝赤、などルールを決めて脳の認知負荷を下げましょう。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: 予定を右クリック
                        </div>
                    </div>
                </div>

                <!-- 3. 場所の入力 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="map-pin" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">場所の入力（Googleマップ連携）</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">出張先の住所を入れておけば、当日スマホのカレンダーからタップするだけでナビが起動します。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: 予定作成画面 > 場所を追加
                        </div>
                    </div>
                </div>

                <!-- 4. Tasks連携 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="list-todo" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">Google ToDoリスト（Tasks）連携</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">カレンダーの右側でタスクを管理し、完了チェックを入れる快感を味わいましょう。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: 画面右側のサイドパネル > Tasksアイコン
                        </div>
                    </div>
                </div>

                <!-- 5. 通知設定 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="bell" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">通知設定の最適化</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">「会議10分前」の通知を設定するだけで、うっかり遅刻を撲滅できます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > 通知設定
                        </div>
                    </div>
                </div>

                <!-- 6. ゴミ箱 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="trash-2" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">ゴミ箱機能</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">誤って消してしまっても大丈夫。設定メニューの「ゴミ箱」から30日以内なら復元可能です。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > ゴミ箱
                        </div>
                    </div>
                </div>

                <!-- 7. 迅速な会議設定 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="hourglass" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">迅速な会議設定（会議の短縮）</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">60分の会議を自動で50分に設定。終わりの10分で移動や次の準備をする余裕が生まれます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > 全般 > イベントの設定
                        </div>
                    </div>
                </div>

                <!-- 8. 週番号の表示 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="hash" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">週番号の表示</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">年間計画やシラバス作成時に便利。「第何週」かがひと目でわかるようになります。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > ビューの設定
                        </div>
                    </div>
                </div>

                <!-- 9. ビューのカスタマイズ -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="layout-grid" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">ビューのカスタマイズ</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">「4日分」や「2週間」など、自分の業務サイクルに最適な表示日数を設定できます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > ビューの設定
                        </div>
                    </div>
                </div>

                <!-- 10. 週の開始日設定 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="calendar-range" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">週の開始日設定</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">手帳に合わせて「月曜始まり」に変更可能。土日の予定が連続して見えるので部活顧問にもおすすめ。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > ビューの設定
                        </div>
                    </div>
                </div>

                <!-- 11. 週末の非表示 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="maximize-2" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">週末の非表示</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">平日の業務に集中したい場合、土日を非表示にしてカレンダーの表示領域を広く使えます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > ビューの設定
                        </div>
                    </div>
                </div>

                <!-- 12. 過去のイベントを薄く表示 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="eye-off" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">過去のイベントを薄く表示</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">終わった予定の色を薄くすることで、「今」と「これから」の予定に視線が集中します。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > ビューの設定
                        </div>
                    </div>
                </div>

                <!-- 13. 関心のあるカレンダー -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="globe-2" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">関心のあるカレンダー（祝日・六曜）</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">「日本の祝日」や「六曜」をカレンダーに追加。大安や仏滅もすぐに確認できます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > カレンダーを追加
                        </div>
                    </div>
                </div>

                <!-- 14. 検索機能 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="search" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">検索機能の活用</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">「去年のあの行事、いつだった？」を検索一発で回答。キーワードや参加者で絞り込めます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: 画面上部の虫眼鏡アイコン / 「/」キー
                        </div>
                    </div>
                </div>

                <!-- 15. 印刷・PDF化 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="printer" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">印刷・PDF化</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">どうしても紙が必要な時も安心。期間指定で綺麗にPDF化して印刷できます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > 印刷
                        </div>
                    </div>
                </div>

                <!-- 16. スマホウィジェット -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-green-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10 group-hover:text-green-300 group-hover:border-green-500/50 transition-colors shrink-0">
                        <i data-lucide="layers" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">スマホウィジェットの活用</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">スマホのホーム画面にカレンダーを配置。アプリを開かずに次の予定を確認できます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="smartphone" class="w-3 h-3"></i> アクセス: スマホのホーム画面を長押し
                        </div>
                    </div>
                </div>
            </div>
                
            <!-- Shortcuts Section -->
            <div class="glass-panel p-6 rounded-xl border border-white/10 mt-6 relative overflow-hidden">
                <div class="absolute -right-10 -bottom-10 opacity-5 rotate-12">
                        <i data-lucide="keyboard" class="w-40 h-40 text-white"></i>
                </div>
                <div class="flex flex-col md:flex-row md:items-center gap-3 mb-6">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-white/10 rounded-lg text-slate-300"><i data-lucide="keyboard" class="w-5 h-5"></i></div>
                        <h3 class="font-bold text-lg text-white tracking-widest uppercase">Key Commands</h3>
                    </div>
                    <span class="text-xs text-slate-500 font-mono md:ml-auto">※ 設定で「キーボードショートカット」を有効にする必要があります</span>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">D</kbd>
                        <span class="text-xs text-slate-500 font-mono">日 (Day)</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">W</kbd>
                        <span class="text-xs text-slate-500 font-mono">週 (Week)</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">M</kbd>
                        <span class="text-xs text-slate-500 font-mono">月 (Month)</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">Y</kbd>
                        <span class="text-xs text-slate-500 font-mono">年 (Year)</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">A</kbd>
                        <span class="text-xs text-slate-500 font-mono">スケジュール</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">X</kbd>
                        <span class="text-xs text-slate-500 font-mono">カスタム (5日)</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">T</kbd>
                        <span class="text-xs text-slate-500 font-mono">今日 (Today)</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">C</kbd>
                        <span class="text-xs text-slate-500 font-mono">作成 (Create)</span>
                    </div>
                    <div class="flex flex-col items-center bg-black/40 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors group">
                        <kbd class="bg-slate-800 border-b-2 border-slate-600 px-3 py-1 rounded text-xl font-mono font-bold text-green-400 mb-2 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-800 transition-colors">/</kbd>
                        <span class="text-xs text-slate-500 font-mono">検索</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- INTERMEDIATE VIEW -->
        <section id="view-intermediate" class="hidden fade-in space-y-10">
            <div class="border-b border-white/10 pb-6 mb-4 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-10 opacity-10">
                    <i data-lucide="users" class="w-64 h-64 text-blue-500"></i>
                </div>
                <div class="flex items-center gap-4 text-blue-400 mb-2">
                    <div class="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30"><i data-lucide="users" class="w-8 h-8"></i></div>
                    <h2 class="text-4xl font-extrabold tracking-tight text-white text-glow">TEAM</h2>
                </div>
                <p class="text-xl text-slate-300 pl-0 md:pl-20 mb-2 font-light">チーム業務を効率化する</p>
                <div class="pl-0 md:pl-20">
                    <span class="text-xs font-mono text-blue-400 border border-blue-500/30 bg-blue-500/5 px-2 py-1">STATUS: SYNCHRONIZED</span>
                </div>
            </div>

            <div class="glass-panel p-6 rounded-lg border-l-4 border-blue-500 text-slate-300 mb-8 text-center font-medium text-lg tracking-wide relative">
                <div class="absolute top-0 left-0 w-full h-full bg-blue-500/5 pointer-events-none"></div>
                Google Workspaceの真骨頂。<br class="hidden md:inline">
                自己のみならず、周囲の時間をも掌握せよ。
            </div>

            <div class="grid gap-6">
                <!-- 1. カレンダーの共有 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-blue-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-blue-400 border border-white/10 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors shrink-0">
                        <i data-lucide="share-2" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">カレンダーの共有</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">学年団や分掌で予定を可視化。「あの件いつだっけ？」という会話自体をゼロにします。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定 > マイカレンダーの設定 > 特定のユーザーとの共有
                        </div>
                    </div>
                </div>

                <!-- 2. 会議メモ -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-blue-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-blue-400 border border-white/10 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors shrink-0">
                        <i data-lucide="file-text" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 flex items-center gap-2 flex-wrap group-hover:text-blue-400 transition-colors">
                            会議メモ（Google ドキュメント連携）
                            <span class="text-[9px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30 whitespace-nowrap font-mono">Education版</span>
                        </h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">予定作成と同時に議事録を準備。参加者への権限付与も自動化され、準備の手間が消えます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: 予定作成画面 > 説明欄 > 「会議メモを作成」ボタン
                        </div>
                    </div>
                </div>

                <!-- 3. 添付ファイル -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-blue-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-blue-400 border border-white/10 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors shrink-0">
                        <i data-lucide="paperclip" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">添付ファイル</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">会議資料のPDFや、授業で使うスライドを予定に直接貼り付けておけます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: 予定作成画面 > 説明欄 > クリップアイコン(添付)
                        </div>
                    </div>
                </div>

                <!-- 4. セカンダリカレンダー -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-blue-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-blue-400 border border-white/10 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors shrink-0">
                        <i data-lucide="calendar-plus" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">セカンダリカレンダーの作成</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">「時間割」「部活」「プライベート」など、用途別にカレンダーを作成して重ねて表示できます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定 > カレンダーを追加 > 新しいカレンダーを作成
                        </div>
                    </div>
                </div>

                <!-- 5. Classroom連携 -->
                <div class="glass-panel p-6 rounded-xl flex gap-5 items-start transition-all hover:border-blue-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-blue-400 border border-white/10 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors shrink-0">
                        <i data-lucide="graduation-cap" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 flex items-center gap-2 flex-wrap group-hover:text-blue-400 transition-colors">
                            Google Classroom 連携
                            <span class="text-[9px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30 whitespace-nowrap font-mono">Education版</span>
                        </h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">Classroomで設定した課題の締め切りが、自動的にカレンダーに表示されます。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="terminal" class="w-3 h-3"></i> アクセス: Google Classroom > 授業 > Googleカレンダー
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ADVANCED VIEW -->
        <section id="view-advanced" class="hidden fade-in space-y-10">
            <div class="border-b border-white/10 pb-6 mb-4 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-10 opacity-10">
                    <i data-lucide="zap" class="w-64 h-64 text-purple-500"></i>
                </div>
                <div class="flex items-center gap-4 text-purple-400 mb-2">
                    <div class="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30"><i data-lucide="zap" class="w-8 h-8"></i></div>
                    <h2 class="text-4xl font-extrabold tracking-tight text-white text-glow-purple">SCHOOL</h2>
                </div>
                <p class="text-xl text-slate-300 pl-0 md:pl-20 mb-2 font-light">学校システムを変革する (DX)</p>
                <div class="pl-0 md:pl-20">
                    <span class="text-xs font-mono text-purple-400 border border-purple-500/30 bg-purple-500/5 px-2 py-1">STATUS: FULL AUTOMATION</span>
                </div>
            </div>

            <div class="glass-panel p-6 rounded-lg border-l-4 border-purple-500 text-slate-300 mb-8 text-center font-medium text-lg tracking-wide relative">
                <div class="absolute top-0 left-0 w-full h-full bg-purple-500/5 pointer-events-none"></div>
                管理職・DX担当が見るべき領域。<br class="hidden md:inline">
                ここを実装すれば、「世界」は変わる。
            </div>

            <div class="grid gap-8">
                <!-- 1. CSV Import -->
                <div class="glass-panel p-6 rounded-xl border border-white/10 flex gap-6 items-start transition-all hover:border-purple-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-purple-400 border border-white/10 group-hover:text-purple-300 group-hover:border-purple-500/50 transition-colors shrink-0">
                        <i data-lucide="file-spreadsheet" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">年間行事予定のCSV一括インポート</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">年度初めの膨大な手入力を、Geminiとスプレッドシートを使って瞬殺します。CSVヘッダー（Subject, Start Date等）の作成もGeminiに任せましょう。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定(歯車) > 設定 > インポート / エクスポート
                        </div>
                    </div>
                </div>

                <!-- 2. Web Public -->
                <div class="glass-panel p-6 rounded-xl border border-white/10 flex gap-6 items-start transition-all hover:border-purple-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-purple-400 border border-white/10 group-hover:text-purple-300 group-hover:border-purple-500/50 transition-colors shrink-0">
                        <i data-lucide="globe" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">Webサイトへのカレンダー公開</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">保護者向けHPにカレンダーを埋め込み、行事予定の更新を自動化します。表示されるiframeコードをHPに貼り付けるだけです。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定 > カレンダーの統合 > 埋め込みコード
                        </div>
                    </div>
                </div>

                <!-- 3. Offline -->
                <div class="glass-panel p-6 rounded-xl border border-white/10 flex gap-6 items-start transition-all hover:border-purple-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-purple-400 border border-white/10 group-hover:text-purple-300 group-hover:border-purple-500/50 transition-colors shrink-0">
                        <i data-lucide="wifi-off" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">オフライン設定</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">災害時やネット不通時でも予定を確認できるようにします。ブラウザにデータがキャッシュされ、閲覧が可能になります。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="settings" class="w-3 h-3"></i> アクセス: 設定 > 全般 > オフライン
                        </div>
                    </div>
                </div>

                <!-- 4. Gemini Video Item -->
                <div class="glass-panel p-6 rounded-xl border border-white/10 flex gap-6 items-start transition-all hover:border-purple-500/50 hover:bg-white/5 group shadow-lg">
                    <div class="p-3 bg-white/5 rounded-lg text-purple-400 border border-white/10 group-hover:text-purple-300 group-hover:border-purple-500/50 transition-colors shrink-0">
                        <i data-lucide="sparkles" class="w-8 h-8"></i>
                    </div>
                    <div class="w-full">
                        <h3 class="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors tracking-wide">Geminiに予定作成を依頼</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">「来週の金曜16時から職員会議を入れて」とチャットで依頼するだけで、カレンダーへの登録が完了します。細かな入力作業から解放されましょう。</p>
                        <!-- Video Embed -->
                        <div class="rounded-lg overflow-hidden border border-white/20 shadow-2xl mt-4 relative bg-black">
                             <div class="absolute inset-0 bg-purple-500/10 pointer-events-none mix-blend-overlay"></div>
                            <video src="calenderdemo.mp4" controls class="w-full h-auto opacity-90"></video>
                        </div>
                    </div>
                </div>

                <!-- 5. GAS Item -->
                <div class="glass-panel p-8 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                    
                    <div class="flex items-start gap-5 mb-6 relative z-10">
                        <div class="p-4 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/30 shrink-0">
                            <i data-lucide="bot" class="w-8 h-8"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-2xl text-white mb-2 flex flex-wrap items-center gap-3 tracking-wide">
                                【神】GAS×Geminiによる自動振り分け
                                <span class="text-[10px] px-2 py-1 bg-purple-500 text-black rounded font-bold font-mono">配布スクリプト</span>
                            </h3>
                            <p class="text-slate-400 leading-relaxed mb-3">Geminiに話しかけるだけで、部活・校務などのカレンダーへ自動で整理・転記します。</p>
                            <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                                <i data-lucide="map" class="w-3 h-3"></i> アクセス: Google Apps Script または スプレッドシート > 拡張機能 > Apps Script
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 pl-0 md:pl-20 relative z-10">
                        <details class="group/code">
                            <summary class="flex items-center gap-2 cursor-pointer text-sm font-bold text-slate-400 hover:text-purple-400 transition-colors mb-4 list-none tracking-widest uppercase">
                                <i data-lucide="code" class="w-4 h-4"></i> スクリプトを表示する
                            </summary>
                            <div class="rounded-xl overflow-hidden border border-white/10 shadow-2xl mt-2 bg-black/50 backdrop-blur-md">
                                <div class="bg-white/5 px-4 py-3 flex justify-between items-center border-b border-white/10">
                                    <div class="flex items-center gap-2">
                                        <i data-lucide="file-code" class="w-3 h-3 text-purple-400"></i>
                                        <span class="text-xs font-mono text-purple-300 font-bold">auto_move_calendar.gs</span>
                                    </div>
                                    <button onclick="copyCode(this)" class="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-all font-medium border bg-transparent text-slate-400 border-white/20 hover:bg-white/10 hover:text-white">
                                        <i data-lucide="copy" class="w-3 h-3"></i> コードをコピー
                                    </button>
                                </div>
                                <div class="bg-black/80 p-4 overflow-x-auto custom-scrollbar relative">
                                    <div class="absolute inset-0 bg-repeat opacity-[0.03] pointer-events-none" style="background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent); background-size: 30px 30px;"></div>
<pre class="text-xs font-mono text-blue-300 leading-relaxed whitespace-pre relative z-10" id="code-block"><span class="text-slate-500">// ■設定エリア：タグとカレンダーIDの紐付け</span>
const TARGET_CALENDARS = {
  <span class="text-green-400">'#部活'</span>: 'xxxx@group.calendar.google.com',
  <span class="text-green-400">'#校務'</span>: 'yyyy@group.calendar.google.com'
};
const SOURCE_CALENDAR_ID = <span class="text-green-400">'primary'</span>; 

function moveEventsByTag() {
  const sourceCal = CalendarApp.getCalendarById(SOURCE_CALENDAR_ID);
  const now = new Date();
  <span class="text-purple-400">const</span> startTime = new Date(now.getTime() - 10 * 60 * 1000); 
  <span class="text-purple-400">const</span> endTime = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
  
  const events = sourceCal.getEvents(startTime, endTime);
  
  events.forEach(event => {
    const title = event.getTitle();
    for (const [tag, targetId] of Object.entries(TARGET_CALENDARS)) {
      if (title.includes(tag)) {
        const targetCal = CalendarApp.getCalendarById(targetId);
        if (targetCal) {
          const newTitle = title.replace(tag, '').trim();
          if (event.isAllDayEvent()) {
            targetCal.createAllDayEvent(newTitle, event.getAllDayStartDate(), {
              description: event.getDescription(), location: event.getLocation()
            });
          } else {
            targetCal.createEvent(newTitle, event.getStartTime(), event.getEndTime(), {
              description: event.getDescription(), location: event.getLocation()
            });
          }
          event.deleteEvent(); <span class="text-slate-500">// 元のカレンダーから削除</span>
        }
        break; 
      }
    }
  });
}</pre>
                                </div>
                            </div>
                            <p class="text-xs text-red-400 font-bold mt-3 flex items-center gap-2 animate-pulse">
                                <i data-lucide="alert-triangle" class="w-4 h-4"></i>
                                重要：トリガー設定（時間主導型・10分ごと）を忘れずに！
                            </p>
                        </details>
                    </div>
                </div>

                <!-- 6. Appointment Schedule -->
                <div class="glass-panel p-6 rounded-xl border border-white/10 flex gap-6 items-start transition-all hover:border-purple-500/50 hover:bg-white/5 group">
                    <div class="p-3 bg-white/5 rounded-lg text-purple-400 border border-white/10 group-hover:text-purple-300 group-hover:border-purple-500/50 transition-colors shrink-0">
                        <i data-lucide="calendar-clock" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">予約スケジュール</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-3">保護者面談などの日程調整をURL一つで完結。空き枠を定義し、保護者に選んでもらいます。相手はGoogleアカウント不要で予約可能です。</p>
                        <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/30 px-3 py-1 rounded border border-white/5">
                            <i data-lucide="plus-circle" class="w-3 h-3"></i> アクセス: 作成(＋ボタン) > 予約スケジュール
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-black text-slate-500 py-16 mt-20 text-center text-sm border-t border-white/10 relative z-10">
        <div class="max-w-4xl mx-auto px-4">
            
            <!-- Instructor Profile Section -->
            <div class="max-w-2xl mx-auto mb-12 p-6 glass-panel rounded-xl border border-blue-500/30 relative overflow-hidden group text-left">
                <div class="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                    <i data-lucide="id-card" class="w-16 h-16 text-blue-400"></i>
                </div>
                <div class="flex items-center gap-4 mb-4 relative z-10">
                    <div class="p-3 rounded-full bg-blue-500/10 border border-blue-500/30">
                        <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-mono text-blue-400 tracking-widest uppercase mb-1">INSTRUCTOR DATA</h4>
                        <h3 class="text-xl font-bold text-white tracking-wide">森 隆一郎 <span class="text-xs text-slate-500 ml-2 font-mono">Ryuichiro Mori</span></h3>
                    </div>
                </div>
                <div class="grid gap-2 text-sm text-slate-300 font-mono relative z-10">
                    <div class="flex items-center gap-2">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-green-500/70"></i>
                        <span>Google for Education 認定トレーナー</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-green-500/70"></i>
                        <span>GEG Asahikawa 共同リーダー</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-green-500/70"></i>
                        <span>Gemini 認定教育者</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-green-500/70"></i>
                        <span>道教委生成AI利活用推進プロジェクト</span>
                    </div>
                </div>
            </div>

            <!-- Social Links Section -->
            <div class="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                <!-- LINE -->
                <a href="https://line.me/ti/g2/owdY3jYHfiFCKD1V5HCLhcaMgldf9Gm4Qvoicw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center gap-3 p-4 rounded-lg bg-green-900/10 border border-green-900/30 hover:bg-green-900/20 hover:border-green-500/50 transition-all">
                    <i data-lucide="message-circle" class="w-5 h-5 text-green-600 group-hover:text-green-400 transition-colors"></i>
                    <div class="text-left">
                        <div class="text-[10px] text-green-700 font-bold tracking-wider group-hover:text-green-500">OPEN CHAT</div>
                        <div class="text-xs text-slate-400 group-hover:text-green-200 transition-colors">先行配信を受け取る</div>
                    </div>
                </a>

                <!-- Instagram -->
                <a href="https://www.instagram.com/geg.asahikawa?igsh=MTd4MjM0eHU4d3UwMQ%3D%3D" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center gap-3 p-4 rounded-lg bg-pink-900/10 border border-pink-900/30 hover:bg-pink-900/20 hover:border-pink-500/50 transition-all">
                    <i data-lucide="instagram" class="w-5 h-5 text-pink-700 group-hover:text-pink-400 transition-colors"></i>
                    <div class="text-left">
                        <div class="text-[10px] text-pink-800 font-bold tracking-wider group-hover:text-pink-500">INSTAGRAM</div>
                        <div class="text-xs text-slate-400 group-hover:text-pink-200 transition-colors">Follow Us</div>
                    </div>
                </a>

                <!-- Facebook -->
                <a href="https://www.facebook.com/profile.php?id=61563304486367" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center gap-3 p-4 rounded-lg bg-blue-900/10 border border-blue-900/30 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all">
                    <i data-lucide="facebook" class="w-5 h-5 text-blue-700 group-hover:text-blue-400 transition-colors"></i>
                    <div class="text-left">
                        <div class="text-[10px] text-blue-800 font-bold tracking-wider group-hover:text-blue-500">FACEBOOK</div>
                        <div class="text-xs text-slate-400 group-hover:text-blue-200 transition-colors">Official Page</div>
                    </div>
                </a>
            </div>

            <div class="flex justify-center items-center gap-2 mb-4">
                <i data-lucide="shield" class="w-6 h-6 text-slate-700"></i>
            </div>
            <!-- uppercaseクラスを削除 -->
            <p class="font-bold text-slate-400 text-lg mb-2 tracking-widest">GEG Asahikawa Learning Session</p>
            <p class="mb-8 text-slate-600 font-mono text-xs">Google Calendar DX Project // 2026</p>
            <div class="flex justify-center gap-6 text-xs text-slate-700 font-mono uppercase tracking-wider">
                <span class="hover:text-white cursor-pointer transition-colors">Security</span>
                <span class="hover:text-white cursor-pointer transition-colors">Privacy</span>
                <span class="hover:text-white cursor-pointer transition-colors">Terms</span>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // Init Icons
        lucide.createIcons();

        // Navigation
        function navigate(viewId) {
            // Hide mobile menu
            document.getElementById('mobile-menu').classList.add('hidden');
            
            // Hide all views
            ['home', 'beginner', 'intermediate', 'advanced'].forEach(id => {
                document.getElementById('view-' + id).classList.add('hidden');
                
                // Reset nav styles
                const btn = document.getElementById('nav-' + id);
                if(btn) {
                    btn.classList.remove('text-white');
                    btn.classList.add('text-slate-300');
                    // Underline reset is handled by CSS hover/active states mainly, 
                    // but we can force active state class if needed. 
                    // Simple approach: just rely on view switching.
                }
            });
            
            // Show target view
            document.getElementById('view-' + viewId).classList.remove('hidden');
            
            // Active Nav Style
            const activeBtn = document.getElementById('nav-' + viewId);
            if(activeBtn) {
                activeBtn.classList.remove('text-slate-300');
                activeBtn.classList.add('text-white');
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Toggle Mobile Menu
        function toggleMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Copy Function
        function copyCode(btn) {
            const code = document.getElementById('code-block').innerText;
            navigator.clipboard.writeText(code).then(() => {
                const originalHtml = btn.innerHTML;
                btn.innerHTML = '<i data-lucide="check-circle" class="w-3 h-3"></i> COPIED';
                btn.classList.add('text-green-400', 'border-green-500/50');
                lucide.createIcons();
                
                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.classList.remove('text-green-400', 'border-green-500/50');
                    lucide.createIcons();
                }, 2000);
            });
        }
        
        // Initial set active nav
        navigate('home');
        
        // Tilt Effect for 3D Cards
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card-3d');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Only apply if mouse is close/over to avoid performance hit
                if (x > -50 && x < rect.width + 50 && y > -50 && y < rect.height + 50) {
                     const centerX = rect.width / 2;
                     const centerY = rect.height / 2;
                     
                     // Calculate rotation (max 10deg)
                     const rotateX = ((y - centerY) / centerY) * -5;
                     const rotateY = ((x - centerX) / centerX) * 5;
                     
                     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                } else {
                     card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                }
            });
        });
        
        // Mouse leave reset
        document.addEventListener('mouseleave', () => {
             const cards = document.querySelectorAll('.card-3d');
             cards.forEach(card => {
                 card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
             });
        });

    </script>
</body>
</html>
