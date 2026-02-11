<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GEG Asahikawa - Google Calendar DX Portal</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Noto Sans JP', sans-serif;
        }
        /* アニメーション用ユーティリティ */
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        .slide-in {
            animation: slideIn 0.3s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        /* スクロールバーのカスタマイズ（コードブロック用） */
        .code-scroll::-webkit-scrollbar {
            height: 8px;
        }
        .code-scroll::-webkit-scrollbar-track {
            background: #2d2d2d;
        }
        .code-scroll::-webkit-scrollbar-thumb {
            background: #4b5563;
            border-radius: 4px;
        }
    </style>
</head>
<body class="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-100 pb-20">

    <!-- Header -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 font-bold text-xl text-blue-600 cursor-pointer hover:opacity-80 transition-opacity" onclick="navigateTo('home')">
                <i data-lucide="calendar" class="w-6 h-6"></i>
                <span>GEG Asahikawa</span>
            </div>
            
            <!-- Desktop Nav -->
            <nav class="hidden md:flex gap-1">
                <button onclick="navigateTo('home')" class="nav-btn flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900" data-target="home">
                    <i data-lucide="home" class="w-4 h-4"></i> ホーム
                </button>
                <button onclick="navigateTo('beginner')" class="nav-btn flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900" data-target="beginner">
                    <i data-lucide="clock" class="w-4 h-4"></i> 個人
                </button>
                <button onclick="navigateTo('intermediate')" class="nav-btn flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900" data-target="intermediate">
                    <i data-lucide="users" class="w-4 h-4"></i> チーム
                </button>
                <button onclick="navigateTo('advanced')" class="nav-btn flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900" data-target="advanced">
                    <i data-lucide="zap" class="w-4 h-4"></i> 職員室
                </button>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe70j_LWw7x2m01LBE_TMwM2L28DNflq7RwZ3dq9SXEnJlQ4Q/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600">
                    <i data-lucide="clipboard-list" class="w-4 h-4"></i> アンケート
                </a>
            </nav>

            <!-- Mobile Menu Toggle -->
            <div class="md:hidden">
                <button class="p-2 text-slate-600 hover:bg-slate-100 rounded-lg" onclick="toggleMobileMenu()">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Nav Dropdown -->
        <div id="mobile-menu" class="md:hidden border-t border-slate-100 bg-white absolute w-full shadow-lg hidden">
            <div class="flex flex-col p-2 gap-1">
                <button onclick="navigateTo('home')" class="mobile-nav-btn flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full transition-colors text-slate-600 active:bg-slate-50" data-target="home">
                    <i data-lucide="home" class="w-[18px] h-[18px]"></i> ホーム
                </button>
                <button onclick="navigateTo('beginner')" class="mobile-nav-btn flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full transition-colors text-slate-600 active:bg-slate-50" data-target="beginner">
                    <i data-lucide="clock" class="w-[18px] h-[18px]"></i> 個人：自分の時間
                </button>
                <button onclick="navigateTo('intermediate')" class="mobile-nav-btn flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full transition-colors text-slate-600 active:bg-slate-50" data-target="intermediate">
                    <i data-lucide="users" class="w-[18px] h-[18px]"></i> チーム：連携・協働
                </button>
                <button onclick="navigateTo('advanced')" class="mobile-nav-btn flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full transition-colors text-slate-600 active:bg-slate-50" data-target="advanced">
                    <i data-lucide="zap" class="w-[18px] h-[18px]"></i> 職員室：学校全体
                </button>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe70j_LWw7x2m01LBE_TMwM2L28DNflq7RwZ3dq9SXEnJlQ4Q/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="mobile-nav-btn flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full transition-colors text-blue-600 active:bg-blue-50">
                    <i data-lucide="clipboard-list" class="w-[18px] h-[18px]"></i> 学習会後のアンケート
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content Area -->
    <main class="max-w-4xl mx-auto p-4 md:p-10">
        
        <!-- HOME VIEW -->
        <div id="view-home" class="view-section fade-in space-y-12">
            <div class="text-center space-y-6 py-10 md:py-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wider mb-2">
                    <i data-lucide="calendar" class="w-3 h-3"></i>
                    20260212 GEG Asahikawa
                </div>
                <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    あなたの予定を立体的にする<br />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Google カレンダー 使用術</span>
                </h1>
                <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    ただのカレンダーではない。<br class="hidden md:block" />
                    個人のスキルアップから、学校全体の自動化まで。
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <!-- Beginner Card -->
                <div onclick="navigateTo('beginner')" class="cursor-pointer group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-300 hover:shadow-green-100/50 flex flex-col h-full">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-3 rounded-xl bg-green-50 text-green-700 transition-colors">
                            <i data-lucide="clock" class="w-6 h-6"></i>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-full">Personal</span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">個人編</h3>
                    <h4 class="font-bold text-sm text-slate-500 mb-3">まずは「個人の時間」を整える</h4>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">脱・手帳。情報の「見える化」と「一元化」で、精神的余裕を生み出す基本技。</p>
                    <div class="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                        <div class="flex items-center gap-1 text-xs font-bold transition-colors text-blue-600 opacity-0 group-hover:opacity-100">
                            START <i data-lucide="arrow-right" class="w-[14px] h-[14px]"></i>
                        </div>
                    </div>
                </div>

                <!-- Intermediate Card -->
                <div onclick="navigateTo('intermediate')" class="cursor-pointer group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 hover:shadow-blue-100/50 flex flex-col h-full">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-3 rounded-xl bg-blue-50 text-blue-700 transition-colors">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-full">Team</span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">チーム編</h3>
                    <h4 class="font-bold text-sm text-slate-500 mb-3">「チームの業務」を効率化する</h4>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">連携・協働。「言った言わない」「資料どこ？」をなくし、周りの先生の時間も節約する。</p>
                    <div class="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                        <div class="flex items-center gap-1 text-xs font-bold transition-colors text-blue-600 opacity-0 group-hover:opacity-100">
                            START <i data-lucide="arrow-right" class="w-[14px] h-[14px]"></i>
                        </div>
                    </div>
                </div>

                <!-- Advanced Card -->
                <div onclick="navigateTo('advanced')" class="cursor-pointer group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-purple-300 hover:shadow-purple-100/50 flex flex-col h-full">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-3 rounded-xl bg-purple-50 text-purple-700 transition-colors">
                            <i data-lucide="zap" class="w-6 h-6"></i>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-full">School</span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">職員室編</h3>
                    <h4 class="font-bold text-sm text-slate-500 mb-3">「学校のシステム」を変える</h4>
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">自動化・仕組み化。アナログ業務を完全撤廃し、管理職やDX担当が見るべき世界へ。</p>
                    <div class="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                        <div class="flex items-center gap-1 text-xs font-bold transition-colors text-blue-600 opacity-0 group-hover:opacity-100">
                            START <i data-lucide="arrow-right" class="w-[14px] h-[14px]"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Guide Image Section -->
            <div class="mt-16 pt-10 border-t border-slate-200">
                <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <i data-lucide="info" class="text-blue-600 w-6 h-6"></i>
                    画面の見方・使い方ガイド
                </h3>
                <div class="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <img 
                        src="image_032074.png" 
                        alt="Google カレンダー画面ガイド" 
                        class="w-full h-auto object-contain"
                        onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\'p-10 text-center text-slate-400 bg-slate-50 text-sm\'>画像が表示されません (image_032074.png)</div>'"
                    />
                </div>
            </div>

            <!-- Embedded Calendar Section -->
            <div class="mt-10 pt-10 border-t border-slate-200">
                <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <i data-lucide="calendar" class="text-blue-600 w-6 h-6"></i>
                    イベントカレンダー
                </h3>
                <div class="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-1">
                    <iframe 
                        src="https://calendar.google.com/calendar/embed?src=809970adf4635861e2452f6d722ecec683d277aa35cc12076f07d417e02beb40@group.calendar.google.com&ctz=Asia/Tokyo" 
                        style="border: 0" 
                        width="100%" 
                        height="600" 
                        frameborder="0" 
                        scrolling="no"
                        title="GEG Asahikawa Event Calendar"
                        class="rounded-xl"
                    ></iframe>
                </div>
            </div>
        </div>

        <!-- BEGINNER VIEW -->
        <div id="view-beginner" class="view-section hidden slide-in space-y-8">
            <div class="border-b border-slate-200 pb-6 mb-4">
                <div class="flex items-center gap-3 text-green-600 mb-2">
                    <div class="p-3 rounded-xl bg-green-50">
                        <i data-lucide="clock" class="w-8 h-8"></i>
                    </div>
                    <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">個人編</h2>
                </div>
                <p class="text-2xl font-bold text-slate-700 pl-0 md:pl-16 mb-2">まずは「個人の時間」を整える</p>
                <p class="text-sm font-bold text-slate-500 pl-0 md:pl-16 bg-slate-100 inline-block px-3 py-1 rounded-full">
                    テーマ：脱・手帳。情報の「見える化」と「一元化」
                </p>
            </div>

            <div class="bg-green-50/50 p-6 rounded-xl border border-green-100 text-green-800 mb-8">
                <p class="font-medium text-lg text-center">
                    ここまでは「知っているか知らないか」だけの差ですが、<br class="hidden md:inline"/>
                    やるとやらないで精神的余裕が劇的に変わります。
                </p>
            </div>
            
            <div class="grid gap-6">
                <!-- Beginner Features -->
                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="mouse-pointer-2" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">ドラッグ＆ドロップで予定変更</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">手書きの修正テープ生活からの脱却。予定変更もマウス操作一つで完了します。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: カレンダー画面上の予定を長押し</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="palette" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">予定の色分け</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">授業＝青、会議＝赤、などルールを決めて脳の認知負荷を下げましょう。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 予定を右クリック</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="map-pin" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">場所の入力（Googleマップ連携）</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">出張先の住所を入れておけば、当日スマホのカレンダーからタップするだけでナビが起動します。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 予定作成画面 > 場所を追加</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="list-todo" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">Google ToDoリスト（Tasks）連携</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">カレンダーの右側でタスクを管理し、完了チェックを入れる快感を味わいましょう。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 画面右側のサイドパネル > Tasksアイコン</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="bell" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">通知設定の最適化</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">「会議10分前」の通知を設定するだけで、うっかり遅刻を撲滅できます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 通知設定</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="trash-2" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">ゴミ箱機能</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">誤って消してしまっても大丈夫。設定メニューの「ゴミ箱」から30日以内なら復元可能です。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > ゴミ箱</span></div>
                    </div>
                </div>

                <!-- 10 Additional Features -->
                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="hourglass" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">迅速な会議設定（会議の短縮）</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">60分の会議を自動で50分に設定。終わりの10分で移動や次の準備をする余裕が生まれます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 全般 > イベントの設定</span></div>
                    </div>
                </div>
                
                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="hash" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">週番号の表示</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">年間計画やシラバス作成時に便利。「第何週」かがひと目でわかるようになります。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > ビューの設定</span></div>
                    </div>
                </div>
                
                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="layout-grid" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">ビューのカスタマイズ</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">「4日分」や「2週間」など、自分の業務サイクルに最適な表示日数を設定できます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > ビューの設定</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="calendar-range" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">週の開始日設定</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">手帳に合わせて「月曜始まり」に変更可能。土日の予定が連続して見えるので部活顧問にもおすすめ。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > ビューの設定</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="maximize-2" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">週末の非表示</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">平日の業務に集中したい場合、土日を非表示にしてカレンダーの表示領域を広く使えます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > ビューの設定</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="eye-off" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">過去のイベントを薄く表示</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">終わった予定の色を薄くすることで、「今」と「これから」の予定に視線が集中します。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > ビューの設定</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="globe-2" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">関心のあるカレンダー（祝日・六曜）</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">「日本の祝日」や「六曜」をカレンダーに追加。大安や仏滅もすぐに確認できます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > カレンダーを追加 > 関心のあるカレンダー</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="search" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">検索機能の活用</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">「去年のあの行事、いつだった？」を検索一発で回答。キーワードや参加者で絞り込めます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 画面上部の虫眼鏡アイコン または「/」キー</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="printer" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">印刷・PDF化</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">どうしても紙が必要な時も安心。期間指定で綺麗にPDF化して印刷できます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 印刷</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="layers" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">スマホウィジェットの活用</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">スマホのホーム画面にカレンダーを配置。アプリを開かずに次の予定を確認できます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: スマホのホーム画面を長押し</span></div>
                    </div>
                </div>

                <!-- Shortcut Keys -->
                <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-4">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 bg-slate-100 rounded-lg text-slate-600"><i data-lucide="keyboard" class="w-5 h-5"></i></div>
                        <h3 class="font-bold text-lg text-slate-800">覚えておきたいショートカットキー</h3>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">D</kbd>
                            <span class="text-xs text-slate-500 font-medium">日 (Day)</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">W</kbd>
                            <span class="text-xs text-slate-500 font-medium">週 (Week)</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">M</kbd>
                            <span class="text-xs text-slate-500 font-medium">月 (Month)</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">Y</kbd>
                            <span class="text-xs text-slate-500 font-medium">年 (Year)</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">A</kbd>
                            <span class="text-xs text-slate-500 font-medium">スケジュール</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">X</kbd>
                            <span class="text-xs text-slate-500 font-medium">カスタム (5日)</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">T</kbd>
                            <span class="text-xs text-slate-500 font-medium">今日 (Today)</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">C</kbd>
                            <span class="text-xs text-slate-500 font-medium">作成 (Create)</span>
                        </div>
                        <div class="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors">
                            <kbd class="bg-white border-b-4 border-slate-300 px-4 py-1 rounded-lg text-xl font-mono font-bold text-slate-700 mb-2">/</kbd>
                            <span class="text-xs text-slate-500 font-medium">検索</span>
                        </div>
                    </div>
                    <p class="text-xs text-slate-500 mt-3 text-right">※ 設定で「キーボードショートカット」を有効にする必要があります</p>
                </div>
            </div>
        </div>

        <!-- INTERMEDIATE VIEW -->
        <div id="view-intermediate" class="view-section hidden slide-in space-y-8">
            <div class="border-b border-slate-200 pb-6 mb-4">
                <div class="flex items-center gap-3 text-blue-600 mb-2">
                    <div class="p-3 rounded-xl bg-blue-50">
                        <i data-lucide="users" class="w-8 h-8"></i>
                    </div>
                    <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">チーム編</h2>
                </div>
                <p class="text-2xl font-bold text-slate-700 pl-0 md:pl-16 mb-2">「チームの業務」を効率化する</p>
                <p class="text-sm font-bold text-slate-500 pl-0 md:pl-16 bg-slate-100 inline-block px-3 py-1 rounded-full">
                    テーマ：連携・協働。「言った言わない」「資料どこ？」をなくす
                </p>
            </div>

            <div class="bg-blue-50/50 p-6 rounded-xl border border-blue-100 text-blue-800 mb-8">
                <p class="font-medium text-lg text-center">
                    ここからがGoogle Workspaceの真骨頂です。<br class="hidden md:inline"/>
                    自分だけでなく、周りの先生の時間も節約します。
                </p>
            </div>

            <div class="grid gap-6">
                <!-- Intermediate Features -->
                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="share-2" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">カレンダーの共有</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">学年団や分掌で予定を可視化。「あの件いつだっけ？」という会話自体をゼロにします。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 設定 > マイカレンダーの設定 > 特定のユーザーとの共有</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="file-text" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1 flex flex-wrap items-center gap-2">
                            会議メモ（Google ドキュメント連携）
                            <span class="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200 whitespace-nowrap">Education版</span>
                        </h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">予定作成と同時に議事録を準備。参加者への権限付与も自動化され、準備の手間が消えます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 予定作成画面 > 説明欄 > 「会議メモを作成」ボタン</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="paperclip" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">添付ファイル</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">会議資料のPDFや、授業で使うスライドを予定に直接貼り付けておけます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 予定作成画面 > 説明欄 > クリップアイコン(添付)</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="calendar-plus" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">セカンダリカレンダーの作成</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">「時間割」「部活」「プライベート」など、用途別にカレンダーを作成して重ねて表示できます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 設定 > カレンダーを追加 > 新しいカレンダーを作成</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="graduation-cap" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1 flex flex-wrap items-center gap-2">
                            Google Classroom 連携
                            <span class="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200 whitespace-nowrap">Education版</span>
                        </h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">Classroomで設定した課題の締め切りが、自動的にカレンダーに表示されます。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: Google Classroom > 授業 > Googleカレンダー (自動連携)</span></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ADVANCED VIEW -->
        <div id="view-advanced" class="view-section hidden slide-in space-y-10">
            <div class="border-b border-slate-200 pb-6 mb-4">
                <div class="flex items-center gap-3 text-purple-600 mb-2">
                    <div class="p-3 rounded-xl bg-purple-50">
                        <i data-lucide="zap" class="w-8 h-8"></i>
                    </div>
                    <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">職員室編</h2>
                </div>
                <p class="text-2xl font-bold text-slate-700 pl-0 md:pl-16 mb-2">「学校のシステム」を変える（DX）</p>
                <p class="text-sm font-bold text-slate-500 pl-0 md:pl-16 bg-slate-100 inline-block px-3 py-1 rounded-full">
                    テーマ：自動化・仕組み化。アナログ業務の完全撤廃
                </p>
            </div>

            <div class="bg-purple-50/50 p-6 rounded-xl border border-purple-100 text-purple-800 mb-8">
                <p class="font-medium text-lg text-center">
                    管理職やDX推進担当が見るべき世界です。<br class="hidden md:inline"/>
                    ここを実装できれば「学校が変わった」と言われます。
                </p>
            </div>

            <div class="grid gap-6">
                <!-- Advanced Features -->
                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="file-spreadsheet" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">年間行事予定のCSV一括インポート</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">年度初めの膨大な手入力を、Geminiとスプレッドシートを使って瞬殺します。CSVヘッダー（Subject, Start Date等）の作成もGeminiに任せましょう。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 設定 > インポート / エクスポート</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="globe" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">Webサイトへのカレンダー公開</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">保護者向けHPにカレンダーを埋め込み、行事予定の更新を自動化します。表示されるiframeコードをHPに貼り付けるだけです。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 設定 > 対象カレンダーを選択 > カレンダーの統合 > 埋め込みコード</span></div>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="wifi-off" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">オフライン設定</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">災害時やネット不通時でも予定を確認できるようにします。ブラウザにデータがキャッシュされ、閲覧が可能になります。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 設定(歯車) > 設定 > 全般 > オフライン (チェックを入れる)</span></div>
                    </div>
                </div>

                <!-- Gemini Creation -->
                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="sparkles" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">Geminiに予定作成を依頼</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">「来週の金曜16時から職員会議を入れて」とチャットで依頼するだけで、カレンダーへの登録が完了します。細かな入力作業から解放されましょう。</p>
                        <div class="rounded-lg overflow-hidden border border-slate-200 shadow-sm mt-3">
                            <video src="calenderdemo.mp4" controls class="w-full h-auto"></video>
                        </div>
                    </div>
                </div>

                <!-- GAS Item -->
                <div class="feature-item relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="flex items-start gap-4 mb-4 pr-6">
                        <div class="p-3 bg-slate-100 rounded-xl text-slate-700 shrink-0">
                            <i data-lucide="bot" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xl text-slate-800 mb-2 flex flex-wrap items-center gap-2">
                                【神】GAS×Geminiによる自動振り分け
                                <span class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-bold">配布スクリプト</span>
                            </h3>
                            <p class="text-slate-600 leading-relaxed mb-3">
                                Geminiに話しかけるだけで、部活・校務などのカレンダーへ自動で整理・転記します。
                            </p>
                            <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200">
                                <i data-lucide="map" class="w-3 h-3 text-slate-400"></i>
                                <span>アクセス: Google Apps Script (script.google.com) または スプレッドシート &gt; 拡張機能 &gt; Apps Script</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 pl-0 md:pl-16">
                        <details class="group">
                            <summary class="flex items-center gap-2 cursor-pointer text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-4 list-none">
                                <i data-lucide="code" class="w-4 h-4"></i>
                                スクリプトを表示する
                            </summary>
                            <div class="animate-in fade-in duration-300">
                                <div class="rounded-xl overflow-hidden border border-slate-200 shadow-sm mt-2">
                                    <div class="bg-slate-50 px-4 py-3 flex justify-between items-center border-b border-slate-200">
                                        <div class="flex items-center gap-2">
                                            <i data-lucide="code" class="w-3.5 h-3.5 text-slate-400"></i>
                                            <span class="text-xs font-mono text-slate-600 font-bold">auto_move_calendar.gs</span>
                                        </div>
                                        <button onclick="copyToClipboard(this)" class="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-all font-medium border bg-white text-slate-600 border-slate-300 hover:bg-slate-50">
                                            <i data-lucide="copy" class="w-3 h-3"></i>
                                            <span class="btn-text">コードをコピー</span>
                                        </button>
                                    </div>
                                    <div class="bg-[#1e1e1e] p-4 overflow-x-auto code-scroll">
                                        <pre id="code-content" class="text-xs font-mono text-blue-300 leading-relaxed whitespace-pre">// ■設定エリア：タグとカレンダーIDの紐付け
const TARGET_CALENDARS = {
  '#部活': 'xxxx@group.calendar.google.com',
  '#校務': 'yyyy@group.calendar.google.com'
};
const SOURCE_CALENDAR_ID = 'primary'; 

function moveEventsByTag() {
  const sourceCal = CalendarApp.getCalendarById(SOURCE_CALENDAR_ID);
  const now = new Date();
  const startTime = new Date(now.getTime() - 10 * 60 * 1000); 
  const endTime = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
  
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
          event.deleteEvent(); // 元のカレンダーから削除
        }
        break; 
      }
    }
  });
}</pre>
                                    </div>
                                </div>
                                <p class="text-xs text-red-500 font-bold mt-2 flex items-center gap-1">
                                    <i data-lucide="external-link" class="w-3 h-3"></i>
                                    重要：トリガー設定（時間主導型・10分ごと）を忘れずに！
                                </p>
                            </div>
                        </details>
                    </div>
                </div>

                <div class="feature-item relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start transition-all hover:shadow-md">
                    <div class="absolute top-4 right-4">
                        <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onchange="toggleFeature(this)">
                    </div>
                    <div class="p-3 bg-slate-50 rounded-lg text-slate-600 shrink-0"><i data-lucide="calendar-clock" class="w-6 h-6"></i></div>
                    <div class="flex-grow pr-6">
                        <h3 class="font-bold text-lg text-slate-800 mb-1">予約スケジュール</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-3">保護者面談などの日程調整をURL一つで完結。空き枠を定義し、保護者に選んでもらいます。相手はGoogleアカウント不要で予約可能です。</p>
                        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200"><i data-lucide="map" class="w-3 h-3 text-slate-400"></i><span>アクセス: 作成(＋ボタン) > 予約スケジュール</span></div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-400 py-12 mt-20 text-center text-sm border-t border-slate-800">
        <div class="max-w-4xl mx-auto px-4">
            <p class="font-bold text-slate-200 text-lg mb-2">GEG Asahikawa Learning Session</p>
            <p class="mb-6 text-slate-500">Google Calendar DX Project</p>
            
            <!-- Added SNS Links -->
            <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
                <a href="https://line.me/ti/g2/owdY3jYHfiFCKD1V5HCLhcaMgldf9Gm4Qvoicw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-[#00B900] transition-colors">
                    <i data-lucide="message-circle" class="w-5 h-5"></i>
                    <span>講座情報の先行配信 (LINE)</span>
                </a>
                <a href="https://www.instagram.com/geg.asahikawa?igsh=MTd4MjM0eHU4d3UwMQ%3D%3D" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-[#E4405F] transition-colors">
                    <i data-lucide="instagram" class="w-5 h-5"></i>
                    <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61563304486367" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-[#1877F2] transition-colors">
                    <i data-lucide="facebook" class="w-5 h-5"></i>
                    <span>Facebook</span>
                </a>
            </div>

            <!-- Instructor Info -->
            <div class="mb-10 flex flex-col items-center">
                <div class="flex items-center gap-2 text-slate-600 bg-slate-50 px-5 py-2.5 rounded-full text-sm font-bold border border-slate-200 shadow-sm mb-4">
                    <i data-lucide="user" class="w-4 h-4 text-blue-500"></i>
                    <span>講座担当者：森 隆一郎</span>
                </div>
                <div class="flex flex-wrap justify-center gap-2 max-w-2xl px-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                        Google for Education 認定トレーナー
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                        GEG Asahikawa 共同リーダー
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                        Gemini 認定教育者
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                        道教委生成AI利活用推進プロジェクト
                    </span>
                </div>
            </div>

            <div class="flex justify-center gap-4 text-xs text-slate-600">
                <span>© 2026 GEG Asahikawa</span>
            </div>
        </div>
    </footer>

    <script>
        // 初期化
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
        });

        // ナビゲーション機能
        function navigateTo(targetId) {
            // 全ビューを非表示
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
            });
            // ターゲットを表示
            const targetView = document.getElementById(`view-${targetId}`);
            if (targetView) {
                targetView.classList.remove('hidden');
                // アニメーション再発火用
                targetView.classList.remove('fade-in', 'slide-in');
                void targetView.offsetWidth; // リフロー
                targetView.classList.add(targetId === 'home' ? 'fade-in' : 'slide-in');
            }

            // ナビボタンのアクティブ状態更新 (Desktop)
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if(btn.dataset.target === targetId) {
                    btn.classList.remove('text-slate-600', 'hover:bg-slate-50');
                    btn.classList.add('bg-blue-50', 'text-blue-700', 'ring-1', 'ring-blue-200', 'shadow-sm');
                } else {
                    btn.classList.add('text-slate-600', 'hover:bg-slate-50');
                    btn.classList.remove('bg-blue-50', 'text-blue-700', 'ring-1', 'ring-blue-200', 'shadow-sm');
                }
            });

            // ナビボタンのアクティブ状態更新 (Mobile)
            document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
                if(btn.dataset.target === targetId) {
                    btn.classList.add('bg-blue-50', 'text-blue-700');
                    btn.classList.remove('text-slate-600');
                } else {
                    btn.classList.remove('bg-blue-50', 'text-blue-700');
                    btn.classList.add('text-slate-600');
                }
            });

            // モバイルメニューを閉じる
            document.getElementById('mobile-menu').classList.add('hidden');
            
            // スクロールトップ
            window.scrollTo(0, 0);
        }

        // モバイルメニュー切り替え
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // クリップボードコピー
        function copyToClipboard(button) {
            const code = document.getElementById('code-content').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalContent = button.innerHTML;
                button.innerHTML = '<i data-lucide="check-circle" class="w-3 h-3 text-green-600"></i><span class="text-green-600">コピー完了</span>';
                button.classList.add('bg-green-50', 'border-green-200');
                lucide.createIcons();

                setTimeout(() => {
                    button.innerHTML = '<i data-lucide="copy" class="w-3 h-3"></i><span>コードをコピー</span>';
                    button.classList.remove('bg-green-50', 'border-green-200');
                    lucide.createIcons();
                }, 2000);
            });
        }

        // Feature Toggle Function
        function toggleFeature(checkbox) {
            const item = checkbox.closest('.feature-item');
            if (checkbox.checked) {
                item.classList.add('opacity-40', 'grayscale');
                item.classList.remove('bg-white', 'shadow-sm', 'hover:shadow-md');
                item.classList.add('bg-slate-50'); // 背景も少し暗くする
            } else {
                item.classList.remove('opacity-40', 'grayscale', 'bg-slate-50');
                item.classList.add('bg-white', 'shadow-sm', 'hover:shadow-md');
            }
        }

        // 初期ロード時の設定（ホームをアクティブに）
        navigateTo('home');
    </script>
</body>
</html>
