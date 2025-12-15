# 🚀 Cosmic Cargo – Intergalactic Transport Agency

Cosmic Cargo is a React + TypeScript project where you build the **Control Panel of a spaceship**.  
The application allows the captain (user) to manage crew members, resources, and intergalactic missions.

This project focuses on **real TypeScript usage**, **global state management**, **API consumption**, and **business logic**, following a structured mission guide.

---

## 📜 Project Premise

You have inherited an old spaceship and a fragile transport license.  
Your mission is to survive in space by:

- Hiring crew members
- Managing ship resources (credits and fuel)
- Sending crew on missions to earn rewards

This is not just a database — it is the interface that controls your survival in space.

---

## 🛠️ Tech Stack

- **Vite**
- **React**
- **TypeScript**
- **React Router DOM**
- **Rick and Morty API**

> ❗ Strict TypeScript rules applied  
> ❌ No usage of `any`

---

## 📂 Project Structure

src/
├──assets/
| └── react.svg
├── components/  
| ├── Button.tsx
| ├── CardCharacter.tsx
| ├── ResourceBadge.tsx
| ├── Router.tsx
| ├── commandBridge.tsx
| ├── engage.tsx
| ├── layout.tsx
| └── missions.tsx
├── context/
| ├── ShipContext.tsx
| └── interfaces.ts
├── models/
| ├── charactersModels/
|    └── interface.ts
| ├── locationsModels/
|    └── interface.ts
| └── spaceShiftModels/
|    └── interface.ts
├── services/
|  ├── CharactersServices.ts
|  └── LocationsServices.ts
├── App.tsx
├── App.tsx
├── index.css
└── main.tsx

---

## 🧠 Global State (Ship Context)

The application uses a global context called **ShipContext** that manages:

- 💰 Credits (starts at 1000)
- ⛽ Fuel (starts at 100%)
- 👨‍🚀 Crew members (maximum 4)

### Available actions:
- Add / spend credits
- Add crew members (no duplicates, max capacity)
- Reduce fuel

---

## 🧩 Atomic Components (Phase 4)

### 🔹 CharacterCard
Displays character image, name, and status.  
Purely visual component.

### 🔹 ResourceBadge
Small badge component used in the header to show:
- Credits
- Fuel

Receives:
- Icon
- Label
- Value

### 🔹 Button
Reusable button component supporting:
- Disabled state
- Click handler
- Custom text

---

## 🌍 Pages & Features

### 🏠 Dashboard (Bridge)
- Displays current credits and fuel
- Shows hired crew members
- Conditional message if no crew is hired
- **Game Over state** when fuel reaches 0

---

### 🍺 Cantina (Hire Crew)
- Fetches characters from the Rick and Morty API
- Search input to filter by name
- Hire button:
  - Costs 200 credits
  - Disabled if character is dead
  - Disabled if ship is full or insufficient credits

---

### 🛰 Missions Room
- Form to assign crew members to missions
- Select destination planet
- Fuel consumption per mission
- Simulated travel using `setTimeout`
- Random credit rewards after mission success

---

## 🔁 Optional Extras Implemented

- LocalStorage persistence
- Custom hook for fuel management
- Dynamic route for crew details (`/crew/:id`)

---

## 🎯 Learning Objectives

- Real-world TypeScript usage with external APIs
- Global state management with Context API
- Component reusability and atomic design
- Business logic enforcement
- Clean architecture and scalable structure

---

## 🚀 How to Run the Project

```bash
npm install
npm run dev
