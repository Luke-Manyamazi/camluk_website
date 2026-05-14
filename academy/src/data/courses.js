export const COURSES = [
  {
    id: 'intro-to-computers',
    title: 'Introduction to Computers',
    description: 'Learn the fundamentals of computers — hardware, software, and basic operations — from the ground up.',
    level: 'Beginner',
    duration: '3 Weeks',
    price: 199,
    color: 'from-blue-500/20 to-transparent',
    icon: '💻',
    modules: [
      {
        id: 'itc-m1',
        title: 'What is a Computer?',
        lessons: [
          {
            id: 'itc-m1-l1',
            title: 'Definition & History',
            duration: '8 min',
            content: `A computer is an electronic device that processes data according to a set of instructions called a program. Computers accept input, process it, store results, and produce output.

**A Brief History**
The first mechanical computers were built in the 1800s by Charles Babbage. Electronic computers emerged in the 1940s — machines the size of entire rooms. By the 1970s, the microprocessor made personal computers possible, and today computers fit in our pockets.

**The Four Core Operations**
Every computer, from a smartphone to a supercomputer, performs four core operations:
• Input — receiving data (keyboard, mouse, microphone)
• Processing — manipulating data (CPU)
• Storage — saving data (RAM, hard drive)
• Output — displaying results (monitor, printer, speakers)

Understanding these four operations is the foundation of everything else in this course.`,
          },
          {
            id: 'itc-m1-l2',
            title: 'Types of Computers',
            duration: '7 min',
            content: `Computers come in many shapes and sizes, each designed for different purposes.

**Personal Computers (PCs)**
Desktops and laptops built for individual use. Desktops offer more power and upgradability; laptops trade some performance for portability.

**Tablets & Smartphones**
Touch-screen devices optimised for media consumption and light productivity. They use mobile operating systems (Android, iOS).

**Servers**
Powerful machines that store data and run services for many users simultaneously. You interact with servers every time you visit a website.

**Supercomputers**
The most powerful computers on Earth — used for weather forecasting, scientific research, and AI training. They perform millions of billions of calculations per second.

**Embedded Systems**
Tiny computers built into everyday devices: your microwave, car dashboard, ATM, or smart TV all contain embedded computers running specialised software.`,
          },
          {
            id: 'itc-m1-l3',
            title: 'How Computers Process Information',
            duration: '10 min',
            content: `At its heart, a computer understands only one language: binary. Every piece of data — text, images, video — is ultimately stored as a sequence of 0s and 1s.

**Bits and Bytes**
A single 0 or 1 is called a bit. Eight bits make a byte. A kilobyte (KB) is 1,024 bytes; a megabyte (MB) is 1,024 KB; a gigabyte (GB) is 1,024 MB.

**The CPU Cycle**
The Central Processing Unit (CPU) works in a continuous cycle:
1. Fetch — retrieve an instruction from memory
2. Decode — interpret what the instruction means
3. Execute — carry out the instruction
4. Store — write the result back to memory

Modern CPUs do this billions of times per second.

**RAM vs Long-term Storage**
RAM (Random Access Memory) holds the data the CPU is actively working with — it is fast but temporary. When you turn off the computer, RAM is cleared. Your hard drive or SSD stores data permanently, even without power.`,
          },
        ],
        quiz: {
          id: 'itc-m1-q',
          questions: [
            {
              q: 'What does CPU stand for?',
              options: ['Central Processing Unit', 'Computer Power Unit', 'Core Program Utility', 'Central Program Update'],
              correct: 0,
            },
            {
              q: 'How many bits are in one byte?',
              options: ['4', '16', '8', '2'],
              correct: 2,
            },
            {
              q: 'Which type of memory is cleared when the computer turns off?',
              options: ['SSD', 'Hard Drive', 'ROM', 'RAM'],
              correct: 3,
            },
            {
              q: 'Which of the following is NOT one of the four core computer operations?',
              options: ['Input', 'Networking', 'Processing', 'Output'],
              correct: 1,
            },
            {
              q: 'What was the name of the mathematician who designed the first mechanical computer?',
              options: ['Alan Turing', 'Charles Babbage', 'Bill Gates', 'Ada Lovelace'],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'itc-m2',
        title: 'Hardware Components',
        lessons: [
          {
            id: 'itc-m2-l1',
            title: 'Inside the System Unit',
            duration: '10 min',
            content: `The system unit (or tower) houses all the core components of a computer. Understanding these parts helps you diagnose problems and make upgrade decisions.

**Motherboard**
The main circuit board that connects every component. All other parts plug into the motherboard either directly or via cables.

**CPU (Processor)**
The "brain" of the computer. Modern CPUs have multiple cores, allowing them to run several tasks simultaneously. Clock speed (measured in GHz) indicates how many cycles per second the CPU can complete.

**RAM**
RAM sticks slot directly into the motherboard. More RAM allows more applications to run simultaneously without slowdowns. Most modern computers need at least 8 GB; 16 GB is comfortable for most tasks.

**Power Supply Unit (PSU)**
Converts mains electricity into the voltages the computer's components need. A failing PSU can cause random shutdowns and instability.

**Cooling System**
CPUs generate significant heat. Cooling is handled by heatsinks (metal fins that absorb heat) and fans. High-performance systems may use liquid cooling loops.`,
          },
          {
            id: 'itc-m2-l2',
            title: 'Storage Devices',
            duration: '9 min',
            content: `Storage devices retain data permanently, even without power. Choosing the right storage affects your computer's speed and capacity.

**Hard Disk Drives (HDD)**
Traditional storage using spinning magnetic platters. HDDs offer large capacities at low cost but are slower than SSDs and vulnerable to physical shock.

**Solid State Drives (SSD)**
No moving parts — data is stored on flash memory chips. SSDs are significantly faster, more reliable, and more power-efficient than HDDs. They have become the standard for modern computers.

**NVMe SSDs**
The fastest consumer storage available. NVMe drives plug directly into the motherboard via an M.2 slot and are up to 5× faster than regular SATA SSDs.

**External Storage**
USB flash drives and external hard drives allow portable data storage. Cloud storage services (Google Drive, OneDrive) provide off-site backup over the internet.

**Optical Drives**
CD, DVD, and Blu-ray drives. Less common today but still used for software installation and media playback in some environments.`,
          },
          {
            id: 'itc-m2-l3',
            title: 'Input & Output Devices',
            duration: '7 min',
            content: `Peripherals allow humans to interact with computers. They are divided into input devices (data goes in) and output devices (data comes out).

**Input Devices**
• Keyboard — the primary text input device
• Mouse / Trackpad — pointing and clicking
• Microphone — audio input
• Webcam — video input
• Scanner — converts physical documents to digital files
• Touchscreen — both input and output

**Output Devices**
• Monitor — displays visual output; resolution (e.g., 1920×1080) measures sharpness
• Printer — produces physical copies of documents or images
• Speakers / Headphones — audio output
• Projector — displays output on a large surface

**Input/Output (I/O) Devices**
Some devices do both: touchscreens accept touch input and display output simultaneously. A network card sends and receives data. A USB hub expands connectivity in both directions.`,
          },
        ],
        quiz: {
          id: 'itc-m2-q',
          questions: [
            {
              q: 'What connects all components in a computer?',
              options: ['CPU', 'RAM', 'Motherboard', 'Power Supply'],
              correct: 2,
            },
            {
              q: 'Which storage type is fastest?',
              options: ['HDD', 'SATA SSD', 'NVMe SSD', 'USB Flash Drive'],
              correct: 2,
            },
            {
              q: 'What does a PSU do?',
              options: ['Processes data', 'Converts mains electricity to usable voltages', 'Stores files permanently', 'Displays output'],
              correct: 1,
            },
            {
              q: 'Which of these is an INPUT device?',
              options: ['Monitor', 'Printer', 'Speaker', 'Scanner'],
              correct: 3,
            },
            {
              q: 'What does HDD stand for?',
              options: ['High Definition Drive', 'Hard Disk Drive', 'Hybrid Data Device', 'Hardware Data Drive'],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'itc-m3',
        title: 'Software & Operating Systems',
        lessons: [
          {
            id: 'itc-m3-l1',
            title: 'System vs Application Software',
            duration: '8 min',
            content: `Software is the set of instructions that tells hardware what to do. It is divided into two main categories.

**System Software**
System software manages hardware and provides a platform for other software to run on. The most important piece of system software is the Operating System (OS).

Examples: Windows 11, macOS Sequoia, Ubuntu Linux, Android, iOS.

**Application Software**
Applications (apps) are programs designed to help users complete specific tasks. They run on top of the operating system.

Examples: Microsoft Word (word processing), Chrome (web browsing), Photoshop (image editing), WhatsApp (messaging).

**Utility Software**
A sub-category of system software that performs maintenance tasks: antivirus programs, disk cleaners, backup tools, and file compression utilities are all utilities.

**Drivers**
Drivers are small programs that allow the OS to communicate with specific hardware devices. When you plug in a new printer or graphics card, Windows often needs to install a driver for it.`,
          },
          {
            id: 'itc-m3-l2',
            title: 'Working with Windows',
            duration: '10 min',
            content: `Windows is the most widely used desktop operating system in the world, found in homes, schools, and businesses across South Africa and globally.

**The Desktop**
The desktop is your main workspace. Icons on the desktop provide shortcuts to applications and files. The taskbar at the bottom shows running applications and the system clock.

**File Explorer**
File Explorer (the folder icon) lets you browse, copy, move, and delete files. Key locations:
• Desktop — files visible on screen
• Documents — personal files
• Downloads — files saved from the internet
• This PC — access all drives and devices

**Task Manager**
Press Ctrl + Shift + Esc to open Task Manager. It shows running processes and their CPU/RAM usage. If an application stops responding, you can "End Task" to force-close it.

**Common Keyboard Shortcuts**
• Ctrl + C / V / X — Copy / Paste / Cut
• Ctrl + Z — Undo
• Alt + F4 — Close window
• Win + D — Show desktop
• Win + L — Lock computer
• Ctrl + Alt + Del — Security screen (also opens Task Manager)`,
          },
          {
            id: 'itc-m3-l3',
            title: 'Keeping Your Computer Safe',
            duration: '9 min',
            content: `Digital security is one of the most important skills for any computer user. Understanding basic threats and defences protects both you and your employer.

**Malware**
Malware is malicious software designed to damage or gain unauthorised access to systems. Types include:
• Viruses — attach to files and spread when those files are shared
• Trojans — disguise themselves as legitimate software
• Ransomware — encrypts your files and demands payment
• Spyware — secretly monitors your activity

**Antivirus Software**
Install reputable antivirus software (e.g., Windows Defender, Malwarebytes) and keep it updated. Run regular scans.

**Strong Passwords**
Use passwords of at least 12 characters combining uppercase, lowercase, numbers, and symbols. Never reuse passwords across accounts. Use a password manager.

**Software Updates**
Most security breaches exploit known vulnerabilities in outdated software. Enable automatic updates for your OS and applications.

**Phishing**
Phishing emails impersonate legitimate organisations to steal login credentials. Always check the sender's actual email address, and never click suspicious links.`,
          },
        ],
        quiz: {
          id: 'itc-m3-q',
          questions: [
            {
              q: 'Which of the following is system software?',
              options: ['Microsoft Word', 'Google Chrome', 'Windows 11', 'Photoshop'],
              correct: 2,
            },
            {
              q: 'What keyboard shortcut opens Task Manager?',
              options: ['Ctrl + Alt + Del', 'Ctrl + Shift + Esc', 'Win + T', 'Alt + F4'],
              correct: 1,
            },
            {
              q: 'What type of malware encrypts your files and demands payment?',
              options: ['Spyware', 'Trojan', 'Virus', 'Ransomware'],
              correct: 3,
            },
            {
              q: 'What is the purpose of a device driver?',
              options: [
                'To speed up the CPU',
                'To allow the OS to communicate with hardware',
                'To scan for viruses',
                'To compress files',
              ],
              correct: 1,
            },
            {
              q: 'What is phishing?',
              options: [
                'A type of antivirus scan',
                'A method of backing up files',
                'An attack that impersonates trusted organisations to steal credentials',
                'A way to speed up internet browsing',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'ms-office-basics',
    title: 'Microsoft Office Basics',
    description: 'Hands-on training with Word, Excel, and PowerPoint — essential skills for any office environment.',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 249,
    color: 'from-green-500/20 to-transparent',
    icon: '📊',
    modules: [
      {
        id: 'msо-m1',
        title: 'Microsoft Word',
        lessons: [
          {
            id: 'mso-m1-l1',
            title: 'Getting Started with Word',
            duration: '8 min',
            content: `Microsoft Word is the world's most-used word processing application. It is used to create letters, reports, CVs, contracts, and virtually any text document.

**The Word Interface**
When you open Word you see:
• Ribbon — the toolbar across the top with tabs (Home, Insert, Layout, etc.)
• Document Area — the white page where you type
• Status Bar — shows page count, word count, and zoom at the bottom

**Creating & Opening Documents**
• New blank document: Ctrl + N
• Open existing: Ctrl + O
• Save: Ctrl + S
• Save As (choose location/name): F12

**Navigating the Ribbon**
The Home tab contains the most-used commands: font styles, paragraph alignment, and clipboard operations. The Insert tab lets you add tables, images, headers, and page numbers.

**Selecting Text**
• Click and drag — select a range
• Double-click a word — select that word
• Triple-click — select a whole paragraph
• Ctrl + A — select all text`,
          },
          {
            id: 'mso-m1-l2',
            title: 'Formatting Documents',
            duration: '10 min',
            content: `A well-formatted document looks professional and is easier to read. Word provides powerful formatting tools in the Home tab.

**Font Formatting**
Select text, then use the font controls:
• Font face (e.g., Calibri, Arial, Times New Roman)
• Font size (measured in points — 12pt is standard for body text)
• Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U)
• Font colour and highlighting

**Paragraph Formatting**
• Alignment: Left (Ctrl+L), Centre (Ctrl+E), Right (Ctrl+R), Justify (Ctrl+J)
• Line spacing: 1.0, 1.5, 2.0 — set via the paragraph icon or Format > Paragraph
• Indentation: Tab key or the indent buttons in the Ribbon

**Styles**
Styles apply consistent formatting to headings and body text. Using Heading 1, Heading 2, and Normal styles ensures professional appearance and allows Word to auto-generate a table of contents.

**Page Layout**
Set margins, orientation (portrait/landscape), and paper size under the Layout tab. Standard business documents use A4 paper with 2.5 cm margins.`,
          },
          {
            id: 'mso-m1-l3',
            title: 'Tables, Images & Printing',
            duration: '8 min',
            content: `Word documents often need more than just text. Tables, images, and professional printing round out your Word skills.

**Inserting Tables**
Insert > Table. Choose rows and columns. Click in any cell to type. Use the Table Design and Layout tabs that appear when a table is selected to adjust borders, shading, and cell alignment.

**Inserting Images**
Insert > Pictures. Choose a file from your computer. Once inserted, use the Format Picture tools to resize, crop, or apply a style. Text wrapping determines how text flows around the image.

**Headers, Footers & Page Numbers**
Insert > Header/Footer to add content that repeats on every page (company name, document title). Insert > Page Number adds automatic page numbering.

**Printing**
Ctrl + P opens the print dialog. Always use Print Preview first to check layout. Key options:
• Printer selection
• Number of copies
• Page range (All, current page, or specific pages e.g. 1-3, 5)
• Duplex (two-sided) printing`,
          },
        ],
        quiz: {
          id: 'mso-m1-q',
          questions: [
            {
              q: 'What keyboard shortcut saves a Word document?',
              options: ['Ctrl + P', 'Ctrl + S', 'Ctrl + N', 'Ctrl + W'],
              correct: 1,
            },
            {
              q: 'What does Ctrl + B do in Word?',
              options: ['Open a new document', 'Bold selected text', 'Insert a table', 'Go back one step'],
              correct: 1,
            },
            {
              q: 'Which tab contains font and paragraph formatting tools?',
              options: ['Insert', 'Layout', 'Home', 'View'],
              correct: 2,
            },
            {
              q: 'What is the standard paper size for business documents in South Africa?',
              options: ['Letter', 'Legal', 'A4', 'A3'],
              correct: 2,
            },
            {
              q: 'What keyboard shortcut opens the Print dialog?',
              options: ['Ctrl + P', 'Ctrl + F', 'F12', 'Ctrl + E'],
              correct: 0,
            },
          ],
        },
      },
      {
        id: 'mso-m2',
        title: 'Microsoft Excel',
        lessons: [
          {
            id: 'mso-m2-l1',
            title: 'Spreadsheet Basics',
            duration: '9 min',
            content: `Excel is a spreadsheet application used for organising data, performing calculations, and creating charts. It is essential in finance, administration, and data analysis.

**The Excel Interface**
• Workbook — the entire Excel file (.xlsx)
• Worksheet (Sheet) — a single tab within the workbook
• Cell — the intersection of a column and row (e.g., B3 means column B, row 3)
• Cell Reference — the address of a cell (A1, C7, etc.)

**Entering Data**
Click a cell and start typing. Press Enter to move down, Tab to move right. Press Escape to cancel an entry. Double-click a cell to edit its existing content.

**Selecting Ranges**
• Click and drag to select multiple cells
• Shift + Click to extend a selection
• Ctrl + Click to select non-adjacent cells
• Ctrl + A to select the whole sheet

**Formatting Cells**
Right-click a cell and choose Format Cells (Ctrl + 1) to set number formats (currency, percentage, date), alignment, borders, and fill colour. Always format currency cells to show the correct symbol (R for Rand).`,
          },
          {
            id: 'mso-m2-l2',
            title: 'Formulas & Functions',
            duration: '12 min',
            content: `The real power of Excel is its ability to calculate automatically. Formulas and functions save hours of manual arithmetic.

**Writing a Formula**
All formulas start with = (equals sign). Excel evaluates the formula and shows the result.
• =A1+B1 — adds the values in A1 and B1
• =C3*12 — multiplies C3 by 12
• =D5-E5 — subtracts E5 from D5

**Essential Functions**
• =SUM(A1:A10) — adds all values from A1 to A10
• =AVERAGE(B1:B10) — calculates the mean
• =MAX(C1:C10) — returns the largest value
• =MIN(C1:C10) — returns the smallest value
• =COUNT(D1:D10) — counts how many cells contain numbers
• =COUNTA(D1:D10) — counts non-empty cells

**Relative vs Absolute References**
When you copy a formula, Excel adjusts cell references automatically (relative references). To lock a reference so it doesn't change, add $ signs: $A$1 is always cell A1 no matter where the formula is copied.

**IF Function**
=IF(condition, value_if_true, value_if_false)
Example: =IF(A1>=50,"Pass","Fail")`,
          },
          {
            id: 'mso-m2-l3',
            title: 'Charts & Data Presentation',
            duration: '8 min',
            content: `Charts turn raw numbers into visual stories that are easier to understand at a glance.

**Creating a Chart**
1. Select the data you want to chart (including column headers)
2. Insert > Chart
3. Choose chart type
4. Customise with Chart Design and Format tabs

**Choosing the Right Chart**
• Column / Bar chart — comparing values across categories
• Line chart — showing trends over time
• Pie chart — showing proportions of a whole (use sparingly, max 5-6 slices)
• Scatter plot — showing the relationship between two variables

**Formatting Charts**
Always add a chart title, axis labels, and a legend. Remove unnecessary gridlines and use a clean colour scheme. A well-formatted chart should be self-explanatory without the underlying data.

**Sorting & Filtering**
Select your data, then Data > Sort to arrange rows alphabetically or numerically. Data > Filter adds dropdown arrows to column headers, allowing you to show only rows that meet specific criteria — invaluable for large datasets.`,
          },
        ],
        quiz: {
          id: 'mso-m2-q',
          questions: [
            {
              q: 'What symbol must every Excel formula start with?',
              options: ['+', '#', '=', '@'],
              correct: 2,
            },
            {
              q: 'Which function adds all values in a range?',
              options: ['=ADD()', '=TOTAL()', '=COUNT()', '=SUM()'],
              correct: 3,
            },
            {
              q: 'What does $A$1 mean in a formula?',
              options: ['The cell has currency formatting', 'An absolute reference that does not change when copied', 'A relative reference', 'A named range'],
              correct: 1,
            },
            {
              q: 'Which chart type is best for showing a trend over time?',
              options: ['Pie chart', 'Line chart', 'Column chart', 'Scatter plot'],
              correct: 1,
            },
            {
              q: 'What does =IF(A1>=50,"Pass","Fail") return when A1 contains 45?',
              options: ['Pass', 'Fail', '45', 'TRUE'],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'mso-m3',
        title: 'PowerPoint Presentations',
        lessons: [
          {
            id: 'mso-m3-l1',
            title: 'Building Your First Presentation',
            duration: '9 min',
            content: `PowerPoint is used to create slide-based presentations for meetings, training sessions, and pitches. A great presentation communicates clearly without overwhelming the audience.

**The PowerPoint Interface**
• Slide Panel (left) — thumbnail view of all slides
• Slide Area (centre) — where you edit the current slide
• Notes Pane (bottom) — speaker notes not visible to the audience
• Ribbon — design and formatting tools

**Adding Slides**
• New slide: Ctrl + M or right-click in the slide panel
• Duplicate slide: right-click > Duplicate
• Delete slide: right-click > Delete

**Slide Layouts**
Each slide has a layout (Title Slide, Title and Content, Two Content, etc.) applied from the Home > Layout dropdown. Choose the layout that matches your content rather than moving placeholders manually.

**The 6×6 Rule**
A widely-used guideline: no more than 6 bullet points per slide, and no more than 6 words per bullet. Slides support your speech — they are not a script. Keep text minimal.`,
          },
          {
            id: 'mso-m3-l2',
            title: 'Design, Transitions & Delivery',
            duration: '8 min',
            content: `A visually consistent, well-paced presentation keeps your audience engaged and reinforces your credibility.

**Themes & Design**
Apply a theme from the Design tab for instant professional styling. Stick to 2-3 colours and 1-2 font families throughout. Avoid clashing colours or hard-to-read combinations.

**Adding Images & Icons**
Insert > Pictures or Insert > Icons. Use high-quality images relevant to your content. Resize proportionally by holding Shift while dragging a corner handle.

**Transitions**
Transitions are animations between slides. Keep them subtle — Fade or Push are professional choices. Avoid flashy transitions (spinning, bouncing) in business presentations.

**Animations**
Animations control how elements appear on a slide. Use Appear or Fade for bullet points to reveal them one at a time. Avoid overusing animations — they can distract from your message.

**Presenting**
• Press F5 to start from the beginning, Shift+F5 from the current slide
• Arrow keys or spacebar advance slides
• Press B to blank the screen (useful when taking questions)
• Press Escape to end the presentation`,
          },
        ],
        quiz: {
          id: 'mso-m3-q',
          questions: [
            {
              q: 'What does the 6×6 rule recommend?',
              options: [
                'Six slides maximum per presentation',
                'No more than 6 bullets per slide, 6 words per bullet',
                'Six-second transitions between slides',
                'Six colours maximum in your theme',
              ],
              correct: 1,
            },
            {
              q: 'Which keyboard shortcut starts a presentation from the beginning?',
              options: ['Ctrl + P', 'Ctrl + S', 'F5', 'F1'],
              correct: 2,
            },
            {
              q: 'What is the purpose of the Notes Pane?',
              options: [
                'It displays speaker notes not visible to the audience',
                'It shows audience feedback',
                'It contains the slide thumbnails',
                'It is used for chat during online presentations',
              ],
              correct: 0,
            },
            {
              q: 'Which transition style is most appropriate for a business presentation?',
              options: ['Spin', 'Bounce', 'Fade', 'Cube'],
              correct: 2,
            },
            {
              q: 'How do you resize an image proportionally in PowerPoint?',
              options: [
                'Hold Alt and drag any edge',
                'Hold Shift and drag a corner handle',
                'Double-click the image',
                'Right-click and choose Scale',
              ],
              correct: 1,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'pc-repairs-basics',
    title: 'PC Repairs Basics',
    description: 'Learn to diagnose, repair, and maintain personal computers — from hardware to software issues.',
    level: 'Beginner',
    duration: '4 Weeks',
    price: 299,
    color: 'from-orange-500/20 to-transparent',
    icon: '🔧',
    modules: [
      {
        id: 'pcr-m1',
        title: 'Safety & Preparation',
        lessons: [
          {
            id: 'pcr-m1-l1',
            title: 'ESD & Workshop Safety',
            duration: '7 min',
            content: `Before touching any computer component, you must understand the risks and how to protect both yourself and the equipment.

**Electrostatic Discharge (ESD)**
Static electricity — even a tiny, imperceptible shock — can permanently damage sensitive computer components. A 10-volt static discharge (too small to feel) can destroy a CPU or RAM stick.

**Preventing ESD**
• Always wear an anti-static wrist strap connected to a metal chassis or ground point
• Work on anti-static mats
• Handle components by their edges, never by the circuitry
• Avoid carpeted floors — they generate static

**Personal Safety**
• Never work on a computer that is plugged in (except for specific diagnostics)
• Power supplies and monitors can retain lethal voltages even when unplugged — do not open these
• Keep your workspace tidy to avoid tripping over cables

**Preparing Your Workspace**
• Good lighting is essential
• Use a clean, flat surface with an anti-static mat
• Keep screws in a small tray (or use a magnetic parts tray)
• Have a notepad or phone to photograph cable connections before removing them`,
          },
          {
            id: 'pcr-m1-l2',
            title: 'Essential Tools',
            duration: '6 min',
            content: `A good technician relies on a small, well-chosen toolkit. You don't need expensive equipment to handle most repairs.

**Physical Tools**
• Phillips head screwdrivers (#1 and #2) — most PC screws are Phillips
• Flat-head screwdriver — for prying and panel clips
• Torx screwdriver set — used in some laptops and peripherals
• Needle-nose pliers — for retrieving dropped screws
• Anti-static wrist strap — essential for all component work
• Thermal paste — required whenever removing or reseating a CPU cooler

**Cleaning Tools**
• Compressed air canister — blow dust from fans, heatsinks, and vents
• Soft-bristle brush — gently dislodge stubborn dust
• Isopropyl alcohol (90%+) — cleans thermal paste and contacts
• Lint-free cloths or cotton swabs — wipe surfaces without leaving fibres

**Diagnostic Tools**
• USB bootable drive — for OS reinstallation and diagnostic tools
• Multimeter — tests voltages and cable continuity
• POST card — identifies hardware failures during startup
• Spare known-good components (RAM, PSU) for swap testing`,
          },
        ],
        quiz: {
          id: 'pcr-m1-q',
          questions: [
            {
              q: 'What does ESD stand for?',
              options: ['Electronic System Damage', 'Electrostatic Discharge', 'External Storage Device', 'Electrical Safety Directive'],
              correct: 1,
            },
            {
              q: 'What is the primary tool to prevent ESD damage?',
              options: ['Rubber gloves', 'Anti-static wrist strap', 'Insulated mat', 'Latex gloves'],
              correct: 1,
            },
            {
              q: 'What should you NEVER open due to retained lethal voltages?',
              options: ['Optical drive', 'RAM stick', 'Power supply unit', 'Hard drive'],
              correct: 2,
            },
            {
              q: 'What percentage of isopropyl alcohol should be used for cleaning PC contacts?',
              options: ['50%', '70%', '90%+', '100%'],
              correct: 2,
            },
            {
              q: 'Why should you photograph cable connections before removing them?',
              options: [
                'For warranty purposes',
                'To identify counterfeit parts',
                'To remember where each cable goes when reassembling',
                'Required by law',
              ],
              correct: 2,
            },
          ],
        },
      },
      {
        id: 'pcr-m2',
        title: 'Hardware Troubleshooting',
        lessons: [
          {
            id: 'pcr-m2-l1',
            title: 'Diagnosing Common Hardware Issues',
            duration: '10 min',
            content: `Systematic troubleshooting saves time and prevents replacing parts that are not actually faulty.

**The Troubleshooting Process**
1. Identify the problem — what exactly is happening?
2. Gather information — when did it start? Any recent changes?
3. Form a hypothesis — what is the most likely cause?
4. Test the hypothesis — make one change and observe
5. Document — record what you tried and what the result was

**No Power**
• Check the power cable and wall socket
• Check the PSU switch on the back of the tower
• Inspect the power button connector on the motherboard
• Test with a known-good PSU

**No Display / No POST**
POST (Power-On Self Test) is the sequence the computer runs at startup. If it fails, you may hear beep codes:
• 1 short beep: successful POST
• Multiple beeps: hardware failure (varies by BIOS manufacturer)
Try reseating RAM, GPU, and all power connectors. If still no display, test with minimal components (CPU + 1 RAM stick + PSU only).

**Overheating**
Symptoms: sudden shutdowns, throttled performance, hot case. Check fan operation and clean dust from heatsinks and vents. Reapply thermal paste if the CPU cooler was removed.`,
          },
          {
            id: 'pcr-m2-l2',
            title: 'RAM & Storage Faults',
            duration: '9 min',
            content: `RAM and storage failures are among the most common hardware issues. Knowing how to test them quickly narrows down a fault.

**RAM Faults**
Symptoms of bad RAM: random crashes (Blue Screen of Death / BSOD), failure to boot, system instability.

Diagnosis:
• Reseat the RAM sticks (remove, clean gold contacts with isopropyl alcohol, reinsert firmly)
• Test with a single stick at a time to identify the faulty module
• Run MemTest86 (free bootable tool) for a thorough RAM test — let it run at least two passes

**HDD Faults**
Symptoms: slow performance, clicking noises (clicking HDD = imminent failure), file system errors, Windows unable to boot.

Diagnosis:
• Run CHKDSK (Windows built-in tool) to scan for file system errors
• Use CrystalDiskInfo to check SMART data — a health report your drive keeps internally
• A drive with reallocated sectors in SMART data is deteriorating — back up immediately

**SSD Faults**
SSDs fail quietly (no clicking noise). Signs: sudden slowness, files becoming read-only. CrystalDiskInfo also works for SSDs.

**When to Replace**
A drive with SMART errors showing reallocated sectors, pending sectors, or uncorrectable errors should be replaced as soon as possible, even if still functioning.`,
          },
          {
            id: 'pcr-m2-l3',
            title: 'BIOS & Boot Issues',
            duration: '8 min',
            content: `The BIOS (Basic Input/Output System) or its modern replacement UEFI is the firmware that initialises hardware before the OS loads. Understanding it is essential for advanced repairs.

**Accessing BIOS/UEFI**
Press the correct key during startup (shown briefly on screen): Delete, F2, F10, or F12 depending on the manufacturer.

**Key BIOS Settings**
• Boot Order — determines which device the system boots from (HDD, USB, DVD)
• Date & Time — set if the clock resets after power loss (CMOS battery may need replacement)
• XMP/DOCP — enables RAM to run at its advertised speed
• Secure Boot — a security feature; may need to be disabled for certain OS installations

**Boot Failure Scenarios**
"Operating System Not Found" or "BOOTMGR is missing":
1. Check BIOS boot order — the correct drive must be first
2. Check that the drive is detected in BIOS
3. Boot from Windows installation USB and use Startup Repair

**CMOS Battery**
A small CR2032 coin cell battery on the motherboard keeps BIOS settings and the clock when the PC is unplugged. If your PC loses its date/time every time it's powered off, replace the CMOS battery (costs under R20).`,
          },
        ],
        quiz: {
          id: 'pcr-m2-q',
          questions: [
            {
              q: 'What does POST stand for?',
              options: ['Power On Self Test', 'Processing Output System Test', 'Primary OS Start Tool', 'Pre-Operation Safety Test'],
              correct: 0,
            },
            {
              q: 'What tool is used to test RAM for errors?',
              options: ['CHKDSK', 'CrystalDiskInfo', 'MemTest86', 'Device Manager'],
              correct: 2,
            },
            {
              q: 'A clicking noise from a HDD typically means:',
              options: ['The drive is running normally', 'The fan needs cleaning', 'Imminent drive failure — back up immediately', 'RAM is faulty'],
              correct: 2,
            },
            {
              q: 'What does the CMOS battery do?',
              options: [
                'Powers the CPU during low-power states',
                'Keeps BIOS settings and the clock when the PC is unplugged',
                'Charges the laptop battery',
                'Provides backup power during outages',
              ],
              correct: 1,
            },
            {
              q: 'Which SMART data values on a HDD indicate it should be replaced?',
              options: [
                'Temperature above 30°C',
                'Power-on hours above 1000',
                'Reallocated sectors or uncorrectable errors',
                'Read speed below 100 MB/s',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'intro-to-webdev',
    title: 'Introduction to Web Development',
    description: 'Get started with HTML, CSS, and JavaScript — build your first web pages from scratch.',
    level: 'Beginner',
    duration: '6 Weeks',
    price: 349,
    color: 'from-purple-500/20 to-transparent',
    icon: '🌐',
    modules: [
      {
        id: 'wd-m1',
        title: 'How the Web Works',
        lessons: [
          {
            id: 'wd-m1-l1',
            title: 'The Internet vs the Web',
            duration: '8 min',
            content: `Many people use "the internet" and "the web" interchangeably, but they are different things.

**The Internet**
The internet is a global network of computers connected by cables, fibre optics, and wireless links. It is the physical infrastructure — the roads and motorways.

**The World Wide Web**
The web is a service that runs on top of the internet. It is a collection of documents (web pages) and other resources, linked together by hyperlinks and accessed via URLs. Email, streaming, and gaming also run on the internet but are not the web.

**How a Web Page Loads**
1. You type a URL (e.g., www.camluk.co.za) in your browser
2. Your computer asks a DNS server to translate the domain name into an IP address
3. Your browser sends an HTTP request to the web server at that IP address
4. The server responds with HTML, CSS, and JavaScript files
5. Your browser interprets those files and renders the page visually

**URLs Explained**
https://www.camluk.co.za/services
• https:// — the protocol (secure HTTP)
• www.camluk.co.za — the domain name
• /services — the path (which page to load)`,
          },
          {
            id: 'wd-m1-l2',
            title: 'HTML, CSS & JavaScript — The Three Pillars',
            duration: '7 min',
            content: `Every website is built from three core technologies that work together to create what you see in the browser.

**HTML — Structure**
HTML (HyperText Markup Language) defines the structure and content of a page. Think of it as the skeleton. HTML uses tags wrapped in angle brackets:
<h1>This is a heading</h1>
<p>This is a paragraph.</p>

**CSS — Appearance**
CSS (Cascading Style Sheets) controls how HTML elements look — colours, fonts, layout, spacing, and responsiveness. Think of CSS as the clothes and makeup on the skeleton:
h1 { color: orange; font-size: 32px; }

**JavaScript — Behaviour**
JavaScript makes pages interactive — responding to clicks, validating forms, loading new data without refreshing the page. Think of it as the muscles.

**How They Work Together**
You write HTML for your heading, CSS to make it orange and large, and JavaScript to make it animate when clicked. These three files are downloaded by the browser and interpreted together to display the final page.

**Developer Tools**
Right-click any website and choose Inspect (or press F12) to open the browser's developer tools. You can see the HTML, CSS, and JavaScript that makes up any page — a great way to learn.`,
          },
          {
            id: 'wd-m1-l3',
            title: 'Setting Up Your Development Environment',
            duration: '6 min',
            content: `You need very little to start writing web pages. The barrier to entry is extremely low.

**What You Need**
• A text editor — VS Code (free, recommended), Notepad++, or even Windows Notepad
• A web browser — Chrome or Firefox (both have excellent developer tools)
• That's it. No server, no framework, no paid software.

**Installing VS Code**
Download from code.visualstudio.com. Install the following extensions:
• Prettier — auto-formats your code on save
• Live Server — click "Go Live" to preview your HTML in a browser that refreshes automatically
• Auto Rename Tag — when you rename an opening HTML tag, it renames the closing tag

**Your First File**
Create a folder on your desktop called my-website. Inside it, create a file called index.html. Open the folder in VS Code (File > Open Folder). The file index.html is the default home page that web servers look for.

**File Organisation**
A standard project structure:
my-website/
  index.html
  style.css
  script.js
  images/
    logo.png`,
          },
        ],
        quiz: {
          id: 'wd-m1-q',
          questions: [
            {
              q: 'What does DNS do?',
              options: [
                'Encrypts web traffic',
                'Translates domain names into IP addresses',
                'Stores web page files',
                'Speeds up internet connections',
              ],
              correct: 1,
            },
            {
              q: 'What is the role of CSS in a web page?',
              options: [
                'Defines page structure and content',
                'Makes the page interactive',
                'Controls appearance (colours, fonts, layout)',
                'Communicates with web servers',
              ],
              correct: 2,
            },
            {
              q: 'What keyboard shortcut opens browser developer tools?',
              options: ['Ctrl + D', 'F12', 'Ctrl + I', 'F5'],
              correct: 1,
            },
            {
              q: 'What is the default home page filename that web servers look for?',
              options: ['home.html', 'main.html', 'default.html', 'index.html'],
              correct: 3,
            },
            {
              q: 'The internet and the World Wide Web are the same thing.',
              options: ['True', 'False', 'Partially true', 'Only for mobile'],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'wd-m2',
        title: 'HTML Fundamentals',
        lessons: [
          {
            id: 'wd-m2-l1',
            title: 'HTML Structure & Boilerplate',
            duration: '9 min',
            content: `Every HTML file follows a standard structure. Understanding this structure is the foundation for everything else.

**The HTML Boilerplate**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>

**What Each Part Does**
• <!DOCTYPE html> — tells the browser this is an HTML5 document
• <html> — the root element containing everything
• <head> — metadata not visible on the page (title, charset, links to CSS)
• <meta charset="UTF-8"> — supports all characters including ñ, é, Ü
• <title> — text shown in the browser tab
• <body> — everything visible on the page

**Comments**
<!-- This is a comment -->
Comments are ignored by the browser and are useful for notes to yourself or teammates.

**Nesting**
HTML elements can contain other elements. The contained element is called a child; the container is the parent. Proper indentation makes nesting easy to read.`,
          },
          {
            id: 'wd-m2-l2',
            title: 'Common HTML Tags',
            duration: '11 min',
            content: `HTML has over 100 tags, but you will use a core set of around 20 in the majority of projects.

**Text Content**
• <h1> to <h6> — headings (h1 is the most important, h6 the least)
• <p> — paragraph
• <strong> — bold, semantically important
• <em> — italic, emphasis
• <br> — line break (no closing tag needed)
• <hr> — horizontal rule (divider line)

**Links & Images**
• <a href="https://camluk.co.za">Click here</a> — hyperlink
• <a href="about.html">About</a> — link to another page in your project
• <img src="logo.png" alt="Camluk Logo"> — image (always include alt text)

**Lists**
<ul> — unordered list (bullet points)
  <li>Item one</li>
  <li>Item two</li>
</ul>

<ol> — ordered list (numbers)
  <li>Step one</li>
  <li>Step two</li>
</ol>

**Structural/Semantic Tags**
• <header> — page or section header
• <nav> — navigation links
• <main> — primary page content
• <section> — a thematic grouping
• <article> — independent content (blog post, news article)
• <footer> — page or section footer
• <div> — generic container with no semantic meaning`,
          },
          {
            id: 'wd-m2-l3',
            title: 'Forms & User Input',
            duration: '10 min',
            content: `Forms allow users to submit information — essential for contact pages, login screens, and search bars.

**Basic Form Structure**
<form action="/submit" method="POST">
  <!-- input elements here -->
  <button type="submit">Send</button>
</form>

**Input Types**
<input type="text" name="name" placeholder="Your name">
<input type="email" name="email" placeholder="you@example.com">
<input type="password" name="password">
<input type="number" name="age" min="18" max="100">
<input type="checkbox" name="agree" id="agree">
<input type="radio" name="gender" value="male">

**The textarea**
<textarea name="message" rows="5" placeholder="Your message..."></textarea>

**The select Dropdown**
<select name="course">
  <option value="">-- Choose a course --</option>
  <option value="webdev">Web Development</option>
  <option value="ms-office">MS Office</option>
</select>

**Labels**
Always pair inputs with labels for accessibility:
<label for="email">Email address</label>
<input type="email" id="email" name="email">

The for attribute of the label must match the id of the input. Clicking the label focuses the input.

**Required Fields**
Add the required attribute to make a field mandatory:
<input type="email" required>`,
          },
        ],
        quiz: {
          id: 'wd-m2-q',
          questions: [
            {
              q: 'Which HTML tag creates the most important heading?',
              options: ['<heading>', '<h6>', '<h1>', '<title>'],
              correct: 2,
            },
            {
              q: 'What attribute on an <img> tag provides text for screen readers?',
              options: ['title', 'alt', 'src', 'caption'],
              correct: 1,
            },
            {
              q: 'Which tag is used for an unordered (bullet) list?',
              options: ['<ol>', '<list>', '<ul>', '<li>'],
              correct: 2,
            },
            {
              q: 'What does the <head> element contain?',
              options: [
                'The main visible content of the page',
                'Navigation links',
                'Metadata like the title and CSS links, not visible on the page',
                'The page footer',
              ],
              correct: 2,
            },
            {
              q: 'How do you create a hyperlink to another website?',
              options: [
                '<link href="https://example.com">Click</link>',
                '<a href="https://example.com">Click</a>',
                '<url>https://example.com</url>',
                '<navigate to="https://example.com">Click</navigate>',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'wd-m3',
        title: 'CSS Styling',
        lessons: [
          {
            id: 'wd-m3-l1',
            title: 'Selectors, Properties & Values',
            duration: '10 min',
            content: `CSS rules follow a consistent pattern: selector { property: value; }. Understanding selectors is the key to targeting the right elements.

**Types of Selectors**
• Element selector: p { color: grey; } — targets ALL <p> tags
• Class selector: .highlight { background: yellow; } — targets elements with class="highlight"
• ID selector: #header { font-size: 32px; } — targets ONE element with id="header"
• Descendant: .nav a { color: white; } — targets <a> tags inside .nav only

**Applying Classes**
In HTML: <p class="intro">Hello world</p>
In CSS: .intro { font-size: 18px; line-height: 1.6; }

Multiple classes: <p class="intro large">Hello</p>

**Common Properties**
Text: color, font-size, font-family, font-weight, line-height, text-align, text-decoration
Background: background-color, background-image, background-size
Box: width, height, margin, padding, border, border-radius
Display: display, position, z-index, overflow

**Units**
• px — pixels (fixed size)
• % — relative to parent element
• em — relative to current font size
• rem — relative to root font size (more predictable than em)
• vw/vh — viewport width/height (useful for full-screen sections)`,
          },
          {
            id: 'wd-m3-l2',
            title: 'Box Model & Flexbox',
            duration: '12 min',
            content: `The box model and Flexbox are the two most fundamental layout concepts in CSS.

**The Box Model**
Every HTML element is a rectangular box with four layers (outside to inside):
1. Margin — space outside the border (pushes elements apart)
2. Border — the visible outline
3. Padding — space between border and content (pushes content inward)
4. Content — the actual text, image, etc.

div {
  margin: 20px;
  border: 2px solid orange;
  padding: 16px;
  width: 300px;
}

**box-sizing: border-box**
By default, width does not include padding or border. Adding box-sizing: border-box to all elements (recommended) makes width include padding and border, which is more intuitive:
* { box-sizing: border-box; }

**Flexbox**
Flexbox makes it easy to align and distribute items in a row or column.
.container {
  display: flex;
  justify-content: space-between; /* horizontal alignment */
  align-items: center;            /* vertical alignment */
  gap: 16px;
}

• flex-direction: row (default) or column
• justify-content: flex-start, center, flex-end, space-between, space-around
• align-items: flex-start, center, flex-end, stretch
• flex-wrap: wrap (items wrap to next line if they overflow)`,
          },
          {
            id: 'wd-m3-l3',
            title: 'Responsive Design & Media Queries',
            duration: '9 min',
            content: `A responsive website looks good on all screen sizes — desktop, tablet, and mobile. Over 60% of web traffic now comes from mobile devices.

**Mobile-First Design**
Write your CSS for mobile screens first, then add media queries for larger screens. This forces you to prioritise the most important content.

**Media Queries**
@media (min-width: 768px) {
  .container { max-width: 1200px; margin: 0 auto; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; }
}

This CSS only applies when the screen is 768px or wider.

**Common Breakpoints**
• 480px — large phones
• 768px — tablets
• 1024px — small laptops
• 1280px — desktops

**Responsive Images**
img { max-width: 100%; height: auto; }
This ensures images never overflow their container and scale proportionally.

**Viewport Meta Tag**
<meta name="viewport" content="width=device-width, initial-scale=1.0">
This tells mobile browsers to use the actual device width instead of a zoomed-out desktop view. Without it, media queries don't work correctly on mobile.

**CSS Grid**
For two-dimensional layouts (rows AND columns), CSS Grid is more powerful than Flexbox:
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }`,
          },
        ],
        quiz: {
          id: 'wd-m3-q',
          questions: [
            {
              q: 'How do you target an element with class="card" in CSS?',
              options: ['card { }', '#card { }', '.card { }', 'element.card { }'],
              correct: 2,
            },
            {
              q: 'Which box model layer creates space OUTSIDE the border?',
              options: ['Padding', 'Content', 'Margin', 'Outline'],
              correct: 2,
            },
            {
              q: 'What CSS property enables Flexbox on a container?',
              options: ['position: flex', 'display: flex', 'flex: true', 'layout: flexbox'],
              correct: 1,
            },
            {
              q: 'What does min-width: 768px mean inside a media query?',
              options: [
                'The style applies when the screen is 768px or less',
                'The minimum font size is 768px',
                'The style applies when the screen is 768px or wider',
                'The container must be at least 768px wide',
              ],
              correct: 2,
            },
            {
              q: 'What CSS rule makes images scale correctly inside their containers?',
              options: [
                'img { width: 100%; }',
                'img { max-width: 100%; height: auto; }',
                'img { resize: contain; }',
                'img { overflow: hidden; }',
              ],
              correct: 1,
            },
          ],
        },
      },
      {
        id: 'wd-m4',
        title: 'JavaScript Basics',
        lessons: [
          {
            id: 'wd-m4-l1',
            title: 'Variables, Data Types & Functions',
            duration: '12 min',
            content: `JavaScript brings web pages to life. Start with the building blocks: variables, data types, and functions.

**Variables**
Variables store data. Use const for values that don't change and let for values that do:
const siteName = "Camluk Academy";
let score = 0;
score = score + 10; // OK — let can be reassigned

**Data Types**
• String: "Hello, world!" — text, always in quotes
• Number: 42 or 3.14
• Boolean: true or false
• Array: [1, 2, 3] or ["Alice", "Bob"] — ordered list
• Object: { name: "Luke", age: 25 } — key-value pairs
• null — intentional absence of a value
• undefined — a variable declared but not yet assigned

**Functions**
Functions are reusable blocks of code:
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Thandiwe")); // Hello, Thandiwe!

Arrow functions (modern syntax):
const greet = (name) => "Hello, " + name + "!";

**Console**
console.log() prints values to the browser console (F12 > Console). It is the most-used debugging tool.`,
          },
          {
            id: 'wd-m4-l2',
            title: 'DOM Manipulation & Events',
            duration: '11 min',
            content: `The DOM (Document Object Model) is a representation of the HTML page that JavaScript can read and modify. DOM manipulation is what makes websites interactive.

**Selecting Elements**
const btn = document.querySelector("#myButton");  // by ID
const cards = document.querySelectorAll(".card"); // all with class="card"

**Modifying Elements**
btn.textContent = "Clicked!";          // change text
btn.style.backgroundColor = "orange"; // change style
btn.classList.add("active");           // add a class
btn.classList.remove("active");        // remove a class
btn.classList.toggle("active");        // add if absent, remove if present

**Creating & Inserting Elements**
const p = document.createElement("p");
p.textContent = "New paragraph";
document.body.appendChild(p);

**Event Listeners**
Events are user actions (click, hover, key press, form submit).
btn.addEventListener("click", function() {
  alert("Button was clicked!");
});

Or with an arrow function:
btn.addEventListener("click", () => {
  btn.textContent = "Done!";
});

**Common Events**
• click — mouse click
• mouseover / mouseout — hover
• keydown — key pressed
• submit — form submitted
• DOMContentLoaded — page fully loaded`,
          },
        ],
        quiz: {
          id: 'wd-m4-q',
          questions: [
            {
              q: 'Which keyword is used for a variable whose value will not change?',
              options: ['let', 'var', 'const', 'fixed'],
              correct: 2,
            },
            {
              q: 'What does document.querySelector(".card") select?',
              options: [
                'All elements with id="card"',
                'The first element with class="card"',
                'All elements with class="card"',
                'The <card> HTML element',
              ],
              correct: 1,
            },
            {
              q: 'What does console.log() do?',
              options: [
                'Displays a pop-up alert',
                'Writes output to the browser console for debugging',
                'Logs the user in',
                'Prints the page',
              ],
              correct: 1,
            },
            {
              q: 'What method attaches a click handler to a button?',
              options: [
                'btn.onClick()',
                'btn.on("click")',
                'btn.addEventListener("click", fn)',
                'btn.click = fn',
              ],
              correct: 2,
            },
            {
              q: 'What is the DOM?',
              options: [
                'A type of database',
                'A JavaScript framework',
                'A representation of the HTML page that JavaScript can read and modify',
                'The browser\'s download manager',
              ],
              correct: 2,
            },
          ],
        },
      },
    ],
  },
];

export function getCourse(id) {
  return COURSES.find((c) => c.id === id) ?? null;
}

export function getTotalLessons(course) {
  return course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
}

export function getProgressPercent(course, completedLessons = []) {
  const total = getTotalLessons(course);
  if (total === 0) return 0;
  const done = course.modules
    .flatMap((m) => m.lessons)
    .filter((l) => completedLessons.includes(l.id)).length;
  return Math.round((done / total) * 100);
}
