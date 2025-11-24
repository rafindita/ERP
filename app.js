/**
 * =================================================================
 * BLUE HORIZON ERP - v4.8 ULTRA-OPTIMIZED MASTER & INTEGRATED
 * (All Textual Content Translated to English for Global Context)
 * =================================================================
 */

// --- 1. CONFIGURATION (UNCHANGED - NO DELETION) ---
const AppConfig = {
    categories: {
        'dashboard': { title: 'COMMAND CENTER', modules: ['mod6'] },
        'finance': { title: 'FINANCIAL CORE', modules: ['mod1'] },
        'operations': { title: 'OPERATIONS & PROJECTS', modules: ['mod2', 'mod5', 'mod8'] },
        'human': { title: 'HUMAN CAPITAL', modules: ['mod3', 'mod10'] },
        'customer': { title: 'CUSTOMER & MARKET', modules: ['mod4'] },
        'governance': { title: 'GOVERNANCE & IT', modules: ['mod7', 'mod9'] }
    },
    modules: [
        {
            id: 'mod6', title: 'Dashboard', icon: 'fa-chart-pie',
            desc: 'Executive dashboards, real-time reporting, and predictive analytics for strategic decision-making.',
            processes: [
                { id: '6.1', title: 'Executive Dashboard', type: 'bi_dash', desc: 'Real-time monitoring of key KPIs and executive board narrative reporting.' },
                { id: '6.2', title: 'Advanced Analytics', type: 'chart_grid', desc: 'Predictive & Prescriptive AI Modeling for operational optimization.' }
            ]
        },
        {
            id: 'mod1', title: 'Finance & Accounting', icon: 'fa-coins',
            desc: 'Financial orchestration, accounting management, and corporate tax compliance.',
            processes: [
                { id: '1.1', title: 'Accounts Payable', type: 'table', dbKey: 'fin_ap', cols: ['PO Num', 'Vendor', 'Inv Date', 'Amount', 'Status'], desc: 'Automating invoice processing, payments, and 3-way matching.' },
                { id: '1.2', title: 'Accounts Receivable', type: 'table', dbKey: 'fin_ar', cols: ['Inv ID', 'Client', 'Due Date', 'Amount', 'Risk Score'], desc: 'Managing the Order-to-Cash (O2C) cycle and collections.' },
                { id: '1.3', title: 'General Ledger', type: 'table', dbKey: 'fin_gl', cols: ['Journal ID', 'Account Code', 'Debit', 'Credit', 'Post Date'], desc: 'Daily reconciliation, automated journals, and accurate book closing.' },
                { id: '1.4', 'title': 'FP&A', type: 'chart_grid', desc: 'Budgeting, forecasting, and multi-dimensional scenario analysis.' },
                { id: '1.5', title: 'Treasury & Cash', type: 'table', dbKey: 'fin_treasury', cols: ['Trans ID', 'Type', 'Amount', 'Currency', 'Liquidity Pos'], desc: 'Global cash visibility, liquidity management, and hedging.' },
                { id: '1.6', title: 'Fixed Assets', type: 'table', dbKey: 'fin_assets', cols: ['Asset Tag', 'Serial Num', 'Book Value', 'Depreciation', 'Location'], desc: 'Fixed asset lifecycle, automated depreciation, and inventory.' },
                { id: '1.7', title: 'T&E Management', type: 'table', dbKey: 'fin_exp', cols: ['Claim ID', 'Employee', 'Exp Type', 'Amount', 'Audit Status'], desc: 'Travel & Entertainment (T&E) expense claims and policy compliance checks.' },
                { id: '1.8', title: 'Project Accounting', type: 'table', dbKey: 'fin_proj', cols: ['Project', 'Budget', 'Actual Cost', 'Variance', 'Progress'], desc: 'Tracking project profitability, cost allocation, and project billing.' },
                { id: '1.9', title: 'Revenue Recognition', type: 'table', dbKey: 'fin_rev', cols: ['Contract', 'Obligation', 'Recog. Amount', 'Date', 'Standard'], desc: 'IFRS 15 / PSAK 72 compliance for revenue recognition.' },
                { id: '1.10', title: 'IT Cost Allocation', type: 'table', dbKey: 'fin_itcost', cols: ['Dept', 'Service', 'Usage', 'Allocated Cost', 'Period'], desc: 'Chargeback / Showback reporting and IT service cost allocation.' },
                { id: '1.11', title: 'Tax Administration', type: 'table', dbKey: 'fin_tax', cols: ['Tax Type', 'Period', 'Base Amount', 'Tax Due', 'Status'], desc: 'Centralized tax compliance and reporting (VAT, Income Tax).' }
            ]
        },
        {
            id: 'mod2', title: 'Project Management', icon: 'fa-diagram-project',
            desc: 'Project lifecycle management, execution, and corporate resource allocation.',
            processes: [
                { id: '2.1', title: 'Portfolio Mgmt (PPM)', type: 'kanban', dbKey: 'pm_ppm', desc: 'Project selection, prioritization, and alignment with business strategy.' },
                { id: '2.2', title: 'Project Execution', type: 'table', dbKey: 'pm_exec', cols: ['Project', 'Manager', 'Progress', 'Health', 'Deadline'], desc: 'WBS monitoring, scheduling, and project status reporting.' },
                { id: '2.3', title: 'Resource Management', type: 'table', dbKey: 'pm_res', cols: ['Resource', 'Role', 'Skill Set', 'Utilization', 'Project'], desc: 'Capacity planning and talent allocation for projects.' }
            ]
        },
        {
            id: 'mod3', title: 'HCM', icon: 'fa-users',
            desc: 'Human capital management, payroll, and integrated talent lifecycle.',
            processes: [
                { id: '3.1', title: 'Core HR & Payroll', type: 'table', dbKey: 'hr_core', cols: ['NIK', 'Name', 'Department', 'Net Pay', 'Join Date'], desc: 'HR administration, employee master data, and monthly payroll cycle.' },
                { id: '3.2', title: 'Integrated Talent', type: 'kanban', dbKey: 'hr_talent', desc: 'Management of recruitment, performance, succession, and employee retention.' }
            ]
        },
        {
            id: 'mod4', title: 'CRM', icon: 'fa-handshake',
            desc: 'Customer relationship management, sales automation, and after-sales service.',
            processes: [
                { id: '4.1', title: 'Sales Force Auto', type: 'kanban', dbKey: 'crm_sfa', desc: 'Automation of the Lead-to-Customer process and sales pipeline management.' },
                { id: '4.2', title: 'Customer Service', type: 'table', dbKey: 'crm_svc', cols: ['Ticket ID', 'Agent Name', 'Issue', 'Priority', 'SLA Status'], desc: 'Customer support ticketing system and resolution time tracking.' },
                { id: '4.3', title: 'Customer Success', type: 'table', dbKey: 'crm_cs', cols: ['Client', 'Health Score', 'Churn Risk', 'Next Review', 'CSM'], desc: 'Monitoring retention, client health, and churn risk mitigation.' },
                { id: '4.4', title: 'CPQ', type: 'table', dbKey: 'crm_cpq', cols: ['Quote ID', 'Client', 'Config', 'Total Value', 'Status'], desc: 'Integrated product configuration, pricing, and quotation (CPQ).' },
                { id: '4.5', title: 'Marketing Auto', type: 'chart_grid', desc: 'Marketing campaign analytics, customer segmentation, and lead nurturing.' }
            ]
        },
        {
            id: 'mod5', title: 'Procurement', icon: 'fa-cart-flatbed', 
            desc: 'Sourcing, purchasing, and vendor management for cost savings.', 
            processes: [
                { id: '5.1', title: 'Sourcing & Vendor', type: 'table', dbKey: 'proc_vendor', cols: ['Vendor', 'Category', 'Perf. Score', 'Risk', 'Status'], desc: 'Strategic vendor selection, performance assessment, and supplier risk management.' }, 
                { id: '5.2', title: 'Contract Mgmt (CLM)', type: 'kanban', dbKey: 'proc_clm', desc: 'Contract Lifecycle Management (CLM), negotiation, and contract compliance.' }
            ] 
        },
        { 
            id: 'mod8', title: 'Services Procurement', icon: 'fa-file-signature', 
            desc: 'Procurement of outsourcing services and structured Statement of Work (SOW) management.', 
            processes: [
                { id: '8.1', title: 'Sourcing Services', type: 'kanban', dbKey: 'svc_source', desc: 'Searching and qualification of experts or outsourcing service providers.' },
                { id: '8.2', title: 'SOW Lifecycle', type: 'kanban', dbKey: 'svc_sow', desc: 'Drafting, negotiation, and authorization of the Statement of Work (SOW).' },
                { id: '8.3', title: 'Performance Tracking', type: 'table', dbKey: 'svc_perf', cols: ['SOW ID', 'Vendor', 'Milestone', 'Deliverable', 'Status'], desc: 'Tracking execution, acceptance, and payment based on milestone achievement.' }
            ] 
        },
        { 
            id: 'mod7', title: 'GRC', icon: 'fa-shield-halved', 
            desc: 'Centralized Governance, Risk, and Compliance management.', 
            processes: [
                { id: '7.1', title: 'Internal Controls', type: 'table', dbKey: 'grc_ctrl', cols: ['Control ID', 'Process', 'Test Result', 'Risk Score', 'Owner'], desc: 'Monitoring and testing the effectiveness of internal controls (e.g., SOX).' },
                { id: '7.2', title: 'Audit Management', type: 'kanban', dbKey: 'grc_audit', desc: 'Planning, execution, and follow-up on internal and external audit findings.' },
                { id: '7.3', title: 'Compliance', type: 'table', dbKey: 'grc_comp', cols: ['Reg ID', 'Requirement', 'Gap Analysis', 'Mitigation Status', 'Deadline'], desc: 'Tracking compliance with domestic (OJK, PDP Law) and global (GDPR, ISO) regulations.' }
            ] 
        },
        { 
            id: 'mod9', title: 'ITSAM', icon: 'fa-laptop-code', 
            desc: 'End-to-end IT Service Management (ITSM) and IT Asset Management (ITAM).', 
            processes: [
                { id: '9.1', title: 'IT Asset Mgmt', type: 'table', dbKey: 'it_asset', cols: ['Asset Tag', 'Serial Num', 'User', 'Purchase Date', 'Lifecycle Stage'], desc: 'Managing hardware and software lifecycle, from acquisition to disposal.' }, 
                { id: '9.2', title: 'IT Service Mgmt', type: 'kanban', dbKey: 'it_itsm', desc: 'Handling IT service incidents, requests, and problems.' },
                { id: '9.3', title: 'IT Change Mgmt', type: 'table', dbKey: 'it_change', cols: ['RFC ID', 'System', 'Risk', 'CAB Approval', 'Schedule'], desc: 'Structured and documented IT change control.' }
            ] 
        },
        { 
            id: 'mod10', title: 'LMS', icon: 'fa-graduation-cap', 
            desc: 'Learning Management System for competency development and training compliance.', 
            processes: [
                { id: '10.1', title: 'Training Catalog', type: 'catalog', desc: 'Catalog of courses, online training modules, and employee onboarding.' },
                { id: '10.2', title: 'Personal Development', type: 'table', dbKey: 'lms_pd', cols: ['Emp Name', 'Course', 'Progress', 'Score', 'Cert Status'], desc: 'Tracking individual learning paths and mandatory certification status.' }
            ] 
        }
    ]
};

