import React from "react";
import TicketCard from "./TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Paresh",
      picture: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Free-Sad-Doll-Images-For-Whatsapp-DP-Pics.jpg",
      status: "done",
      priority: 5,
      progress: 40,
      description: "Make a video showcasting how to work with NFT safety,including how to know if one is not genuine",
      timestamp: "2022-08-23T09:54:17+0000",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Build and Sell AI Model",
      owner: "Paresh",
      picture: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Free-Sad-Doll-Images-For-Whatsapp-DP-Pics.jpg",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Make a video about AI",
      timestamp: "2022-08-25T09:52:17+0000",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Build a bot",
      owner: "Paresh",
      picture: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Free-Sad-Doll-Images-For-Whatsapp-DP-Pics.jpg",
      status: "working on it",
      priority: 3,
      progress: 10,
      description: "Make a video about making on bot",
      timestamp: "2022-08-26T08:23:17+0000",
    }
  ]

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(225,255,186)",
    "rgb(186,255,201)",
    "rgb(186,255,255)"
  ]
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]
  console.log(uniqueCategories)
  return(
    <div className="dashboard">
      <h1>My projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter(ticket => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex]|| colors[0]}
                    ticket={filteredTicket}
                  />
                ))
                }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
