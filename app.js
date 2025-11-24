/**
 * =================================================================
 * BLUE HORIZON ERP - v4.0 ENTERPRISE EDITION
 * Based on Business Process Documents
 * Fully Integrated Modules 1-10 with Specialized Sub-Processes
 * =================================================================
 */

const AppConfig = {
    // Kategori Menu di Sidebar
    categories: {
        'dashboard': { title: 'COMMAND CENTER', modules: ['mod6'] },
        'finance': { title: 'FINANCIAL CORE', modules: ['mod1'] },
        'operations': { title: 'OPERATIONS & PROJECTS', modules: ['mod2', 'mod5', 'mod8'] },
        'human': { title: 'HUMAN CAPITAL', modules: ['mod3', 'mod10'] },
        'customer': { title: 'CUSTOMER & MARKET', modules: ['mod4'] },
        'governance': { title: 'GOVERNANCE & IT', modules: ['mod7', 'mod9'] }
    },
    
    // Konfigurasi Modul & Proses
    modules: [
        {
            id: 'mod6', title: 'Dashboard', icon: 'fa-chart-pie',
            desc: 'Executive dashboards, reporting, and predictive analytics.',
            processes: [
                { id: '6.1', title: 'Executive Dashboard', type: 'bi_dash', desc: 'Real-time KPI monitoring & narrative reporting.' },
                { id: '6.2', title: 'Advanced Analytics', type: 'chart_grid', desc: 'Predictive & Prescriptive AI modeling.' }
            ]
        },
        {
            id: 'mod1', title: 'Finance & Accounting', icon: 'fa-coins',
            desc: 'Financial orchestration, accounting, and tax management.',
            processes: [
                { id: '1.1', title: 'Accounts Payable', type: 'table', cols: ['PO Num', 'Vendor', 'Date', 'Amount', 'Status'], desc: 'Invoice processing & 3-way matching.' },
                { id: '1.2', title: 'Accounts Receivable', type: 'table', cols: ['Inv ID', 'Client', 'Due Date', 'Amount', 'Risk Score'], desc: 'Order-to-cash & collections.' },
                { id: '1.3', title: 'General Ledger', type: 'table', cols: ['Journal ID', 'Account', 'Debit', 'Credit', 'Date'], desc: 'Daily reconciliation & close.' },
                { id: '1.4', title: 'FP&A', type: 'chart_grid', desc: 'Budgeting, forecasting & scenario analysis.' },
                { id: '1.5', title: 'Treasury & Cash', type: 'table', cols: ['Trans ID', 'Type', 'Amount', 'Currency', 'Liquidity Pos'], desc: 'Cash visibility & liquidity mgmt.' },
                { id: '1.6', title: 'Fixed Assets', type: 'table', cols: ['Asset Tag', 'Name', 'Value', 'Depreciation', 'Location'], desc: 'Asset lifecycle & depreciation.' },
                { id: '1.7', title: 'T&E Management', type: 'table', cols: ['Claim ID', 'Employee', 'Type', 'Amount', 'Audit Status'], desc: 'Expense claims & policy checks.' },
                { id: '1.8', title: 'Project Accounting', type: 'table', cols: ['Project', 'Budget', 'Actual Cost', 'Variance', 'Billable'], desc: 'Project profitability tracking.' },
                { id: '1.9', title: 'Revenue Recognition', type: 'table', cols: ['Contract', 'Obligation', 'Recog. Amount', 'Date', 'Standard'], desc: 'IFRS 15/PSAK 72 compliance.' },
                { id: '1.10', title: 'IT Cost Allocation', type: 'table', cols: ['Dept', 'Service', 'Usage', 'Allocated Cost', 'Period'], desc: 'Chargeback/Showback reporting.' },
                { id: '1.11', title: 'Tax Administration', type: 'table', cols: ['Tax Type', 'Period', 'Base Amount', 'Tax Due', 'Status'], desc: 'Compliance & reporting (PPN, PPh).' }
            ]
        },
        {
            id: 'mod2', title: 'Project Management', icon: 'fa-diagram-project',
            desc: 'Project lifecycle, execution, and resource management.',
            processes: [
                { id: '2.1', title: 'Portfolio Mgmt (PPM)', type: 'kanban', desc: 'Project selection & strategy alignment.' },
                { id: '2.2', title: 'Project Execution', type: 'table', cols: ['Project', 'Manager', 'Progress', 'Health', 'Deadline'], desc: 'WBS, scheduling & monitoring.' },
                { id: '2.3', title: 'Resource Management', type: 'table', cols: ['Resource', 'Role', 'Skill', 'Utilization', 'Project'], desc: 'Capacity planning & allocation.' }
            ]
        },
        {
            id: 'mod3', title: 'HCM', icon: 'fa-users',
            desc: 'Human capital, payroll, and talent lifecycle.',
            processes: [
                { id: '3.1', title: 'Core HR & Payroll', type: 'table', cols: ['Emp ID', 'Name', 'Dept', 'Net Pay', 'Payroll Status'], desc: 'Payroll cycle & admin.' },
                { id: '3.2', title: 'Integrated Talent', type: 'kanban', desc: 'Recruitment, performance & retention.' }
            ]
        },
        {
            id: 'mod4', title: 'CRM', icon: 'fa-handshake',
            desc: 'Customer relationship, sales, and service management.',
            processes: [
                { id: '4.1', title: 'Sales Force Auto', type: 'kanban', desc: 'Lead to customer pipeline.' },
                { id: '4.2', title: 'Customer Service', type: 'table', cols: ['Ticket ID', 'Client', 'Issue', 'Priority', 'SLA Status'], desc: 'Support ticketing & resolution.' },
                { id: '4.3', title: 'Customer Success', type: 'table', cols: ['Client', 'Health Score', 'Churn Risk', 'Next Review', 'CSM'], desc: 'Retention & growth monitoring.' },
                { id: '4.4', title: 'CPQ', type: 'table', cols: ['Quote ID', 'Client', 'Config', 'Total Value', 'Status'], desc: 'Configuration, pricing & quoting.' },
                { id: '4.5', title: 'Marketing Auto', type: 'chart_grid', desc: 'Campaign analytics & lead nurturing.' }
            ]
        },
        {
            id: 'mod5', title: 'Procurement', icon: 'fa-cart-flatbed', 
            desc: 'Sourcing, purchasing, and vendor management.', 
            processes: [
                { id: '5.1', title: 'Sourcing & Vendor', type: 'table', cols: ['Vendor', 'Category', 'Perf. Score', 'Risk', 'Status'], desc: 'Vendor selection & performance.' }, 
                { id: '5.2', title: 'Contract Mgmt (CLM)', type: 'kanban', desc: 'Contract lifecycle & negotiation.' }
            ] 
        },
        { 
            id: 'mod8', title: 'Services Procurement', icon: 'fa-file-signature', 
            desc: 'Outsourced services and Statement of Work (SOW) management.', 
            processes: [
                { id: '8.1', title: 'Sourcing Services', type: 'kanban', desc: 'Finding & qualifying experts.' },
                { id: '8.2', title: 'SOW Lifecycle', type: 'kanban', desc: 'Drafting & negotiating SOWs.' },
                { id: '8.3', title: 'Performance Tracking', type: 'table', cols: ['SOW ID', 'Vendor', 'Milestone', 'Deliverable', 'Status'], desc: 'Execution & acceptance.' }
            ] 
        },
        { 
            id: 'mod7', title: 'GRC', icon: 'fa-shield-halved', 
            desc: 'Governance, Risk, and Compliance management.', 
            processes: [
                { id: '7.1', title: 'Internal Controls', type: 'table', cols: ['Control ID', 'Process', 'Test Result', 'Last Tested', 'Owner'], desc: 'Control monitoring & testing.' },
                { id: '7.2', title: 'Audit Management', type: 'kanban', desc: 'Audit planning & execution.' },
                { id: '7.3', title: 'Compliance', type: 'table', cols: ['Reg ID', 'Requirement', 'Gap Analysis', 'Deadline', 'Status'], desc: 'Regulatory compliance tracking.' }
            ] 
        },
        { 
            id: 'mod9', title: 'ITSAM', icon: 'fa-laptop-code', 
            desc: 'IT Service and Asset Management.', 
            processes: [
                { id: '9.1', title: 'IT Asset Mgmt', type: 'table', cols: ['Asset Tag', 'Type', 'User', 'Health', 'Lifecycle Stage'], desc: 'Hardware/Software lifecycle.' }, 
                { id: '9.2', title: 'IT Service Mgmt', type: 'kanban', desc: 'Incident & request handling.' },
                { id: '9.3', title: 'IT Change Mgmt', type: 'table', cols: ['RFC ID', 'System', 'Risk', 'CAB Approval', 'Schedule'], desc: 'Controlled IT changes.' }
            ] 
        },
        { 
            id: 'mod10', title: 'LMS', icon: 'fa-graduation-cap', 
            desc: 'Learning and Development.', 
            processes: [
                { id: '10.1', title: 'Training Catalog', type: 'catalog', desc: 'Course repository & delivery.' },
                { id: '10.2', title: 'Personal Development', type: 'table', cols: ['Emp Name', 'Course', 'Progress', 'Score', 'Cert Status'], desc: 'Individual learning paths.' }
            ] 
        }
    ]
};