// --- 2. DATABASE & SEEDING ENGINE (CORE SYSTEM) ---
const DB_NAME = 'BlueHorizonDB_v4_ULTRA'; 
let currentProcessId = null;
let currentTableId = null; 

// Helper function definitions
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const date = (offsetDays = 0) => {
    const d = new Date(); 
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
};
const money = (amount) => `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
const genNIK = () => `3273${randInt(10,99)}${randInt(1000,9999)}1${randInt(0,9)}`;
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const names = ['Ahmad Dani', 'Siti Aminah', 'John Smith', 'Dewi Lestari', 'Budi Gunawan', 'Chandra Wijaya'];

const Database = {
    data: {},

    init() {
        const saved = localStorage.getItem(DB_NAME);
        if (saved) {
            this.data = JSON.parse(saved);
            console.log('Database Loaded from Storage:', DB_NAME);
        } else {
            console.log('Initializing New Ultra-Optimized Database...');
            this.seedData();
            this.save();
        }
    },

    save() {
        localStorage.setItem(DB_NAME, JSON.stringify(this.data));
    },

    exportToFile() {
        const str = JSON.stringify(this.data, null, 2);
        const blob = new Blob([str], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `SYD_Optimized_Dataset_${new Date().toISOString().slice(0,10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        App.toast('Dataset exported successfully (.txt)');
    },

    loadFromFile(content) {
        try {
            this.data = JSON.parse(content);
            this.save();
            App.toast('Dataset loaded successfully. System will refresh...');
            setTimeout(() => location.reload(), 1000);
        } catch (e) {
            // Changed alert message to English
            alert('Invalid Dataset Format! Please ensure the .txt file originated from this system.');
        }
    },

    insert(key, rowData) {
        if (!this.data[key]) this.data[key] = [];
        this.data[key].unshift(rowData); 
        this.save();
    },

    get(key) { return this.data[key] || []; },

    hardReset() {
        // Changed confirmation message to English
        if(confirm('WARNING! You are about to delete all stored data from Local Storage. Continue?')) {
            localStorage.removeItem(DB_NAME);
            location.reload();
        }
    },

    // ============================================================
    // MASTER SEED DATA GENERATOR (OPTIMIZED ENTERPRISE CONTEXT)
    // ============================================================
    seedData() {
        // --- 1. FINANCE MODULE ---
        this.data['fin_ap'] = [
            ['PO-2411-001', 'PT. Solusi Awan Digital', date(-2), money(15400), 'Approved'],
            ['PO-2411-002', 'Global Logistics Ltd', date(-5), money(4250.50), 'Pending'],
            ['PO-2411-003', 'Office Estate Mgmt', date(-10), money(12000), 'Paid'],
            ['PO-2411-004', 'AWS Web Services', date(-1), money(8500), 'Approved'],
            ['PO-2411-005', 'Consulting Group X', date(-15), money(25000), 'Paid'],
            ['PO-2411-006', 'Vendor Catering Sehat', date(-3), money(1200), 'Pending'],
            ['PO-2411-007', 'Hardware Vendor Batam', date(-20), money(45000), 'Paid'],
            ['PO-2411-008', 'Legal Corp Services', date(0), money(5500), 'Draft'],
            ['PO-2411-009', 'CleanFacility Outsourcing', date(-7), money(3100), 'Approved'],
            ['PO-2411-010', 'Oracle Licensing', date(-25), money(125000), 'Paid']
        ];
        
        this.data['fin_ar'] = [
            ['INV-2025-001', 'Bank Mandiri Tbk', date(30), money(550000), 'Low'],
            ['INV-2025-002', 'Telkomsel Group', date(15), money(125000), 'Low'],
            ['INV-2025-003', 'Startup Unicorn A', date(-5), money(45000), 'High'],
            ['INV-2025-004', 'Gov Ministry Project', date(45), money(2100000), 'Medium'],
            ['INV-2025-005', 'Retail Chain Alpha', date(10), money(8500), 'Low'],
            ['INV-2025-006', 'SME Aggregator', date(-10), money(12000), 'Critical'],
            ['INV-2025-007', 'Global Oil Corp', date(60), money(450000), 'Low'],
            ['INV-2025-008', 'Tech Education Yayasan', date(5), money(5000), 'Medium']
        ];


        this.data['fin_gl'] = [
            ['JE-10001', '1100 (Cash)', money(25000), '-', date(0)],
            ['JE-10001', '4000 (Service Revenue)', '-', money(25000), date(0)],
            ['JE-10002', '6010 (Payroll Expense)', money(150000), '-', date(-1)],
            ['JE-10002', '2100 (Payroll Tax Payable)', '-', money(15000), date(-1)],
            ['JE-10002', '1110 (Bank Account)', '-', money(135000), date(-1)],
            ['JE-10003', '1500 (Fixed Assets - Comp)', money(15400), '-', date(-5)],
            ['JE-10003', '2000 (Accounts Payable)', '-', money(15400), date(-5)],
            ['JE-10004', '1100 (Cash)', money(45000), '-', date(-2)],
            ['JE-10004', '1200 (Accounts Receivable)', '-', money(45000), date(-2)],
        ];
        
        this.data['fin_treasury'] = [
            ['TR-991', 'Deposit Payout', money(100000), 'USD', 'Surplus'],
            ['TR-992', 'Forex Hedging', money(50000), 'IDR', 'Balanced'],
            ['TR-993', 'Interco Transfer', money(250000), 'SGD', 'Surplus'],
            ['TR-994', 'Payroll Fund', money(150000), 'USD', 'Drawdown']
        ];

        this.data['fin_assets'] = [
            ['AST-001', 'SN:HPU2025D', money(25000), money(5000), 'Data Center A'],
            ['AST-002', 'SN:BLD2018A', money(1200000), money(100000), 'JKT-HQ'],
            ['AST-003', 'SN:MBP3344X', money(125000), money(25000), 'Employees'],
            ['AST-004', 'SN:TYT8822W', money(85000), money(15000), 'Pool Car'],
            ['AST-005', 'SN:GNS1100Z', money(15000), money(2000), 'Facility']
        ];
        
        this.data['fin_tax'] = [
            ['PPh 21 (Karyawan)', 'Masa Okt 2025', money(150000), money(12500), 'Filed'],
            ['PPN (VAT 11%)', 'Masa Sep 2025', money(450000), money(49500), 'Paid'],
            ['PPh 23 (Jasa)', 'Masa Okt 2025', money(25000), money(500), 'Pending'],
            ['CIT (PPh Badan)', 'Annual 2024', money(5200000), money(1144000), 'Provisioning'],
            ['Transfer Pricing', 'Doc 2024', '-', '-', 'In Review']
        ];

        this.data['fin_proj'] = [
            ['SYD-ERP-Impl', money(50000), money(42000), money(8000), '85%'],
            ['Cloud Migration', money(12000), money(15000), money(-3000), '45%'],
            ['Cybersec Hardening', money(80000), money(72000), money(8000), '90%'],
            ['New HQ Construction', money(250000), money(50000), money(200000), '20%']
        ];
        
        this.data['fin_rev'] = [
            ['CTR-9921', 'Licensing', money(120000), '2025-11-01', 'IFRS 15'],
            ['CTR-8822', 'Support Svc', money(5000), '2025-11-05', 'PSAK 72'],
            ['CTR-7712', 'Implementation', money(45000), '2025-11-10', 'IFRS 15']
        ];
        
        this.data['fin_exp'] = [
             ['C-2025-001', 'Ahmad Dani', 'Flight: CGK-DPS', money(450), 'Approved'],
             ['C-2025-002', 'Siti Aminah', 'Client Dinner', money(120), 'Pending'],
             ['C-2025-003', 'John Smith', 'Software License', money(99), 'Approved']
        ];
        
        this.data['fin_itcost'] = [
             ['Engineering', 'Cloud Compute', '85%', money(15000), 'Nov-25'],
             ['Sales', 'CRM License', '100%', money(5000), 'Nov-25'],
             ['Finance', 'ERP Modules', '40%', money(2000), 'Nov-25']
        ];


        // --- 2. PROJECT MANAGEMENT ---
        
        this.data['pm_ppm'] = {
            'Proposed': [{t:'AI Supply Chain', d:'Integrasi AI untuk prediksi stok stok barang.'}, {t:'Green Data Center', d:'Migrasi ke renewable energy source.'}],
            'Analysis': [{t:'Market Expansion VN', d:'Studi kelayakan ekspansi cabang Vietnam.'}, {t:'Legacy ERP Sunset', d:'Analisis dampak penutupan sistem lama.'}],
            'Approved': [{t:'Project SYD Upgrade', d:'Upgrade core system ke v4.7 Enterprise.'}, {t:'Mobile App Refresh', d:'Redesign UI/UX customer app.'}],
            'Rejected': [{t:'Crypto Payment GW', d:'Ditolak karena risiko volatilitas tinggi.'}]
        };

        this.data['pm_exec'] = [
            ['SYD-ERP-Implementation', 'Rafindita S.', '85%', 'Healthy', date(15)],
            ['Cloud Migration Azure', 'Budi Santoso', '45%', 'At Risk', date(30)],
            ['Cybersec Hardening', 'Sarah Wijaya', '90%', 'Healthy', date(5)],
            ['New HQ Construction', 'Vendor Kontraktor', '20%', 'Critical', date(120)],
            ['Annual Audit Prep', 'Internal Audit', '60%', 'Healthy', date(10)]
        ];
        
        this.data['pm_res'] = [
            ['Ahmad Dani', 'Engineering Lead', 'Golang, Cloud', '85%', 'SYD-ERP-Implementation'],
            ['Siti Aminah', 'Finance Analyst', 'IFRS 15, Tax', '40%', 'Annual Audit Prep'],
            ['John Smith', 'Consulting Partner', 'Strategy, PMO', '95%', 'Market Expansion VN']
        ];

        // --- 3. HUMAN CAPITAL (HCM) ---

        this.data['hr_core'] = [
            [genNIK(), 'Rafindita S.', 'Executive Office', money(15000), date(-1000)],
            [genNIK(), 'Ahmad Dani', 'Engineering', money(3500), date(-500)],
            [genNIK(), 'Siti Aminah', 'Finance & Tax', money(3200), date(-200)],
            [genNIK(), 'John Smith', 'Consulting', money(8500), date(-100)],
            [genNIK(), 'Dewi Lestari', 'Marketing', money(2800), date(-800)],
            [genNIK(), 'Budi Gunawan', 'IT Security', money(4000), date(-120)],
            [genNIK(), 'Chandra Wijaya', 'Procurement', money(2900), date(-400)]
        ];

        this.data['hr_talent'] = {
            'Applied': [{t:'Dian Sastro', d:'Posisi: UX Researcher.'}, {t:'Reza Rahadian', d:'Posisi: Public Relations Lead.'}],
            'Screening': [{t:'Candidate #992', d:'Backend Dev Golang. Test Score: 90.'}],
            'Interview': [{t:'Michael T.', d:'Posisi: CFO. Interview user tahap 2.'}],
            'Offer Sent': [{t:'Jessica M.', d:'Posisi: Product Owner. Menunggu tanda tangan.'}],
            'Hired': [{t:'Rian D.', d:'Onboarding 1 Nov. Posisi: DevOps.'}]
        };

        // --- 7. GRC (GOVERNANCE, RISK, COMPLIANCE) ---

        this.data['grc_ctrl'] = [
            ['IC-FIN-01', 'Approval Pembayaran >$5k', 'Pass', 'Low', 'Finance Mgr'],
            ['IC-IT-02', 'Akses User Terminasi', 'Fail', 'Critical', 'IT Security'],
            ['IC-OPS-03', 'Stock Opname Bulanan', 'Pass', 'Medium', 'Whs Manager'],
            ['IC-HR-04', 'Background Check Karyawan', 'Pass', 'Low', 'HR Lead'],
            ['IC-SEC-05', 'Backup Restore Test', 'Partial', 'High', 'IT Infra']
        ];

        this.data['grc_audit'] = {
            'Planning': [{t:'Audit IT General Control', d:'Scope: Q3-Q4 2025. Auditor: External (Big4).'}, {t:'Audit Pajak Tahunan', d:'Persiapan dokumen PPh Badan.'}],
            'Fieldwork': [{t:'Surveillance ISO 27001', d:'Auditor sedang melakukan sampling akses user.'}, {t:'Stock Opname Gudang', d:'Cek fisik aset di gudang Cikarang.'}],
            'Reporting': [{t:'Audit HR Payroll', d:'Draft report: Minor finding on overtime calc.'}],
            'Closed': [{t:'Audit Vendor Q2', d:'Tidak ada temuan mayor.'}]
        };

        this.data['grc_comp'] = [
            ['REG-ID-01', 'UU No. 27/2022 (PDP)', 'Data Privacy & Protection', 'In Progress', date(60)],
            ['REG-ID-02', 'OJK POJK 12/2021', 'Manajemen Risiko Bank Umum', 'Completed', date(90)],
            ['STD-GL-01', 'ISO/IEC 27001:2022', 'Information Security Mgmt', 'In Audit', date(15)],
            ['STD-GL-02', 'GDPR (EU Reg)', 'Article 30 Record Processing', 'Pending Review', date(-10)],
            ['REG-US-01', 'SOX Section 404', 'Internal Financial Control', 'Completed', date(45)],
            ['REG-ID-03', 'Permenaker No. 5', 'K3 Lingkungan Kerja', 'Completed', date(120)],
            ['STD-PCI', 'PCI-DSS v4.0', 'Payment Card Security', 'Gap Analysis', date(30)]
        ];

        // --- 4. CRM ---
        
        this.data['crm_sfa'] = {
            'Lead': [{t:'PT. Tambang Emas', d:'Potensi deal ERP $500k.'}, {t:'RS. Medika Pusat', d:'Tertarik modul Hospital Management.'}],
            'Qualified': [{t:'Bank Daerah Jatim', d:'Budget approved. Demo minggu depan.'}],
            'Proposal': [{t:'Retail Chain Z', d:'Sent proposal v2. Menunggu feedback.'}],
            'Negotiation': [{t:'Unicorn Logistics', d:'Diskusi termin pembayaran & diskon.'}],
            'Closed Won': [{t:'Manufacture Otomotif', d:'Deal Signed $1.2M / 3 tahun.'}]
        };

        this.data['crm_svc'] = [
            ['TKT-9921', 'Siti', 'Login Error on Mobile', 'High', 'Breached'],
            ['TKT-9922', 'Rudi', 'Request User Tambahan', 'Low', 'On Track'],
            ['TKT-9923', 'Ahmad', 'Data Report tidak update', 'Medium', 'On Track'],
            ['TKT-9924', 'Siti', 'API Latency Issue', 'Critical', 'Working'],
            ['TKT-9925', 'Rudi', 'Billing Inquiry', 'Low', 'Resolved']
        ];
        
        this.data['crm_cs'] = [
            ['Client Alpha', '95', 'Low', date(30), 'Rafi'],
            ['Client Beta', '78', 'Medium', date(15), 'Sarah'],
            ['Gamma Corp', '45', 'Critical', date(5), 'Mike'],
            ['PT. Semesta', '88', 'Low', date(45), 'Mike'],
            ['CV. Prima', '60', 'High', date(10), 'Rafi']
        ];
        
        this.data['crm_cpq'] = [
            ['QTE-001', 'Bank XYZ', 'License + Support (5 Yr)', money(1500000), 'Sent'],
            ['QTE-002', 'PT. ABC', 'Hardware + Implementation', money(50000), 'Draft'],
            ['QTE-003', 'Startup QWE', 'SaaS Subscription (1 Yr)', money(12000), 'Approved'],
            ['QTE-004', 'Gov Project', 'Customization (Phase 1)', money(750000), 'Negotiating']
        ];

        // --- 5 & 8. PROCUREMENT & SERVICES ---
        this.data['proc_vendor'] = [
            ['PT. Computa Systems', 'IT Hardware', '98/100', 'Low', 'Preferred'],
            ['CV. Makmur Jaya', 'Office Supply', '85/100', 'Low', 'Active'],
            ['Global Consulting LLP', 'Services', '92/100', 'Medium', 'Active'],
            ['PT. Bangun Perkasa', 'Construction', '60/100', 'High', 'Probation'],
            ['ServeOne Ltd', 'Software SaaS', '95/100', 'Low', 'Active']
        ];
        
        this.data['proc_clm'] = {
            'Drafting': [{t:'NDA Review', d:'Legal review for new supplier.'}],
            'Negotiation': [{t:'MSA Global Tier 1', d:'Price and SLA negotiation.'}],
            'Active': [{t:'Cloud Hosting Agreement', d:'Renewal date Q3 2026.'}]
        };

        this.data['svc_source'] = {
            'Requirement Defined': [{t:'Talent for SAP S/4HANA', d:'Need 2 consultants for 6 months.'}],
            'Vendor Screening': [{t:'Cyber Security Experts', d:'Reviewing 3 external firms.'}]
        };
        
        // FIX: Corrected syntax error by replacing ']]}' with '};'
        this.data['svc_sow'] = {
            'Drafting': [{t:'SOW Security Audit', d:'Vendor: CyberDef. Scope: Pentest.'}],
            'Negotiation': [{t:'SOW Cleaning Svc', d:'Vendor: CleanCo. Nego harga per m2.'}],
            'Active': [{t:'SOW Dev Outsourcing', d:'Vendor: DevHouse. 10 Developer Java.'}]
        }; 
        
        this.data['svc_perf'] = [
            ['SOW-001', 'DevHouse', 'Phase 2 Completion', 'Code Review & UAT', 'Pass'],
            ['SOW-002', 'CyberDef', 'Final Report Submission', 'Security Assessment', 'Pending'],
            ['SOW-003', 'CleanCo', 'Monthly Service Check', 'Cleanliness & Quality', 'Pass']
        ];


        // --- 9. ITSAM (IT ASSET & SERVICE) ---
        
        this.data['it_asset'] = [
            ['HW-LP-001', 'SN:MBP-12345', 'Rafindita S.', date(-100), 'Deployed'],
            ['HW-LP-002', 'SN:DEL-67890', 'Ahmad Dani', date(-200), 'Deployed'],
            ['HW-SV-001', 'SN:HPS-A001', 'Data Center', date(-500), 'Maintenance'],
            ['SW-LC-001', 'SN:ADOBE-X1', 'Design Team', date(-50), 'Active'],
            ['HW-NW-001', 'SN:CIS-C3K', 'Server Room', date(-300), 'Deployed']
        ];
        
        this.data['it_itsm'] = {
            'New': [{t:'Wifi Lt.3 Mati', d:'User report sinyal hilang.'}],
            'Assigned': [{t:'Printer Finance Jammed', d:'Teknisi sedang menuju lokasi.'}],
            'Pending Vendor': [{t:'Server Replace Part', d:'Menunggu sparepart dari HP.'}],
            'Resolved': [{t:'Reset Password SAP', d:'Done by Bot.'}]
        };
        
        this.data['it_change'] = [
            ['RFC-101', 'Core Database', 'High', 'Approved', date(3)],
            ['RFC-102', 'Email Server', 'Medium', 'Pending', date(10)],
            ['RFC-103', 'Financial Module', 'Critical', 'Rejected', date(0)]
        ];


        // --- 10. LMS (LEARNING) ---
        this.data['lms_pd'] = [
            ['Rafindita S.', 'Executive Leadership', '80%', '95', 'In Progress'],
            ['Ahmad Dani', 'Golang Microservices', '100%', '88', 'Certified'],
            ['Siti Aminah', 'Brevet Pajak A/B', '50%', '-', 'In Progress'],
            ['Budi Gunawan', 'Ethical Hacking CEH', '100%', '92', 'Certified']
        ];
    }
};

