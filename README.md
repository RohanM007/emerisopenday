# 🎓 Emeris Open Day - Interactive Faculty Showcase

An immersive, interactive web application designed for Emeris Open Day, showcasing multiple faculties with unique, creative experiences tailored to each discipline.

## 🌟 Project Overview

This application provides prospective students with an engaging way to explore different faculties at Emeris, featuring:
- Interactive module displays with real curriculum data
- Career path exploration with personalized experiences
- Downloadable program information and fee structures
- Faculty-specific visual themes and interactions

## 🎨 Featured Faculties

### 📚 **Faculty of Commerce**
**Theme**: Professional, data-driven, career-focused with green color scheme

**Interactive Features**:
- **Career Matcher Quiz**:
  - 5-question personality assessment covering interests, strengths, work environment, skills, and dream projects
  - Weighted scoring algorithm that calculates match percentages for each specialization
  - Results screen showing top 2 career path matches with confidence percentages and star ratings
  - Smooth transitions and animated progress bars

- **Interactive Career Journey Timeline**:
  - Scroll-based career progression for 4 BCom specializations:
    - **Strategic Management**: Leadership, consulting, business strategy careers
    - **Financial Management**: Financial planning, investment analysis, corporate finance
    - **Finance and Accounting**: Auditing, tax consulting, financial accounting
    - **Marketing Management**: Brand management, digital marketing, market research
  - Sticky progress indicators showing journey stages
  - Animated timeline with scroll-triggered reveals
  - Career opportunity cards with job titles and descriptions
  - "Explore Another Path" functionality to switch specializations

- **3D Module Display**:
  - Interactive flip cards showing Year 2 and Year 3 modules
  - Color-coded by subject area (Accounting=Gold, Business=Green, Economics=Blue, Marketing=Purple)
  - Hover effects with 3D rotation
  - Module details including credits, NQF level, and descriptions
  - Organized by semester with visual separators

**Real Data**: All curriculum modules sourced from official Emeris BCom materials

---

### 🎭 **Faculty of Humanities**
**Theme**: Literary, artistic, creative with burgundy/gold/cream color palette

**Interactive Features**:
- **Literary Bookshelf Module Display**:
  - Books arranged on virtual shelves (Semester 1, Semester 2, Year Long)
  - Click to "pull" books from shelf with smooth animation
  - Books expand to show full module details
  - Color-coded book spines (Amber, Red, Purple, Teal, Indigo)
  - Gold shelf backgrounds with elegant gradients
  - Total credits summary with decorative styling
  - Separate shelves for BA Degree and Higher Certificate programs

- **3D Career Gallery** (Museum Exhibition):
  - **Gallery Wall Aesthetic**: Careers displayed as framed artworks on burgundy gallery wall
  - **3D Parallax Depth Effects**:
    - Frames positioned at different depths (forward, middle, back)
    - Dynamic shadows based on depth level
    - Perspective transforms creating realistic 3D space
  - **Dynamic Lighting System**:
    - Sweeping gallery lights that follow mouse movement
    - Spotlight effects that illuminate hovered frames
    - Pulsing ambient lights in background
    - Gold glow effects on hover
  - **Interactive Frame Effects**:
    - 3D tilt based on mouse position
    - Frames "pop out" when hovered
    - Ornate gold corner decorations
    - Museum-style labels with career descriptions
  - **Three Discipline Combinations**:
    - **English & Communication Science**: Authoring, Media Consulting, Research, Communication Management
    - **English & Psychology**: Authoring, Psychologist (postgrad), Teaching (postgrad)
    - **Communication Science & Psychology**: Journalism, Relationship Management, Counselling (postgrad)
  - **Postgraduate Badges**: Gold badges indicating careers requiring further study

- **Typography & Design**:
  - Playfair Display for elegant headings
  - Crimson Text for literary body text
  - Quicksand for modern accents
  - Decorative quote marks in hero section
  - Deep red gradient backgrounds (matching COSC5121 module color)

**Real Data**: Actual BA modules and career paths from Emeris Humanities faculty

---

### 🎓 **Faculty of Education**
**Theme**: Warm, nurturing, educational with purple color scheme

**Interactive Features**:
- **Categorized Module Display**:
  - Modules organized by category (Professional Subjects, Professional Themes, Professional Didactics, Electives)
  - Color-coded category badges (Purple, Pink, Indigo, Green)
  - Interactive flip cards with 3D rotation effects
  - Detailed module information including:
    - Module codes and names
    - Credit values and NQF levels
    - Comprehensive descriptions
    - Semester information
  - Separate displays for BEd Degree and Higher Certificate programs

- **Program Information**:
  - IIE Bachelor of Education (Foundation Phase Teaching)
  - IIE Higher Certificate in Foundation Phase Teaching
  - Downloadable fact sheets and program guides
  - Fees information with download links

- **Visual Design**:
  - Purple gradient backgrounds
  - Particle effects with educational theme
  - Clean, professional card layouts
  - Responsive grid system

**Real Data**: Complete BEd curriculum from official Emeris Education faculty materials

---

### ⚖️ **Faculty of Law**
**Theme**: Formal, structured, authoritative with blue color scheme