// State Variables
let dashboardInterval = null;
let dashboardCharts = {};
let currentProcessId = null;
let currentTableId = null; 

// --- DATA SERVICE (Personalized per Module) ---
const DataService = {
    getTableData(cols) {
        const statuses = ['Active', 'Pending', 'Approved', 'Rejected', 'Draft', 'Closed'];
        const risks = ['Low', 'Medium', 'High', 'Critical'];
        const healths = ['Healthy', 'At Risk', 'Critical'];
        
        return Array.from({length: 8}, (_, i) => cols.map(col => {
            // Status Badges
            if(col.includes('Status') || col.includes('Approval') || col.includes('Stage')) {
                const s = statuses[Math.floor(Math.random()*statuses.length)];
                let c = s === 'Active' || s === 'Approved' || s === 'Healthy' ? 'success' : s === 'High' || s === 'Rejected' || s === 'Critical' ? 'danger' : 'warning';
                return `<span class="status-badge ${c}">${s}</span>`;
            }
            // Risk/Health Badges
            if(col.includes('Risk') || col.includes('Health')) {
                const r = col.includes('Health') ? healths[Math.floor(Math.random()*healths.length)] : risks[Math.floor(Math.random()*risks.length)];
                let c = r === 'Low' || r === 'Healthy' ? 'success' : r === 'Critical' || r === 'High' ? 'danger' : 'warning';
                return `<span class="status-badge ${c}">${r}</span>`;
            }
            // Financials
            if(col.includes('Amount') || col.includes('Value') || col.includes('Salary') || col.includes('Price') || col.includes('Cost') || col.includes('Budget')) {
                return `$${(Math.random()*50000 + 1000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
            }
            // Dates
            if(col.includes('Date') || col.includes('Deadline') || col.includes('Period') || col.includes('Schedule')) {
                return `2025-12-${Math.floor(Math.random()*28)+1}`;
            }
            // Progress Bar
            if(col.includes('Progress') || col.includes('Usage')) {
                const pct = Math.floor(Math.random()*100);
                return `<div style="width:100%; height:6px; background:#e2e8f0; border-radius:3px; overflow:hidden;"><div style="width:${pct}%; height:100%; background:var(--primary); border-radius:3px;"></div></div><span style="font-size:9px;">${pct}%</span>`;
            }
            // Names/IDs
            if(col.includes('Vendor')) return ['Acme Corp', 'Globex', 'Soylent Corp', 'Umbrella Inc'][Math.floor(Math.random()*4)];
            if(col.includes('Project')) return ['Project Alpha', 'Migration V2', 'Cloud Native', 'AI Audit'][Math.floor(Math.random()*4)];
            
            return `Data-${Math.floor(Math.random()*1000)}`;
        }));
    },

    // Context-Aware Kanban Data based on Process ID
    getKanbanData(procId) {
        if (procId === '2.1') { // PPM
            return { 'Proposed': [{t:'AI Integration', d:'Strategic Review'}], 'Analysis': [{t:'Cloud Mig', d:'ROI Calc'}], 'Approved': [{t:'ERP Upgrade', d:'Budget allocated'}], 'Rejected': [] };
        } else if (procId === '3.2') { // Talent
            return { 'Applied': [{t:'John Doe', d:'DevOps'}], 'Interview': [{t:'Jane Smith', d:'QA Lead'}], 'Offer': [], 'Hired': [{t:'Mike R', d:'CTO'}] };
        } else if (procId === '4.1') { // Sales CRM
            return { 'Lead': [{t:'TechCorp', d:'Interested in ERP'}], 'Qualified': [], 'Proposal': [{t:'BigBank', d:'$500k Deal'}], 'Closed Won': [] };
        } else if (procId === '5.2' || procId === '8.2') { // Contract/SOW
            return { 'Drafting': [{t:'SOW-99', d:'Scope definition'}], 'Negotiation': [{t:'MSA-VendorX', d:'Legal review'}], 'Signed': [], 'Active': [] };
        } else if (procId === '7.2') { // Audit
            return { 'Planning': [{t:'Q4 Finance', d:'Scope set'}], 'Fieldwork': [{t:'IT Security', d:'Testing controls'}], 'Reporting': [], 'Closed': [] };
        } else if (procId === '9.2') { // ITSM
            return { 'New': [{t:'Login Error', d:'User blocked'}], 'Assigned': [{t:'Server Down', d:'L2 Support'}], 'Pending': [], 'Resolved': [{t:'Wifi Fix', d:'Done'}] };
        } else {
            // Default
            return { 'Backlog': [{t:'Task A', d:'Desc'}], 'In Progress': [{t:'Task B', d:'Desc'}], 'Review': [], 'Done': [] };
        }
    }
};

const App = {
    init() {
        // Theme Persistence
        if(localStorage.getItem('theme') === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            const icon = document.getElementById('themeIcon');
            if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        }

        this.renderSidebar();
        this.startClock();
        this.navigateTo('mod6'); // Default to Dashboard
        
        // Keyboard shortcut for search
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.querySelector('.search-input').focus();
            }
        });
    },

    toggleSidebar() {
        const sb = document.getElementById('mainSidebar');
        sb.classList.toggle('collapsed');
    },

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

    triggerLoader() {
        const loader = document.getElementById('globalLoader');
        loader.style.width = '0%';
        loader.style.opacity = '1';
        
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
                if(mod) html += `<div class="nav-item" onclick="App.navigateTo('${mod.id}')" id="nav-${mod.id}">
                    <i class="fa-solid ${mod.icon}"></i> <span class="nav-text">${mod.title}</span>
                </div>`;
            });
        }
        menu.innerHTML = html;
    },

    navigateTo(modId) {
        this.triggerLoader();

        if (dashboardInterval) clearInterval(dashboardInterval);
        
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const navEl = document.getElementById(`nav-${modId}`);
        if(navEl) navEl.classList.add('active');
        
        const mod = AppConfig.modules.find(m => m.id === modId);
        const root = document.getElementById('appRoot');
        
        document.getElementById('breadcrumbs').innerText = mod.title;
        currentProcessId = null; 
        currentTableId = null;

        if(modId === 'mod6') { 
            this.renderBIDash(root);
            this.startDashboardLiveUpdate();
            return; 
        }

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
                        <span class="tag active">Live Process</span>
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
        
        currentProcessId = proc; 

        document.getElementById('breadcrumbs').innerHTML = `<span onclick="App.navigateTo('${modId}')" class="bread-link">${mod.title}</span> <span class="bread-sep">/</span> ${proc.title}`;

        let html = `
            <div class="fade-in-up">
                <div class="header-section flex-between">
                    <div>
                        <div class="h-title">${proc.title}</div>
                        <div class="h-desc">${proc.desc}</div>
                    </div>
                    
                    <div class="header-actions">
                        ${proc.type === 'table' ? `<button class="btn-add-context" onclick="App.openAddModal()">
                            <i class="fa-solid fa-plus"></i> Add Entry
                        </button>` : ''}
                        
                        <button class="btn-back" onclick="App.navigateTo('${modId}')">
                            <i class="fa-solid fa-arrow-left"></i> Back
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
            else if(proc.type === 'kanban') contentHtml = this.renderKanban(proc.id); // Pass Proc ID
            else if(proc.type === 'catalog') contentHtml = this.renderCatalog();
            else contentHtml = this.renderChartGrid();
            
            document.getElementById('processContent').innerHTML = contentHtml;
            if(proc.type.includes('chart') || proc.type === 'bi_dash') this.initCharts();
        }, 200);
    },

    // --- DASHBOARD RENDERER ---
    renderBIDash(root) {
    const greeting = this.getGreeting();

    root.innerHTML = `
    <div class="dashboard-container fade-in-up">
        
        <div class="dash-control-bar">
            <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:14px; font-weight:700; color:var(--text-main);">
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
                    <div style="font-size:11px; font-weight:normal; color:var(--text-muted);">Revenue vs Op. Costs</div>
                </div>
                <div style="flex:1; position:relative; width:100%; height:100%;">
                    <canvas id="revenueChart"></canvas>
                </div>
            </div>

            <div class="ai-card-modern">
                <div class="ai-glass-overlay"></div>
                <div class="ai-content-wrapper">
                    <div class="ai-header-mod">
                        <div class="ai-icon-pulse"><i class="fa-solid fa-brain"></i></div>
                        <div>
                            <div style="font-weight:700; font-size:13px; color:white;">Neural Core AI</div>
                            <div style="font-size:10px; opacity:0.7;">Real-time Analysis</div>
                        </div>
                    </div>
                    <div class="ai-text-body">
                        "Based on Q4 data patterns, <span class="ai-highlight">Supply Chain Efficiency</span> has driven the largest profit increase. <br><br>
                        <i class="fa-solid fa-circle-exclamation" style="color:#f87171"></i> <strong>Alert:</strong> Corporate churn risk is elevated. Immediate intervention recommended for client: <em>GlobalTech Inc</em>."
                    </div>
                    <div class="ai-btn-group">
                        <button class="btn-glass" onclick="App.toggleAI()"><i class="fa-solid fa-wand-magic-sparkles"></i> Ask AI</button>
                        <button class="btn-glass"><i class="fa-solid fa-file-pdf"></i> Report</button>
                    </div>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
            
            <div class="card-elegant" style="height: 100%;">
                <div class="section-title">
                    <span><i class="fa-solid fa-list-check" style="color:var(--accent); margin-right:8px;"></i> Live Operations</span>
                    <button class="btn-view-action">View All</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-family:'JetBrains Mono', monospace;">INV-2025-001</td>
                                <td><i class="fa-solid fa-arrow-down" style="color:var(--success); margin-right:4px;"></i> Payment In</td>
                                <td><span class="status-badge success">Completed</span></td>
                                <td style="font-weight:600;">$12,500.00</td>
                                <td style="color:var(--text-muted);">10 mins ago</td>
                            </tr>
                            <tr>
                                <td style="font-family:'JetBrains Mono', monospace;">PO-9928</td>
                                <td><i class="fa-solid fa-arrow-up" style="color:var(--danger); margin-right:4px;"></i> Vendor Pay</td>
                                <td><span class="status-badge warning">Pending Approval</span></td>
                                <td style="font-weight:600;">$4,200.50</td>
                                <td style="color:var(--text-muted);">45 mins ago</td>
                            </tr>
                            <tr>
                                <td style="font-family:'JetBrains Mono', monospace;">TKT-8821</td>
                                <td><i class="fa-solid fa-triangle-exclamation" style="color:var(--warning); margin-right:4px;"></i> IT Incident</td>
                                <td><span class="status-badge danger">High Priority</span></td>
                                <td style="font-weight:600;">-</td>
                                <td style="color:var(--text-muted);">1 hr ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card-elegant" style="height: 100%;">
                <div class="section-title">Top Performers (Q4)</div>
                <div style="display:flex; flex-direction:column; gap:14px;">
                    <div style="display:flex; align-items:center; gap:12px; padding-bottom:12px; border-bottom:1px solid var(--border);">
                        <div style="width:36px; height:36px; background:#e0e7ff; color:#4f46e5; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:700;">1</div>
                        <div style="flex:1;">
                            <div style="font-size:12px; font-weight:600;">Cloud Enterprise</div>
                            <div style="font-size:10px; color:var(--text-muted);">SaaS Subscription</div>
                        </div>
                        <div style="font-weight:700; font-size:12px;">$2.4M</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:12px; padding-bottom:12px; border-bottom:1px solid var(--border);">
                        <div style="width:36px; height:36px; background:#ecfdf5; color:#059669; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:700;">2</div>
                        <div style="flex:1;">
                            <div style="font-size:12px; font-weight:600;">Consulting Svc</div>
                            <div style="font-size:10px; color:var(--text-muted);">Pro Services</div>
                        </div>
                        <div style="font-weight:700; font-size:12px;">$1.1M</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="width:36px; height:36px; background:#fef3c7; color:#d97706; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:700;">3</div>
                        <div style="flex:1;">
                            <div style="font-size:12px; font-weight:600;">Hardware Install</div>
                            <div style="font-size:10px; color:var(--text-muted);">Infrastructure</div>
                        </div>
                        <div style="font-weight:700; font-size:12px;">$850K</div>
                    </div>
                </div>
            </div>

        </div>

        <div class="bottom-grid">
            <div class="card-elegant">
                    <div class="section-title">Revenue Source</div>
                    <div style="height:140px; position:relative;">
                    <canvas id="breakdownChart"></canvas>
                    </div>
            </div>

            <div class="card-elegant">
                <div class="section-title">Critical Attention</div>
                <div class="alert-list">
                    <div class="alert-item-mod critical">
                        <i class="fa-solid fa-circle-xmark text-danger" style="margin-top:2px;"></i>
                        <div class="aim-content">
                            <h4>Audit Findings (GRC)</h4>
                            <p>3 Compliance points unmet.</p>
                        </div>
                    </div>
                    <div class="alert-item-mod warning">
                        <i class="fa-solid fa-clock text-warning" style="margin-top:2px;"></i>
                        <div class="aim-content">
                            <h4>Procurement Delay</h4>
                            <p>Vendor Approval > 45 Days.</p>
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
        // Generate ID unik
        const tableId = 'table-' + Math.random().toString(36).substr(2, 9);
        currentTableId = tableId; 
        const rows = DataService.getTableData(cols);
        
        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section">
                    <div class="cc-title"><i class="fa-solid fa-table-list" style="margin-right:8px; color:var(--primary);"></i> Detailed Records</div>
                    <div class="cc-subtitle">Manage and view data entries.</div>
                </div>
                <div class="cc-actions">
                    <div class="search-wrapper small">
                        <i class="fa-solid fa-magnifying-glass" style="color:var(--text-muted);"></i>
                        <input type="text" placeholder="Search..." class="search-input" onkeyup="App.filterTable(this, '${tableId}')">
                    </div>
                    <button class="btn-action-light" onclick="App.toast('Filter Applied')"><i class="fa-solid fa-filter"></i></button>
                    <button class="btn-action-light" onclick="App.exportToCSV('${tableId}')"><i class="fa-solid fa-file-export"></i></button>
                </div>
            </div>

            <div class="cc-body no-padding">
                <div class="table-container">
                    <table id="${tableId}">
                        <thead>
                            <tr>
                                ${cols.map((c, index) => `<th onclick="App.sortTable('${tableId}', ${index})">${c}</th>`).join('')}
                                <th class="col-detail">Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            ${rows.map(r => `
                                <tr onclick="App.openRecordDetail(this, 'table')" style="cursor:pointer;">
                                    ${r.map(c => `<td>${c}</td>`).join('')}
                                    <td class="cell-detail" onclick="event.stopPropagation(); App.openRecordDetail(this.closest('tr'), 'table')">
                                        <button class="btn-view-action">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    
                    <div id="${tableId}-empty" class="empty-state" style="display:none;">
                        <i class="fa-solid fa-folder-open"></i>
                        <h4>No matching records found</h4>
                    </div>

                </div>
            </div>

            <div class="cc-footer">
                <span class="text-muted-sm" style="font-size:11px;" id="${tableId}-info">Showing <strong>${rows.length}</strong> entries</span>
                <div class="pagination-btns">
                    <button class="btn-icon-sm" onclick="App.changePage(this, -1)"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="btn-icon-sm active">1</button>
                    <button class="btn-icon-sm">2</button>
                    <button class="btn-icon-sm">3</button>
                    <button class="btn-icon-sm" onclick="App.changePage(this, 1)"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>`;
    },

    renderKanban(procId) {
        const data = DataService.getKanbanData(procId);
        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section">
                    <div class="cc-title"><i class="fa-solid fa-border-all" style="margin-right:8px; color:var(--primary);"></i> Workflow Board</div>
                    <div class="cc-subtitle">Drag and drop items to update status.</div>
                </div>
                <div class="cc-actions">
                    <button class="btn-action-light"><i class="fa-solid fa-plus"></i> New Item</button>
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
        return `
        <div class="content-card">
             <div class="cc-header-wrapper">
                <div class="cc-title-section"><div class="cc-title">Analytics</div></div>
            </div>
            <div class="cc-body padded" style="height:400px"><canvas id="mainChart"></canvas></div>
        </div>`;
    },

    openAddModal() {
        const container = document.getElementById('modalFormContainer');
        const title = document.getElementById('modalTitle');
        let fields = [];
        
        if (currentProcessId) {
            title.innerText = `Add to ${currentProcessId.title}`;
            if(currentProcessId.cols) {
                fields = currentProcessId.cols.map(c => ({label: c, type: c.includes('Date') ? 'date' : 'text', id: 'f-'+c.replace(/ /g,'')}));
            }
        } 
        
        let html = '';
        fields.forEach(f => {
            html += `
            <div class="form-group">
                <label>${f.label}</label>
                <input type="${f.type}" id="${f.id}" class="form-input" placeholder="Enter ${f.label}...">
            </div>`;
        });
        
        container.innerHTML = html;
        document.getElementById('modalData').classList.add('open');
    },

    submitForm() {
        // Simulasi Menambah Data ke Tabel Secara Live
        if(currentTableId && currentProcessId) {
            const table = document.getElementById(currentTableId);
            const tbody = table.querySelector('tbody');
            const inputs = document.querySelectorAll('.modal-body input');
            
            let tr = document.createElement('tr');
            tr.className = 'new-entry-row'; // Trigger animation
            
            // Build Row HTML
            let inner = '';
            inputs.forEach(input => {
                let val = input.value || '-';
                // Auto format status/amount for visual consistency
                if(input.placeholder.includes('Status')) val = `<span class="status-badge success">${val}</span>`;
                if(input.placeholder.includes('Amount')) val = `$${val}`;
                inner += `<td>${val}</td>`;
            });
            inner += `<td class="cell-detail"><button class="btn-view-action">View</button></td>`;
            
            tr.innerHTML = inner;
            tr.onclick = function() { App.openRecordDetail(this, 'table'); };
            
            // Insert at top
            tbody.insertBefore(tr, tbody.firstChild);
            
            // Update counter
            const info = document.getElementById(currentTableId + '-info');
            if(info) {
                let count = parseInt(info.innerText.match(/\d+/)[0]);
                info.innerHTML = `Showing <strong>${count + 1}</strong> entries`;
            }
        }

        this.closeModal('modalData');
        this.toast('Data Added Successfully');
    },

    initCharts() {
        const ctx = document.getElementById('mainChart');
        if(ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jul','Aug','Sep','Oct', 'Nov', 'Dec'],
                    datasets: [
                        { label: 'Trend', data: [28, 32, 38, 45, 42, 50], borderColor: '#3b82f6', tension: 0.3, borderWidth: 2, pointRadius: 3, backgroundColor: 'rgba(59, 130, 246, 0.05)', fill:true }
                    ]
                },
                options: { 
                    responsive: true, maintainAspectRatio: false, 
                    plugins: { legend: { display: false } },
                    scales: { y: { grid: { color: 'rgba(200,200,200,0.1)' } }, x: { grid: { display:false } } }
                }
            });
        }
    },

    initDashboardCharts() {
        if(dashboardCharts.revenue) dashboardCharts.revenue.destroy();
        if(dashboardCharts.breakdown) dashboardCharts.breakdown.destroy();

        // Font settings for compact look
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.font.size = 10; 
        Chart.defaults.color = '#64748b';

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
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                                gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
                                gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                                return gradient;
                            },
                            borderWidth: 1.5,
                            tension: 0.4,
                            fill: true,
                            pointRadius: 0,
                            pointHoverRadius: 5
                        },
                        {
                            label: 'Costs',
                            data: [1.8, 1.9, 2.0, 1.9, 2.1, 2.2],
                            borderColor: '#ef4444',
                            borderWidth: 1.5,
                            borderDash: [3, 3],
                            tension: 0.4,
                            pointRadius: 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    plugins: { 
                        legend: { display: false }, 
                        tooltip: { 
                            backgroundColor: '#0f172a', 
                            titleFont: {size:10}, 
                            bodyFont:{size:10},
                            padding: 8,
                            cornerRadius: 4,
                            displayColors: false
                        } 
                    },
                    scales: { 
                        y: { display: true, grid: { color: 'rgba(200,200,200,0.05)' }, ticks: { font: { size: 9 } }, border: { display: false } },
                        x: { grid: { display: false }, ticks: { font: { size: 9 } }, border: { display: false } }
                    }
                }
            });
        }

        const ctxBreak = document.getElementById('breakdownChart');
        if(ctxBreak) {
            dashboardCharts.breakdown = new Chart(ctxBreak, {
                type: 'doughnut',
                data: {
                    labels: ['Sub', 'Svc', 'Lic'],
                    datasets: [{
                        data: [55, 30, 15],
                        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
                        borderWidth: 0,
                        hoverOffset: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: { 
                        legend: { position: 'right', labels: { boxWidth: 8, usePointStyle: true, font: {size: 9} } }
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
            const revEl = document.getElementById('kpi-revenue');
            if(revEl) revEl.innerText = `$${currentRev.toFixed(2)} M`;
            
            let churn = 8.5 + (Math.random() * 0.4 - 0.2);
            const elChurn = document.getElementById('live-churn');
            if(elChurn) elChurn.innerText = churn.toFixed(1) + '%';

            if(dashboardCharts.revenue) {
                const data = dashboardCharts.revenue.data.datasets[0].data;
                let lastVal = data[data.length - 1];
                let newVal = lastVal + randomFlux();
                data[data.length - 1] = newVal;
                dashboardCharts.revenue.update('none');
            }
        }, 3000);
    },

    toggleAI() { document.getElementById('aiPanel').classList.toggle('open'); },
    toggleNotifications() { 
        document.getElementById('panelNotif').classList.toggle('open'); 
        document.getElementById('notifDot').classList.add('hidden'); 
    },
    closeModal(id) { document.getElementById(id).classList.remove('open'); },
    openSettings() { document.getElementById('modalSettings').classList.add('open'); },
    
    simulateAI() {
        const input = document.getElementById('aiInput');
        const val = input.value;
        if(!val) return;
        
        const el = document.getElementById('aiContent');
        el.innerHTML += `<div class="ai-msg-user">${val}</div>`;
        input.value = '';
        el.scrollTop = el.scrollHeight;
        
        setTimeout(() => {
            const typingId = 'typing-' + Date.now();
            el.innerHTML += `<div class="ai-insight" id="${typingId}">...</div>`;
            el.scrollTop = el.scrollHeight;
            
            setTimeout(() => {
                const reply = `I have analyzed the <strong>${currentProcessId ? currentProcessId.title : 'Dashboard'}</strong> data. <br>Found relevant patterns for "${val}". Generating visualization...`;
                document.getElementById(typingId).innerHTML = reply;
            }, 1000);
        }, 400);
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
            if(id.includes('$')) id = 'REC-' + Math.floor(Math.random()*1000);
            
            title = 'Transaction Record'; 
            statusHTML = `<span class="status-badge success">Active</span>`;
            
            // Extract status from cell
            for(let cell of cells) {
                if(cell.innerHTML.includes('badge')) statusHTML = cell.innerHTML;
            }

            for(let i=0; i < Math.min(cells.length - 1, 6); i++) {
                // Skip Action column
                if(!cells[i].classList.contains('cell-detail')) {
                    mainData.push({ label: `Field ${i+1}`, val: cells[i].innerText });
                }
            }
        } else {
            id = `TSK-${Math.floor(Math.random()*1000)}`;
            title = titleOpt;
            statusHTML = `<span class="status-badge warning">In Progress</span>`;
            mainData.push({ label: 'Description', val: descOpt });
            mainData.push({ label: 'Owner', val: 'Rafindita S.' });
        }

        content.innerHTML = `
            <div class="detail-hero">
                <div class="dh-id">#${id}</div>
                <div class="dh-title">${title}</div>
                <div style="margin-top:6px;">${statusHTML}</div>
                <div class="detail-tabs">
                    <div class="d-tab active">Overview</div>
                    <div class="d-tab">History</div>
                    <div class="d-tab">Files</div>
                </div>
            </div>
            <div class="detail-section">
                <div class="ds-grid">
                    ${mainData.map(d => `
                        <div class="ds-item">
                            <label>${d.label}</label>
                            <div>${d.val}</div>
                        </div>
                    `).join('')}
                </div>
                <h4 style="margin-bottom:12px; font-size:11px; text-transform:uppercase; color:var(--text-muted); margin-top:16px;">Audit Trail</h4>
                <div class="activity-line">
                    <div class="act-header">Record Viewed</div>
                    <div class="act-time">Just now by You</div>
                </div>
                <div class="activity-line" style="border:none;">
                    <div class="act-header">Created</div>
                    <div class="act-time">24 Nov 2025</div>
                </div>
            </div>
        `;
        panel.classList.add('open');
    },

    filterTable(input, tableId) {
        const filter = input.value.toLowerCase();
        const table = document.getElementById(tableId);
        const tr = table.getElementsByTagName("tr");
        let visibleCount = 0;

        for (let i = 1; i < tr.length; i++) { 
            let found = false;
            const td = tr[i].getElementsByTagName("td");
            for (let j = 0; j < td.length - 1; j++) {
                if (td[j] && td[j].textContent.toLowerCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
            if (found) {
                tr[i].style.display = "";
                visibleCount++;
            } else {
                tr[i].style.display = "none";
            }
        }
        
        const emptyState = document.getElementById(tableId + '-empty');
        if(visibleCount === 0) {
            table.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            table.style.display = '';
            emptyState.style.display = 'none';
        }
        document.getElementById(tableId + '-info').innerHTML = `Showing <strong>${visibleCount}</strong> matching records`;
    },

    sortTable(tableId, n) {
        const table = document.getElementById(tableId);
        let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        switching = true;
        dir = "asc"; 
        
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir == "asc") {
                    if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) { shouldSwitch = true; break; }
                } else if (dir == "desc") {
                    if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) { shouldSwitch = true; break; }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++; 
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    },

    exportToCSV(tableId) {
        this.toast('Downloading CSV...');
        const table = document.getElementById(tableId);
        let csv = [];
        const rows = table.querySelectorAll("tr");
        
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].style.display === 'none') continue;
            let row = [], cols = rows[i].querySelectorAll("td, th");
            for (let j = 0; j < cols.length - 1; j++) row.push('"' + cols[j].innerText + '"');
            csv.push(row.join(","));
        }

        const csvFile = new Blob([csv.join("\n")], {type: "text/csv"});
        const downloadLink = document.createElement("a");
        downloadLink.download = `Data_Export_${Date.now()}.csv`;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    },

    closeDetailPanel() {
        document.getElementById('panelDetail').classList.remove('open');
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());