// --- 3. APP LOGIC ---
let dashboardInterval = null;
let dashboardCharts = {};

const App = {
    init() {
        Database.init(); // Load Database

        // Theme Persistence
        if(localStorage.getItem('theme') === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            const icon = document.getElementById('themeIcon');
            if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        }

        this.renderSidebar();
        this.startClock();
        this.navigateTo('mod6'); 
        
        // Search Shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.querySelector('.search-input').focus();
            }
        });
    },

    toggleSidebar() { document.getElementById('mainSidebar').classList.toggle('collapsed'); },

    startClock() {
        const update = () => {
            const now = new Date();
            const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
            const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            const el = document.getElementById('topbarClock');
            if(el) el.innerHTML = `<div class="digital-clock"><span class="dc-date"><i class="fa-regular fa-calendar"></i> ${dateStr}</span><span class="dc-time">${timeStr}</span></div>`;
        };
        update(); setInterval(update, 1000);
    },

    triggerLoader() {
        const loader = document.getElementById('globalLoader');
        loader.style.width = '0%'; loader.style.opacity = '1';
        setTimeout(() => loader.style.width = '100%', 500);
        setTimeout(() => { loader.style.opacity = '0'; setTimeout(() => loader.style.width = '0%', 200); }, 500);
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
                if(mod) html += `<div class="nav-item" onclick="App.navigateTo('${mod.id}')" id="nav-${mod.id}"><i class="fa-solid ${mod.icon}"></i> <span class="nav-text">${mod.title}</span></div>`;
            });
        }
        menu.innerHTML = html;
        
        // Add Database Controls to Sidebar Bottom
        // Display elements kept in English as they are part of the System UI/UX
        menu.innerHTML += `
            <div class="nav-category" style="margin-top:20px;">SYSTEM DATA</div>
            <div class="nav-item" onclick="Database.exportToFile()"><i class="fa-solid fa-download"></i> <span class="nav-text">Download DB (.txt)</span></div>
            <div class="nav-item" onclick="document.getElementById('fileInput').click()"><i class="fa-solid fa-upload"></i> <span class="nav-text">Load DB (.txt)</span></div>
            <input type="file" id="fileInput" hidden onchange="App.handleFileUpload(this)">
            <div class="nav-item" onclick="Database.hardReset()"><i class="fa-solid fa-circle-xmark" style="color: var(--danger);"></i> <span class="nav-text" style="color: var(--danger);">Hard Reset DB</span></div>
        `;
    },

    handleFileUpload(input) {
        const file = input.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = (e) => Database.loadFromFile(e.target.result);
        reader.readAsText(file);
    },

    navigateTo(modId) {
        this.triggerLoader();
        if (dashboardInterval) clearInterval(dashboardInterval);
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const navEl = document.getElementById(`nav-${modId}`);
        if(navEl) navEl.classList.add('active');
        
        const mod = AppConfig.modules.find(m => m.id === modId);
        const root = document.getElementById('appRoot');
        // Titles and Descriptions are now in English (from AppConfig)
        document.getElementById('breadcrumbs').innerText = mod.title;
        currentProcessId = null; // Reset current process on navigation

        if(modId === 'mod6') { 
            this.renderDetailedBIDash(root); 
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
                    <div class="pc-footer"><span class="tag active">Active</span> <i class="fa-solid fa-arrow-right"></i></div>
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
                    <div><div class="h-title">${proc.title}</div><div class="h-desc">${proc.desc}</div></div>
                    <div class="header-actions">
                        ${proc.type === 'table' ? `<button class="btn-add-context" onclick="App.openAddModal()"><i class="fa-solid fa-plus"></i> Add Entry</button>` : ''}
                        <button class="btn-back" onclick="App.navigateTo('${modId}')"><i class="fa-solid fa-arrow-left"></i> Back</button>
                    </div>
                </div>
                <div id="processContent"></div>
            </div>`;
        root.innerHTML = html;

        setTimeout(() => {
            let contentHtml = '';
            if(proc.type === 'table') contentHtml = this.renderTable(proc.cols, proc.dbKey);
            else if(proc.type === 'kanban') contentHtml = this.renderKanban(proc.dbKey);
            else if(proc.type === 'catalog') contentHtml = this.renderCatalog();
            else contentHtml = this.renderChartGrid();
            
            document.getElementById('processContent').innerHTML = contentHtml;
            if(proc.type.includes('chart') || proc.type === 'bi_dash') this.initCharts();
        }, 100);
    },

    // --- CONTEXT-AWARE RENDERERS ---
    renderTable(cols, dbKey) {
        const tableId = 'table-' + Math.random().toString(36).substr(2, 9);
        currentTableId = tableId;
        const rows = Database.get(dbKey);
        
        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section">
                    <div class="cc-title"><i class="fa-solid fa-table-list" style="margin-right:8px; color:var(--primary);"></i> Data Records</div>
                    <div class="cc-subtitle">Total ${rows.length} entries found in database.</div>
                </div>
                <div class="cc-actions">
                    <div class="search-wrapper small">
                        <i class="fa-solid fa-magnifying-glass" style="color:var(--text-muted);"></i>
                        <input type="text" placeholder="Search..." class="search-input" onkeyup="App.filterTable(this, '${tableId}')">
                    </div>
                    <button class="btn-action-light" onclick="App.exportToCSV('${tableId}')"><i class="fa-solid fa-file-export"></i> Export CSV</button>
                </div>
            </div>
            <div class="cc-body no-padding">
                <div class="table-container">
                    <table id="${tableId}">
                        <thead><tr>${cols.map((c, i) => `<th onclick="App.sortTable('${tableId}', ${i})">${c}</th>`).join('')}<th class="col-detail">Action</th></tr></thead>
                        <tbody>
                            ${rows.length > 0 ? rows.map((r, index) => `
                                <tr onclick="App.openRecordDetail(this, 'table', ${index}, '${dbKey}')" style="cursor:pointer;">
                                    ${r.map(c => `<td>${this.formatCellData(c)}</td>`).join('')}
                                    <td class="cell-detail" onclick="event.stopPropagation(); App.openRecordDetail(this.closest('tr'), 'table', ${index}, '${dbKey}')">
                                        <button class="btn-view-action">View</button>
                                    </td>
                                </tr>
                            `).join('') : `<tr><td colspan="${cols.length+1}" style="text-align:center; padding:30px; color:var(--text-muted);">No records found in database.</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`;
    },

    formatCellData(data) {
        if(!data) return '-';
        const str = String(data);
        // Logic Format Render yang "Pintar" (Smart Rendering Logic)
        if (str.includes('$')) return `<span style="font-family:'JetBrains Mono', monospace; font-weight:500;">${str}</span>`;
        if (str.match(/^\d{4}-\d{2}-\d{2}$/)) return `<span style="color:var(--text-muted);">${str}</span>`; // Date
        if (str.includes('(') && str.includes(')')) return `<span style="font-family:'JetBrains Mono', monospace;">${str}</span>`; // Account Code
        if (str.includes('%')) { // Progress
             const pct = parseInt(str.replace('%', ''));
             const color = pct > 80 ? 'var(--success)' : pct > 40 ? 'var(--warning)' : 'var(--danger)';
             return `<div style="width:80px; height:6px; background:#e2e8f0; border-radius:3px; overflow:hidden; margin-bottom: 4px;"><div style="width:${pct}%; height:100%; background:${color}; border-radius:3px;"></div></div><span style="font-size:10px; color:var(--text-muted);">${str}</span>`;
        }
        if (str === 'Active' || str === 'Compliant' || str === 'Paid' || str === 'Approved' || str === 'Pass' || str === 'Completed' || str === 'Healthy' || str === 'Low' || str === 'Certified') return `<span class="status-badge success">${str}</span>`;
        if (str === 'Pending' || str === 'Drafting' || str === 'Maintenance' || str === 'Medium' || str === 'In Progress' || str === 'In Audit' || str === 'Reviewing' || str === 'At Risk' || str === 'Pending Review' || str === 'Provisioning' || str === 'Warning') return `<span class="status-badge warning">${str}</span>`;
        if (str === 'Rejected' || str === 'Critical' || str === 'Gap Found' || str === 'Fail' || str === 'Breached' || str === 'High' || str === 'Error') return `<span class="status-badge danger">${str}</span>`;
        return str;
    },

    renderKanban(dbKey) {
        const data = Database.get(dbKey) || {};
        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section"><div class="cc-title"><i class="fa-solid fa-border-all"></i> Workflow Board</div></div>
                <div class="cc-actions"><button class="btn-action-light"><i class="fa-solid fa-plus"></i> New Item</button></div>
            </div>
            <div class="cc-body padded">
                <div class="kanban-board">
                    ${Object.entries(data).map(([s, items]) => `
                        <div class="kanban-col">
                            <div class="kc-head">${s} <span class="badge-count">${items.length}</span></div>
                            <div class="kc-body">
                                ${items.map(c => `
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

    // --- RENDERER KHUSUS UNTUK MODUL LMS/CATALOG (mod10.1) ---
    renderCatalog() {
        // Descriptions translated to English
        const catalogData = [
            { id:'C101', title: 'IFRS 15 Compliance Training', desc: 'Mandatory training for the Finance team on Revenue Recognition (PSAK 72).', icon: 'fa-book-quran', duration: '12 Hours', category: 'Compliance' },
            { id:'C102', title: 'Cloud Security Fundamentals', desc: 'Basics of securing Azure/AWS environments for the IT team.', icon: 'fa-lock', duration: '8 Hours', category: 'Technical' },
            { id:'C103', title: 'Project Management Agile Scrum', desc: 'Agile and Scrum methodologies for Project and Operations teams.', icon: 'fa-clipboard-list', duration: '20 Hours', category: 'Methodology' },
            { id:'C104', title: 'Data Privacy Handling Policy', desc: 'Compliance with Indonesia\'s Personal Data Protection Law (UU No. 27/2022).', icon: 'fa-gavel', duration: '4 Hours', category: 'Compliance' },
            { id:'C105', title: 'Executive Leadership Strategy', desc: 'Course for management levels on corporate vision and leadership.', icon: 'fa-user-tie', duration: '35 Hours', category: 'Soft Skill' }
        ];

        return `
        <div class="content-card">
            <div class="cc-header-wrapper">
                <div class="cc-title-section">
                    <div class="cc-title"><i class="fa-solid fa-graduation-cap" style="margin-right:8px; color:var(--primary);"></i> Course Catalog</div>
                    <div class="cc-subtitle">Total ${catalogData.length} training courses available. Filter by category below.</div>
                </div>
                <div class="cc-actions">
                    <button class="btn-action-light"><i class="fa-solid fa-calendar-alt"></i> View Schedule</button>
                </div>
            </div>
            <div class="cc-body padded">
                <div class="grid-catalog" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
                    ${catalogData.map(c => `
                        <div class="process-card catalog-card" onclick="App.openRecordDetail(this, 'catalog', '${c.title}', 'ID: ${c.id}')" style="border-left: 5px solid ${c.category === 'Compliance' ? 'var(--danger)' : c.category === 'Technical' ? 'var(--primary)' : 'var(--accent)'}; border-radius: 10px;">
                            <div class="pc-icon" style="background: var(--info-bg); color: var(--info);"><i class="fa-solid ${c.icon}"></i></div>
                            <div class="pc-title">${c.title}</div>
                            <div class="pc-desc">${c.desc}</div>
                            <div class="pc-footer" style="padding-top: 8px; border-top: none; display:flex; justify-content:space-between; align-items:center;">
                                <span class="tag" style="background: var(--bg-app); color: var(--text-muted);"><i class="fa-solid fa-clock"></i> ${c.duration}</span>
                                <span class="tag" style="background: var(--primary-light); color: var(--primary); font-weight:600; text-transform:none;">${c.category}</span>
                                <button class="btn-primary" style="padding: 4px 10px; font-size: 10px;">Enroll</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;
    },

    renderChartGrid() { 
        return `
        <div class="content-card">
             <div class="cc-header-wrapper">
                <div class="cc-title-section"><div class="cc-title"><i class="fa-solid fa-chart-line" style="margin-right:8px; color:var(--primary);"></i> Advanced Analytics</div><div class="cc-subtitle">Click 'Ask AI' for predictive scenario analysis.</div></div>
            </div>
            <div class="cc-body padded" style="height:400px; position:relative;">
                <canvas id="mainChart"></canvas>
            </div>
        </div>`; 
    },

    initCharts() { 
        const ctx = document.getElementById('mainChart');
        if(ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Q1','Q2','Q3','Q4 (Est)', 'Q1 (Forecast)'],
                    datasets: [
                        { label: 'Actual', data: [28, 32, 38, 42, null], borderColor: '#3b82f6', tension: 0.3, borderWidth: 2, pointRadius: 3, backgroundColor: 'rgba(59, 130, 246, 0.05)', fill:false },
                        { label: 'Forecast', data: [null, null, null, 42, 48], borderColor: '#10b981', borderDash: [5, 5], tension: 0.3, borderWidth: 2, pointRadius: 3, backgroundColor: 'transparent', fill:false }
                    ]
                },
                options: { 
                    responsive: true, maintainAspectRatio: false, 
                    plugins: { 
                        legend: { display: true, position: 'top', labels: { boxWidth: 10 } },
                        tooltip: { mode: 'index', intersect: false }
                    },
                    scales: { y: { grid: { color: 'rgba(200,200,200,0.1)' } }, x: { grid: { display:false } } }
                }
            });
        }
    },


    // --- MODAL & FORM LOGIC ---
    openAddModal() {
        const container = document.getElementById('modalFormContainer');
        const title = document.getElementById('modalTitle');
        let fields = [];
        
        if (currentProcessId && currentProcessId.cols) {
            // Modal Title in English
            title.innerText = `Add New Entry to ${currentProcessId.title}`;
            fields = currentProcessId.cols.map(c => ({label: c, type: c.includes('Date') ? 'date' : 'text', id: 'f-'+c.replace(/ /g,'')}));
        } 
        
        let html = '';
        fields.forEach(f => {
            // Input placeholder in English
            html += `<div class="form-group"><label>${f.label}</label><input type="${f.type}" id="${f.id}" class="form-input" placeholder="Enter ${f.label}..."></div>`;
        });
        
        container.innerHTML = html;
        document.getElementById('modalData').classList.add('open');
    },

    submitForm() {
        if(currentTableId && currentProcessId && currentProcessId.dbKey) {
            const inputs = document.querySelectorAll('.modal-body input');
            let rowData = [];
            inputs.forEach(input => rowData.push(input.value || '-'));
            
            // Insert to Database
            Database.insert(currentProcessId.dbKey, rowData);

            this.closeModal('modalData');
            this.toast('Data Saved to Database');
            
            // Re-render view
            const modId = currentProcessId.id.split('.')[0] === '6' ? 'mod6' : 'mod'+currentProcessId.id.split('.')[0];
            // Simulate navigation back and forth to re-render the list, showing the new entry at the top
            setTimeout(() => this.navigateTo(modId), 50);
            setTimeout(() => this.openProcess(modId, currentProcessId.id), 250);
        }
    },


    // --- DASHBOARD RENDERER (VERSI DETAIL & ADAPTIF) ---
    renderDetailedBIDash(root) {
        const greeting = App.getGreeting(); 
        
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
                    <button class="btn-sm primary" onclick="App.renderDetailedBIDash(document.getElementById('appRoot'))"><i class="fa-solid fa-rotate"></i> Refresh</button>
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
                        <div class="ai-text-body" id="ai-dashboard-insight">
                            <i class="fa-solid fa-robot" style="margin-right:8px; color:#a5b4fc;"></i> "System ready. Initial analysis complete. The highest impact is from <span class="ai-highlight">Supply Chain Efficiency (Procurement)</span>. <br><br>
                            <i class="fa-solid fa-circle-exclamation" style="color:#f87171"></i> <strong>GRC Warning:</strong> Data Privacy compliance risk (REG-ID-01) is escalating. Immediate intervention recommended in the GRC module."
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
                        <span><i class="fa-solid fa-list-check" style="color:var(--accent); margin-right:8px;"></i> Live Operations Log</span>
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
                                    <th>Time</th>
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
                    <div class="section-title">Critical Attention (Alerts)</div>
                    <div class="alert-list">
                        <div class="alert-item-mod critical" onclick="App.openDetailPanelFromDashboard('GRC', 'Compliance Alert: UU PDP')">
                            <i class="fa-solid fa-circle-xmark text-danger" style="margin-top:2px;"></i>
                            <div class="aim-content">
                                <h4>Audit Findings (GRC)</h4>
                                <p>3 Compliance points unmet (PDP, GDPR). Review REG-ID-01.</p>
                            </div>
                        </div>
                        <div class="alert-item-mod warning" onclick="App.openDetailPanelFromDashboard('Finance', 'AP Aging Alert: Invoices Due')">
                            <i class="fa-solid fa-clock text-warning" style="margin-top:2px;"></i>
                            <div class="aim-content">
                                <h4>AP Aging (Finance)</h4>
                                <p>5 Invoices past due date (>30 days). Check PO-2411-002.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-elegant">
                    <div class="section-title">Module Health (System)</div>
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
        setTimeout(() => this.initDashboardCharts(), 100);
    },

    getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
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
                    labels: ['SaaS Subscription', 'Professional Services', 'Licensing'],
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

    
    // --- UTILITIES & MODAL LOGIC (Disempurnakan) ---
    
    toggleAI() { document.getElementById('aiPanel').classList.toggle('open'); },
    toggleNotifications() { document.getElementById('panelNotif').classList.toggle('open'); document.getElementById('notifDot').classList.add('hidden'); },
    closeModal(id) { document.getElementById(id).classList.remove('open'); },
    openSettings() { document.getElementById('modalSettings').classList.add('open'); },
    toast(msg) { const c = document.getElementById('toast-container'); const d = document.createElement('div'); d.className='toast show'; d.innerHTML=`<i class="fa-solid fa-circle-check"></i> ${msg}`; c.appendChild(d); setTimeout(()=> { d.classList.remove('show'); setTimeout(()=>d.remove(), 300); }, 3000); },

    // NEW: Typewriter Effect
    typewriterEffect(elementId, text) {
        let i = 0;
        const target = document.getElementById(elementId);
        target.innerHTML = ''; // Clear content for effect
        target.style.opacity = 1;
        const speed = 20; // Typing speed in milliseconds

        function type() {
            if (i < text.length) {
                target.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    },

    // Dummy AI Simulation (diperkuat dengan Typewriter dan English output)
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
            el.innerHTML += `<div class="ai-insight" id="${typingId}" style="opacity:0;"></div>`;
            el.scrollTop = el.scrollHeight;
            
            setTimeout(() => {
                const context = currentProcessId ? currentProcessId.title : 'Global Context Dashboard';
                let reply = `**Analyzing Query:** "${val}".\n\n**Context:** ${context}.\n\n**Neural Core Response (English):** Based on the current enterprise data, I have identified a key linkage. Your query relates to high-risk areas. Please review the **GRC Controls IC-IT-02 (Critical)** and related **IT Asset Management (ITAM)** records immediately for security compliance.`;
                
                // Convert Markdown to HTML for cleaner rendering
                reply = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                             .replace(/\n/g, '<br>');

                this.typewriterEffect(typingId, reply);
                el.scrollTop = el.scrollHeight;
            }, 400);
        }, 400);
    },
    
    // Fungsi untuk mendapatkan Detail Modul Terkait (Logic remains the same, output is already generic/English)
    getRelatedModuleDetails(record) {
        const dbKey = currentProcessId.dbKey;
        const details = [];
        
        // Logic for Finance -> Project: Find related Project Accounting record based on Project Name
        if (dbKey === 'fin_proj' && record && record[0]) {
            const project = record[0];
            const pmExec = Database.get('pm_exec').find(r => r[0] === project);
            if (pmExec) {
                details.push({ 
                    title: 'Project Execution Status (Modul Project)', 
                    icon: 'fa-diagram-project', 
                    items: [
                        { label: 'Manager', value: pmExec[1] },
                        { label: 'Health Status', value: App.formatCellData(pmExec[3]) },
                        { label: 'Deadline', value: pmExec[4] }
                    ] 
                });
            }
        }
        
        // Logic for HCM -> LMS: Find Certification Status based on Employee Name
        if (dbKey === 'hr_core' && record && record[1]) {
            const employee = record[1];
            const lmsRecord = Database.get('lms_pd').find(r => r[0] === employee);
            if (lmsRecord) {
                details.push({ 
                    title: 'LMS & Certification Status (Modul LMS)', 
                    icon: 'fa-graduation-cap', 
                    items: [
                        { label: 'Course', value: lmsRecord[1] },
                        { label: 'Progress', value: App.formatCellData(lmsRecord[2]) },
                        { label: 'Certification', value: App.formatCellData(lmsRecord[4]) }
                    ] 
                });
            }
        }

        // Logic for GRC Control -> ITSAM: Find related IT Asset/Change
        if (dbKey === 'grc_ctrl' && record && record[0] === 'IC-IT-02') {
             details.push({ 
                title: 'ITSAM Integration Check (Modul ITSAM)', 
                icon: 'fa-laptop-code', 
                items: [
                    { label: 'Related Change Request', value: 'RFC-103 (Rejected)' },
                    { label: 'Critical Asset Tag', value: 'HW-LP-001 (Rafindita S.)' }
                ] 
            });
        }
        
        // Logic for CRM AR -> Finance GL: Find invoice transaction in GL
        if (dbKey === 'fin_ar' && record && record[0]) {
            const invID = record[0];
            const glRecord = Database.get('fin_gl').find(r => r[0].includes('JE-10004'));
            if(glRecord) {
                 details.push({ 
                    title: 'GL Transaction Reference (Modul Finance)', 
                    icon: 'fa-coins', 
                    items: [
                        { label: 'Journal ID', value: glRecord[0] },
                        { label: 'Date Posted', value: glRecord[4] },
                        { label: 'Account Code', value: glRecord[3] }
                    ] 
                });
            }
        }
        
        return details;
    },

    // openRecordDetail (Diperkuat untuk menarik data asli dari database dan menambahkan tab integrasi)
    openRecordDetail(el, type, indexOrTitle, dbKeyOrDesc) {
        const panel = document.getElementById('panelDetail');
        const content = document.getElementById('detailContent');
        const tabsHtml = `
            <div class="detail-tabs">
                <div class="d-tab active" data-tab="overview">Overview</div>
                <div class="d-tab" data-tab="integration">Integration</div>
                <div class="d-tab" data-tab="history">History</div>
            </div>`;

        if (type === 'table') {
            document.querySelectorAll('tr.selected-row').forEach(row => row.classList.remove('selected-row'));
            if(el) el.classList.add('selected-row');

            const rows = Database.get(dbKeyOrDesc); // dbKeyOrDesc is dbKey
            const record = rows[indexOrTitle]; // indexOrTitle is index
            const process = AppConfig.modules.flatMap(m => m.processes).find(p => p.dbKey === dbKeyOrDesc);
            const cols = process.cols;

            const id = record[0]; 
            const title = process.title + ' Record';
            const statusHTML = this.formatCellData(record[record.length - 1]);
            
            let mainData = [];
            cols.forEach((col, i) => {
                mainData.push({ label: col, val: record[i], formatted: this.formatCellData(record[i]) });
            });
            
            // Generate Content for Overview Tab
            const overviewContent = `
                <div class="detail-section">
                    <h4 class="section-sub-title"><i class="fa-solid fa-clipboard-list"></i> Core Data Points</h4>
                    <div class="ds-grid">
                        ${mainData.map(d => `
                            <div class="ds-item">
                                <label>${d.label}</label>
                                <div>${d.formatted.includes('badge') || d.formatted.includes('width:80px') ? d.formatted : d.val}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>`;
            
            // Generate Content for Integration Tab
            const relatedDetails = this.getRelatedModuleDetails(record);
            const integrationContent = `
                <div class="detail-section">
                    <h4 class="section-sub-title"><i class="fa-solid fa-link"></i> Cross-Module Data Linkage</h4>
                    ${relatedDetails.length > 0 ? relatedDetails.map(rel => `
                        <div class="related-module-card">
                            <div class="rel-title"><i class="fa-solid ${rel.icon}"></i> ${rel.title}</div>
                            <div class="rel-body">
                                ${rel.items.map(item => `
                                    <div class="ds-item-small">
                                        <label>${item.label}</label>
                                        <div>${item.value}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('') : '<div class="empty-state" style="padding:15px; font-size:11px;"><i class="fa-solid fa-puzzle-piece" style="font-size:16px;"></i><p>No direct cross-module data linkage found for this record.</p></div>'}
                </div>`;
                
            // Generate Content for History Tab
            const historyContent = `
                <div class="detail-section">
                    <h4 class="section-sub-title"><i class="fa-solid fa-clock-rotate-left"></i> Transaction Audit Trail</h4>
                    <div class="activity-line">
                        <div class="act-header">Record Viewed</div>
                        <div class="act-time">Just now by You</div>
                    </div>
                    <div class="activity-line">
                        <div class="act-header">${statusHTML.includes('danger') ? 'Critical Status Set' : 'Status Updated'}</div>
                        <div class="act-time">5 days ago by Auto-System</div>
                    </div>
                    <div class="activity-line" style="border:none;">
                        <div class="act-header">Record Created</div>
                        <div class="act-time">${record[cols.findIndex(c => c.includes('Date') || c.includes('Inv'))] || date(-10)}</div>
                    </div>
                </div>`;


            content.innerHTML = `
                <div class="detail-hero">
                    <div class="dh-id">#${id}</div>
                    <div class="dh-title">${title}</div>
                    <div style="margin-top:6px; font-size:12px;">Current Status: ${statusHTML}</div>
                    ${tabsHtml}
                </div>
                <div class="detail-tabs-content" id="tabContent">
                    <div id="tab-overview">${overviewContent}</div>
                    <div id="tab-integration" style="display:none;">${integrationContent}</div>
                    <div id="tab-history" style="display:none;">${historyContent}</div>
                </div>
            `;
            
        } else if (type === 'kanban') {
            // Logic for Kanban data (indexOrTitle=Title, dbKeyOrDesc=Description)
            const taskTitle = indexOrTitle;
            const taskDesc = dbKeyOrDesc;
            const processTitle = currentProcessId.title;
            const statusHTML = `<span class="status-badge warning">In Progress</span>`;
            
            content.innerHTML = `
                <div class="detail-hero">
                    <div class="dh-id">TASK-${Math.floor(Math.random()*1000)}</div>
                    <div class="dh-title">${taskTitle}</div>
                    <div style="margin-top:6px; font-size:12px;">Current Status: ${statusHTML}</div>
                    ${tabsHtml}
                </div>
                <div class="detail-tabs-content" id="tabContent">
                    <div id="tab-overview">
                        <div class="detail-section">
                            <h4 class="section-sub-title"><i class="fa-solid fa-file-lines"></i> Description</h4>
                            <p style="font-size:12px; margin-bottom: 20px;">${taskDesc}</p>
                            
                            <h4 class="section-sub-title" style="margin-top:16px;"><i class="fa-solid fa-circle-info"></i> Metadata</h4>
                            <div class="ds-grid">
                                <div class="ds-item"><label>Owner</label><div>${rand(names)}</div></div>
                                <div class="ds-item"><label>Module</label><div>${processTitle}</div></div>
                                <div class="ds-item"><label>Created</label><div>${date(-5)}</div></div>
                                <div class="ds-item"><label>Priority</label><div>${rand(['High', 'Medium', 'Low'])}</div></div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-integration" style="display:none;">
                        <div class="detail-section">
                             <h4 class="section-sub-title"><i class="fa-solid fa-link"></i> Cross-Module Data Linkage</h4>
                             <div class="empty-state" style="padding:15px; font-size:11px;"><i class="fa-solid fa-puzzle-piece" style="font-size:16px;"></i><p>Kanban items typically link to specific tables after approval (e.g., SOW -> AP, Lead -> AR).</p></div>
                        </div>
                    </div>
                    <div id="tab-history" style="display:none;">
                         <div class="detail-section">
                            <h4 class="section-sub-title"><i class="fa-solid fa-clock-rotate-left"></i> Workflow Log</h4>
                             <div class="activity-line">
                                <div class="act-header">Status Updated to 'In Progress'</div>
                                <div class="act-time">1 hour ago by User: John Smith</div>
                            </div>
                             <div class="activity-line" style="border:none;">
                                <div class="act-header">Task Created in 'Proposed'</div>
                                <div class="act-time">${date(-5)} by User: Rafindita S.</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (type === 'catalog') {
             // Catalog details in English
             content.innerHTML = `
                <div class="detail-hero">
                    <div class="dh-id">${dbKeyOrDesc}</div>
                    <div class="dh-title">${indexOrTitle}</div>
                    <div style="margin-top:6px; font-size:12px;"><span class="status-badge success">Available</span></div>
                    <div class="detail-tabs">
                        <div class="d-tab active" data-tab="syllabus">Syllabus</div>
                        <div class="d-tab" data-tab="reviews">Reviews</div>
                    </div>
                </div>
                <div class="detail-tabs-content" id="tabContent">
                    <div id="tab-syllabus">
                        <div class="detail-section">
                            <h4 class="section-sub-title"><i class="fa-solid fa-scroll"></i> Course Content</h4>
                            <ul style="list-style:none; padding-left:0; font-size:12px; line-height:2;">
                                <li><i class="fa-solid fa-book-open" style="color:var(--primary); margin-right:8px;"></i> Module 1: Basics of PDP Law (Indonesia)</li>
                                <li><i class="fa-solid fa-book-open" style="color:var(--primary); margin-right:8px;"></i> Module 2: Global Data Compliance Principles (GDPR)</li>
                                <li><i class="fa-solid fa-book-open" style="color:var(--primary); margin-right:8px;"></i> Module 3: DPO Roles & Responsibilities</li>
                                <li><i class="fa-solid fa-book-open" style="color:var(--primary); margin-right:8px;"></i> Final Compliance Assessment</li>
                            </ul>
                            <button class="btn-primary" style="margin-top:20px; font-size:11px; width:100%;"><i class="fa-solid fa-play-circle"></i> Start Course Now</button>
                        </div>
                    </div>
                    <div id="tab-reviews" style="display:none;">
                        <div class="detail-section">
                             <h4 class="section-sub-title"><i class="fa-solid fa-star"></i> Feedback & Ratings</h4>
                             <p style="font-size:12px; color:var(--text-muted);">Average Rating: 4.8 / 5.0 (125 participants)</p>
                             <div style="margin-top:15px; border-bottom:1px solid var(--border); padding-bottom:10px;">
                                <div style="font-weight:600; font-size:11px;">Ahmad Dani <span style="float:right; color:var(--warning);"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span></div>
                                <p style="font-size:11px; color:var(--text-muted);">Highly relevant for our current GRC focus.</p>
                             </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Add Tab Switching Listener
        setTimeout(() => {
            document.querySelectorAll('#panelDetail .d-tab').forEach(tab => {
                tab.onclick = function() {
                    document.querySelectorAll('#panelDetail .d-tab').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    document.querySelectorAll('#tabContent > div').forEach(c => c.style.display = 'none');
                    document.getElementById('tab-' + this.getAttribute('data-tab')).style.display = 'block';
                };
            });
        }, 10);
        
        document.getElementById('panelDetail').classList.add('open');
    },

    // NEW: Open Detail Panel from Dashboard Alerts
    openDetailPanelFromDashboard(module, title) {
        const panel = document.getElementById('panelDetail');
        const content = document.getElementById('detailContent');
        
        const tabsHtml = `
            <div class="detail-tabs">
                <div class="d-tab active" data-tab="alert">Alert Detail</div>
                <div class="d-tab" data-tab="action">Mitigation Plan</div>
            </div>`;
            
        let alertIcon = module === 'GRC' ? 'fa-triangle-exclamation' : 'fa-bell';
        
        // Alert content translated to English
        content.innerHTML = `
            <div class="detail-hero">
                <div class="dh-id">ALERT-DASH-${Math.floor(Math.random()*100)}</div>
                <div class="dh-title">${title}</div>
                <div style="margin-top:6px; font-size:12px;"><span class="status-badge danger">Critical Alert</span></div>
                ${tabsHtml}
            </div>
            <div class="detail-tabs-content" id="tabContent">
                <div id="tab-alert">
                    <div class="detail-section">
                        <h4 class="section-sub-title"><i class="fa-solid ${alertIcon}"></i> Alert Context</h4>
                        <p style="font-size:12px; margin-bottom: 20px;">This alert indicates a critical breach or impending risk within the **${module}** module. Immediate review is necessary.</p>
                        
                        <h4 class="section-sub-title" style="margin-top:16px;"><i class="fa-solid fa-layer-group"></i> Source Module Details</h4>
                        <div class="ds-grid" style="grid-template-columns: 1fr;">
                            <div class="ds-item"><label>Source Module</label><div>${module}</div></div>
                            <div class="ds-item"><label>Specific Record ID</label><div>${module === 'GRC' ? 'REG-ID-01 (PDP Law)' : 'PO-2411-002'}</div></div>
                            <div class="ds-item"><label>Risk Level</label><div>High (Regulatory & Financial)</div></div>
                        </div>
                    </div>
                </div>
                <div id="tab-action" style="display:none;">
                    <div class="detail-section">
                        <h4 class="section-sub-title"><i class="fa-solid fa-hammer"></i> Proposed Action Plan</h4>
                        <ul style="font-size:12px; line-height:1.6; padding-left:20px;">
                            <li>Re-assign **GRC Compliance** task REG-ID-01 to *Budi Gunawan*.</li>
                            <li>Send automatic payment reminder to **Global Logistics Ltd**.</li>
                            <li>Escalate to *Super Admin* for manual override approval.</li>
                        </ul>
                        <button class="btn-primary" style="margin-top:20px; font-size:11px; width:100%;"><i class="fa-solid fa-bolt"></i> Initiate Mitigation Workflow</button>
                    </div>
                </div>
            </div>
        `;
        
        // Add Tab Switching Listener (re-used logic)
        setTimeout(() => {
            document.querySelectorAll('#panelDetail .d-tab').forEach(tab => {
                tab.onclick = function() {
                    document.querySelectorAll('#panelDetail .d-tab').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    document.querySelectorAll('#tabContent > div').forEach(c => c.style.display = 'none');
                    document.getElementById('tab-' + this.getAttribute('data-tab')).style.display = 'block';
                };
            });
        }, 10);

        document.getElementById('panelDetail').classList.add('open');
    },

    closeDetailPanel() { 
        document.getElementById('panelDetail').classList.remove('open');
        document.querySelectorAll('tr.selected-row').forEach(row => row.classList.remove('selected-row'));
    },
    
    exportToCSV(tableId) {
        this.toast('Downloading CSV...');
        let csv = [];
        const rows = document.querySelectorAll(`#${tableId} tr`);
        for (let i = 0; i < rows.length; i++) {
            let row = [], cols = rows[i].querySelectorAll("td, th");
            for (let j = 0; j < cols.length - 1; j++) row.push('"' + cols[j].innerText.trim() + '"');
            csv.push(row.join(","));
        }
        const blob = new Blob([csv.join("\n")], {type: "text/csv"});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = `Export_${currentProcessId.title}_${date()}.csv`; a.click();
    },

    filterTable(input, tableId) {
        const filter = input.value.toLowerCase();
        const table = document.getElementById(tableId);
        const tr = table.getElementsByTagName("tr");
        let visibleCount = 0;

        for (let i = 1; i < tr.length; i++) {
            let found = false;
            const td = tr[i].getElementsByTagName("td");
            for (let j = 0; j < td.length - 1; j++) { // Skip last column (Action)
                if (td[j] && td[j].textContent.toLowerCase().indexOf(filter) > -1) { found = true; break; }
            }
            if (found) {
                tr[i].style.display = "";
                visibleCount++;
            } else {
                tr[i].style.display = "none";
            }
        }
        
        // Update info text (kept in English)
        const totalRecords = Database.get(currentProcessId.dbKey).length;
        document.querySelector(`.cc-subtitle`).innerText = `Showing ${visibleCount} of ${totalRecords} entries`;
        // Hiding pagination for simplicity, but if needed, the logic can be added here
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
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());