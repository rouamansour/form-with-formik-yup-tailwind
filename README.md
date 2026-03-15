# 📝 Form with Formik, Yup & Tailwind CSS

A modern, fully validated form built with **Next.js**, **Formik**, **Yup**, and **Tailwind CSS**. This project demonstrates best practices for form state management, schema-based validation, and responsive UI styling in a Next.js application.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework (App Router) |
| [Formik](https://formik.org/) | Form state management |
| [Yup](https://github.com/jquense/yup) | Schema-based form validation |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS styling |
| TypeScript | Type safety |

---

## ✨ Features

- ✅ Form state management with **Formik**
- ✅ Schema validation using **Yup**
- ✅ Responsive, clean UI styled with **Tailwind CSS**
- ✅ Real-time inline error messages
- ✅ Built on **Next.js 14+** with the App Router
- ✅ TypeScript support

---

## 📦 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or later) installed.

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/rouamansour/form-with-formik-yup-tailwind.git
cd form-with-formik-yup-tailwind
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🗂️ Project Structure

```
form-with-formik-yup-tailwind/
├── public/              # Static assets
├── src/                 # Application source code
│   └── app/             # Next.js App Router pages & components
├── .eslintrc.json       # ESLint configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.mjs   # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🛠️ Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 📚 How It Works

### Formik
Formik handles form state, submission, and touched/dirty tracking — removing the boilerplate of managing `onChange`, `onBlur`, and form values manually.

### Yup
Yup defines a validation schema that Formik uses to validate fields on change and on submit. Each field's rules (required, min length, email format, etc.) are declared declaratively.

### Tailwind CSS
Tailwind provides utility classes for styling the form inputs, labels, error messages, and buttons — keeping styles co-located with the markup for fast iteration.



