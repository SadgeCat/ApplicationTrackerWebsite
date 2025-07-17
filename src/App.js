import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import AIPlanner from "./pages/AIPlanner";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";

const App = () => {
    const [cardList, setCardList] = useState([]);

    const addCard = (id, title, deadline, status) => {
        const newCard = {
            id: Date.now(),
            title: title,
            deadline: deadline,
            status: status
        };
        setCardList(prev => [...prev, newCard]);
    };

    const editCard = (id, title, deadline, status) => {
        setCardList(prev =>
            prev.map(card =>
                card.id === id
                    ? { ...card, title, deadline, status }
                    : card
            )
        );
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Dashboard cardList={cardList} onAddCard={addCard} onEditCard={editCard}/>}/>
                        <Route path="/Calendar" element={<Calendar cardList={cardList}/>}/>
                        <Route path="/AIPlanner" element={<AIPlanner/>}/>
                        <Route path="/Resources" element={<Resources/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
