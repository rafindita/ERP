/**
 * =================================================================
 * BLUE HORIZON ERP - v3.0 COMMAND CENTER EDITION
 * Integrated AI Agent & Full Module Coverage
 * =================================================================
 */

const AppConfig = {
    categories: {
        'dashboard': { title: 'DASHBOARD', modules: ['mod6'] },
        'finance': { title: 'FINANCIAL CORE', modules: ['mod1'] },
        'project': { title: 'PROJECTS & HR', modules: ['mod2', 'mod3'] },
        'customer': { title: 'CUSTOMER & SALES', modules: ['mod4'] },
        'supply': { title: 'SUPPLY CHAIN', modules: ['mod5', 'mod8'] },
        'governance': { title: 'GOVERNANCE & IT', modules: ['mod7', 'mod9', 'mod10'] }
    },
    
    modules: [
        {
            id: 'mod6', title: 'Dashboard', icon: 'fa-chart-pie',
            desc: 'Executive analytics and decision support system.',
            processes: [
                { id: '6.1', title: 'Executive Dashboard', type: 'bi_dash', desc: 'Real-time KPI monitoring.' },
                { id: '6.2', title: 'Predictive Analytics', type: 'chart_grid', desc: 'Forecasting & Prescriptive AI.' }
            ]
        },
        {
            id: 'mod1', title: 'Finance & Accounting', icon: 'fa-coins',
            desc: 'Financial orchestration and accounting.',
            processes: [
                { id: '1.1', title: 'Accounts Payable', type: 'table', cols: ['PO Number', 'Vendor', 'Date', 'Amount', 'Status'], desc: 'Vendor invoice processing.' },
                { id: '1.2', title: 'Accounts Receivable', type: 'table', cols: ['Inv ID', 'Client', 'Due Date', 'Amount', 'Risk Score'], desc: 'Order-to-cash cycle.' },
                { id: '1.3', title: 'General Ledger', type: 'table', cols: ['Journal ID', 'Account', 'Debit', 'Credit', 'Date'], desc: 'Daily reconciliation.' },
                { id: '1.4', title: 'FP&A', type: 'chart_grid', desc: 'Budgeting & Forecasting.' },
                { id: '1.5', title: 'Treasury', type: 'table', cols: ['Cash ID', 'Bank', 'Balance', 'Currency', 'Liquidity'], desc: 'Cash management.' },
                { id: '1.6', title: 'Fixed Assets', type: 'table', cols: ['Asset ID', 'Name', 'Value', 'Depreciation', 'Location'], desc: 'Lifecycle management.' },
                { id: '1.7', title: 'T&E Management', type: 'table', cols: ['Claim ID', 'Employee', 'Type', 'Amount', 'Audit Status'], desc: 'Expense claims.' },
                { id: '1.8', title: 'Project Accounting', type: 'table', cols: ['Project', 'Budget', 'Actual Cost', 'Variance'], desc: 'Project profitability.' },
                { id: '1.11', title: 'Tax Management', type: 'table', cols: ['Tax Type', 'Period', 'Base Amount', 'Tax Due', 'Status'], desc: 'Compliance & reporting.' }
            ]
        },
        {
            id: 'mod2', title: 'Project Management', icon: 'fa-diagram-project',
            desc: 'Project portfolio and execution.',
            processes: [
                { id: '2.1', title: 'Portfolio (PPM)', type: 'kanban', desc: 'Project selection & strategy.' },
                { id: '2.2', title: 'Project Execution', type: 'table', cols: ['Project', 'PM', 'Progress', 'Health', 'Deadline'], desc: 'Task & milestone tracking.' },
                { id: '2.3', title: 'Resource Management', type: 'table', cols: ['Name', 'Role', 'Utilization', 'Current Project', 'Status'], desc: 'Talent allocation.' }
            ]
        },
        {
            id: 'mod3', title: 'HCM', icon: 'fa-users',
            desc: 'Human capital and payroll.',
            processes: [
                { id: '3.1', title: 'Core HR & Payroll', type: 'table', cols: ['Emp ID', 'Name', 'Salary', 'Overtime', 'Net Pay'], desc: 'Admin & Payroll.' },
                { id: '3.2', title: 'Talent Management', type: 'kanban', desc: 'Recruitment, Performance, Retention.' }
            ]
        },
        {
            id: 'mod4', title: 'CRM', icon: 'fa-handshake',
            desc: 'Customer relationship management.',
            processes: [
                { id: '4.1', title: 'Sales Force Auto', type: 'kanban', desc: 'Lead to Customer pipeline.' },
                { id: '4.2', title: 'Customer Service', type: 'table', cols: ['Ticket ID', 'Client', 'Issue', 'Priority', 'Status'], desc: 'Support ticketing.' },
                { id: '4.3', title: 'Customer Success', type: 'table', cols: ['Client', 'Health Score', 'Churn Risk', 'Upsell Opp'], desc: 'Retention & Growth.' },
                { id: '4.4', title: 'CPQ', type: 'table', cols: ['Quote ID', 'Client', 'Product Config', 'Price', 'Status'], desc: 'Quoting system.' },
                { id: '4.5', title: 'Marketing Auto', type: 'chart_grid', desc: 'Campaign analytics.' }
            ]
        },
        {
            id: 'mod5', title: 'Procurement', icon: 'fa-cart-flatbed', 
            desc: 'Sourcing and purchasing.', 
            processes: [
                { id: '5.1', title: 'Sourcing & Vendor', type: 'table', cols: ['Vendor', 'Score', 'Risk Level', 'Category', 'Status'], desc: 'Vendor selection.' }, 
                { id: '5.2', title: 'Contract Lifecycle', type: 'table', cols: ['Contract ID', 'Vendor', 'Start Date', 'End Date', 'Value'], desc: 'CLM.' }
            ] 
        },
        { 
            id: 'mod8', title: 'Services & SOW', icon: 'fa-file-signature', 
            desc: 'External services procurement.', 
            processes: [
                { id: '8.1', title: 'Sourcing Services', type: 'table', cols: ['Req ID', 'Skill Needed', 'Candidate', 'Rate', 'Status'], desc: 'Find experts.' },
                { id: '8.2', title: 'SOW Management', type: 'kanban', desc: 'Statement of Work tracking.' },
                { id: '8.3', title: 'Performance Track', type: 'table', cols: ['SOW ID', 'Milestone', 'Quality Check', 'Approval'], desc: 'Deliverable acceptance.' }
            ] 
        },
        { 
            id: 'mod7', title: 'GRC', icon: 'fa-shield-halved', 
            desc: 'Governance, Risk, Compliance.', 
            processes: [
                { id: '7.1', title: 'Internal Controls', type: 'table', cols: ['Control ID', 'Process', 'Test Result', 'Last Tested'], desc: 'Control monitoring.' }, 
                { id: '7.2', title: 'Audit Management', type: 'table', cols: ['Audit ID', 'Scope', 'Findings', 'Status'], desc: 'Internal audit.' },
                { id: '7.3', title: 'Compliance', type: 'table', cols: ['Regulation', 'Requirement', 'Gap Analysis', 'Deadline'], desc: 'External regulations.' }
            ] 
        },
        { 
            id: 'mod9', title: 'IT Ops (ITSAM)', icon: 'fa-laptop-code', 
            desc: 'IT Service & Asset Management.', 
            processes: [
                { id: '9.1', title: 'IT Asset Management', type: 'table', cols: ['Asset Tag', 'Item', 'User', 'Health', 'Lifecycle'], desc: 'Hardware/Software.' }, 
                { id: '9.2', title: 'IT Service Management', type: 'kanban', desc: 'Helpdesk & Incidents.' },
                { id: '9.3', title: 'Change Management', type: 'table', cols: ['RFC ID', 'System', 'Risk', 'Approval', 'Schedule'], desc: 'IT Changes.' }
            ] 
        },
        { 
            id: 'mod10', title: 'LMS', icon: 'fa-graduation-cap', 
            desc: 'Learning & Development.', 
            processes: [
                { id: '10.1', title: 'Training Catalog', type: 'catalog', desc: 'Course repository.' },
                { id: '10.2', title: 'Personal Dev', type: 'table', cols: ['Emp Name', 'Course', 'Progress', 'Score', 'Cert'], desc: 'Learning path.' }
            ] 
        }
    ]
};

