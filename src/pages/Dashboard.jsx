import MainContent from "../components/MainContent"

const Dashboard = ({cardList, onAddCard, onEditCard}) => {
    return (
        <div className="App">
            <MainContent cardList={cardList} onAddCard={onAddCard} onEditCard={onEditCard}/>
        </div>
    );
}

export default Dashboard;