**Interactive Features**:
- **Professional Module Display**:
  - Interactive flip cards for all law modules
  - Blue color scheme reflecting legal profession
  - Organized by year and semester
  - Detailed module information:
    - Module codes (e.g., LAW5111, LAW6211)
    - Full module names
    - Credit allocations
    - NQF levels
    - Module descriptions
  - Separate displays for LLB Degree and Higher Certificate programs

- **Program Information**:
  - IIE Bachelor of Laws (LLB)
  - IIE Higher Certificate in Law
  - Downloadable program fact sheets
  - Comprehensive fees documentation

- **Visual Design**:
  - Blue gradient backgrounds
  - Particle effects with professional theme
  - Structured, formal layout
  - Clear information hierarchy

**Real Data**: Complete LLB curriculum from official Emeris Law faculty materials

## 🚀 Technologies Used

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework with custom extensions
- **Lucide React** - Beautiful icon library
- **tsParticles** - Interactive particle backgrounds
- **Google Fonts** - Custom typography (Playfair Display, Crimson Text, Quicksand)

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd faculty-open-day

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Features

### Commerce Stream
- **Career Quiz System**: Weighted scoring algorithm matching students to careers
- **Results Screen**: Top 2 matches with confidence percentages and star ratings
- **Career Timeline**: Scroll-triggered animations revealing career progression
- **Real Curriculum Data**: Actual modules from official Emeris materials

### Humanities Stream
- **3D Gallery Effects**:
  - Parallax depth with frames at different distances
  - Mouse-tracking spotlight effects
  - Dynamic shadows based on depth
  - 3D tilt on hover with perspective transforms
- **Literary Design**:
  - Custom color palette (burgundy #8B1538, gold #D4AF37, cream #F4F1DE)
  - Decorative quote marks and ornate frames
  - Museum-style career presentation
- **Interactive Bookshelf**:
  - Books pull out to reveal module details
  - Color-coded by subject area
  - Semester-organized shelving

## 🎨 Custom Tailwind Configuration

Extended color palettes for each faculty:
- **Education**: Purple tones
- **Law**: Blue tones
- **Commerce**: Green tones
- **Humanities**: Burgundy, gold, cream, forest, coral, purple

Custom fonts:
- `font-playfair` - Playfair Display (serif headings)
- `font-crimson` - Crimson Text (serif body)
- `font-quicksand` - Quicksand (sans-serif accents)

Custom animations:
- `animate-typewriter` - Typing effect
- `animate-page-turn` - Page flip effect
- `animate-ink-splatter` - Ink splash effect
- `animate-fadeIn` - Smooth fade in

## 📁 Project Structure

```
faculty-open-day/
├── src/
│   ├── components/
│   │   ├── CareerPathSelector.jsx      # Commerce career timeline
│   │   ├── CareerQuiz.jsx              # Commerce personality quiz
│   │   ├── HumanitiesCareerGallery.jsx # Humanities 3D gallery
│   │   ├── ModuleDisplayHumanities.jsx # Humanities bookshelf
│   │   ├── ModuleDisplayCommerce.jsx   # Commerce module cards
│   │   ├── ProgramSection.jsx          # Reusable program cards
│   │   └── DownloadButton.jsx          # Faculty-themed buttons
│   ├── pages/
│   │   ├── Home.jsx                    # Landing page
│   │   ├── Commerce.jsx                # Commerce faculty page
│   │   ├── Humanities.jsx              # Humanities faculty page
│   │   ├── Education.jsx               # Education faculty page
│   │   └── Law.jsx                     # Law faculty page
│   ├── data/
│   │   └── facultyData.js              # All faculty/module data
│   ├── config/
│   │   └── particlesConfig.js          # Particle effects config
│   └── App.jsx                         # Main app component
├── public/
│   └── downloads/                      # PDF downloads
├── index.html
├── tailwind.config.js                  # Custom Tailwind setup
└── vite.config.js
```

## 🎭 Design Philosophy

Each faculty has a unique visual identity and interaction pattern that reflects its discipline:

- **Commerce**: Professional, data-driven, career-focused with quiz-based personalization
- **Humanities**: Artistic, literary, creative with museum gallery aesthetics
- **Education**: Warm, nurturing, educational focus
- **Law**: Formal, structured, authoritative presentation

## 🔧 Development

Built with React + Vite for:
- ⚡ Lightning-fast HMR (Hot Module Replacement)
- 🎯 Optimized production builds
- 🛠️ Modern development experience
- 📦 Efficient code splitting

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Touch-friendly interactions
- Optimized for tablets and desktops

## 🎨 Color Schemes

### Humanities
- Primary: Red (#DC2626 - red-700 to red-900)
- Accent: Gold (#D4AF37)
- Background: Cream (#F4F1DE)
- Supporting: Forest (#2D6A4F), Coral (#E76F51), Purple (#6B46C1)

### Commerce
- Primary: Green (#4CAF50)
- Accent: Emerald
- Professional, business-oriented palette

## 📄 License

This project is created for Emeris Open Day 2026.

## 👥 Credits

Developed for Emeris Open Day to showcase faculty programs and career opportunities to prospective students.