let dashboardInterval = null;
let dashboardCharts = {};

const DataService = {
    getTableData(cols) {
        const statuses = ['Active', 'Pending', 'Approved', 'Rejected', 'Draft'];
        const risks = ['Low', 'Medium', 'High', 'Critical'];
        
        return Array.from({length: 8}, (_, i) => cols.map(col => {
            if(col.includes('Status') || col.includes('Approval')) {
                const s = statuses[Math.floor(Math.random()*statuses.length)];
                let c = s === 'Active' || s === 'Approved' ? 'success' : s === 'High' || s === 'Rejected' ? 'danger' : 'warning';
                return `<span class="status-badge ${c}">${s}</span>`;
            }
            if(col.includes('Risk') || col.includes('Health')) {
                const r = risks[Math.floor(Math.random()*risks.length)];
                let c = r === 'Low' ? 'success' : r === 'Critical' ? 'danger' : 'warning';
                return `<span class="status-badge ${c}">${r}</span>`;
            }
            if(col.includes('Amount') || col.includes('Value') || col.includes('Salary') || col.includes('Price')) {
                return `$${(Math.random()*10000).toFixed(2)}`;
            }
            if(col.includes('Progress')) return `<div class="progress-bar"><div class="fill" style="width:${Math.floor(Math.random()*100)}%"></div></div>`;
            return `Entry-${Math.floor(Math.random()*1000)}`;
        }));
    },
    getKanbanData() {
        return { 
            'Backlog': [{t:'Analyze Req', d:'Pending review'}, {t:'Vendor Select', d:'Awaiting quotes'}], 
            'In Progress': [{t:'Dev Phase', d:'Backend API'}, {t:'Drafting SOW', d:'Legal review'}], 
            'Review': [{t:'QA Testing', d:'Bug fixes'}],
            'Done': [{t:'Deployment', d:'Production'}, {t:'Signed', d:'Executed'}] 
        };
    }
};

let currentProcessId = null; 

const App = {
    init() {
        if(localStorage.getItem('theme') === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            document.getElementById('themeIcon').classList.replace('fa-moon', 'fa-sun');
        }
        this.renderSidebar();
        this.startClock(); // MULAI JAM
        this.navigateTo('mod6'); 
    },

    /* --- FUNGSI BARU: JAM DIGITAL --- */
    startClock() {
        const update = () => {
            const now = new Date();
            const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
            const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            
            const el = document.getElementById('topbarClock');
            if(el) {
                el.innerHTML = `
                <div class="digital-clock">
                    <span class="dc-date"><i class="fa-regular fa-calendar" style="margin-right:6px;"></i> ${dateStr}</span>
                    <span class="dc-time">${timeStr}</span>
                </div>`;
            }
        };
        update();
        setInterval(update, 1000);
    },

    /* --- FUNGSI BARU: TOP LOADING BAR --- */
    triggerLoader() {
        const loader = document.getElementById('globalLoader');
        loader.style.width = '0%';
        loader.style.opacity = '1';
        
        // Simulasi loading cepat
        setTimeout(() => loader.style.width = '40%', 50);
        setTimeout(() => loader.style.width = '80%', 200);
        setTimeout(() => {
            loader.style.width = '100%';
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.width = '0%', 200);
            }, 300);
        }, 500);
    },

    /* --- FUNGSI BARU: SAPAAN DINAMIS --- */
    getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    },

    toggleTheme() {
        const body = document.body;
        const icon = document.getElementById('themeIcon');
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    },

    renderSidebar() {
        const menu = document.getElementById('sidebarMenu');
        let html = '';
        for (const [key, cat] of Object.entries(AppConfig.categories)) {
            if(key !== 'dashboard') html += `<div class="nav-category">${cat.title}</div>`;
            cat.modules.forEach(modId => {
                const mod = AppConfig.modules.find(m => m.id === modId);
                if(mod) html += `<div class="nav-item" onclick="App.navigateTo('${mod.id}')" id="nav-${mod.id}"><i class="fa-solid ${mod.icon}"></i> ${mod.title}</div>`;
            });
        }
        menu.innerHTML = html;
    },

    navigateTo(modId) {
        this.triggerLoader(); // JALANKAN LOADER

        if (dashboardInterval) clearInterval(dashboardInterval);
        
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const navEl = document.getElementById(`nav-${modId}`);
        if(navEl) navEl.classList.add('active');
        
        const mod = AppConfig.modules.find(m => m.id === modId);
        const root = document.getElementById('appRoot');
        const addBtn = document.getElementById('addDataBtn');
        
        document.getElementById('breadcrumbs').innerText = mod.title;
        currentProcessId = null; 

        if(modId === 'mod6') { 
            if(addBtn) addBtn.style.display = 'none';
            this.renderBIDash(root);
            this.startDashboardLiveUpdate();
            return; 
        } else {
            if(addBtn) addBtn.style.display = 'flex';
        }

        // Tambahkan class 'fade-in-up' ke wrapper konten
        let html = `
            <div class="fade-in-up">
                <div class="header-section">
                    <div class="h-title">${mod.title}</div>
                    <div class="h-desc">${mod.desc}</div>
                </div>
                <div class="grid-catalog">`;
        
        mod.processes.forEach(proc => {
            html += `
                <div class="process-card" onclick="App.openProcess('${modId}', '${proc.id}')">
                    <div class="pc-icon"><i class="fa-solid ${mod.icon}"></i></div>
                    <div class="pc-title">${proc.title}</div>
                    <div class="pc-desc">${proc.desc}</div>
                    <div class="pc-footer">
                        <span class="tag active">Active Detail</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>`;
        });
        html += `</div></div>`;
        root.innerHTML = html;
    },

    openProcess(modId, procId) {
    this.triggerLoader();

    const mod = AppConfig.modules.find(m => m.id === modId);
    const proc = mod.processes.find(p => p.id === procId);
    const root = document.getElementById('appRoot');
    
    // 1. SEMBUNYIKAN TOMBOL ADD DATA GLOBAL (DI TOPBAR)
    const globalAddBtn = document.getElementById('addDataBtn');
    if(globalAddBtn) globalAddBtn.style.display = 'none';
    
    currentProcessId = proc; 

    document.getElementById('breadcrumbs').innerHTML = `<span onclick="App.navigateTo('${modId}')" class="bread-link">${mod.title}</span> <span class="bread-sep">/</span> ${proc.title}`;

    // 2. RENDER TOMBOL ADD DATA BARU DI DALAM HEADER (DI SAMPING TOMBOL BACK)
    let html = `
        <div class="fade-in-up">
            <div class="header-section flex-between">
                <div>
                    <div class="h-title">${proc.title}</div>
                    <div class="h-desc">${proc.desc}</div>
                </div>
                
                <div class="header-actions">
                    <button class="btn-add-context" onclick="App.openAddModal()">
                        <i class="fa-solid fa-plus"></i> Add New Entry
                    </button>
                    
                    <button class="btn-back" onclick="App.navigateTo('${modId}')">
                        <i class="fa-solid fa-arrow-left"></i> Back to Module
                    </button>
                </div>
                </div>
            <div id="processContent">
                <div class="table-container p-4">
                    <div class="skeleton skeleton-title mb-2"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                </div>
            </div>
        </div>`;
    root.innerHTML = html;

    setTimeout(() => {
        let contentHtml = '';
        if(proc.type === 'table') contentHtml = this.renderTable(proc.cols);
        else if(proc.type === 'kanban') contentHtml = this.renderKanban();
        else if(proc.type === 'catalog') contentHtml = this.renderCatalog();
        else contentHtml = this.renderChartGrid();
        
        document.getElementById('processContent').innerHTML = contentHtml;
        if(proc.type.includes('chart') || proc.type === 'bi_dash') this.initCharts();
    }, 300);
},

    // --- RENDERERS ---

    renderBIDash(root) {
        const greeting = this.getGreeting();

        root.innerHTML = `
        <div class="dashboard-container fade-in-up">
            
            <div class="dash-control-bar">
                <div style="display:flex; align-items:center; gap:10px;">

                    <span style="font-size:13px; font-weight:600; color:var(--text-main);">
                        ${greeting}, Rafindita S.
                    </span>
                </div>
                <div class="filter-pill-group">
                    <div class="filter-pill active">Q4 2025</div>
                    <div class="filter-pill">Global Region</div>
                    <div class="filter-pill"><i class="fa-solid fa-filter"></i> Filter</div>
                    <button class="btn-sm primary" onclick="App.renderBIDash(document.getElementById('appRoot'))"><i class="fa-solid fa-rotate"></i></button>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card-modern">
                    <div class="scm-top">
                        <div class="scm-icon icon-blue"><i class="fa-solid fa-sack-dollar"></i></div>
                        <div class="scm-trend trend-up"><i class="fa-solid fa-arrow-up"></i> 22%</div>
                    </div>
                    <div>
                        <div class="scm-label">Total Revenue (YTD)</div>
                        <div class="scm-value" id="kpi-revenue">$14.50 M</div>
                    </div>
                </div>

                <div class="stat-card-modern">
                    <div class="scm-top">
                        <div class="scm-icon icon-purple"><i class="fa-solid fa-chart-pie"></i></div>
                        <div class="scm-trend trend-up"><i class="fa-solid fa-arrow-up"></i> 1.5%</div>
                    </div>
                    <div>
                        <div class="scm-label">Gross Profit Margin</div>
                        <div class="scm-value" id="kpi-margin">42.8%</div>
                    </div>
                </div>

                <div class="stat-card-modern">
                    <div class="scm-top">
                        <div class="scm-icon icon-green"><i class="fa-solid fa-users"></i></div>
                        <div class="scm-trend trend-up"><i class="fa-solid fa-plus"></i> 125</div>
                    </div>
                    <div>
                        <div class="scm-label">Active Clients</div>
                        <div class="scm-value" id="kpi-cust">1,242</div>
                    </div>
                </div>

                <div class="stat-card-modern" style="border-color: var(--danger-bg);">
                    <div class="scm-top">
                        <div class="scm-icon icon-orange"><i class="fa-solid fa-triangle-exclamation"></i></div>
                        <div class="scm-trend trend-down">High Risk</div>
                    </div>
                    <div>
                        <div class="scm-label text-danger">Churn Prediction</div>
                        <div class="scm-value text-danger" id="live-churn">8.6%</div>
                    </div>
                </div>
            </div>

            <div class="main-grid">
                
                <div class="card-elegant">
                    <div class="section-title">
                        <span><i class="fa-solid fa-chart-area" style="color:var(--primary); margin-right:8px;"></i> Financial Performance</span>
                        <div class="text-muted-sm">Revenue vs Op. Costs (6 Months)</div>
                    </div>
                    <div style="flex:1; position:relative; min-height: 250px;">
                        <canvas id="revenueChart"></canvas>
                    </div>
                    <div style="display:flex; justify-content:center; gap:20px; margin-top:10px;">
                        <div class="text-muted-sm"><span style="color:#3b82f6">●</span> Revenue</div>
                        <div class="text-muted-sm"><span style="color:#ef4444">●</span> Costs</div>
                    </div>
                </div>

                <div class="card-elegant ai-card-modern">
                    <div class="ai-glass-overlay"></div>
                    <div class="ai-content-wrapper">
                        <div class="ai-header-mod">
                            <div class="ai-icon-pulse"><i class="fa-solid fa-brain"></i></div>
                            <div>
                                <div style="font-weight:700; font-size:14px; color:white;">Neural Core AI</div>
                                <div style="font-size:10px; opacity:0.7;">Real-time Analysis</div>
                            </div>
                        </div>
                        <div class="ai-text-body">
                            "Berdasarkan pola data Q4, efisiensi <span class="ai-highlight">Supply Chain (Modul 5)</span> menyumbang kenaikan laba terbesar. <br><br>
                            <i class="fa-solid fa-circle-exclamation" style="color:#f87171"></i> <strong>Alert:</strong> Risiko Churn korporat meningkat. Disarankan segera intervensi pada klien: <em>GlobalTech Inc</em>."
                        </div>
                        <div class="ai-btn-group">
                            <button class="btn-glass"><i class="fa-solid fa-wand-magic-sparkles"></i> Ask AI</button>
                            <button class="btn-glass"><i class="fa-solid fa-file-pdf"></i> Report</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom-grid">
                
                <div class="card-elegant">
                     <div class="section-title">Revenue Source</div>
                     <div style="height:160px; position:relative;">
                        <canvas id="breakdownChart"></canvas>
                     </div>
                     <div class="text-muted-sm text-center mt-2">Driven by <strong>Subscription</strong></div>
                </div>

                <div class="card-elegant">
                    <div class="section-title">Critical Attention</div>
                    <div class="alert-list">
                        <div class="alert-item-mod critical">
                            <i class="fa-solid fa-circle-xmark text-danger" style="margin-top:2px;"></i>
                            <div class="aim-content">
                                <h4>Audit Temuan (GRC)</h4>
                                <p>3 Poin kepatuhan belum terpenuhi.</p>
                            </div>
                        </div>
                        <div class="alert-item-mod warning">
                            <i class="fa-solid fa-clock text-warning" style="margin-top:2px;"></i>
                            <div class="aim-content">
                                <h4>Procurement Delay</h4>
                                <p>Vendor Approval > 45 Hari.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-elegant">
                    <div class="section-title">Module Health</div>
                    <div class="health-dots-container">
                        <div class="h-dot-pill"><div class="dot-status ok"></div> FIN</div>
                        <div class="h-dot-pill"><div class="dot-status ok"></div> HCM</div>
                        <div class="h-dot-pill"><div class="dot-status ok"></div> SCM</div>
                        <div class="h-dot-pill"><div class="dot-status warn"></div> CRM</div>
                        <div class="h-dot-pill"><div class="dot-status err"></div> GRC</div>
                        <div class="h-dot-pill"><div class="dot-status ok"></div> PROJ</div>
                    </div>
                </div>

            </div>
        </div>
        `;

        setTimeout(() => {
            this.initDashboardCharts();
        }, 100);
    },

    renderTable(cols) {
        const rows = DataService.getTableData(cols);
        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section">
                    <div class="cc-title"><i class="fa-solid fa-table-list" style="margin-right:8px; color:var(--primary);"></i> Detailed Records</div>
                    <div class="cc-subtitle">Manage and view all data entries for this module.</div>
                </div>
                <div class="cc-actions">
                    <div class="search-wrapper small">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search Data..." class="search-input">
                    </div>
                    <button class="btn-action-light" onclick="App.toast('Filter Applied')"><i class="fa-solid fa-filter"></i> Filter</button>
                    <button class="btn-action-light" onclick="App.toast('Exporting CSV...')"><i class="fa-solid fa-file-export"></i> Export</button>
                </div>
            </div>

            <div class="cc-body no-padding">
                <div class="table-container" style="border:none; border-radius:0;">
                    <table>
                        <thead>
                            <tr>
                                ${cols.map(c => `<th>${c}</th>`).join('')}
                                <th class="col-detail">Detail</th> </tr>
                        </thead>
                        <tbody>
                            ${rows.map(r => `
                                <tr onclick="App.openRecordDetail(this, 'table')" style="cursor:pointer; transition:background 0.2s;">
                                    ${r.map(c => `<td>${c}</td>`).join('')}
                                    <td class="cell-detail" onclick="event.stopPropagation(); App.openRecordDetail(this.closest('tr'), 'table')">
                                        <button class="btn-view-action">
                                            <i class="fa-regular fa-eye"></i> View
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="cc-footer">
                <span class="text-muted-sm">Showing <strong>1-8</strong> of <strong>124</strong> entries</span>
                <div class="pagination-btns">
                    <button class="btn-icon-sm" disabled><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="btn-icon-sm active" style="background:var(--primary); color:white; border-color:var(--primary);">1</button>
                    <button class="btn-icon-sm">2</button>
                    <button class="btn-icon-sm">3</button>
                    <button class="btn-icon-sm"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>`;
    },

    renderKanban() {
        const data = DataService.getKanbanData();
        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section">
                    <div class="cc-title"><i class="fa-solid fa-border-all" style="margin-right:8px; color:var(--primary);"></i> Task Board</div>
                    <div class="cc-subtitle">Drag and drop cards to update status.</div>
                </div>
                <div class="cc-actions">
                    <button class="btn-action-light"><i class="fa-solid fa-plus"></i> New Task</button>
                    <button class="btn-action-light"><i class="fa-solid fa-sliders"></i> View</button>
                </div>
            </div>
            
            <div class="cc-body padded">
                <div class="kanban-board" style="border:none; padding:0;">
                    ${Object.entries(data).map(([s, i]) => `
                        <div class="kanban-col">
                            <div class="kc-head">${s} <span class="badge-count">${i.length}</span></div>
                            <div class="kc-body">
                                ${i.map(c => `
                                <div class="kc-card" onclick="App.openRecordDetail(this, 'kanban', '${c.t}', '${c.d}')">
                                    <div class="kc-title">${c.t}</div>
                                    <div class="kc-desc">${c.d}</div>
                                    <div class="kc-meta"><div class="avatar-xs">U</div> <span>Today</span></div>
                                </div>`).join('')}
                            </div>
                        </div>`).join('')}
                </div>
            </div>
        </div>`;
    },

    renderCatalog() {
        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section">
                    <div class="cc-title"><i class="fa-solid fa-book-open" style="margin-right:8px; color:var(--primary);"></i> Course Catalog</div>
                    <div class="cc-subtitle">Available training modules for employees.</div>
                </div>
                <div class="cc-actions">
                    <div class="search-wrapper small">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search courses..." class="search-input">
                    </div>
                </div>
            </div>
            <div class="cc-body padded">
                <div class="grid-catalog">
                    ${['Cybersecurity Basics', 'Advanced Leadership', 'Data Privacy', 'ERP Fundamentals', 'Agile Methodologies'].map(c => `
                    <div class="process-card">
                        <div class="pc-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                        <div class="pc-title">${c}</div>
                        <div class="pc-desc">Mandatory training module for Q4 2025.</div>
                        <button class="btn-sm primary w-full">Enroll Now</button>
                    </div>`).join('')}
                </div>
            </div>
        </div>`;
    },

    renderChartGrid() {
        return `<div class="chart-card" style="height:400px"><canvas id="mainChart"></canvas></div>`;
    },

    openAddModal() {
        const container = document.getElementById('modalFormContainer');
        const title = document.getElementById('modalTitle');
        
        let fields = [];
        
        if (currentProcessId) {
            title.innerText = `Add to ${currentProcessId.title}`;
            if(currentProcessId.cols) {
                fields = currentProcessId.cols.map(c => ({label: c, type: c.includes('Date') ? 'date' : 'text'}));
            } else {
                fields = [{label: 'Title', type:'text'}, {label: 'Description', type:'text'}];
            }
        } else {
            title.innerText = "Quick Add";
            fields = [{label: 'Select Module', type:'select'}, {label: 'Note', type:'text'}];
        }

        let html = '';
        fields.forEach(f => {
            html += `
            <div class="form-group">
                <label>${f.label}</label>
                ${f.type === 'select' 
                    ? `<select class="form-select"><option>Finance</option><option>HR</option></select>` 
                    : `<input type="${f.type}" class="form-input" placeholder="Enter ${f.label}...">`
                }
            </div>`;
        });
        
        container.innerHTML = html;
        document.getElementById('modalData').classList.add('open');
    },

    submitForm() {
        this.closeModal('modalData');
        this.toast('Data Entry Saved Successfully');
    },

    initCharts() {
        const ctx = document.getElementById('mainChart');
        if(ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jul','Aug','Sep','Oct', 'Nov', 'Dec'],
                    datasets: [
                        { label: 'Revenue', data: [28, 32, 38, 45, 42, 50], borderColor: '#3b82f6', tension: 0.4, borderWidth: 2, pointRadius: 0, fill: true, backgroundColor: 'rgba(59, 130, 246, 0.1)' },
                        { label: 'Cost', data: [14, 15, 16, 12, 18, 20], borderColor: '#ef4444', borderDash: [5,5], tension: 0.4, borderWidth: 2, pointRadius: 0 }
                    ]
                },
                options: { 
                    responsive: true, maintainAspectRatio: false, 
                    plugins: { legend: { display: true, position: 'top', align: 'end', labels: {boxWidth: 8, usePointStyle: true} } },
                    scales: { y: { grid: { color: 'rgba(200,200,200,0.1)' }, ticks:{display:true} }, x: { grid: { display:false } } },
                    interaction: { mode: 'index', intersect: false }
                }
            });
        }
    },

    initDashboardCharts() {
        const ctxRev = document.getElementById('revenueChart');
        if(ctxRev) {
            dashboardCharts.revenue = new Chart(ctxRev, {
                type: 'line',
                data: {
                    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                    datasets: [
                        {
                            label: 'Revenue',
                            data: [3.2, 3.5, 3.8, 3.6, 4.1, 4.2],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true,
                            pointRadius: 3
                        },
                        {
                            label: 'Op. Costs',
                            data: [1.8, 1.9, 2.0, 1.9, 2.1, 2.2],
                            borderColor: '#ef4444',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            tension: 0.4,
                            pointRadius: 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { 
                        y: { 
                            display: true, 
                            grid: { display: true, borderDash: [4, 4], color: 'rgba(200,200,200,0.1)' },
                            ticks: { font: { size: 10 } }
                        },
                        x: { 
                            grid: { display: false },
                            ticks: { font: { size: 10 } }
                        }
                    },
                    elements: {
                        line: { tension: 0.4 },
                        point: { radius: 0, hoverRadius: 6 }
                    }
                }
            });
        }

        const ctxBreak = document.getElementById('breakdownChart');
        if(ctxBreak) {
            dashboardCharts.breakdown = new Chart(ctxBreak, {
                type: 'doughnut',
                data: {
                    labels: ['Subscription', 'Services', 'Licensing'],
                    datasets: [{
                        data: [55, 30, 15],
                        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: { 
                        legend: { position: 'bottom', labels: { boxWidth: 10, usePointStyle: true, padding: 20 } }
                    }
                }
            });
        }
    },

    startDashboardLiveUpdate() {
        if(dashboardInterval) clearInterval(dashboardInterval);
        
        dashboardInterval = setInterval(() => {
            const randomFlux = () => (Math.random() * 0.2) - 0.1;
            
            let currentRev = 14.5 + randomFlux();
            document.getElementById('kpi-revenue').innerText = `$${currentRev.toFixed(2)} M`;
            
            if(Math.random() > 0.7) {
                let currentCust = parseInt(document.getElementById('kpi-cust').innerText.replace(',',''));
                document.getElementById('kpi-cust').innerText = (currentCust + 1).toLocaleString();
            }

            let churn = 8.5 + (Math.random() * 0.4 - 0.2);
            const elChurn = document.getElementById('live-churn');
            if(elChurn) elChurn.innerText = churn.toFixed(1);

            if(dashboardCharts.revenue) {
                const lastIdx = dashboardCharts.revenue.data.datasets[0].data.length - 1;
                let lastVal = dashboardCharts.revenue.data.datasets[0].data[lastIdx];
                let newVal = lastVal + randomFlux();
                if(newVal < 3.8) newVal = 3.8;
                if(newVal > 4.5) newVal = 4.5;

                dashboardCharts.revenue.data.datasets[0].data[lastIdx] = newVal;
                document.getElementById('chart-main-val').innerText = `$${newVal.toFixed(2)}M`;
                dashboardCharts.revenue.update('none');
            }
        }, 3000);
    },

    toggleAI() { document.getElementById('aiPanel').classList.toggle('open'); },
    toggleNotifications() { document.getElementById('panelNotif').classList.toggle('open'); },
    closeModal(id) { document.getElementById(id).classList.remove('open'); },
    openSettings() { document.getElementById('modalSettings').classList.add('open'); },
    
    simulateAI() {
        const val = document.getElementById('aiInput').value;
        if(!val) return;
        const el = document.getElementById('aiContent');
        el.innerHTML += `<div class="ai-msg-user">"${val}"</div>`;
        document.getElementById('aiInput').value = '';
        el.scrollTop = el.scrollHeight;
        
        setTimeout(() => {
            el.innerHTML += `<div class="ai-insight">Processing request across 10 modules... Found 3 relevant data points. Visualization updated.</div>`;
            el.scrollTop = el.scrollHeight;
        }, 800);
    },

    toast(msg) {
        const c = document.getElementById('toast-container');
        const d = document.createElement('div'); d.className='toast show'; d.innerHTML=`<i class="fa-solid fa-circle-check"></i> ${msg}`; c.appendChild(d);
        setTimeout(()=> { d.classList.remove('show'); setTimeout(()=>d.remove(), 300); }, 3000);
    },

    openRecordDetail(el, type, titleOpt, descOpt) {
        const panel = document.getElementById('panelDetail');
        const content = document.getElementById('detailContent');
        
        if (type === 'table') {
            document.querySelectorAll('tr.selected-row').forEach(row => row.classList.remove('selected-row'));
            if(el) el.classList.add('selected-row');
        }

        let id, title, statusHTML, mainData = [];

        if (type === 'table') {
            const cells = el.getElementsByTagName('td');
            
            id = cells[0].innerText;
            title = cells[1] ? cells[1].innerText : 'Record Detail';
            statusHTML = cells[cells.length - 2].innerHTML; 

            for(let i=1; i < cells.length - 2; i++) {
                mainData.push({ label: `Field Info ${i}`, val: cells[i].innerText });
            }
        } else {
            id = `TSK-${Math.floor(Math.random()*1000)}`;
            title = titleOpt;
            statusHTML = `<span class="status-badge warning">In Progress</span>`;
            mainData.push({ label: 'Description', val: descOpt });
            mainData.push({ label: 'Assignee', val: 'Rafindita S.' });
        }

        content.innerHTML = `
            <div class="detail-hero">
                <div class="dh-id">#${id}</div>
                <div class="dh-title">${title}</div>
                <div style="margin-top:8px;">${statusHTML}</div>
                <div class="detail-tabs">
                    <div class="d-tab active">Overview</div>
                    <div class="d-tab">Activity Log</div>
                    <div class="d-tab">Documents</div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4 style="margin-bottom:12px; font-size:12px; text-transform:uppercase; color:var(--text-muted);">General Information</h4>
                <div class="ds-grid">
                    ${mainData.map(d => `
                        <div class="ds-item">
                            <label>${d.label}</label>
                            <div>${d.val}</div>
                        </div>
                    `).join('')}
                    <div class="ds-item">
                        <label>Created By</label>
                        <div>System Admin</div>
                    </div>
                    <div class="ds-item">
                        <label>Date Created</label>
                        <div>24 Nov 2025</div>
                    </div>
                </div>

                <h4 style="margin-bottom:12px; font-size:12px; text-transform:uppercase; color:var(--text-muted); margin-top:20px;">Recent Activity</h4>
                <div class="activity-line">
                    <div class="act-header">Record Updated</div>
                    <div class="act-time">Just now by You</div>
                </div>
                <div class="activity-line">
                    <div class="act-header">Status Changed to Active</div>
                    <div class="act-time">2 hours ago by System AI</div>
                </div>
                <div class="activity-line" style="border:none;">
                    <div class="act-header">Record Created</div>
                    <div class="act-time">Yesterday</div>
                </div>
            </div>
        `;

        panel.classList.add('open');
    },

    closeDetailPanel() {
        document.getElementById('panelDetail').classList.remove('open');
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());